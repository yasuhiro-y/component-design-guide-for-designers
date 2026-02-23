import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * Headless UI の Listbox / Combobox / Menu を静的モックで表現。
 * ライブラリ未インストールのため、見た目だけ再現している。
 * fig-14（Radix Select / DropdownMenu / ContextMenu）と対になる図。
 */

const nameStyle = {
  fontSize: 15,
  fontWeight: 500,
  color: "#18181b",
  letterSpacing: "-0.01em",
  marginBottom: 10,
} as const;
const panel = {
  background: "#f4f4f5",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
} as const;
const annotation = { fontSize: 11, color: "#3f3f46", marginTop: 10, textAlign: "center" as const };
const trigger = {
  padding: "6px 10px",
  borderRadius: 6,
  border: "1px solid #d4d4d8",
  background: "#fff",
  fontSize: 12,
  color: "#3f3f46",
  display: "inline-flex",
  alignItems: "center" as const,
  gap: 4,
  cursor: "default",
} as const;
const dropdown = {
  background: "#fff",
  border: "1px solid #e4e4e7",
  borderRadius: 6,
  padding: 4,
  marginTop: 6,
} as const;

function Item({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      style={{
        padding: "6px 10px",
        fontSize: 12,
        color: "#3f3f46",
        borderRadius: 4,
        ...(active ? { background: "#f4f4f5" } : {}),
      }}
    >
      {label}
    </div>
  );
}

const badge = {
  display: "inline-flex",
  alignItems: "center" as const,
  gap: 4,
  fontSize: 11,
  color: "#52525b",
  marginBottom: 4,
} as const;

export default function Fig57() {
  return (
    <IllustrationFrame title="Headless UI: Listbox / Combobox / Menu">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        {/* Listbox */}
        <div style={{ flex: 1 }}>
          <div style={badge}>
            <span style={{ fontSize: 14 }}>◇</span>
            Headless UI
          </div>
          <div style={nameStyle}>Listbox</div>
          <div style={panel}>
            <div style={trigger}>
              Medium <span style={{ fontSize: 10, color: "#52525b" }}>▾</span>
            </div>
            <div style={dropdown}>
              <Item label="Small" />
              <Item label="Medium" active />
              <Item label="Large" />
            </div>
          </div>
          <div style={annotation}>ドロップダウンで値を選ぶ</div>
        </div>

        {/* Combobox */}
        <div style={{ flex: 1 }}>
          <div style={badge}>
            <span style={{ fontSize: 14 }}>◇</span>
            Headless UI
          </div>
          <div style={nameStyle}>Combobox</div>
          <div style={panel}>
            <div
              style={{
                ...trigger,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#a1a1aa" }}>検索…</span>
            </div>
            <div style={dropdown}>
              <Item label="React" active />
              <Item label="Vue" />
              <Item label="Angular" />
            </div>
          </div>
          <div style={annotation}>入力しながら候補を絞る</div>
        </div>

        {/* Menu */}
        <div style={{ flex: 1 }}>
          <div style={badge}>
            <span style={{ fontSize: 14 }}>◇</span>
            Headless UI
          </div>
          <div style={nameStyle}>Menu</div>
          <div style={panel}>
            <div style={trigger}>
              Actions <span style={{ fontSize: 10, color: "#52525b" }}>▾</span>
            </div>
            <div style={dropdown}>
              <Item label="Edit" active />
              <Item label="Duplicate" />
              <Item label="Delete" />
            </div>
          </div>
          <div style={annotation}>アクションを実行する</div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
