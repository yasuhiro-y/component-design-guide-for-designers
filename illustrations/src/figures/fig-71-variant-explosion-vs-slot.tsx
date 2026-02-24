import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

/* ── Tiny icon SVGs ── */
function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5l2 4 4.5.7-3.3 3.1.8 4.4L8 11.5l-4 2.2.8-4.4L1.5 6.2 6 5.5z" fill="#71717a" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Mock button ── */
interface MockBtnProps {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: CSSProperties;
}

function MockBtn({ label, leftIcon, rightIcon }: MockBtnProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding: "7px 14px",
        borderRadius: 6,
        background: text,
        color: "#fff",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "-0.01em",
      }}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </div>
  );
}

/* ── Slot-style button ── */
function SlotBtn({ label, leftIcon, rightIcon }: MockBtnProps) {
  const slotStyle: CSSProperties = {
    border: "1.5px dashed #71717a",
    borderRadius: 4,
    padding: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 18,
    minHeight: 18,
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        padding: "5px 12px",
        borderRadius: 6,
        background: text,
        color: "#fff",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "-0.01em",
      }}
    >
      <div style={slotStyle}>{leftIcon ?? <span style={{ opacity: 0.3, fontSize: 9 }}>…</span>}</div>
      {label}
      <div style={slotStyle}>{rightIcon ?? <span style={{ opacity: 0.3, fontSize: 9 }}>…</span>}</div>
    </div>
  );
}

const variantLabel: CSSProperties = {
  fontFamily: mono,
  fontSize: 9,
  color: tertiary,
  textAlign: "center",
  marginTop: 4,
};

const colTitle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: text,
  textAlign: "center",
  marginBottom: 12,
};

export default function Fig71() {
  return (
    <IllustrationFrame title="バリアント爆発 vs スロット: 4つ作るか、1つで済ませるか">
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH, alignItems: "flex-start" }}>
        {/* ── Left: Variant explosion ── */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: 8,
            padding: 16,
          }}
        >
          <div style={colTitle}>バリアントで管理</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, justifyItems: "center" }}>
            <div>
              <MockBtn label="Button" leftIcon={<StarIcon />} />
              <div style={variantLabel}>LeftIcon</div>
            </div>
            <div>
              <MockBtn label="Button" rightIcon={<ArrowIcon />} />
              <div style={variantLabel}>RightIcon</div>
            </div>
            <div>
              <MockBtn label="Button" leftIcon={<StarIcon />} rightIcon={<ArrowIcon />} />
              <div style={variantLabel}>BothIcons</div>
            </div>
            <div>
              <MockBtn label="Button" />
              <div style={variantLabel}>NoIcon</div>
            </div>
          </div>
          <div
            style={{
              marginTop: 12,
              paddingTop: 10,
              borderTop: `1px solid ${border}`,
              fontSize: 10,
              color: secondary,
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            アイコンの組み合わせごとにバリアントが増える。
            <br />
            <span style={{ fontWeight: 600, color: text }}>新しいパターンが出るたびに追加が必要。</span>
          </div>
        </div>

        {/* ── Center arrow ── */}
        <div style={{ display: "flex", alignItems: "center", paddingTop: 80, flexShrink: 0 }}>
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <line x1="0" y1="8" x2="24" y2="8" stroke="#d4d4d8" strokeWidth="1.5" />
            <polygon points="24,3 32,8 24,13" fill="#d4d4d8" />
          </svg>
        </div>

        {/* ── Right: Slot approach ── */}
        <div
          style={{
            flex: 1,
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: 8,
            padding: 16,
          }}
        >
          <div style={colTitle}>スロットで管理</div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <div>
              <SlotBtn label="Button" leftIcon={<StarIcon />} rightIcon={<ArrowIcon />} />
              <div style={variantLabel}>leading / trailing に好きなものを差し込む</div>
            </div>

            <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { left: <StarIcon />, right: null, label: "Icon + なし" },
                { left: null, right: <ArrowIcon />, label: "なし + Arrow" },
                { left: null, right: null, label: "なし + なし" },
              ].map((p) => (
                <div key={p.label} style={{ textAlign: "center" }}>
                  <SlotBtn label="Btn" leftIcon={p.left ?? undefined} rightIcon={p.right ?? undefined} />
                  <div style={{ ...variantLabel, fontSize: 8 }}>{p.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              marginTop: 12,
              paddingTop: 10,
              borderTop: `1px solid ${border}`,
              fontSize: 10,
              color: secondary,
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            差し込み口を2つ用意するだけ。
            <br />
            <span style={{ fontWeight: 600, color: text }}>バリアントを増やさず対応できる。</span>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
