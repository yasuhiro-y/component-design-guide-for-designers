import {
  Search, Home, User, Settings, Mail, Trash2,
  Heart, Bell, Calendar, Download, Eye, Star,
} from "lucide-react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const colLabel = { fontSize: 11, fontWeight: 500, color: "#71717a", letterSpacing: "0.04em", textTransform: "uppercase" as const, marginBottom: 8 };
const iconBox = { width: 36, height: 36, borderRadius: 6, background: "#fff", border: "1px solid #e4e4e7", display: "flex" as const, alignItems: "center" as const, justifyContent: "center" as const };
const note = { fontSize: 11, color: "#71717a", marginTop: 12, lineHeight: 1.6 } as const;

const lucideIcons = [
  { Icon: Search, name: "Search" },
  { Icon: Home, name: "Home" },
  { Icon: User, name: "User" },
  { Icon: Settings, name: "Settings" },
  { Icon: Mail, name: "Mail" },
  { Icon: Trash2, name: "Trash" },
  { Icon: Heart, name: "Heart" },
  { Icon: Bell, name: "Bell" },
  { Icon: Calendar, name: "Calendar" },
  { Icon: Download, name: "Download" },
  { Icon: Eye, name: "Eye" },
  { Icon: Star, name: "Star" },
];

export default function Fig21() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        <div style={{ flex: 1 }}>
          <div style={colLabel}>既存ライブラリ（Lucide）</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
            {lucideIcons.map(({ Icon, name }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={iconBox}>
                  <Icon size={16} color="#3f3f46" strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: 8, color: "#a1a1aa" }}>{name}</span>
              </div>
            ))}
          </div>
          <div style={note}>
            <span style={{ fontWeight: 600, color: "#3f3f46" }}>導入コストほぼゼロ。</span>一貫性が担保される。反面ブランドの独自性は薄れがち。
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={colLabel}>独自アイコン</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6 }}>
            {lucideIcons.map(({ name }) => (
              <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
                <div style={{ ...iconBox, borderStyle: "dashed" as const }}>
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <rect x="2" y="2" width="12" height="12" rx="2" fill="none" stroke="#a1a1aa" strokeWidth="1" strokeDasharray="2 2" />
                    <text x="8" y="10" textAnchor="middle" fontSize="6" fill="#a1a1aa">?</text>
                  </svg>
                </div>
                <span style={{ fontSize: 8, color: "#a1a1aa" }}>{name}</span>
              </div>
            ))}
          </div>
          <div style={note}>
            <span style={{ fontWeight: 600, color: "#3f3f46" }}>ブランドの世界観を細部まで表現。</span>制作・メンテナンスコストは大きい。
          </div>
          <div style={{ fontSize: 10, color: "#a1a1aa", marginTop: 8, lineHeight: 1.5 }}>
            実例: <span style={{ color: "#52525b" }}>GitHub Octicons</span> / <span style={{ color: "#52525b" }}>Shopify Polaris</span> / <span style={{ color: "#52525b" }}>IBM Carbon</span>
          </div>
        </div>
      </div>
      <Caption text="既存ライブラリ vs 独自アイコン" />
    </IllustrationFrame>
  );
}
