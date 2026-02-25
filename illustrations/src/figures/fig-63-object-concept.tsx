import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { avatars } from "../shared/unsplash";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * Object の概念: 複数の値がひとかたまりになっている
 * Notion データベースの1行に例えて、
 * バラバラのフィールドが「User」というまとまりで扱われることを図示。
 */

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  padding: 16,
};

const fieldRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "6px 0",
  borderBottom: "1px solid #f4f4f5",
};

const fieldRowLast: CSSProperties = {
  ...fieldRow,
  borderBottom: "none",
};

const fieldLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#52525b",
  width: 70,
  flexShrink: 0,
};

const fieldValue: CSSProperties = {
  fontSize: 12,
  fontWeight: 400,
  color: "#18181b",
};

const sectionLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#52525b",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: 10,
};

interface Field {
  label: string;
  value: string;
  visual?: "avatar" | "tag" | "stars";
}

const fields: Field[] = [
  { label: "名前", value: "田中 太郎" },
  { label: "アイコン", value: "image.png", visual: "avatar" },
  { label: "ステータス", value: "アクティブ", visual: "tag" },
  { label: "評価", value: "4.0", visual: "stars" },
];

function FieldVisual({ visual, value }: { visual?: string; value: string }) {
  if (visual === "avatar") {
    return (
      <img
        src={avatars.takahashi}
        style={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          objectFit: "cover",
          flexShrink: 0,
        }}
      />
    );
  }
  if (visual === "tag") {
    return (
      <span style={{ fontSize: 10, fontWeight: 400, color: "#52525b" }}>
        {value}
      </span>
    );
  }
  if (visual === "stars") {
    return (
      <div style={{ display: "flex", gap: 1 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            style={{ fontSize: 10, color: i <= 4 ? "#18181b" : "#d4d4d8" }}
          >
            &#9733;
          </span>
        ))}
        <span style={{ fontSize: 10, color: "#52525b", marginLeft: 4 }}>
          {value}
        </span>
      </div>
    );
  }
  return <span style={fieldValue}>{value}</span>;
}

function BracketDecoration() {
  return (
    <div
      style={{
        width: 16,
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width="12" height="100" viewBox="0 0 12 100" fill="none">
        <path
          d="M10 2C6 2 2 6 2 10V42C2 46 0 48 0 50C0 52 2 54 2 58V90C2 94 6 98 10 98"
          stroke="#a1a1aa"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function Fig63() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Analogy: Notion-like database row */}
        <div style={{ marginBottom: 16 }}>
          <div style={sectionLabel}>データベースの1行 = ひとかたまりのデータ</div>
          <div style={panel}>
            {/* Table header */}
            <div
              style={{
                display: "flex",
                gap: 0,
                borderBottom: "2px solid #e4e4e7",
                paddingBottom: 6,
                marginBottom: 4,
              }}
            >
              {["名前", "アイコン", "ステータス", "評価"].map((h) => (
                <div
                  key={h}
                  style={{
                    flex: 1,
                    fontSize: 10,
                    fontWeight: 700,
                    color: "#a1a1aa",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>
            {/* Highlighted row */}
            <div
              style={{
                display: "flex",
                gap: 0,
                padding: "8px 0",
                background: "#eff6ff",
                borderRadius: 8,
                marginLeft: -8,
                marginRight: -8,
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              <div style={{ flex: 1, fontSize: 12, fontWeight: 400, color: "#18181b" }}>
                田中 太郎
              </div>
              <div style={{ flex: 1 }}>
                <img src={avatars.takahashi} style={{ width: 22, height: 22, borderRadius: "50%", objectFit: "cover" }} />
              </div>
              <div style={{ flex: 1 }}>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 400,
                    color: "#18181b",
                    background: "#fff",
                    border: "1px solid #e4e4e7",
                    borderRadius: 999,
                    padding: "1px 8px",
                  }}
                >
                  アクティブ
                </span>
              </div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 1 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    style={{ fontSize: 10, color: i <= 4 ? "#18181b" : "#d4d4d8" }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
            {/* Dimmed rows */}
            {[1, 2].map((r) => (
              <div
                key={r}
                style={{
                  display: "flex",
                  gap: 0,
                  padding: "8px 0",
                  opacity: 0.3,
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ width: 60, height: 8, borderRadius: 8, background: "#d4d4d8" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#d4d4d8" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ width: 48, height: 16, borderRadius: 16, background: "#d4d4d8" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ width: 50, height: 8, borderRadius: 8, background: "#d4d4d8" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div
          style={{
            textAlign: "center",
            fontSize: 14,
            color: "#a1a1aa",
            marginBottom: 12,
          }}
        >
          ↓ この 1 行をコンポーネントに渡す
        </div>

        {/* Object representation */}
        <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
          {/* Left: fields as object */}
          <div style={{ flex: 1 }}>
            <div style={sectionLabel}>ひとかたまり（User オブジェクト）</div>
            <div style={panel}>
              <div
                style={{ display: "flex", alignItems: "center" }}
              >
                <BracketDecoration />
                <div style={{ flex: 1 }}>
                  {fields.map((f, i) => (
                    <div key={f.label} style={i === fields.length - 1 ? fieldRowLast : fieldRow}>
                      <span style={fieldLabel}>{f.label}</span>
                      <FieldVisual visual={f.visual} value={f.value} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: rendered component */}
          <div style={{ flex: 1 }}>
            <div style={sectionLabel}>レンダリング結果</div>
            <div style={panel}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  border: "1px solid #e4e4e7",
                  padding: 12,
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <img
                  src={avatars.takahashi}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      marginBottom: 2,
                    }}
                  >
                    <span
                      style={{ fontSize: 13, fontWeight: 700, color: "#18181b" }}
                    >
                      田中 太郎
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 400,
                        color: "#18181b",
                        background: "#f4f4f5",
                        border: "1px solid #e4e4e7",
                        borderRadius: 999,
                        padding: "1px 8px",
                      }}
                    >
                      アクティブ
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 1 }}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: 10,
                          color: i <= 4 ? "#18181b" : "#d4d4d8",
                        }}
                      >
                        &#9733;
                      </span>
                    ))}
                    <span
                      style={{
                        fontSize: 10,
                        color: "#52525b",
                        marginLeft: 4,
                      }}
                    >
                      4.0
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: 8,
                  textAlign: "center",
                  fontFamily: '"SF Mono", Menlo, monospace',
                  fontSize: 11,
                  color: "#52525b",
                }}
              >
                &lt;UserCard user={"{ user }"} /&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
