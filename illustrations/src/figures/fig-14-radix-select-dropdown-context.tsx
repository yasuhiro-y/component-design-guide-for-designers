import * as Select from "@radix-ui/react-select";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as ContextMenu from "@radix-ui/react-context-menu";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";
import "../styles/radix-common.css";

const lib = { fontSize: 11, color: "#a1a1aa", marginBottom: 4 } as const;
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
  padding: 16,
} as const;
const annotation = { fontSize: 11, color: "#71717a", marginTop: 10, textAlign: "center" as const };

export default function Fig14() {
  return (
    <IllustrationFrame title="Radix Select / DropdownMenu / ContextMenu">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        {/* Select */}
        <div style={{ flex: 1 }}>
          <div style={lib}>Radix UI</div>
          <div style={name}>Select</div>
          <div style={panel}>
            <Select.Root defaultValue="medium" open>
              <Select.Trigger className="radix-select-trigger">
                <Select.Value />
                <Select.Icon style={{ fontSize: 10, color: "#a1a1aa", marginLeft: 4 }}>▾</Select.Icon>
              </Select.Trigger>
              <Select.Portal container={null}>
                <Select.Content className="radix-select-content" position="popper" sideOffset={4}>
                  <Select.Viewport>
                    {["Small", "Medium", "Large"].map((v) => (
                      <Select.Item key={v} value={v.toLowerCase()} className="radix-select-item">
                        <Select.ItemText>{v}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div style={annotation}>値を選ぶ</div>
        </div>

        {/* DropdownMenu */}
        <div style={{ flex: 1 }}>
          <div style={lib}>Radix UI</div>
          <div style={name}>DropdownMenu</div>
          <div style={{ ...panel, minHeight: 200 }}>
            <DropdownMenu.Root open>
              <DropdownMenu.Trigger asChild>
                <button className="radix-select-trigger">
                  Actions <span style={{ fontSize: 10, color: "#a1a1aa", marginLeft: 4 }}>▾</span>
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal container={null}>
                <DropdownMenu.Content className="radix-select-content" sideOffset={4}>
                  {["Edit", "Duplicate", "Delete"].map((v) => (
                    <DropdownMenu.Item key={v} className="radix-select-item">
                      {v}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
          <div style={annotation}>アクションを実行</div>
        </div>

        {/* ContextMenu */}
        <div style={{ flex: 1 }}>
          <div style={lib}>Radix UI</div>
          <div style={name}>ContextMenu</div>
          <div style={panel}>
            <ContextMenu.Root>
              <ContextMenu.Trigger asChild>
                <div
                  style={{
                    padding: "6px 10px",
                    borderRadius: 6,
                    border: "1px dashed #d4d4d8",
                    background: "#fff",
                    fontSize: 12,
                    color: "#a1a1aa",
                    display: "inline-block",
                  }}
                >
                  右クリック
                </div>
              </ContextMenu.Trigger>
            </ContextMenu.Root>
            {/* Static menu preview since context menu needs right-click */}
            <div
              style={{
                background: "#fff",
                border: "1px solid #e4e4e7",
                borderRadius: 6,
                padding: 4,
                marginTop: 8,
              }}
            >
              {["Copy", "Paste", "Inspect"].map((v, i) => (
                <div
                  key={v}
                  style={{
                    padding: "6px 10px",
                    fontSize: 12,
                    color: "#3f3f46",
                    borderRadius: 4,
                    ...(i === 0 ? { background: "#f4f4f5" } : {}),
                  }}
                >
                  {v}
                </div>
              ))}
            </div>
          </div>
          <div style={annotation}>右クリックで開く</div>
        </div>
      </div>
      <Caption text="Radix UI: 見た目が似た3つのコンポーネント" />
    </IllustrationFrame>
  );
}
