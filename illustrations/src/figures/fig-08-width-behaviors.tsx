import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const label: CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
  color: "#18181b",
  marginBottom: 2,
};

const desc: CSSProperties = {
  fontSize: 11,
  color: "#3f3f46",
  marginBottom: 10,
};

export default function Fig08() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={label}>Fill</div>
          <div style={desc}>親の幅いっぱいに広がる</div>
          <input
            style={{
              width: "100%",
              padding: "7px 10px",
              borderRadius: 8,
              border: "1px solid #d4d4d8",
              fontSize: 13,
              fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
              background: "#fff",
              outline: "none",
              boxSizing: "border-box",
            }}
            defaultValue="テキスト入力"
            readOnly
          />
          <div style={{ fontSize: 11, color: "#52525b", textAlign: "center", marginTop: 6 }}>
            width: 100%
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={label}>Hug</div>
          <div style={desc}>中身に合わせて縮む</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div>
              <button
                style={{
                  display: "inline-flex",
                  padding: "7px 14px",
                  borderRadius: 8,
                  border: "1px solid #d4d4d8",
                  background: "#fff",
                  fontSize: 13,
                  fontWeight: 400,
                  cursor: "default",
                  fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
                  color: "#18181b",
                }}
              >
                保存
              </button>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              {["React", "Design"].map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "3px 10px",
                    borderRadius: 999,
                    border: "1px solid #e4e4e7",
                    background: "#fff",
                    fontSize: 11,
                    fontWeight: 400,
                    color: "#3f3f46",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <div style={label}>Fixed</div>
          <div style={desc}>固定サイズ</div>
          <div style={{ display: "flex", gap: 8 }}>
            {["TK", "KS"].map((n) => (
              <span
                key={n}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid #e4e4e7",
                  background: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#3f3f46",
                }}
              >
                {n}
              </span>
            ))}
          </div>
          <div style={{ fontSize: 11, color: "#52525b", marginTop: 6 }}>36x36px 固定</div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
