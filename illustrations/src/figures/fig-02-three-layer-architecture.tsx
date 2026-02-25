import { CSSProperties } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ─── shared styles ─── */
const layerLabel: CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: "#3f3f46",
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  marginBottom: 4,
};

const layerSub: CSSProperties = {
  fontSize: 10,
  color: "#52525b",
  marginBottom: 10,
};

const compName: CSSProperties = {
  fontSize: 10,
  fontWeight: 400,
  color: "#52525b",
  marginBottom: 4,
};

const arrowDown: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 0",
};

/* ─── UI Kit components ─── */
function ButtonDemo() {
  return (
    <div>
      <div style={compName}>Button</div>
      <div style={{ display: "flex", gap: 4 }}>
        <button
          style={{
            padding: "5px 12px",
            borderRadius: 12,
            border: "none",
            background: "#18181b",
            color: "#fff",
            fontSize: 11,
            fontWeight: 400,
            fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
            cursor: "default",
          }}
        >
          購入する
        </button>
        <button
          style={{
            padding: "5px 12px",
            borderRadius: 12,
            border: "1px solid #d4d4d8",
            background: "#fff",
            color: "#3f3f46",
            fontSize: 11,
            fontWeight: 400,
            fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
            cursor: "default",
          }}
        >
          詳細
        </button>
      </div>
    </div>
  );
}

function InputDemo() {
  return (
    <div>
      <div style={compName}>Input</div>
      <input
        style={{
          padding: "5px 8px",
          borderRadius: 12,
          border: "1px solid #d4d4d8",
          fontSize: 11,
          fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
          background: "#fff",
          width: 110,
          outline: "none",
          color: "#3f3f46",
        }}
        defaultValue="キーワード"
        readOnly
      />
    </div>
  );
}

function BadgeDemo() {
  return (
    <div>
      <div style={compName}>Badge</div>
      <div style={{ display: "flex", gap: 4 }}>
        <span
          style={{
            display: "inline-block",
            padding: "2px 8px",
            borderRadius: 999,
            fontSize: 10,
            fontWeight: 400,
            background: "#fef2f2",
            color: "#ef4444",
            border: "1px solid #fecaca",
          }}
        >
          SALE
        </span>
        <span
          style={{
            display: "inline-block",
            padding: "2px 8px",
            borderRadius: 999,
            fontSize: 10,
            fontWeight: 400,
            background: "#f0fdf4",
            color: "#22c55e",
            border: "1px solid #bbf7d0",
          }}
        >
          在庫あり
        </span>
      </div>
    </div>
  );
}

function TagDemo() {
  return (
    <div>
      <div style={compName}>Tag</div>
      <div style={{ display: "flex", gap: 4 }}>
        {["靴", "メンズ"].map((t) => (
          <span
            key={t}
            style={{
              display: "inline-block",
              padding: "2px 8px",
              borderRadius: 8,
              fontSize: 10,
              fontWeight: 400,
              background: "#f4f4f5",
              color: "#52525b",
              border: "1px solid #e4e4e7",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Domain components ─── */
function ProductCardDemo() {
  return (
    <div>
      <div style={compName}>ProductCard</div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          border: "1px solid #e4e4e7",
          overflow: "hidden",
          width: 160,
        }}
      >
        {/* product image */}
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
          style={{
            width: "100%",
            height: 64,
            objectFit: "cover",
            display: "block",
          }}
        />
        <div style={{ padding: "8px 10px" }}>
          <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
            <span
              style={{
                display: "inline-block",
                padding: "1px 5px",
                borderRadius: 999,
                fontSize: 8,
                fontWeight: 400,
                background: "#fef2f2",
                color: "#ef4444",
              }}
            >
              SALE
            </span>
          </div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#18181b",
              marginBottom: 2,
            }}
          >
            スニーカー XR
          </div>
          <div style={{ fontSize: 10, color: "#3f3f46" }}>¥12,800</div>
          <button
            style={{
              marginTop: 6,
              padding: "3px 10px",
              borderRadius: 8,
              border: "none",
              background: "#18181b",
              color: "#fff",
              fontSize: 9,
              fontWeight: 400,
              fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
              cursor: "default",
              width: "100%",
            }}
          >
            カートに追加
          </button>
        </div>
      </div>
    </div>
  );
}

function CartItemDemo() {
  return (
    <div>
      <div style={compName}>CartItem</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "#fff",
          borderRadius: 16,
          border: "1px solid #e4e4e7",
          padding: 10,
          width: 200,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop"
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 400, color: "#18181b" }}>
            スニーカー XR
          </div>
          <div style={{ fontSize: 10, color: "#52525b" }}>× 1</div>
        </div>
        <div
          style={{ fontSize: 11, fontWeight: 700, color: "#18181b", flexShrink: 0 }}
        >
          ¥12,800
        </div>
      </div>
    </div>
  );
}

/* ─── Widget components ─── */
function ProductListSectionDemo() {
  return (
    <div>
      <div style={compName}>ProductListSection</div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          border: "1px solid #e4e4e7",
          padding: 10,
          width: "100%",
        }}
      >
        {/* Filter bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 8,
            paddingBottom: 8,
            borderBottom: "1px solid #f4f4f5",
          }}
        >
          <input
            style={{
              padding: "3px 6px",
              borderRadius: 8,
              border: "1px solid #d4d4d8",
              fontSize: 9,
              fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
              background: "#fff",
              width: 80,
              outline: "none",
              color: "#3f3f46",
            }}
            defaultValue="キーワード"
            readOnly
          />
          {["靴", "メンズ"].map((t) => (
            <span
              key={t}
              style={{
                display: "inline-block",
                padding: "1px 5px",
                borderRadius: 8,
                fontSize: 8,
                fontWeight: 400,
                background: "#f4f4f5",
                color: "#52525b",
                border: "1px solid #e4e4e7",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        {/* Mini product cards in a row */}
        <div style={{ display: "flex", gap: 6 }}>
          {[
            { name: "スニーカー XR", price: "¥12,800", sale: true, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" },
            { name: "ランニング Z", price: "¥9,600", sale: false, img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop" },
            { name: "サンダル S", price: "¥4,200", sale: true, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&h=300&fit=crop" },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                flex: 1,
                borderRadius: 8,
                border: "1px solid #e4e4e7",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                style={{
                  width: "100%",
                  height: 28,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ padding: "4px 6px" }}>
                {item.sale && (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "0 3px",
                      borderRadius: 999,
                      fontSize: 6,
                      fontWeight: 400,
                      background: "#fef2f2",
                      color: "#ef4444",
                      marginBottom: 2,
                    }}
                  >
                    SALE
                  </span>
                )}
                <div
                  style={{
                    fontSize: 8,
                    fontWeight: 400,
                    color: "#18181b",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.name}
                </div>
                <div style={{ fontSize: 7, color: "#3f3f46" }}>{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckoutFormDemo() {
  return (
    <div>
      <div style={compName}>CheckoutForm</div>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          border: "1px solid #e4e4e7",
          padding: 10,
          width: "100%",
        }}
      >
        {/* Cart items mini */}
        {[
          { line: "スニーカー XR  ×1  ¥12,800", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop" },
          { line: "ランニング Z  ×2  ¥19,200", img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=300&fit=crop" },
        ].map(
          (item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 0",
                borderBottom: "1px solid #f4f4f5",
                fontSize: 9,
                color: "#3f3f46",
              }}
            >
              <img
                src={item.img}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 8,
                  objectFit: "cover" as const,
                  flexShrink: 0,
                }}
              />
              <span style={{ flex: 1, minWidth: 0 }}>{item.line}</span>
            </div>
          )
        )}
        {/* Total + button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 6,
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 700, color: "#18181b" }}>
            合計 ¥32,000
          </span>
          <button
            style={{
              padding: "3px 10px",
              borderRadius: 8,
              border: "none",
              background: "#18181b",
              color: "#fff",
              fontSize: 9,
              fontWeight: 400,
              fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif',
              cursor: "default",
            }}
          >
            購入する
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Arrow between layers ─── */
function LayerArrow() {
  return (
    <div style={arrowDown}>
      <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
        <line
          x1="8"
          y1="0"
          x2="8"
          y2="14"
          stroke="#d4d4d8"
          strokeWidth="1.5"
        />
        <polygon points="3,14 8,20 13,14" fill="#d4d4d8" />
      </svg>
    </div>
  );
}

/* ─── Main figure ─── */
export default function Fig02() {
  return (
    <IllustrationFrame>
      <div style={{ width: CONTENT_WIDTH }}>
        {/* ── Widgets layer ── */}
        <div style={{ marginBottom: 0 }}>
          <div style={layerLabel}>Widgets</div>
          <div style={layerSub}>
            ページ固有の組み立て — Domain の部品を組み合わせた画面の骨格
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <ProductListSectionDemo />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <CheckoutFormDemo />
            </div>
          </div>
        </div>

        <LayerArrow />

        {/* ── Features / Domain layer ── */}
        <div style={{ marginBottom: 0 }}>
          <div style={layerLabel}>Features / Domain</div>
          <div style={layerSub}>
            特定のサービスやデータに紐づくコンポーネント
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <ProductCardDemo />
            <CartItemDemo />
          </div>
        </div>

        <LayerArrow />

        {/* ── UI Kit layer ── */}
        <div>
          <div style={layerLabel}>UI Kit</div>
          <div style={layerSub}>
            どのプロダクトでも使い回せる汎用 UI 部品
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <ButtonDemo />
            <InputDemo />
            <BadgeDemo />
            <TagDemo />
          </div>
        </div>

        {/* dependency direction note */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            marginTop: 16,
            padding: "8px 16px",
            background: "#fff",
            borderRadius: 12,
            border: "1px dashed #d4d4d8",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line
              x1="7"
              y1="0"
              x2="7"
              y2="10"
              stroke="#52525b"
              strokeWidth="1.5"
            />
            <polygon points="3.5,10 7,14 10.5,10" fill="#52525b" />
          </svg>
          <span style={{ fontSize: 11, color: "#3f3f46" }}>
            依存は常に上→下の一方通行。下位が上位に依存することはない
          </span>
        </div>
      </div>
    </IllustrationFrame>
  );
}
