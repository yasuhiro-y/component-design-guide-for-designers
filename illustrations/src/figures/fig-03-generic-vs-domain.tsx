import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const groupLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 500,
  color: "#3f3f46",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  marginBottom: 10,
};

const compName: CSSProperties = {
  fontSize: 11,
  fontWeight: 500,
  color: "#52525b",
  marginBottom: 4,
};

// ---- Generic components rendered ----

function ButtonDemo() {
  return (
    <div>
      <div style={compName}>Button</div>
      <div style={{ display: "flex", gap: 6 }}>
        <button style={{ padding: "6px 14px", borderRadius: 6, border: "none", background: "#18181b", color: "#fff", fontSize: 12, fontWeight: 500, fontFamily: '"Inter", "Noto Sans JP", sans-serif', cursor: "default" }}>Primary</button>
        <button style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid #d4d4d8", background: "#fff", color: "#3f3f46", fontSize: 12, fontWeight: 500, fontFamily: '"Inter", "Noto Sans JP", sans-serif', cursor: "default" }}>Secondary</button>
      </div>
    </div>
  );
}

const avatarUrls = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
];

function AvatarDemo() {
  return (
    <div>
      <div style={compName}>Avatar</div>
      <div style={{ display: "flex", gap: 6 }}>
        {avatarUrls.map((url, i) => (
          <img key={i} src={url} style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover" }} />
        ))}
      </div>
    </div>
  );
}

function InputDemo() {
  return (
    <div>
      <div style={compName}>Input</div>
      <input style={{ padding: "6px 10px", borderRadius: 6, border: "1px solid #d4d4d8", fontSize: 12, fontFamily: '"Inter", "Noto Sans JP", sans-serif', background: "#fff", width: 160, outline: "none", color: "#3f3f46" }} defaultValue="テキスト入力" readOnly />
    </div>
  );
}

// ---- Domain components rendered ----

function UserCardDemo() {
  return (
    <div>
      <div style={compName}>UserCard</div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", borderRadius: 8, border: "1px solid #e4e4e7", padding: 12 }}>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#18181b" }}>田中 太郎</div>
          <div style={{ fontSize: 11, color: "#3f3f46" }}>プロダクトデザイナー</div>
        </div>
      </div>
    </div>
  );
}

function JobListItemDemo() {
  return (
    <div>
      <div style={compName}>JobListItem</div>
      <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e4e4e7", padding: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#18181b" }}>カフェスタッフ</div>
        <div style={{ fontSize: 11, color: "#3f3f46", marginTop: 2 }}>渋谷店 · 時給 1,200円</div>
        <div style={{ marginTop: 8 }}>
          <button style={{ padding: "4px 10px", borderRadius: 6, border: "none", background: "#18181b", color: "#fff", fontSize: 11, fontWeight: 500, fontFamily: '"Inter", "Noto Sans JP", sans-serif', cursor: "default" }}>応募する</button>
        </div>
      </div>
    </div>
  );
}

export default function Fig03() {
  return (
    <IllustrationFrame title="汎用とドメインの依存関係">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={groupLabel}>汎用コンポーネント</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <ButtonDemo />
            <AvatarDemo />
            <InputDemo />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 12, color: "#52525b", padding: "30px 0 0" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
            <span style={{ fontSize: 10 }}>uses</span>
            <span>→</span>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={groupLabel}>ドメインコンポーネント</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <UserCardDemo />
            <JobListItemDemo />
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
