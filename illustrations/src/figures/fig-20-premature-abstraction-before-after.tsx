import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const beforeTag = { display: "inline-block" as const, fontSize: 11, fontWeight: 600, color: "#ef4444", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 4, padding: "2px 8px", marginBottom: 8 };
const afterTag = { display: "inline-block" as const, fontSize: 11, fontWeight: 600, color: "#22c55e", background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 4, padding: "2px 8px", marginBottom: 8 };
const cardTitle = { fontSize: 13, fontWeight: 600, color: "#18181b", fontFamily: '"SF Mono", Menlo, monospace', marginBottom: 6 };
const prop = { fontSize: 11, color: "#52525b", padding: "1px 0" as const, fontFamily: '"SF Mono", Menlo, monospace' };
const propGray = { ...prop, color: "#a1a1aa" };

function MiniCard({ title, subtitle, hasLike, badge }: { title: string; subtitle: string; hasLike?: boolean; badge?: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #e4e4e7", padding: 10, position: "relative" as const }}>
      {badge && (
        <span style={{ position: "absolute", top: 6, right: 6, fontSize: 9, fontWeight: 500, background: "#18181b", color: "#fff", padding: "1px 5px", borderRadius: 3 }}>{badge}</span>
      )}
      <div style={{ width: "100%", height: 36, borderRadius: 4, background: "#e4e4e7", marginBottom: 6 }} />
      <div style={{ fontSize: 11, fontWeight: 600, color: "#18181b" }}>{title}</div>
      <div style={{ fontSize: 10, color: "#71717a", marginTop: 1 }}>{subtitle}</div>
      {hasLike && <div style={{ marginTop: 4, fontSize: 12, color: "#a1a1aa" }}>&#9825;</div>}
    </div>
  );
}

export default function Fig20() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        {/* Before */}
        <div style={{ flex: 1 }}>
          <div><span style={beforeTag}>Before</span></div>
          <div style={cardTitle}>Card</div>
          <div style={prop}>title: string</div>
          <div style={prop}>image: string</div>
          <div style={prop}>description: string</div>
          <div style={propGray}>hasLikeButton: boolean</div>
          <div style={propGray}>isSwipeable: boolean</div>
          <div style={propGray}>showBadge: boolean</div>
          <div style={propGray}>badgeText: string</div>
          <div style={propGray}>onSwipe: function</div>
          <div style={{ fontSize: 10, color: "#71717a", marginTop: 8 }}>
            無関係なプロパティが混在
          </div>
          <div style={{ marginTop: 10 }}>
            <MiniCard title="商品名" subtitle="¥1,200" hasLike badge="NEW" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 14, color: "#a1a1aa" }}>→</div>

        {/* After */}
        <div style={{ flex: 1 }}>
          <div><span style={afterTag}>After</span></div>
          <div style={{ marginBottom: 12 }}>
            <div style={cardTitle}>ProductCard</div>
            <div style={prop}>title: string</div>
            <div style={prop}>image: string</div>
            <div style={prop}>description: string</div>
            <div style={prop}>hasLikeButton: boolean</div>
          </div>
          <div style={{ borderTop: "1px solid #e4e4e7", paddingTop: 12 }}>
            <div style={cardTitle}>SwipeableCard</div>
            <div style={prop}>title: string</div>
            <div style={prop}>image: string</div>
            <div style={prop}>isSwipeable: boolean</div>
            <div style={prop}>onSwipe: function</div>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
            <div style={{ flex: 1 }}><MiniCard title="商品名" subtitle="¥1,200" hasLike /></div>
            <div style={{ flex: 1 }}><MiniCard title="おすすめ" subtitle="スワイプ →" /></div>
          </div>
        </div>
      </div>
      <Caption text="早すぎる共通化の罠: プロパティ肥大化" />
    </IllustrationFrame>
  );
}
