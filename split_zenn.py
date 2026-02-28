import re
from pathlib import Path

BOOK_SLUG = "b62994c6b0b1e9"

# 日本語チャプタータイトル → Book用ASCIIスラッグ
CHAPTER_SLUG_MAP = {
    "はじめに": "introduction",
    "原則": "principles",
    "構築戦略": "build-strategy",
    "コンポーネント分割": "component-splitting",
    "現実的な問題への対処": "practical-problems",
    "変数(1)": "variables-1",
    "変数(2)": "variables-2",
    "状態": "states",
    "レイアウト": "layout",
    "アセット": "assets",
    "おわりに": "conclusion",
}


def slugify_book(title: str, index: int) -> str:
    """タイトルからBook用のASCIIスラッグを生成する。"""
    base = title.split(":")[0].split("：")[0].strip()
    if base in CHAPTER_SLUG_MAP:
        return CHAPTER_SLUG_MAP[base]
    return f"chapter-{index:02d}"


def promote_headings(content: str) -> str:
    lines = content.split("\n")
    result = []
    for line in lines:
        m = re.match(r"^(#{2,6})\s", line)
        if m:
            hashes = m.group(1)
            line = "#" * (len(hashes) - 1) + line[len(hashes):]
        result.append(line)
    return "\n".join(result)


def split_by_h1(text: str) -> list[tuple[str, str]]:
    sections = []
    current_title = None
    current_lines: list[str] = []

    for line in text.split("\n"):
        if re.match(r"^# (?!#)", line):
            if current_title is not None:
                sections.append((current_title, "\n".join(current_lines)))
            current_title = line.lstrip("# ").strip()
            current_lines = []
        else:
            current_lines.append(line)

    if current_title is not None:
        sections.append((current_title, "\n".join(current_lines)))

    return sections


def write_config_yaml(book_dir: Path, chapters: list[tuple[str, str]]):
    """config.yamlのchaptersリストだけを更新する。"""
    config_path = book_dir / "config.yaml"
    if not config_path.exists():
        return

    text = config_path.read_text(encoding="utf-8")
    new_chapters = "chapters:\n" + "".join(
        f"  - {slug}\n" for slug, _ in chapters
    )
    text = re.sub(r"chapters:\n(?:  - .+\n)*", new_chapters, text)
    config_path.write_text(text, encoding="utf-8")


def main():
    book_dir = Path(__file__).parent / "books" / BOOK_SLUG
    src = book_dir / "_component-design-guide-for-designers.md"

    book_dir.mkdir(parents=True, exist_ok=True)
    for f in book_dir.glob("*.md"):
        if f.name != "_component-design-guide-for-designers.md":
            f.unlink()

    text = src.read_text(encoding="utf-8")
    sections = split_by_h1(text)

    book_chapters: list[tuple[str, str]] = []

    print(f"Found {len(sections)} sections:\n")
    for i, (title, body) in enumerate(sections, 1):
        promoted = promote_headings(body.strip())

        book_slug = slugify_book(title, i)
        book_filename = f"{book_slug}.md"
        book_path = book_dir / book_filename

        frontmatter = f"---\ntitle: \"{title}\"\n---\n\n"
        book_path.write_text(frontmatter + promoted + "\n", encoding="utf-8")

        book_chapters.append((book_slug, title))

        print(f"  {book_filename:30s} ({len(promoted.splitlines())} lines) — {title}")

    write_config_yaml(book_dir, book_chapters)

    print(f"\nDone. {len(sections)} chapters written to books/{BOOK_SLUG}/")


if __name__ == "__main__":
    main()
