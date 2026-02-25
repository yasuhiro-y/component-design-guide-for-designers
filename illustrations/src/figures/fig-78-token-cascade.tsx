import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH, font } from "../styles/tokens";

const sectionTitle: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#18181b",
  marginBottom: 14,
  fontFamily: font.sans,
  fontFeatureSettings: font.featureSettings,
};

const colLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#3f3f46",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  marginBottom: 8,
  fontFamily: font.sans,
  fontFeatureSettings: font.featureSettings,
};

const componentNames = ["Tag", "Badge", "Callout", "Button"] as const;

const OLD_COLOR = "#3b82f6";
const NEW_COLOR = "#0ea5e9";

/* ── Mini component renderers ── */
function MiniTag({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        height: 26,
        padding: "0 10px",
        borderRadius: 9999,
        background: color + "18",
        color,
        fontSize: 11,
        fontWeight: 700,
      }}
    >
      info
    </span>
  );
}

function MiniBadge({ color }: { color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: color,
        }}
      />
      <span style={{ fontSize: 11, color: "#52525b" }}>info</span>
    </div>
  );
}

function MiniCallout({ color }: { color: string }) {
  return (
    <div
      style={{
        padding: "6px 10px",
        borderRadius: 8,
        background: color + "18",
        fontSize: 10,
        color,
        fontWeight: 400,
        fontFamily: font.sans,
        fontFeatureSettings: font.featureSettings,
      }}
    >
      info: メッセージ
    </div>
  );
}

function MiniButton({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        height: 28,
        padding: "0 12px",
        borderRadius: 8,
        background: color,
        color: "#fff",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: font.sans,
        fontFeatureSettings: font.featureSettings,
      }}
    >
      送信
    </span>
  );
}

function renderComponent(name: string, color: string) {
  switch (name) {
    case "Tag":
      return <MiniTag color={color} />;
    case "Badge":
      return <MiniBadge color={color} />;
    case "Callout":
      return <MiniCallout color={color} />;
    case "Button":
      return <MiniButton color={color} />;
    default:
      return null;
  }
}

/* ── Token swatch ── */
function TokenSwatch({
  label,
  color,
  name,
}: {
  label: string;
  color: string;
  name: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 8,
          background: color,
          flexShrink: 0,
        }}
      />
      <div>
        <div style={{ fontSize: 10, color: "#52525b", fontFamily: font.sans, fontFeatureSettings: font.featureSettings }}>{label}</div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#18181b",
            fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
}

export default function Fig78() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* ── With tokens ── */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 20,
            marginBottom: 16,
          }}
        >
          <div style={sectionTitle}>
            トークンあり: 1箇所変更で全コンポーネントに反映
          </div>

          {/* Token change indicator */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              marginBottom: 16,
              padding: "10px 0",
            }}
          >
            <TokenSwatch label="変更前" color={OLD_COLOR} name={OLD_COLOR} />
            <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
              <line
                x1="0"
                y1="6"
                x2="24"
                y2="6"
                stroke="#d4d4d8"
                strokeWidth="1.5"
              />
              <polygon points="24,2 32,6 24,10" fill="#d4d4d8" />
            </svg>
            <TokenSwatch label="変更後" color={NEW_COLOR} name={NEW_COLOR} />
          </div>

          {/* Fan-out lines */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 4,
            }}
          >
            <svg width="400" height="24" viewBox="0 0 400 24">
              <line
                x1="200"
                y1="0"
                x2="200"
                y2="8"
                stroke="#d4d4d8"
                strokeWidth="1.5"
              />
              {[60, 155, 245, 340].map((x) => (
                <line
                  key={x}
                  x1="200"
                  y1="8"
                  x2={x}
                  y2="22"
                  stroke="#d4d4d8"
                  strokeWidth="1.5"
                />
              ))}
            </svg>
          </div>

          {/* Components receiving the update */}
          <div style={{ display: "flex", gap: 12 }}>
            {componentNames.map((name) => (
              <div
                key={name}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <div style={colLabel}>{name}</div>
                {renderComponent(name, NEW_COLOR)}
              </div>
            ))}
          </div>
        </div>

        {/* ── Without tokens ── */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: 20,
          }}
        >
          <div style={sectionTitle}>
            トークンなし: 4箇所を個別に修正が必要
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {componentNames.map((name, i) => {
              /* Show a mix: some updated, some still old — illustrating inconsistency */
              const updated = i < 2;
              const displayColor = updated ? NEW_COLOR : OLD_COLOR;
              return (
                <div
                  key={name}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 0",
                  }}
                >
                  <div style={colLabel}>{name}</div>
                  {renderComponent(name, displayColor)}
                  <div
                    style={{
                      fontSize: 10,
                      fontFamily:
                        '"SF Mono", "Fira Code", Menlo, monospace',
                      color: updated ? "#22c55e" : "#ef4444",
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {updated ? (
                      <>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="2,5 4,7 8,3" />
                        </svg>
                        {NEW_COLOR}
                      </>
                    ) : (
                      <>
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="3" y1="3" x2="7" y2="7" />
                          <line x1="7" y1="3" x2="3" y2="7" />
                        </svg>
                        {OLD_COLOR}
                      </>
                    )}
                  </div>
                  <div style={{ fontSize: 10, color: "#52525b", fontFamily: font.sans, fontFeatureSettings: font.featureSettings }}>
                    {updated ? "更新済み" : "未更新"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
