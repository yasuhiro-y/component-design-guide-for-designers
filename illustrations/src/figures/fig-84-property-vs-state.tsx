import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

function TrafficLight({ active }: { active: "red" | "yellow" | "green" }) {
  const lights: Array<{ color: string; id: "red" | "yellow" | "green" }> = [
    { color: "#ef4444", id: "red" },
    { color: "#f59e0b", id: "yellow" },
    { color: "#22c55e", id: "green" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        background: "#27272a",
        borderRadius: 16,
        padding: "14px 12px",
        width: 44,
      }}
    >
      {lights.map((l) => (
        <div
          key={l.id}
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: l.id === active ? l.color : "#3f3f46",
            opacity: l.id === active ? 1 : 0.3,
            boxShadow: "none",
          }}
        />
      ))}
    </div>
  );
}

function AnnotationArrow({
  side,
  label,
  sublabel,
}: {
  side: "left" | "right";
  label: string;
  sublabel: string;
}) {
  const isLeft = side === "left";

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexDirection: isLeft ? "row" : "row-reverse",
      }}
    >
      <div style={{ textAlign: isLeft ? "right" : "left" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: text }}>{label}</div>
        <div style={{ fontSize: 10, color: tertiary }}>{sublabel}</div>
      </div>
      <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
        {isLeft ? (
          <>
            <line x1="0" y1="5" x2="18" y2="5" stroke={text} strokeWidth="1.5" />
            <polygon points="18,2 24,5 18,8" fill={text} />
          </>
        ) : (
          <>
            <line x1="6" y1="5" x2="24" y2="5" stroke={text} strokeWidth="1.5" />
            <polygon points="6,2 0,5 6,8" fill={text} />
          </>
        )}
      </svg>
    </div>
  );
}

function ComparisonRow({
  platform,
  items,
}: {
  platform: string;
  items: Array<{ label: string; type: "prop" | "state" | "variant" }>;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div
        style={{
          width: 52,
          fontSize: 11,
          fontWeight: 700,
          color: text,
          flexShrink: 0,
        }}
      >
        {platform}
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: mono,
              fontSize: 10,
              fontWeight: 600,
              padding: "3px 8px",
              borderRadius: 5,
              background: item.type === "prop" ? "#f4f4f5" : item.type === "state" ? "#e4e4e7" : "#f4f4f5",
              color: secondary,
              border: item.type === "state" ? `1px dashed ${secondary}` : `1px solid ${border}`,
            }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Fig84() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", gap: 20 }}>
          {/* Left: traffic light analogy */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 16,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: tertiary, letterSpacing: "0.04em", marginBottom: 8 }}>
              信号機のたとえ
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <AnnotationArrow side="left" label="プロパティ" sublabel="車道用である" />
              <TrafficLight active="red" />
              <AnnotationArrow side="right" label="状態" sublabel="いま赤である" />
            </div>
            <div
              style={{
                marginTop: 12,
                fontSize: 10,
                color: tertiary,
                lineHeight: 1.5,
                textAlign: "center",
              }}
            >
              外から設定する値と、自身が切り替える値は別もの
            </div>
          </div>

          {/* Right: Figma vs Code comparison */}
          <div
            style={{
              flex: 1,
              background: "#fff",
              borderRadius: 16,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: tertiary, letterSpacing: "0.04em" }}>
              Figma vs コード
            </div>
            <ComparisonRow
              platform="Figma"
              items={[
                { label: "variant", type: "variant" },
                { label: "size", type: "variant" },
                { label: "state", type: "variant" },
                { label: "isLoading", type: "variant" },
              ]}
            />
            <div style={{ fontSize: 10, color: tertiary, paddingLeft: 62 }}>
              すべてバリアント — 区別なし
            </div>

            <div style={{ borderTop: `1px solid ${border}`, paddingTop: 12 }}>
              <ComparisonRow
                platform="コード"
                items={[
                  { label: "variant", type: "prop" },
                  { label: "size", type: "prop" },
                ]}
              />
              <div style={{ height: 6 }} />
              <ComparisonRow
                platform=""
                items={[
                  { label: "isLoading", type: "state" },
                  { label: "isError", type: "state" },
                ]}
              />
              <div style={{ marginTop: 8, display: "flex", gap: 16, paddingLeft: 62, fontSize: 10, color: tertiary }}>
                <span>
                  <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "#f4f4f5", border: `1px solid ${border}`, marginRight: 4, verticalAlign: "middle" }} />
                  props（外から渡す）
                </span>
                <span>
                  <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "#e4e4e7", border: `1px dashed ${secondary}`, marginRight: 4, verticalAlign: "middle" }} />
                  state（内部で管理）
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
