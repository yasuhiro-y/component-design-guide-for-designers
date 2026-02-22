import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 12,
};

const card: CSSProperties = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 16,
};

const bubble: CSSProperties = {
  background: "#f4f4f5",
  borderRadius: "12px 12px 12px 2px",
  padding: "10px 14px",
  fontSize: 12,
  color: "#18181b",
  maxWidth: 180,
  lineHeight: 1.5,
};

const tag = (type: "generic" | "domain"): CSSProperties => ({
  display: "inline-block",
  fontSize: 11,
  fontWeight: 600,
  color: type === "generic" ? "#3b82f6" : "#f59e0b",
  background: type === "generic" ? "#eff6ff" : "#fffbeb",
  border: `1px solid ${type === "generic" ? "#bfdbfe" : "#fde68a"}`,
  borderRadius: 4,
  padding: "2px 8px",
  marginBottom: 8,
});

const listItem: CSSProperties = {
  fontSize: 11,
  color: "#52525b",
  padding: "3px 0",
  display: "flex",
  alignItems: "center",
  gap: 6,
};

const dot = (c: string): CSSProperties => ({
  width: 5,
  height: 5,
  borderRadius: "50%",
  background: c,
  flexShrink: 0,
});

const noteStyle: CSSProperties = {
  fontSize: 11,
  color: "#71717a",
  textAlign: "center",
  marginTop: 16,
  padding: "8px 16px",
  background: "#fff",
  borderRadius: 6,
  border: "1px dashed #d4d4d8",
};

export default function Fig32() {
  return (
    <IllustrationFrame title="汎用かドメインか: 視点で答えが変わる">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        {/* Left: Logic perspective */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>ロジックの観点</div>
          <div style={card}>
            <div style={{ marginBottom: 12 }}>
              <div style={bubble}>こんにちは、お元気ですか?</div>
            </div>
            <div>
              <span style={tag("generic")}>汎用</span>
            </div>
            <div style={listItem}>
              <span style={dot("#3b82f6")} />
              テキストを表示するだけ
            </div>
            <div style={listItem}>
              <span style={dot("#3b82f6")} />
              どのサービスでも使える
            </div>
            <div style={listItem}>
              <span style={dot("#3b82f6")} />
              データ構造に依存しない
            </div>
          </div>
        </div>

        {/* Center arrow */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 18, color: "#d4d4d8", flexShrink: 0, paddingTop: 30 }}>
          vs
        </div>

        {/* Right: Data perspective */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>データの観点</div>
          <div style={card}>
            <div style={{ marginBottom: 12, position: "relative" }}>
              <div style={bubble}>こんにちは、お元気ですか?</div>
              <div style={{ fontSize: 10, color: "#a1a1aa", marginTop: 4, display: "flex", gap: 8 }}>
                <span>田中 14:32</span>
                <span style={{ color: "#3b82f6" }}>既読</span>
              </div>
            </div>
            <div>
              <span style={tag("domain")}>ドメイン</span>
            </div>
            <div style={listItem}>
              <span style={dot("#f59e0b")} />
              送信者の情報が必要
            </div>
            <div style={listItem}>
              <span style={dot("#f59e0b")} />
              タイムスタンプに依存
            </div>
            <div style={listItem}>
              <span style={dot("#f59e0b")} />
              既読状態を管理する
            </div>
          </div>
        </div>
      </div>

      <div style={noteStyle}>
        答えが一意に決まらないケースがある
      </div>

      <Caption text="汎用かドメインか: 同じコンポーネントでも視点で答えが変わる" />
    </IllustrationFrame>
  );
}
