import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const text = "#18181b";
const secondary = "#3f3f46";
const tertiary = "#52525b";
const border = "#e4e4e7";
const mono = '"SF Mono", Menlo, monospace';

interface MarkerProps {
  label: string;
  position: number; // 0–100
  accent?: boolean;
}

function Marker({ label, position, accent }: MarkerProps) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${position}%`,
        top: 1,
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <div
        style={{
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: accent ? text : "#fff",
          border: `2px solid ${text}`,
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      />
      <div
        style={{
          fontFamily: mono,
          fontSize: 10,
          fontWeight: 600,
          color: accent ? text : secondary,
          whiteSpace: "nowrap",
          background: "#fff",
          padding: "1px 5px",
          borderRadius: 4,
          border: `1px solid ${border}`,
        }}
      >
        {label}
      </div>
    </div>
  );
}

interface MiniSpectrumProps {
  label: string;
  leftLabel: string;
  rightLabel: string;
  position: number; // 0–100
}

function MiniSpectrum({ label, leftLabel, rightLabel, position }: MiniSpectrumProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 130, fontSize: 11, fontWeight: 600, color: text, flexShrink: 0 }}>
        {label}
      </div>
      <div style={{ flex: 1, position: "relative", height: 8, display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "100%",
            height: 4,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${border} 0%, #d4d4d8 100%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: `${position}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: text,
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: 180, flexShrink: 0 }}>
        <span style={{ fontSize: 10, color: tertiary }}>{leftLabel}</span>
        <span style={{ fontSize: 10, color: tertiary }}>{rightLabel}</span>
      </div>
    </div>
  );
}

export default function Fig79() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* Main spectrum bar */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 28px 20px",
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: text }}>一般化</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: text }}>個別化</div>
          </div>
          <div style={{ position: "relative", height: 14, marginBottom: 40 }}>
            <div
              style={{
                width: "100%",
                height: 8,
                borderRadius: 4,
                background: `linear-gradient(90deg, #e4e4e7 0%, #a1a1aa 50%, #52525b 100%)`,
                position: "absolute",
                top: 3,
              }}
            />
            <Marker label="Button" position={10} accent />
            <Marker label="PrimaryButton" position={38} />
            <Marker label="SubmitButton" position={65} />
            <Marker label="ShiftApplyButton" position={92} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 10,
              color: tertiary,
              borderTop: `1px solid ${border}`,
              paddingTop: 10,
            }}
          >
            <span>どこでも使える、どこにも最適ではない</span>
            <span>特定文脈に最適、他では使えない</span>
          </div>
        </div>

        {/* Mini spectrums */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "16px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, color: tertiary, letterSpacing: "0.04em", marginBottom: 2 }}>
            判断軸ごとのスペクトラム
          </div>
          <MiniSpectrum
            label="コンポーネント粒度"
            leftLabel="汎用"
            rightLabel="ドメイン固有"
            position={35}
          />
          <MiniSpectrum
            label="プロパティの型"
            leftLabel="Enum（限定）"
            rightLabel="String（自由）"
            position={30}
          />
          <MiniSpectrum
            label="共通化タイミング"
            leftLabel="早期にまとめる"
            rightLabel="個別のまま育てる"
            position={55}
          />
          <MiniSpectrum
            label="柔軟性設計"
            leftLabel="設定値で制御"
            rightLabel="差し込み口で委ねる"
            position={60}
          />
          <div
            style={{
              marginTop: 4,
              paddingTop: 10,
              borderTop: `1px solid ${border}`,
              fontSize: 10,
              color: tertiary,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            立ち上げ期は個別化寄りで素早く → パターンが見えたら一般化 → 成熟期は基盤を維持しつつドメイン固有で吸収
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
