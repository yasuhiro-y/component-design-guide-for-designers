import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const card: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 12,
};

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

const monoSmall: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 10,
  color: "#a1a1aa",
};

/* ── Mini message row ── */
function MessageRow({
  name,
  text,
  time,
}: {
  name: string;
  text: string;
  time: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 0",
        borderBottom: "1px solid #f4f4f5",
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "#e4e4e7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 10,
          fontWeight: 600,
          color: "#52525b",
          flexShrink: 0,
        }}
      >
        {name[0]}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 500, color: "#18181b" }}>
            {name}
          </span>
          <span style={{ fontSize: 10, color: "#a1a1aa", flexShrink: 0 }}>
            {time}
          </span>
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#71717a",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}

/* ── Deadline card ── */
function DeadlineCard({
  label,
  date,
  relative,
  isPast,
}: {
  label: string;
  date: string;
  relative: string;
  isPast?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #f4f4f5",
      }}
    >
      <span style={{ fontSize: 12, color: "#18181b" }}>{label}</span>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: 12, fontWeight: 500, color: "#18181b" }}>
          {date}
        </div>
        <div
          style={{
            fontSize: 10,
            color: isPast ? "#ef4444" : "#71717a",
            fontWeight: isPast ? 500 : 400,
          }}
        >
          {relative}
        </div>
      </div>
    </div>
  );
}

export default function Fig46() {
  return (
    <IllustrationFrame title="Date型: 日付の表示形式と設計判断">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        {/* Left: Relative dates */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>相対表示</div>
          <div style={card}>
            <MessageRow name="田中" text="明日の会議の件ですが…" time="3分前" />
            <MessageRow
              name="佐藤"
              text="デザインレビューお願いします"
              time="2時間前"
            />
            <MessageRow
              name="鈴木"
              text="コンポーネント更新しました"
              time="昨日"
            />
          </div>
          <div style={colSub}>チャット・通知に適する</div>
        </div>

        {/* Center: Absolute dates */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>絶対表示</div>
          <div style={card}>
            <DeadlineCard
              label="提出期限"
              date="2026/03/15"
              relative="あと21日"
            />
            <DeadlineCard
              label="公開日"
              date="2026/02/22"
              relative="今日"
            />
            <DeadlineCard
              label="応募締切"
              date="2026/02/10"
              relative="12日超過"
              isPast
            />
          </div>
          <div style={colSub}>締め切り・スケジュールに適する</div>
        </div>

        {/* Right: Raw data */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>裏側のデータ</div>
          <div
            style={{
              ...card,
              background: "#fafafa",
              fontFamily: '"SF Mono", Menlo, monospace',
              fontSize: 11,
              lineHeight: 1.8,
              color: "#3f3f46",
            }}
          >
            <div>
              <span style={monoSmall}>保存形式:</span>
            </div>
            <div style={{ paddingLeft: 8 }}>
              2026-02-22T14:00:00<span style={{ color: "#18181b", fontWeight: 500 }}>Z</span>
            </div>
            <div style={{ marginTop: 12 }}>
              <span style={monoSmall}>表示変換:</span>
            </div>
            <div style={{ paddingLeft: 8 }}>
              <span style={{ color: "#a1a1aa" }}>→</span> 2026/02/22
            </div>
            <div style={{ paddingLeft: 8 }}>
              <span style={{ color: "#a1a1aa" }}>→</span> 2月22日
            </div>
            <div style={{ paddingLeft: 8 }}>
              <span style={{ color: "#a1a1aa" }}>→</span> 今日
            </div>
            <div style={{ paddingLeft: 8 }}>
              <span style={{ color: "#a1a1aa" }}>→</span> 3分前
            </div>
          </div>
          <div style={colSub}>同じデータ → 複数の表示形式</div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
