import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";

const colLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: secondary,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  marginBottom: 12,
};

export default function Fig72() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        {/* ── Left: Drawing approach ── */}
        <div style={{ flex: 1 }}>
          <div style={colLabel}>絵を描く</div>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 20,
              height: 180,
              position: "relative",
            }}
          >
            {/* Scattered UI elements - messy, different sizes, freely placed */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                width: 80,
                height: 28,
                borderRadius: 8,
                background: "#3b82f6",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 60,
                left: 50,
                width: 100,
                height: 12,
                borderRadius: 6,
                background: "#e4e4e7",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 90,
                left: 30,
                width: 90,
                height: 30,
                borderRadius: 8,
                background: "#2563eb",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 130,
                right: 30,
                width: 70,
                height: 28,
                borderRadius: 12,
                background: "#60a5fa",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 30,
                right: 40,
                width: 60,
                height: 60,
                borderRadius: "50%",
                background: "#f4f4f5",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                width: 120,
                height: 10,
                borderRadius: 6,
                background: "#e4e4e7",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 11,
              color: tertiary,
              marginTop: 8,
              lineHeight: 1.6,
            }}
          >
            画面ごとに最終形を描く
          </div>
        </div>

        {/* ── Right: Building approach ── */}
        <div style={{ flex: 1 }}>
          <div style={colLabel}>建築する</div>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 20,
              height: 180,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            {/* Systematic building blocks */}
            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-end",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 28,
                  borderRadius: 8,
                  background: text,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{ fontSize: 10, color: "#fff", fontWeight: 700 }}
                >
                  Button
                </span>
              </div>
              <div
                style={{
                  width: 50,
                  height: 28,
                  borderRadius: 8,
                  background: text,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{ fontSize: 10, color: "#fff", fontWeight: 700 }}
                >
                  Input
                </span>
              </div>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: text,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{ fontSize: 8, color: "#fff", fontWeight: 700 }}
                >
                  Av
                </span>
              </div>
            </div>

            {/* Connecting lines */}
            <svg width="120" height="16" viewBox="0 0 120 16">
              <line
                x1="30"
                y1="0"
                x2="60"
                y2="14"
                stroke="#d4d4d8"
                strokeWidth="1"
              />
              <line
                x1="60"
                y1="0"
                x2="60"
                y2="14"
                stroke="#d4d4d8"
                strokeWidth="1"
              />
              <line
                x1="90"
                y1="0"
                x2="60"
                y2="14"
                stroke="#d4d4d8"
                strokeWidth="1"
              />
            </svg>

            {/* Composed component */}
            <div
              style={{
                width: 160,
                height: 50,
                borderRadius: 12,
                background: "#f4f4f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{ fontSize: 11, fontWeight: 700, color: secondary }}
              >
                UserCard
              </span>
            </div>
          </div>
          <div
            style={{
              fontSize: 11,
              color: tertiary,
              marginTop: 8,
              lineHeight: 1.6,
            }}
          >
            部品を設計し、組み合わせて画面を作る
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
