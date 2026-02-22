import * as Toggle from "@radix-ui/react-toggle";
import * as Switch from "@radix-ui/react-switch";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";
import "../styles/radix-common.css";

const lib = { fontSize: 11, color: "#52525b", marginBottom: 4 } as const;
const name = {
  fontSize: 15,
  fontWeight: 500,
  color: "#18181b",
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
  marginBottom: 10,
} as const;
const panel = {
  background: "#f4f4f5",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 14,
} as const;
const note = { fontSize: 11, color: "#3f3f46", marginTop: 14 } as const;

export default function Fig15() {
  return (
    <IllustrationFrame title="Radix Toggle vs Switch">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={lib}>Radix UI</div>
          <div style={name}>Toggle</div>
          <div style={panel}>
            <div style={{ display: "flex", gap: 4 }}>
              <Toggle.Root className="radix-toggle" defaultPressed aria-label="Bold">
                <span style={{ fontWeight: 700 }}>B</span>
              </Toggle.Root>
              <Toggle.Root className="radix-toggle" aria-label="Italic">
                <span style={{ fontStyle: "italic" }}>I</span>
              </Toggle.Root>
              <Toggle.Root className="radix-toggle" aria-label="Underline">
                <span style={{ textDecoration: "underline" }}>U</span>
              </Toggle.Root>
            </div>
            <div style={note}>ツールバーのON/OFF切り替えボタン</div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={lib}>Radix UI</div>
          <div style={name}>Switch</div>
          <div style={panel}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Switch.Root className="radix-switch" defaultChecked>
                  <Switch.Thumb className="radix-switch-thumb" />
                </Switch.Root>
                <span style={{ fontSize: 13, color: "#3f3f46" }}>メール通知</span>
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Switch.Root className="radix-switch">
                  <Switch.Thumb className="radix-switch-thumb" />
                </Switch.Root>
                <span style={{ fontSize: 13, color: "#3f3f46" }}>ダークモード</span>
              </label>
            </div>
            <div style={note}>設定のON/OFFスライダー</div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
