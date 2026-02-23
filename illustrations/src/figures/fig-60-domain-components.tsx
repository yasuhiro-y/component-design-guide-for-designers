import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/**
 * ドメインコンポーネントの一覧。
 * 特定のサービス・データ構造に紐づいた専用コンポーネントを並べて見せる。
 */

const card = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  overflow: "hidden" as const,
  flex: 1,
  minWidth: 0,
} as const;

const cardHeader = {
  padding: "8px 12px",
  background: "#fafafa",
  borderBottom: "1px solid #e4e4e7",
  fontSize: 12,
  fontWeight: 600,
  color: "#18181b",
  letterSpacing: "-0.01em",
} as const;

const cardBody = {
  padding: 12,
  display: "flex",
  flexDirection: "column" as const,
  gap: 6,
} as const;

const field = {
  display: "flex",
  alignItems: "center" as const,
  gap: 6,
  fontSize: 11,
} as const;

const fieldLabel = {
  color: "#52525b",
  fontWeight: 500,
  minWidth: 42,
} as const;

const fieldValue = {
  color: "#18181b",
} as const;

const tag = (bg: string) =>
  ({
    padding: "1px 6px",
    borderRadius: 3,
    background: bg,
    fontSize: 10,
    fontWeight: 500,
    color: "#3f3f46",
  }) as const;

function MiniAvatar({ text }: { text: string }) {
  return (
    <div
      style={{
        width: 24,
        height: 24,
        borderRadius: "50%",
        background: "#e4e4e7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        fontWeight: 600,
        color: "#3f3f46",
        flexShrink: 0,
      }}
    >
      {text}
    </div>
  );
}

function ImagePlaceholder({ h = 48 }: { h?: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: h,
        borderRadius: 4,
        background: "#f4f4f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        color: "#a1a1aa",
      }}
    >
      img
    </div>
  );
}

export default function Fig60() {
  return (
    <IllustrationFrame title="ドメインコンポーネントの例: 特定のデータ構造に特化した部品">
      <div style={{ display: "flex", gap: 12, width: CONTENT_WIDTH }}>
        {/* ProductCard */}
        <div style={card}>
          <div style={cardHeader}>ProductCard</div>
          <div style={cardBody}>
            <ImagePlaceholder h={52} />
            <div style={field}>
              <span style={fieldLabel}>商品名</span>
              <span style={fieldValue}>ワイヤレスイヤホン</span>
            </div>
            <div style={field}>
              <span style={fieldLabel}>価格</span>
              <span style={{ ...fieldValue, fontWeight: 600 }}>¥4,980</span>
            </div>
            <div style={field}>
              <span style={fieldLabel}>状態</span>
              <span style={tag("#f0fdf4")}>在庫あり</span>
            </div>
          </div>
        </div>

        {/* CartItem */}
        <div style={card}>
          <div style={cardHeader}>CartItem</div>
          <div style={cardBody}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 4,
                  background: "#f4f4f5",
                  flexShrink: 0,
                }}
              />
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, color: "#18181b" }}>USB-Cケーブル</div>
                <div style={{ fontSize: 10, color: "#52525b" }}>¥980 × 2</div>
              </div>
            </div>
            <div
              style={{
                borderTop: "1px solid #f4f4f5",
                paddingTop: 6,
                fontSize: 11,
                fontWeight: 600,
                textAlign: "right",
                color: "#18181b",
              }}
            >
              ¥1,960
            </div>
          </div>
        </div>

        {/* ShiftCard */}
        <div style={card}>
          <div style={cardHeader}>ShiftCard</div>
          <div style={cardBody}>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <MiniAvatar text="田" />
              <div>
                <div style={{ fontSize: 11, fontWeight: 500, color: "#18181b" }}>田中太郎</div>
                <div style={{ fontSize: 10, color: "#52525b" }}>フロント担当</div>
              </div>
            </div>
            <div style={field}>
              <span style={fieldLabel}>日時</span>
              <span style={fieldValue}>3/1 09:00–18:00</span>
            </div>
            <div style={field}>
              <span style={fieldLabel}>種別</span>
              <span style={tag("#eff6ff")}>早番</span>
            </div>
          </div>
        </div>

        {/* OrderListItem */}
        <div style={card}>
          <div style={cardHeader}>OrderListItem</div>
          <div style={cardBody}>
            <div style={field}>
              <span style={fieldLabel}>注文ID</span>
              <span style={{ ...fieldValue, fontFamily: "monospace", fontSize: 10 }}>#A-2847</span>
            </div>
            <div style={field}>
              <span style={fieldLabel}>顧客</span>
              <span style={fieldValue}>佐藤花子</span>
            </div>
            <div style={field}>
              <span style={fieldLabel}>合計</span>
              <span style={{ ...fieldValue, fontWeight: 600 }}>¥12,400</span>
            </div>
            <div style={field}>
              <span style={fieldLabel}>状態</span>
              <span style={tag("#fffbeb")}>発送準備中</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ fontSize: 11, color: "#52525b", marginTop: 14, textAlign: "center" }}>
        特定のデータ構造（商品・カート・シフト・注文）に依存する。別のサービスではそのまま使えない
      </div>
    </IllustrationFrame>
  );
}
