import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 8,
};

const colSub: CSSProperties = {
  fontSize: 10,
  color: "#a1a1aa",
  marginTop: 6,
};

/* ── Icons ── */
function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3f3f46"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3f3f46"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3f3f46"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

/* ── Mini Avatar ── */
function MiniAvatar({ letter }: { letter: string }) {
  return (
    <span
      style={{
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "#e4e4e7",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 9,
        fontWeight: 600,
        color: "#52525b",
      }}
    >
      {letter}
    </span>
  );
}

/* ── Dot badge ── */
function DotBadge() {
  return (
    <span
      style={{
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "#18181b",
        display: "inline-block",
      }}
    />
  );
}

/* ── ListItem component ── */
function ListItem({
  leading,
  title,
  subtitle,
  isLast,
}: {
  leading: React.ReactNode;
  title: string;
  subtitle: string;
  isLast?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 0",
        borderBottom: isLast ? "none" : "1px solid #f4f4f5",
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {leading}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#18181b" }}>
          {title}
        </div>
        <div style={{ fontSize: 10, color: "#a1a1aa" }}>{subtitle}</div>
      </div>
    </div>
  );
}

const card: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: "4px 12px",
};

const slotLabel: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 10,
  color: "#a1a1aa",
  textAlign: "center" as const,
  marginTop: 8,
};

export default function Fig48() {
  return (
    <IllustrationFrame title="Element型（スロット）: 差し込み口で中身を自由に">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* 3 variants showing different slot contents */}
        <div style={{ display: "flex", gap: 12 }}>
          {/* 1. Icon slot */}
          <div style={{ flex: 1 }}>
            <div style={colTitle}>アイコンを差し込む</div>
            <div style={card}>
              <ListItem
                leading={<MailIcon />}
                title="メッセージ"
                subtitle="新着3件"
              />
              <ListItem
                leading={<SettingsIcon />}
                title="設定"
                subtitle="アカウント設定"
              />
              <ListItem
                leading={<UserIcon />}
                title="プロフィール"
                subtitle="田中 太郎"
                isLast
              />
            </div>
            <div style={slotLabel}>leading: Icon</div>
          </div>

          {/* 2. Avatar slot */}
          <div style={{ flex: 1 }}>
            <div style={colTitle}>Avatarを差し込む</div>
            <div style={card}>
              <ListItem
                leading={<MiniAvatar letter="田" />}
                title="田中 太郎"
                subtitle="Designer"
              />
              <ListItem
                leading={<MiniAvatar letter="佐" />}
                title="佐藤 花子"
                subtitle="Engineer"
              />
              <ListItem
                leading={<MiniAvatar letter="鈴" />}
                title="鈴木 一郎"
                subtitle="PM"
                isLast
              />
            </div>
            <div style={slotLabel}>leading: Avatar</div>
          </div>

          {/* 3. Badge/dot slot */}
          <div style={{ flex: 1 }}>
            <div style={colTitle}>ドットを差し込む</div>
            <div style={card}>
              <ListItem
                leading={<DotBadge />}
                title="未読の通知"
                subtitle="2分前"
              />
              <ListItem
                leading={<DotBadge />}
                title="新しいコメント"
                subtitle="1時間前"
              />
              <ListItem
                leading={
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#d4d4d8",
                      display: "inline-block",
                    }}
                  />
                }
                title="既読の通知"
                subtitle="昨日"
                isLast
              />
            </div>
            <div style={slotLabel}>leading: Badge</div>
          </div>
        </div>

        {/* Props annotation */}
        <div
          style={{
            marginTop: 16,
            padding: "10px 16px",
            background: "#fafafa",
            borderRadius: 6,
            border: "1px solid #e4e4e7",
            fontFamily: '"SF Mono", Menlo, monospace',
            fontSize: 11,
            lineHeight: 1.6,
            color: "#3f3f46",
            textAlign: "center",
          }}
        >
          <span style={{ color: "#71717a" }}>leading</span>
          <span style={{ color: "#d4d4d8" }}>?: </span>
          <span style={{ color: "#18181b", fontWeight: 500 }}>ReactNode</span>
          <span style={{ color: "#a1a1aa", marginLeft: 12 }}>
            — 同じ ListItem に Icon / Avatar / Badge を自由に差し込める
          </span>
        </div>

        <div style={colSub}>
          Figma では Instance Swap Property で表現。コードでは Element 型（ReactNode）のスロットとして設計する
        </div>
      </div>
    </IllustrationFrame>
  );
}
