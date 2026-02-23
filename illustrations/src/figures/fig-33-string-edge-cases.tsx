import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: 12,
  width: CONTENT_WIDTH,
};

const cellLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 8,
};

const cellSub: CSSProperties = {
  fontSize: 10,
  color: "#52525b",
  marginTop: 6,
};

const mockCard: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 12,
  minHeight: 48,
};

const nameDisplay: CSSProperties = {
  fontSize: 13,
  fontWeight: 500,
  color: "#18181b",
  lineHeight: 1.4,
};

const roleDisplay: CSSProperties = {
  fontSize: 10,
  color: "#3f3f46",
  marginTop: 2,
};

const avatarSrcs: Record<string, string> = {
  "田": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "A": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  "鈴": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
};

function AvatarSmall({ letter }: { letter: string }) {
  const src = avatarSrcs[letter];
  if (src) {
    return <img src={src} style={{ width: 24, height: 24, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />;
  }
  return (
    <span
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "#f4f4f5",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        fontWeight: 600,
        color: "#52525b",
        flexShrink: 0,
        border: "1px dashed #d4d4d8",
      }}
    >
      {letter}
    </span>
  );
}

export default function Fig33() {
  return (
    <IllustrationFrame title="String型: テキストの振る舞い6パターン">
      <div style={grid}>
        {/* 1. Normal */}
        <div>
          <div style={cellLabel}>1. 通常</div>
          <div style={mockCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <AvatarSmall letter="田" />
              <div>
                <div style={nameDisplay}>田中 太郎</div>
                <div style={roleDisplay}>Designer</div>
              </div>
            </div>
          </div>
          <div style={cellSub}>基本の表示</div>
        </div>

        {/* 2. Empty */}
        <div>
          <div style={cellLabel}>2. 空</div>
          <div style={mockCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <AvatarSmall letter="?" />
              <div>
                <div style={roleDisplay}>Designer</div>
              </div>
            </div>
          </div>
          <div style={cellSub}>name 欄ごと非表示</div>
        </div>

        {/* 3. Long text */}
        <div>
          <div style={cellLabel}>3. 長文</div>
          <div style={mockCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <AvatarSmall letter="田" />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    ...nameDisplay,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  田中 太郎太郎太郎太郎太郎太郎
                </div>
                <div style={roleDisplay}>Designer</div>
              </div>
            </div>
          </div>
          <div style={cellSub}>ellipsis で省略</div>
        </div>

        {/* 4. Wrap */}
        <div>
          <div style={cellLabel}>4. 折り返し</div>
          <div style={mockCard}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <AvatarSmall letter="田" />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    ...nameDisplay,
                    wordBreak: "break-all",
                  }}
                >
                  田中 太郎太郎太郎太郎太郎太郎太郎太郎太郎
                </div>
                <div style={roleDisplay}>Designer</div>
              </div>
            </div>
          </div>
          <div style={cellSub}>複数行に折り返す</div>
        </div>

        {/* 5. English */}
        <div>
          <div style={cellLabel}>5. 英語</div>
          <div style={mockCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <AvatarSmall letter="A" />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div
                  style={{
                    ...nameDisplay,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  Alexander Hamilton
                </div>
                <div style={roleDisplay}>Designer</div>
              </div>
            </div>
          </div>
          <div style={cellSub}>幅の広い文字列</div>
        </div>

        {/* 6. With icon */}
        <div>
          <div style={cellLabel}>6. アイコン付き</div>
          <div style={mockCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <AvatarSmall letter="鈴" />
              <div style={{ minWidth: 0, flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3f3f46"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span
                    style={{
                      ...nameDisplay,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    鈴木 一郎
                  </span>
                </div>
                <div style={roleDisplay}>Designer</div>
              </div>
            </div>
          </div>
          <div style={cellSub}>アイコンと共存</div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
