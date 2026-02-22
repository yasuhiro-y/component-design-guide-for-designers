import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const lib = { fontSize: 11, color: "#a1a1aa", marginBottom: 4 } as const;
const name = {
  fontSize: 15,
  fontWeight: 500,
  color: "#18181b",
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
  marginBottom: 10,
} as const;
const showcase = {
  background: "#f4f4f5",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 14,
  display: "flex" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  minHeight: 200,
  position: "relative" as const,
};

function Btn({ children, variant = "secondary" }: { children: string; variant?: "primary" | "secondary" | "danger" }) {
  const bg = variant === "primary" ? "#18181b" : variant === "danger" ? "#ef4444" : "#f4f4f5";
  const fg = variant === "secondary" ? "#3f3f46" : "#fff";
  const border = variant === "secondary" ? "1px solid #e4e4e7" : "none";
  return (
    <button style={{ display: "inline-flex", padding: "6px 14px", borderRadius: 6, fontSize: 12, fontWeight: 500, background: bg, color: fg, border, fontFamily: '"Inter",sans-serif', cursor: "default" }}>
      {children}
    </button>
  );
}

function DialogMock({ title, desc, note, actions, showClose }: {
  title: string; desc: string; note: string; actions: React.ReactNode; showClose?: boolean;
}) {
  return (
    <div style={showcase}>
      <div style={{ position: "absolute", top: 8, right: 10, fontSize: 10, color: "#a1a1aa" }}>{note}</div>
      <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e4e4e7", padding: 20, width: "100%", maxWidth: 260, position: "relative", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
        {showClose && <span style={{ position: "absolute", top: 12, right: 14, color: "#a1a1aa", fontSize: 16 }}>×</span>}
        <div style={{ fontSize: 14, fontWeight: 600, color: "#18181b", marginBottom: 6 }}>{title}</div>
        <div style={{ fontSize: 12, color: "#71717a", lineHeight: 1.5, marginBottom: 16 }}>{desc}</div>
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>{actions}</div>
      </div>
    </div>
  );
}

export default function Fig11() {
  return (
    <IllustrationFrame title="Radix Dialog vs AlertDialog">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={lib}>Radix UI</div>
          <div style={name}>Dialog</div>
          <DialogMock
            title="プロフィール編集"
            desc="表示名とメールアドレスを変更できます。"
            note="背景クリックで閉じる"
            showClose
            actions={<><Btn>キャンセル</Btn><Btn variant="primary">保存</Btn></>}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div style={lib}>Radix UI</div>
          <div style={name}>AlertDialog</div>
          <DialogMock
            title="本当に削除しますか？"
            desc="この操作は取り消せません。すべてのデータが永久に削除されます。"
            note="閉じられない"
            actions={<><Btn>キャンセル</Btn><Btn variant="danger">削除する</Btn></>}
          />
        </div>
      </div>
      <Caption text="Radix UI: Dialog と AlertDialog の違い" />
    </IllustrationFrame>
  );
}
