import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 6,
};

const colSub: CSSProperties = {
  fontSize: 10,
  color: "#52525b",
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
  fontSize: 11,
  fontWeight: 600,
  color: type === "generic" ? "#2563eb" : "#d97706",
  letterSpacing: "0.02em",
});

const propsBox: CSSProperties = {
  background: "#fafafa",
  borderRadius: 6,
  border: "1px solid #e4e4e7",
  padding: "8px 10px",
  marginTop: 12,
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 11,
  lineHeight: 1.6,
  color: "#3f3f46",
};

const propKey: CSSProperties = {
  color: "#3f3f46",
};

const propType: CSSProperties = {
  color: "#18181b",
  fontWeight: 500,
};

const checkItem: CSSProperties = {
  fontSize: 11,
  color: "#52525b",
  padding: "3px 0",
  display: "flex",
  alignItems: "center",
  gap: 6,
};

const noteStyle: CSSProperties = {
  fontSize: 11,
  color: "#3f3f46",
  textAlign: "center",
  marginTop: 16,
  padding: "8px 16px",
  background: "#fff",
  borderRadius: 6,
  border: "1px dashed #d4d4d8",
};

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <polyline
        points="2,6 5,9 10,3"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Fig32() {
  return (
    <IllustrationFrame title="汎用かドメインか: 視点で答えが変わる">
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        {/* Left: Generic — service-agnostic */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={tag("generic")}>汎用</span>
            <span style={colTitle}>Bubble</span>
          </div>
          <div style={colSub}>どのサービスでも使える</div>
          <div style={card}>
            {/* Rendered bubble — generic */}
            <div style={{ marginBottom: 12 }}>
              <div style={bubble}>こんにちは、お元気ですか?</div>
            </div>

            {/* Props interface */}
            <div style={propsBox}>
              <div>
                <span style={propKey}>text: </span>
                <span style={propType}>string</span>
              </div>
              <div>
                <span style={propKey}>direction: </span>
                <span style={propType}>&apos;left&apos; | &apos;right&apos;</span>
              </div>
            </div>

            {/* Characteristics */}
            <div style={{ marginTop: 12 }}>
              <div style={checkItem}>
                <CheckIcon color="#3b82f6" />
                特定のデータ構造に依存しない
              </div>
              <div style={checkItem}>
                <CheckIcon color="#3b82f6" />
                チャット以外のUIにも転用可能
              </div>
              <div style={checkItem}>
                <CheckIcon color="#3b82f6" />
                表示する中身は呼び出し側が決める
              </div>
            </div>
          </div>
        </div>

        {/* Center separator */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            paddingTop: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span style={{ fontSize: 10, color: "#52525b" }}>同じUI</span>
            <span style={{ fontSize: 10, color: "#52525b" }}>異なる設計</span>
          </div>
        </div>

        {/* Right: Domain — object-dependent */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={tag("domain")}>ドメイン</span>
            <span style={colTitle}>ChatBubble</span>
          </div>
          <div style={colSub}>特定のオブジェクトに依存する</div>
          <div style={card}>
            {/* Rendered bubble — domain */}
            <div style={{ marginBottom: 12 }}>
              <div style={bubble}>こんにちは、お元気ですか?</div>
              <div
                style={{
                  fontSize: 10,
                  color: "#52525b",
                  marginTop: 4,
                  display: "flex",
                  gap: 8,
                }}
              >
                <span>田中 14:32</span>
                <span style={{ color: "#3b82f6" }}>既読</span>
              </div>
            </div>

            {/* Props interface */}
            <div style={propsBox}>
              <div>
                <span style={propKey}>message: </span>
                <span style={propType}>Message</span>
              </div>
              <div style={{ paddingLeft: 12, fontSize: 10, color: "#52525b" }}>
                {"{ sender, text, timestamp, readStatus }"}
              </div>
            </div>

            {/* Characteristics */}
            <div style={{ marginTop: 12 }}>
              <div style={checkItem}>
                <CheckIcon color="#f59e0b" />
                Message オブジェクトに直接対応
              </div>
              <div style={checkItem}>
                <CheckIcon color="#f59e0b" />
                送信者・既読などチャット固有の概念
              </div>
              <div style={checkItem}>
                <CheckIcon color="#f59e0b" />
                このサービスのデータ構造に束縛される
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={noteStyle}>
        どちらが正解かは文脈次第。同じUIでも、再利用の範囲や依存するデータによって答えが変わる
      </div>

    </IllustrationFrame>
  );
}
