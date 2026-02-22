import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#3f3f46",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  marginBottom: 8,
};
const mono: CSSProperties = { fontFamily: '"SF Mono", Menlo, monospace' };

function ChangeRow({ label, code, icon }: { label: string; code: string; icon: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 10px",
        background: "#fff",
        borderRadius: 6,
        border: "1px solid #e4e4e7",
        marginBottom: 6,
      }}
    >
      <span
        style={{
          fontSize: 12,
          flexShrink: 0,
          width: 20,
          textAlign: "center",
        }}
      >
        {icon}
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: "#18181b", fontWeight: 500 }}>{label}</div>
        <div style={{ fontSize: 10, color: "#52525b", ...mono }}>{code}</div>
      </div>
    </div>
  );
}

export default function Fig27() {
  return (
    <IllustrationFrame title="安全な変更と破壊的変更">
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={colLabel}>安全な変更（増やす）</div>
          <ChangeRow icon="+" label="新しいバリアントの追加" code='variant に "warning" を追加' />
          <ChangeRow icon="+" label="任意プロパティの追加" code="subtitle?: string を追加" />
          <ChangeRow icon="+" label="Enumの選択肢を追加" code='size に "XL" を追加' />
          <div style={{ fontSize: 10, color: "#52525b", marginTop: 6, lineHeight: 1.5 }}>
            既存のコードに影響しない。いつでも実施できる。
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={colLabel}>破壊的変更（変える・消す）</div>
          <ChangeRow icon="!" label="プロパティ名の変更" code="color → variant にリネーム" />
          <ChangeRow icon="!" label="Enumの選択肢を削除" code='"outlined" を削除' />
          <ChangeRow icon="!" label="必須プロパティの追加" code="label: string を新たに必須化" />
          <div style={{ fontSize: 10, color: "#52525b", marginTop: 6, lineHeight: 1.5 }}>
            既存のコードがエラーになる。移行計画が必要。
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
