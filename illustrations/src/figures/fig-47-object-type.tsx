import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 6,
};

const colSub: CSSProperties = {
  fontSize: 10,
  color: "#52525b",
  marginBottom: 12,
};

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
};

const monoSmall: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 10,
  color: "#52525b",
};

const propsBox: CSSProperties = {
  background: "#fafafa",
  borderRadius: 6,
  border: "1px solid #e4e4e7",
  padding: "8px 10px",
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 11,
  lineHeight: 1.6,
  color: "#3f3f46",
};

const propKey: CSSProperties = { color: "#3f3f46" };
const propType: CSSProperties = { color: "#18181b", fontWeight: 500 };

/* ── Avatar component ── */
function Avatar({ size = 36 }: { size?: number }) {
  return (
    <img
      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        objectFit: "cover",
        flexShrink: 0,
      }}
    />
  );
}

/* ── Star ── */
function Stars({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", gap: 1 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          style={{ fontSize: 10, color: i <= score ? "#18181b" : "#d4d4d8" }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

/* ── Status badge ── */
function StatusBadge({ label }: { label: string }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 500,
        color: "#3f3f46",
        background: "#f4f4f5",
        border: "1px solid #e4e4e7",
        borderRadius: 999,
        padding: "1px 8px",
      }}
    >
      {label}
    </span>
  );
}

/* ── Rendered UserCard ── */
function UserCard() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #e4e4e7",
        padding: 12,
        display: "flex",
        gap: 10,
        alignItems: "center",
      }}
    >
      <Avatar size={40} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 2,
          }}
        >
          <span style={{ fontSize: 13, fontWeight: 600, color: "#18181b" }}>
            田中 太郎
          </span>
          <StatusBadge label="アクティブ" />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Stars score={4} />
          <span style={{ fontSize: 10, color: "#52525b" }}>4.0</span>
        </div>
      </div>
    </div>
  );
}

/* ── Figma-like property panel ── */
function FigmaPanel({
  items,
}: {
  items: { key: string; value: string }[];
}) {
  return (
    <div
      style={{
        background: "#fafafa",
        borderRadius: 6,
        border: "1px solid #e4e4e7",
        padding: "6px 10px",
      }}
    >
      <div
        style={{
          ...monoSmall,
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        設定パネル
      </div>
      {items.map((item) => (
        <div
          key={item.key}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4px 0",
            fontSize: 11,
            color: "#3f3f46",
            borderTop: "1px solid #e4e4e7",
          }}
        >
          <span>{item.key}</span>
          <span
            style={{
              fontSize: 10,
              color: "#3f3f46",
              background: "#fff",
              border: "1px solid #e4e4e7",
              borderRadius: 3,
              padding: "1px 6px",
            }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Fig47() {
  return (
    <IllustrationFrame title="Object型: 個別の値 vs データのまとまり">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        {/* Left: Avatar — individual props */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>Avatar（汎用）</div>
          <div style={colSub}>個別の値を受け取る</div>
          <div style={panel}>
            {/* Rendered */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Avatar size={48} />
            </div>

            {/* Props */}
            <div style={propsBox}>
              <div>
                <span style={propKey}>image: </span>
                <span style={propType}>string</span>
              </div>
              <div>
                <span style={propKey}>altText: </span>
                <span style={propType}>string</span>
              </div>
            </div>

            {/* Figma panel */}
            <div style={{ marginTop: 10 }}>
              <FigmaPanel
                items={[
                  { key: "image", value: "url..." },
                  { key: "altText", value: "田中 太郎" },
                ]}
              />
            </div>

            <div
              style={{
                fontSize: 11,
                color: "#3f3f46",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              プロパティ <strong style={{ color: "#18181b" }}>2個</strong>
            </div>
          </div>
        </div>

        {/* Center separator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            paddingTop: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 10, color: "#52525b" }}>プロパティ数</span>
            <span style={{ fontSize: 10, color: "#52525b" }}>が示す</span>
            <span style={{ fontSize: 10, color: "#52525b" }}>設計の違い</span>
          </div>
        </div>

        {/* Right: UserCard — object prop */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>UserCard（ドメイン）</div>
          <div style={colSub}>データ一式をまとめて受け取る</div>
          <div style={panel}>
            {/* Rendered */}
            <div style={{ marginBottom: 12 }}>
              <UserCard />
            </div>

            {/* Props */}
            <div style={propsBox}>
              <div>
                <span style={propKey}>user: </span>
                <span style={propType}>User</span>
              </div>
              <div style={{ paddingLeft: 12, fontSize: 10, color: "#52525b" }}>
                {"{ name, image, rating, status }"}
              </div>
            </div>

            {/* Figma panel */}
            <div style={{ marginTop: 10 }}>
              <FigmaPanel
                items={[
                  { key: "userName", value: "田中 太郎" },
                  { key: "userImage", value: "url..." },
                  { key: "rating", value: "4.0" },
                  { key: "status", value: "アクティブ" },
                  { key: "isVerified", value: "ON" },
                ]}
              />
            </div>

            <div
              style={{
                fontSize: 11,
                color: "#3f3f46",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              プロパティ <strong style={{ color: "#18181b" }}>5個</strong>
              （Figmaではバラバラに並ぶ）
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
