import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const badTag: CSSProperties = {
  display: "inline-block",
  fontSize: 11,
  fontWeight: 600,
  color: "#ef4444",
  background: "#fef2f2",
  border: "1px solid #fecaca",
  borderRadius: 4,
  padding: "2px 8px",
  marginBottom: 10,
};

const goodTag: CSSProperties = {
  display: "inline-block",
  fontSize: 11,
  fontWeight: 600,
  color: "#22c55e",
  background: "#f0fdf4",
  border: "1px solid #bbf7d0",
  borderRadius: 4,
  padding: "2px 8px",
  marginBottom: 10,
};

const timeHeader: CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "#71717a",
  textAlign: "center",
  marginBottom: 6,
};

const nameChip = (isNew: boolean): CSSProperties => ({
  display: "inline-block",
  fontSize: 10,
  fontWeight: 500,
  fontFamily: '"SF Mono", Menlo, monospace',
  padding: "3px 8px",
  borderRadius: 4,
  background: isNew ? "#f4f4f5" : "#fff",
  border: `1px solid ${isNew ? "#d4d4d8" : "#e4e4e7"}`,
  color: "#18181b",
  marginBottom: 3,
  marginRight: 3,
});

const cellStyle: CSSProperties = {
  flex: 1,
  minWidth: 0,
  padding: "8px 6px",
};

const chaosNames = [
  { step: 0, names: ["primary", "secondary"] },
  { step: 1, names: ["primary", "secondary", "red-button"] },
  { step: 2, names: ["primary", "secondary", "red-button", "btn-light"] },
  {
    step: 3,
    names: ["primary", "secondary", "red-button", "btn-light", "outline-gray"],
  },
];

const cleanNames = [
  { step: 0, names: ["primary", "secondary"] },
  { step: 1, names: ["primary", "secondary", "destructive"] },
  { step: 2, names: ["primary", "secondary", "destructive", "ghost"] },
  { step: 3, names: ["primary", "secondary", "destructive", "ghost"] },
];

const timeLabels = ["初期", "1ヶ月後", "3ヶ月後", "6ヶ月後"];

function NamingRow({
  tag,
  tagStyle,
  data,
}: {
  tag: string;
  tagStyle: CSSProperties;
  data: { step: number; names: string[] }[];
}) {
  const initialNames = data[0].names;

  return (
    <div>
      <div>
        <span style={tagStyle}>{tag}</span>
      </div>
      <div
        style={{
          display: "flex",
          background: "#fff",
          borderRadius: 8,
          border: "1px solid #e4e4e7",
          overflow: "hidden",
        }}
      >
        {data.map((col, i) => (
          <div
            key={i}
            style={{
              ...cellStyle,
              borderRight: i < data.length - 1 ? "1px solid #f4f4f5" : "none",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {col.names.map((name) => (
                <span
                  key={name}
                  style={nameChip(!initialNames.includes(name) && i > 0)}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Fig41() {
  return (
    <IllustrationFrame title="命名の体系: ルールの有無が半年後の品質を決める">
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Time headers */}
        <div style={{ display: "flex", marginBottom: 4, paddingLeft: 0 }}>
          {timeLabels.map((label) => (
            <div key={label} style={{ flex: 1, minWidth: 0 }}>
              <div style={timeHeader}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <NamingRow
            tag="体系なし"
            tagStyle={badTag}
            data={chaosNames}
          />
          <NamingRow
            tag="体系あり"
            tagStyle={goodTag}
            data={cleanNames}
          />
        </div>

        {/* Result annotation */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 16,
            marginTop: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 10,
              color: "#ef4444",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: 2,
                background: "#fef2f2",
                border: "1px solid #fecaca",
              }}
            />
            規則なし = 命名が発散
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 10,
              color: "#22c55e",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: 2,
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
              }}
            />
            規則あり = 命名が一貫
          </div>
        </div>
      </div>
      <Caption text="命名の体系: ルールの有無が半年後の品質を決める" />
    </IllustrationFrame>
  );
}
