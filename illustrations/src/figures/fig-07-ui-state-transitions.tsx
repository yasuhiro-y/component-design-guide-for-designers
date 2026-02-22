import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const stateLabel: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 6,
};

const stateNote: CSSProperties = {
  fontSize: 11,
  color: "#71717a",
  marginTop: 8,
};

const card: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 14,
  minHeight: 100,
};

const listItem = (i: number) => ({
  display: "flex" as const,
  alignItems: "center" as const,
  gap: 10,
  padding: "8px 0",
  borderBottom: i < 2 ? "1px solid #f4f4f5" : "none",
});

function LoadingState() {
  return (
    <div style={card}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#f4f4f5" }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 10, borderRadius: 4, background: "#f4f4f5", width: i === 1 ? "60%" : "80%", marginBottom: 4 }} />
              <div style={{ height: 8, borderRadius: 4, background: "#f4f4f5", width: "40%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IdealState() {
  return (
    <div style={card}>
      {["田中 太郎", "佐藤 花子", "鈴木 一郎"].map((name, i) => (
        <div key={name} style={listItem(i)}>
          <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#e4e4e7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#52525b", flexShrink: 0 }}>
            {name[0]}
          </span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: "#18181b" }}>{name}</div>
            <div style={{ fontSize: 10, color: "#a1a1aa" }}>Designer</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <div style={{ ...card, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a1a1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 6 }}>
          <path d="M22 12h-6l-2 3H10l-2-3H2" /><path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
        </svg>
        <div style={{ fontSize: 11, fontWeight: 500, color: "#3f3f46" }}>データなし</div>
        <div style={{ fontSize: 10, color: "#a1a1aa", marginTop: 2 }}>条件を変えてください</div>
      </div>
    </div>
  );
}

function ErrorState() {
  return (
    <div style={{ ...card, borderColor: "#fecaca" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <span style={{ width: 20, height: 20, borderRadius: "50%", background: "#fef2f2", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#ef4444" }}>!</span>
        <span style={{ fontSize: 11, fontWeight: 500, color: "#ef4444" }}>読み込み失敗</span>
      </div>
      <button style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #d4d4d8", background: "#fff", fontSize: 11, color: "#3f3f46", fontFamily: '"Inter",sans-serif', cursor: "default" }}>再試行</button>
    </div>
  );
}

function PartialState() {
  return (
    <div style={card}>
      {["田中 太郎", "—", "鈴木 一郎"].map((name, i) => (
        <div key={i} style={listItem(i)}>
          <span style={{ width: 32, height: 32, borderRadius: "50%", background: name === "—" ? "#f4f4f5" : "#e4e4e7", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 600, color: "#52525b", flexShrink: 0 }}>
            {name === "—" ? "?" : name[0]}
          </span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: name === "—" ? "#a1a1aa" : "#18181b" }}>{name === "—" ? "取得失敗" : name}</div>
            <div style={{ fontSize: 10, color: "#a1a1aa" }}>{name === "—" ? "—" : "Designer"}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Fig07() {
  const states = [
    { label: "Loading", el: <LoadingState />, note: "読み込み中" },
    { label: "Ideal", el: <IdealState />, note: "理想状態" },
    { label: "Empty", el: <EmptyState />, note: "データなし" },
    { label: "Error", el: <ErrorState />, note: "エラー発生" },
    { label: "Partial", el: <PartialState />, note: "一部だけ表示" },
  ];

  return (
    <IllustrationFrame title="UIの5つの状態と遷移">
      <div style={{ display: "flex", gap: 10, width: CONTENT_WIDTH }}>
        {states.map((s) => (
          <div key={s.label} style={{ flex: 1, minWidth: 0 }}>
            <div style={stateLabel}>{s.label}</div>
            {s.el}
            <div style={stateNote}>{s.note}</div>
          </div>
        ))}
      </div>
      <Caption text="UIの5つの状態と遷移" />
    </IllustrationFrame>
  );
}
