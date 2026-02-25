import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const beforeLabel = {
  fontSize: 11,
  fontWeight: 700,
  color: "#b91c1c",
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  marginBottom: 10,
};
const afterLabel = {
  fontSize: 11,
  fontWeight: 700,
  color: "#15803d",
  letterSpacing: "0.04em",
  textTransform: "uppercase" as const,
  marginBottom: 10,
};
const cardTitle = { fontSize: 13, fontWeight: 700, color: "#18181b", fontFamily: '"SF Mono", Menlo, monospace', marginBottom: 6 };
const prop = { fontSize: 11, color: "#52525b", padding: "1px 0" as const, fontFamily: '"SF Mono", Menlo, monospace' };
const propGray = { ...prop, color: "#52525b" };

function MiniCard({ title, subtitle, hasLike, badge, image }: { title: string; subtitle: string; hasLike?: boolean; badge?: string; image?: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e4e4e7", padding: 10, position: "relative" as const }}>
      {badge && (
        <span style={{ position: "absolute", top: 6, right: 6, fontSize: 10, fontWeight: 400, background: "#18181b", color: "#fff", padding: "1px 5px", borderRadius: 6 }}>{badge}</span>
      )}
      {image ? (
        <img src={image} style={{ width: "100%", height: 36, borderRadius: 8, objectFit: "cover", display: "block", marginBottom: 6 }} />
      ) : (
        <div style={{ width: "100%", height: 36, borderRadius: 8, background: "#e4e4e7", marginBottom: 6 }} />
      )}
      <div style={{ fontSize: 11, fontWeight: 700, color: "#18181b" }}>{title}</div>
      <div style={{ fontSize: 10, color: "#3f3f46", marginTop: 1 }}>{subtitle}</div>
      {hasLike && <div style={{ marginTop: 4, fontSize: 12, color: "#52525b" }}>&#9825;</div>}
    </div>
  );
}

export default function Fig20() {
  return (
    <IllustrationFrame>
      <div style={{ display: "flex", gap: 24, width: CONTENT_WIDTH }}>
        {/* Before */}
        <div style={{ flex: 1 }}>
          <div style={beforeLabel}>Before</div>
          <div style={cardTitle}>Card</div>
          <div style={prop}>title: string</div>
          <div style={prop}>image: string</div>
          <div style={prop}>description: string</div>
          <div style={propGray}>hasLikeButton: boolean</div>
          <div style={propGray}>isSwipeable: boolean</div>
          <div style={propGray}>showBadge: boolean</div>
          <div style={propGray}>badgeText: string</div>
          <div style={propGray}>onSwipe: function</div>
          <div style={{ fontSize: 10, color: "#3f3f46", marginTop: 8 }}>
            無関係なプロパティが混在
          </div>
          <div style={{ marginTop: 10 }}>
            <MiniCard title="商品名" subtitle="¥1,200" hasLike badge="NEW" image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" />
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", fontSize: 14, color: "#52525b" }}>→</div>

        {/* After */}
        <div style={{ flex: 1 }}>
          <div style={afterLabel}>After</div>
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
            <div style={{ flex: 1 }}><MiniCard title="商品名" subtitle="¥1,200" hasLike image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" /></div>
            <div style={{ flex: 1 }}><MiniCard title="おすすめ" subtitle="スワイプ →" image="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop" /></div>
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
