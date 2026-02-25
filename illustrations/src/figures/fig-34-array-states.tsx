import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { avatars } from "../shared/unsplash";
import { CONTENT_WIDTH } from "../styles/tokens";

const stateLabel: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#18181b",
  marginBottom: 10,
};

const stateNote: CSSProperties = {
  fontSize: 12,
  color: "#52525b",
  marginTop: 8,
};

/* UI mock card — white + border */
const card: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  padding: 16,
  minHeight: 150,
};

const listRow = (isLast: boolean): CSSProperties => ({
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "8px 0",
  borderBottom: isLast ? "none" : "1px solid #f4f4f5",
});

const avatarImg: CSSProperties = {
  width: 30,
  height: 30,
  borderRadius: "50%",
  objectFit: "cover",
  flexShrink: 0,
};

const nameStyle: CSSProperties = {
  fontSize: 13,
  fontWeight: 400,
  color: "#18181b",
};

const roleStyle: CSSProperties = {
  fontSize: 11,
  color: "#71717a",
};

interface Person {
  name: string;
  role: string;
  avatar: string;
}

const people: Person[] = [
  { name: "田中 太郎", role: "Designer", avatar: avatars.kim },
  { name: "佐藤 花子", role: "Engineer", avatar: avatars.garcia },
  { name: "鈴木 一郎", role: "PM", avatar: avatars.suzuki },
];

function ListItem({ person, isLast }: { person: Person; isLast: boolean }) {
  return (
    <div style={listRow(isLast)}>
      <img src={person.avatar} style={avatarImg} />
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
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a1a1aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginBottom: 8 }}
        >
          <path d="M22 12h-6l-2 3H10l-2-3H2" />
          <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
        </svg>
        <div style={{ fontSize: 12, fontWeight: 400, color: "#3f3f46" }}>データなし</div>
        <div style={{ fontSize: 11, color: "#71717a", marginTop: 3 }}>メンバーがいません</div>
      </div>
    </div>
  );
}

function SingleItem() {
  return (
    <div style={card}>
      <ListItem person={people[0]} isLast />
    </div>
  );
}

function NormalList() {
  return (
    <div style={card}>
      {people.map((p, i) => (
        <ListItem key={p.name} person={p} isLast={i === people.length - 1} />
      ))}
    </div>
  );
}

function ManyItems() {
  return (
    <div style={card}>
      {people.map((p) => (
        <ListItem key={p.name} person={p} isLast={false} />
      ))}
      <div
        style={{
          textAlign: "center",
          padding: "10px 0 2px",
          fontSize: 11,
          fontWeight: 400,
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
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 12, width: CONTENT_WIDTH }}>
        {states.map((s) => (
          <div key={s.label} style={{ flex: 1, minWidth: 0 }}>
            <div style={stateLabel}>{s.label}</div>
            {s.el}
          </div>
        ))}
      </div>
    </IllustrationFrame>
  );
}
