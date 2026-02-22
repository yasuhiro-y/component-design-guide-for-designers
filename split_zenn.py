import re
import shutil
from pathlib import Path


def slugify(text: str) -> str:
    base = text.split(":")[0].split("：")[0].strip()
    base = re.sub(r"\s+", "-", base)
    base = re.sub(r'[\\/*?:"<>|]', "", base)
    return base


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


def main():
    src = Path(__file__).parent / "zenn.md"
    out_dir = Path(__file__).parent / "zenn"
    if out_dir.exists():
        shutil.rmtree(out_dir)
        print(f"Cleaned up {out_dir}/")
    out_dir.mkdir()

    text = src.read_text(encoding="utf-8")
    sections = split_by_h1(text)

    print(f"Found {len(sections)} sections:")
    for i, (title, body) in enumerate(sections, 1):
        slug = slugify(title)
        filename = f"{i:02d}-{slug}.md"
        filepath = out_dir / filename

        promoted = promote_headings(body.strip())

        filepath.write_text(promoted + "\n", encoding="utf-8")
        print(f"  {filename} ({len(promoted.splitlines())} lines) — {title}")

    print(f"\nDone. {len(sections)} files written to {out_dir}/")


if __name__ == "__main__":
    main()
