import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const colLabel = { fontSize: 11, fontWeight: 500, color: "#71717a", letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: 8 };
const mono = { fontFamily: '"SF Mono", Menlo, monospace' as const };

function ChangeRow({ label, code, status }: { label: string; code: string; status: "safe" | "breaking" }) {
  const isSafe = status === "safe";
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, padding: "8px 10px",
      background: isSafe ? "#f0fdf4" : "#fef2f2",
      borderRadius: 6, border: `1px solid ${isSafe ? "#d1fae5" : "#fecaca"}`,
      marginBottom: 6,
    }}>
      <span style={{
        width: 20, height: 20, borderRadius: "50%", fontSize: 12, fontWeight: 600,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        background: isSafe ? "#dcfce7" : "#fee2e2",
        color: isSafe ? "#059669" : "#dc2626",
        flexShrink: 0,
      }}>
        {isSafe ? "+" : "!"}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: "#3f3f46" }}>{label}</div>
        <div style={{ fontSize: 10, color: "#71717a", ...mono }}>{code}</div>
      </div>
    </div>
  );
}

export default function Fig27() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={colLabel}>安全な変更</div>
          <ChangeRow label="新しいバリアントの追加" code='variant に "warning" を追加' status="safe" />
          <ChangeRow label="任意プロパティの追加" code="subtitle?: string を追加" status="safe" />
          <ChangeRow label="Enumの選択肢を追加" code='size に "XL" を追加' status="safe" />
          <div style={{ fontSize: 10, color: "#059669", marginTop: 6, lineHeight: 1.5 }}>
            既存のコードに影響しない。いつでも実施できる。
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={colLabel}>破壊的変更</div>
          <ChangeRow label="プロパティ名の変更" code="color → variant にリネーム" status="breaking" />
          <ChangeRow label="Enumの選択肢を削除" code='"outlined" を削除' status="breaking" />
          <ChangeRow label="必須プロパティの追加" code="label: string を新たに必須化" status="breaking" />
          <div style={{ fontSize: 10, color: "#dc2626", marginTop: 6, lineHeight: 1.5 }}>
            既存のコードがエラーになる。移行計画が必要。
          </div>
        </div>
      </div>
      <Caption text="安全な変更と破壊的変更: 増やすのは簡単、変えるのは大変" />
    </IllustrationFrame>
  );
}
