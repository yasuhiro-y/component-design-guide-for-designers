import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const row: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 16,
  padding: "12px 0",
  borderBottom: "1px solid #f4f4f5",
};
const typeName: CSSProperties = {
  fontSize: 13,
  fontWeight: 700,
  color: "#18181b",
  width: 80,
  flexShrink: 0,
};
const figmaLabel: CSSProperties = {
  fontSize: 12,
  color: "#3f3f46",
  width: 130,
  flexShrink: 0,
};

function Toggle({ on }: { on?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        width: 32,
        height: 18,
        borderRadius: 9,
        background: on ? "#18181b" : "#d4d4d8",
        padding: 2,
        alignItems: "center",
        justifyContent: on ? "flex-end" : "flex-start",
      }}
    >
      <span style={{ width: 14, height: 14, borderRadius: 7, background: "#fff" }} />
    </span>
  );
}

function Dropdown({ value }: { value: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 10px",
        borderRadius: 12,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 12,
        color: "#3f3f46",
      }}
    >
      {value}
      <span style={{ fontSize: 10, color: "#52525b" }}>▾</span>
    </span>
  );
}

function TextInput({ value }: { value: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        padding: "4px 10px",
        borderRadius: 12,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 12,
        color: "#3f3f46",
        minWidth: 100,
      }}
    >
      {value}
    </span>
  );
}

function NumberInput({ value }: { value: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: 12,
        border: "1px solid #d4d4d8",
        background: "#fff",
        fontSize: 12,
        color: "#3f3f46",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {value}
    </span>
  );
}

export default function Fig17() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        <div style={row}>
          <div style={typeName}>Boolean</div>
          <div style={figmaLabel}>トグルスイッチ</div>
          <Toggle on />
          <span style={{ fontSize: 11, color: "#52525b" }}>→</span>
          <code style={{ fontSize: 12, color: "#3f3f46", fontFamily: '"SF Mono", Menlo, monospace' }}>
            isDisabled: boolean
          </code>
        </div>
        <div style={row}>
          <div style={typeName}>Enum</div>
          <div style={figmaLabel}>ドロップダウン</div>
          <Dropdown value="medium" />
          <span style={{ fontSize: 11, color: "#52525b" }}>→</span>
          <code style={{ fontSize: 12, color: "#3f3f46", fontFamily: '"SF Mono", Menlo, monospace' }}>
            {"size: 's' | 'm' | 'l'"}
          </code>
        </div>
        <div style={row}>
          <div style={typeName}>String</div>
          <div style={figmaLabel}>テキスト入力</div>
          <TextInput value="保存する" />
          <span style={{ fontSize: 11, color: "#52525b" }}>→</span>
          <code style={{ fontSize: 12, color: "#3f3f46", fontFamily: '"SF Mono", Menlo, monospace' }}>
            label: string
          </code>
        </div>
        <div style={{ ...row, borderBottom: "none" }}>
          <div style={typeName}>Number</div>
          <div style={figmaLabel}>数値入力</div>
          <NumberInput value={24} />
          <span style={{ fontSize: 11, color: "#52525b" }}>→</span>
          <code style={{ fontSize: 12, color: "#3f3f46", fontFamily: '"SF Mono", Menlo, monospace' }}>
            maxLength: number
          </code>
        </div>
      </div>
    </IllustrationFrame>
  );
}
