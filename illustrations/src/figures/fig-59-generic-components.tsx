import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * 汎用コンポーネントの一覧。
 * どのサービスでも使い回せる部品をズラッと並べて見せる。
 */

const card = {
  background: "#fff",
  borderRadius: 16,
  padding: "12px 16px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  gap: 8,
  flex: 1,
  minWidth: 0,
} as const;

const compName = {
  fontSize: 12,
  fontWeight: 700,
  color: "#18181b",
  letterSpacing: "-0.01em",
} as const;

const preview = {
  display: "flex",
  alignItems: "center" as const,
  justifyContent: "center" as const,
  width: "100%",
  minHeight: 36,
} as const;

function MiniButton({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: "5px 14px",
        borderRadius: 8,
        background: "#18181b",
        color: "#fff",
        fontSize: 11,
        fontWeight: 400,
      }}
    >
      {label}
    </div>
  );
}

function MiniInput() {
  return (
    <div
      style={{
        padding: "5px 10px",
        borderRadius: 8,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 11,
        color: "#a1a1aa",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      Placeholder
    </div>
  );
}

function MiniTag({ label, color }: { label: string; color?: string }) {
  return (
    <span
      style={{
        padding: "2px 8px",
        borderRadius: 8,
        background: color || "#f4f4f5",
        fontSize: 10,
        fontWeight: 400,
        color: "#3f3f46",
      }}
    >
      {label}
    </span>
  );
}

function MiniAvatar({ text }: { text: string }) {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "#e4e4e7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 700,
        color: "#3f3f46",
      }}
    >
      {text}
    </div>
  );
}

function MiniCheckbox({ checked }: { checked?: boolean }) {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: 8,
        border: `1.5px solid ${checked ? "#18181b" : "#d4d4d8"}`,
        background: checked ? "#18181b" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        color: "#fff",
      }}
    >
      {checked && "✓"}
    </div>
  );
}

function MiniBadge() {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 12,
          background: "#e4e4e7",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -4,
          right: -4,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#18181b",
          color: "#fff",
          fontSize: 8,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        3
      </div>
    </div>
  );
}

function MiniToggle({ on }: { on?: boolean }) {
  return (
    <div
      style={{
        width: 32,
        height: 18,
        borderRadius: 9,
        background: on ? "#18181b" : "#d4d4d8",
        padding: 2,
        display: "flex",
        justifyContent: on ? "flex-end" : "flex-start",
      }}
    >
      <div style={{ width: 14, height: 14, borderRadius: "50%", background: "#fff" }} />
    </div>
  );
}

function MiniSelect() {
  return (
    <div
      style={{
        padding: "5px 10px",
        borderRadius: 8,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 11,
        color: "#3f3f46",
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      Medium <span style={{ marginLeft: "auto", fontSize: 10, color: "#a1a1aa" }}>▾</span>
    </div>
  );
}

const components: { name: string; render: () => React.ReactNode }[] = [
  { name: "Button", render: () => <MiniButton label="Button" /> },
  { name: "Input", render: () => <MiniInput /> },
  { name: "Select", render: () => <MiniSelect /> },
  {
    name: "Tag",
    render: () => (
      <div style={{ display: "flex", gap: 4 }}>
        <MiniTag label="Info" color="#eff6ff" />
        <MiniTag label="Error" color="#fef2f2" />
      </div>
    ),
  },
  {
    name: "Avatar",
    render: () => (
      <div style={{ display: "flex", gap: 4 }}>
        <MiniAvatar text="A" />
        <MiniAvatar text="B" />
      </div>
    ),
  },
  { name: "Badge", render: () => <MiniBadge /> },
  {
    name: "Checkbox",
    render: () => (
      <div style={{ display: "flex", gap: 6 }}>
        <MiniCheckbox checked />
        <MiniCheckbox />
      </div>
    ),
  },
  { name: "Switch", render: () => <MiniToggle on /> },
];

export default function Fig59() {
  return (
    <IllustrationFrame>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 10,
          width: CONTENT_WIDTH,
        }}
      >
        {components.map(({ name, render }) => (
          <div key={name} style={card}>
            <div style={preview}>{render()}</div>
            <div style={compName}>{name}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 11, color: "#52525b", marginTop: 14, textAlign: "center" }}>
        特定のデータ構造に依存しない。別のサービスにもそのまま持っていける
      </div>
    </IllustrationFrame>
  );
}
