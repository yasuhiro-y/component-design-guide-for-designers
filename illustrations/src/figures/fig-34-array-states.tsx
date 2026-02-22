import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const stateLabel: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 8,
};

const stateNote: CSSProperties = {
  fontSize: 10,
  color: "#a1a1aa",
  marginTop: 6,
};

const card: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 12,
  minHeight: 140,
};

const listRow = (isLast: boolean): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "7px 0",
  borderBottom: isLast ? "none" : "1px solid #f4f4f5",
});

const avatar = (letter: string): CSSProperties => ({
  width: 26,
  height: 26,
  borderRadius: "50%",
  background: "#e4e4e7",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 10,
  fontWeight: 600,
  color: "#52525b",
  flexShrink: 0,
});

const nameStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  color: "#18181b",
};

const roleStyle: CSSProperties = {
  fontSize: 10,
  color: "#a1a1aa",
};

interface Person {
  name: string;
  role: string;
}

function ListItem({ person, isLast }: { person: Person; isLast: boolean }) {
  return (
    <div style={listRow(isLast)}>
      <span style={avatar(person.name[0])}>{person.name[0]}</span>
      <div>
        <div style={nameStyle}>{person.name}</div>
        <div style={roleStyle}>{person.role}</div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div style={{ ...card, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a1a1aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: 6 }}
        >
          <path d="M22 12h-6l-2 3H10l-2-3H2" />
          <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
        </svg>
        <div style={{ fontSize: 11, fontWeight: 500, color: "#3f3f46" }}>データなし</div>
        <div style={{ fontSize: 10, color: "#a1a1aa", marginTop: 2 }}>メンバーがいません</div>
      </div>
    </div>
  );
}

function SingleItem() {
  return (
    <div style={card}>
      <ListItem person={{ name: "田中 太郎", role: "Designer" }} isLast />
    </div>
  );
}

function NormalList() {
  const people: Person[] = [
    { name: "田中 太郎", role: "Designer" },
    { name: "佐藤 花子", role: "Engineer" },
    { name: "鈴木 一郎", role: "PM" },
  ];
  return (
    <div style={card}>
      {people.map((p, i) => (
        <ListItem key={p.name} person={p} isLast={i === people.length - 1} />
      ))}
    </div>
  );
}

function ManyItems() {
  const visible: Person[] = [
    { name: "田中 太郎", role: "Designer" },
    { name: "佐藤 花子", role: "Engineer" },
    { name: "鈴木 一郎", role: "PM" },
  ];
  return (
    <div style={card}>
      {visible.map((p, i) => (
        <ListItem key={p.name} person={p} isLast={false} />
      ))}
      <div
        style={{
          textAlign: "center",
          padding: "8px 0 2px",
          fontSize: 11,
          fontWeight: 500,
          color: "#3b82f6",
          cursor: "default",
        }}
      >
        さらに表示 (+12)
      </div>
    </div>
  );
}

export default function Fig34() {
  const states = [
    { label: "0件", el: <EmptyState />, note: "空の状態" },
    { label: "1件", el: <SingleItem />, note: "単一アイテム" },
    { label: "通常(3件)", el: <NormalList />, note: "標準的なリスト" },
    { label: "大量", el: <ManyItems />, note: "ページネーション" },
  ];

  return (
    <IllustrationFrame title="Array型: リストの4つの状態">
      <div style={{ display: "flex", gap: 10, width: CONTENT_WIDTH }}>
        {states.map((s) => (
          <div key={s.label} style={{ flex: 1, minWidth: 0 }}>
            <div style={stateLabel}>{s.label}</div>
            {s.el}
            <div style={stateNote}>{s.note}</div>
          </div>
        ))}
      </div>
      <Caption text="Array型: リストの4つの状態" />
    </IllustrationFrame>
  );
}
