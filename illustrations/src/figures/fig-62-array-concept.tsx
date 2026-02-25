import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { avatars } from "../shared/unsplash";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * 配列の概念: 同じコンポーネント（テンプレート）に
 * 異なるデータを流し込んで繰り返し表示する仕組みを図示。
 * Figma の Auto Layout 内に同じコンポーネントを並べるイメージ。
 */

const panel: CSSProperties = {
  background: "#fff",
  borderRadius: 16,
  padding: 16,
};

const templateCard: CSSProperties = {
  background: "#fafafa",
  borderRadius: 16,
  border: "2px dashed #d4d4d8",
  padding: 12,
  display: "flex",
  gap: 10,
  alignItems: "center",
};

const instanceCard = (highlight: string): CSSProperties => ({
  background: "#fff",
  borderRadius: 16,
  border: "1px solid #e4e4e7",
  padding: 10,
  display: "flex",
  gap: 8,
  alignItems: "center",
  borderLeft: `3px solid ${highlight}`,
});

const avatarPlaceholder: CSSProperties = {
  width: 32,
  height: 32,
  borderRadius: "50%",
  background: "#e4e4e7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 10,
  color: "#a1a1aa",
  flexShrink: 0,
};

const textPlaceholder: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  flex: 1,
};

const linePlaceholder = (w: number): CSSProperties => ({
  width: w,
  height: 8,
  borderRadius: 8,
  background: "#e4e4e7",
});


const sectionLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#52525b",
  textTransform: "uppercase",
  letterSpacing: "0.04em",
  marginBottom: 10,
};

const arrowStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  color: "#a1a1aa",
  flexShrink: 0,
  padding: "0 4px",
};

interface ItemData {
  name: string;
  role: string;
  color: string;
  avatar: string;
}

const items: ItemData[] = [
  { name: "田中 太郎", role: "Designer", color: "#3b82f6", avatar: avatars.chen },
  { name: "佐藤 花子", role: "Engineer", color: "#22c55e", avatar: avatars.kim },
  { name: "鈴木 一郎", role: "PM", color: "#f59e0b", avatar: avatars.garcia },
];

function InstanceRow({ item }: { item: ItemData }) {
  return (
    <div style={instanceCard(item.color)}>
      <img src={item.avatar} style={{ width: 28, height: 28, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#18181b" }}>
          {item.name}
        </div>
        <div style={{ fontSize: 10, color: "#52525b" }}>{item.role}</div>
      </div>
      <span style={{ fontSize: 10, color: "#71717a" }}>{item.role}</span>
    </div>
  );
}

export default function Fig62() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {/* Left: Template (single component definition) */}
          <div style={{ flex: "0 0 200px" }}>
            <div style={sectionLabel}>テンプレート（1つ）</div>
            <div style={panel}>
              <div style={templateCard}>
                <div style={avatarPlaceholder}>?</div>
                <div style={textPlaceholder}>
                  <div style={linePlaceholder(80)} />
                  <div style={linePlaceholder(50)} />
                </div>
              </div>
              <div
                style={{
                  marginTop: 10,
                  textAlign: "center",
                  fontFamily: '"SF Mono", Menlo, monospace',
                  fontSize: 11,
                  color: "#52525b",
                }}
              >
                &lt;MemberCard /&gt;
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={arrowStyle}>→</div>

          {/* Right: Instances (repeated with different data) */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={sectionLabel}>データを流し込む（N 個）</div>
            <div style={{ ...panel, display: "flex", flexDirection: "column", gap: 6 }}>
              {items.map((item) => (
                <InstanceRow key={item.name} item={item} />
              ))}
              <div
                style={{
                  textAlign: "center",
                  fontSize: 10,
                  color: "#71717a",
                  padding: "4px 0 0",
                }}
              >
                ...データの数だけ繰り返される
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div
          style={{
            marginTop: 14,
            display: "flex",
            gap: 16,
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 11, color: "#71717a" }}>
            <span style={{ fontWeight: 700, color: "#52525b" }}>Figma:</span> Auto Layout 内にコンポーネントを繰り返し配置
          </div>
          <div style={{ fontSize: 11, color: "#71717a" }}>
            <span style={{ fontWeight: 700, color: "#52525b" }}>Code:</span> 配列をループして同じコンポーネントを描画
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
