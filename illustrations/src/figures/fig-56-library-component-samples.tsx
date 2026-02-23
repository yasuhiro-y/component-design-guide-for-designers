import { IllustrationFrame } from "../shared/IllustrationFrame";
import { LibraryLabel } from "../shared/LibraryLabel";
import { CONTENT_WIDTH } from "../styles/tokens";
import type { ServiceIconName } from "../shared/icons";

/**
 * MUI / Chakra UI / Ant Design のコンポーネント一覧を
 * 統一された見た目のモックで並べる。
 * 各ライブラリが同じ基本部品を提供していることを伝える図。
 */

const nameStyle = {
  fontSize: 15,
  fontWeight: 500,
  color: "#18181b",
  letterSpacing: "-0.01em",
  marginBottom: 12,
} as const;

const panel = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: "12px 14px",
  display: "flex",
  flexDirection: "column" as const,
  gap: 0,
} as const;

const rowStyle = {
  display: "flex",
  alignItems: "center" as const,
  padding: "8px 0",
  borderBottom: "1px solid #f4f4f5",
} as const;

const rowLast = {
  ...rowStyle,
  borderBottom: "none",
} as const;

const compLabel = {
  fontSize: 11,
  fontWeight: 600,
  color: "#3f3f46",
  width: 56,
  flexShrink: 0,
} as const;

const previewArea = {
  display: "flex",
  alignItems: "center" as const,
  gap: 6,
  flex: 1,
} as const;

/* ── ミニコンポーネントモック ── */

function MiniButton({ primary }: { primary?: boolean }) {
  return (
    <div
      style={{
        padding: "4px 12px",
        borderRadius: 5,
        background: primary ? "#18181b" : "#fff",
        color: primary ? "#fff" : "#3f3f46",
        border: primary ? "none" : "1px solid #d4d4d8",
        fontSize: 11,
        fontWeight: 500,
        lineHeight: "18px",
      }}
    >
      {primary ? "Primary" : "Default"}
    </div>
  );
}

function MiniInput() {
  return (
    <div
      style={{
        padding: "4px 8px",
        borderRadius: 5,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 11,
        color: "#a1a1aa",
        flex: 1,
        lineHeight: "18px",
      }}
    >
      Placeholder
    </div>
  );
}

function MiniTag() {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <span
        style={{
          padding: "2px 8px",
          borderRadius: 4,
          background: "#f4f4f5",
          fontSize: 10,
          fontWeight: 500,
          color: "#3f3f46",
        }}
      >
        Default
      </span>
      <span
        style={{
          padding: "2px 8px",
          borderRadius: 4,
          background: "#eff6ff",
          fontSize: 10,
          fontWeight: 500,
          color: "#3b82f6",
        }}
      >
        Primary
      </span>
    </div>
  );
}

function MiniSwitch({ on }: { on?: boolean }) {
  return (
    <div
      style={{
        width: 28,
        height: 16,
        borderRadius: 8,
        background: on ? "#18181b" : "#d4d4d8",
        padding: 2,
        display: "flex",
        justifyContent: on ? "flex-end" : "flex-start",
      }}
    >
      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff" }} />
    </div>
  );
}

function MiniSelect() {
  return (
    <div
      style={{
        padding: "4px 8px",
        borderRadius: 5,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 11,
        color: "#3f3f46",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        lineHeight: "18px",
      }}
    >
      Medium <span style={{ fontSize: 9, color: "#a1a1aa" }}>▾</span>
    </div>
  );
}

function MiniCheckbox() {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 3,
          border: "1.5px solid #18181b",
          background: "#18181b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 9,
          color: "#fff",
        }}
      >
        ✓
      </div>
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: 3,
          border: "1.5px solid #d4d4d8",
          background: "#fff",
        }}
      />
    </div>
  );
}

/* ── 列データ ── */

interface LibColumn {
  icon: ServiceIconName;
  name: string;
}

const libraries: LibColumn[] = [
  { icon: "mui", name: "Material UI" },
  { icon: "chakra", name: "Chakra UI" },
  { icon: "antdesign", name: "Ant Design" },
];

const components: { render: () => React.ReactNode; last?: boolean }[] = [
  {
    render: () => (
      <>
        <MiniButton primary /> <MiniButton />
      </>
    ),
  },
  { render: () => <MiniInput /> },
  { render: () => <MiniSelect /> },
  { render: () => <MiniTag /> },
  { render: () => <MiniSwitch on /> },
  { render: () => <MiniCheckbox />, last: true },
];

export default function Fig56() {
  return (
    <IllustrationFrame title="汎用ライブラリのコンポーネント例: MUI / Chakra UI / Ant Design">
      <div style={{ display: "flex", gap: 14, width: CONTENT_WIDTH }}>
        {libraries.map((lib) => (
          <div key={lib.name} style={{ flex: 1 }}>
            <LibraryLabel name={lib.name} icon={lib.icon} />
            <div style={nameStyle}>{lib.name}</div>
            <div style={panel}>
              {components.map((comp, i) => (
                <div key={i} style={comp.last ? rowLast : rowStyle}>
                  <div style={previewArea}>{comp.render()}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: "#52525b", marginTop: 14, textAlign: "center" }}>
        どのライブラリも Button・Input・Select・Tag・Switch といった基本部品がそろっている
      </div>
    </IllustrationFrame>
  );
}
