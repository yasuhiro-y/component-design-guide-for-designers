import * as Toggle from "@radix-ui/react-toggle";
import * as Switch from "@radix-ui/react-switch";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";
import "../styles/radix-common.css";

const badTag = { display: "inline-block" as const, fontSize: 11, fontWeight: 600, color: "#ef4444", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 4, padding: "2px 8px", marginBottom: 8 };
const goodTag = { display: "inline-block" as const, fontSize: 11, fontWeight: 600, color: "#22c55e", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 4, padding: "2px 8px", marginBottom: 8 };
const propLine = { fontSize: 11, color: "#a1a1aa", fontFamily: '"SF Mono", Menlo, monospace', marginTop: 4 } as const;
const compTitle = { fontSize: 13, fontWeight: 600, color: "#18181b", fontFamily: '"SF Mono", Menlo, monospace', marginBottom: 8 };

export default function Fig05() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 20, width: CONTENT_WIDTH }}>
        {/* Bad */}
        <div style={{ flex: 1 }}>
          <div><span style={badTag}>Bad</span></div>
          <div style={compTitle}>ToggleSwitch</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Toggle.Root className="radix-toggle" defaultPressed>
                <span style={{ fontWeight: 700 }}>B</span>
              </Toggle.Root>
              <span style={{ fontSize: 12, color: "#52525b" }}>太字</span>
            </div>
            <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Switch.Root className="radix-switch" defaultChecked>
                <Switch.Thumb className="radix-switch-thumb" />
              </Switch.Root>
              <span style={{ fontSize: 12, color: "#52525b" }}>通知</span>
            </label>
          </div>
          <div style={propLine}>isFormField: boolean</div>
          <div style={{ fontSize: 11, color: "#71717a", marginTop: 8 }}>
            UI操作とデータ設定が1つに混在
          </div>
        </div>

        {/* Good */}
        <div style={{ flex: 1 }}>
          <div><span style={goodTag}>Good</span></div>
          <div style={compTitle}>Toggle</div>
          <div style={{ display: "flex", gap: 4 }}>
            <Toggle.Root className="radix-toggle" defaultPressed>
              <span style={{ fontWeight: 700 }}>B</span>
            </Toggle.Root>
            <Toggle.Root className="radix-toggle">
              <span style={{ fontStyle: "italic" }}>I</span>
            </Toggle.Root>
            <Toggle.Root className="radix-toggle">
              <span style={{ textDecoration: "underline" }}>U</span>
            </Toggle.Root>
          </div>
          <div style={{ fontSize: 11, color: "#71717a", marginTop: 6 }}>UI上のON/OFF操作</div>

          <div style={{ borderTop: "1px solid #e4e4e7", margin: "12px 0" }} />

          <div style={compTitle}>Switch</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Switch.Root className="radix-switch" defaultChecked>
                <Switch.Thumb className="radix-switch-thumb" />
              </Switch.Root>
              <span style={{ fontSize: 12, color: "#52525b" }}>メール通知</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Switch.Root className="radix-switch">
                <Switch.Thumb className="radix-switch-thumb" />
              </Switch.Root>
              <span style={{ fontSize: 12, color: "#52525b" }}>ダークモード</span>
            </label>
          </div>
          <div style={{ fontSize: 11, color: "#71717a", marginTop: 6 }}>データの真偽値を設定</div>
        </div>
      </div>
      <Caption text="プロパティの直交性: まとめた場合 vs 分けた場合" />
    </IllustrationFrame>
  );
}
