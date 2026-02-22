import { CSSProperties, ReactNode } from "react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

/* ------------------------------------------------------------------ */
/*  Design Tokens                                                      */
/* ------------------------------------------------------------------ */

const BG_FRAME = "#f4f4f5";
const SURFACE = "#fff";
const BORDER = "#e4e4e7";
const TEXT_PRIMARY = "#18181b";
const TEXT_SECONDARY = "#71717a";
const TEXT_TERTIARY = "#a1a1aa";
const MONO = '"SF Mono", Menlo, monospace';

/* ------------------------------------------------------------------ */
/*  Miniature Atom Components                                          */
/* ------------------------------------------------------------------ */

function MiniButton({ children, primary }: { children: string; primary?: boolean }) {
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px 10px",
    fontSize: 9,
    fontWeight: 600,
    borderRadius: 4,
    border: primary ? "none" : `1px solid ${BORDER}`,
    background: primary ? TEXT_PRIMARY : SURFACE,
    color: primary ? SURFACE : TEXT_PRIMARY,
    lineHeight: 1.4,
    whiteSpace: "nowrap",
    cursor: "default",
  };
  return <span style={style}>{children}</span>;
}

function MiniInput({ placeholder, width }: { placeholder: string; width?: number }) {
  const style: CSSProperties = {
    display: "inline-block",
    width: width ?? 80,
    padding: "3px 6px",
    fontSize: 9,
    color: TEXT_TERTIARY,
    border: `1px solid ${BORDER}`,
    borderRadius: 4,
    background: SURFACE,
    lineHeight: 1.4,
    whiteSpace: "nowrap",
    overflow: "hidden",
  };
  return <span style={style}>{placeholder}</span>;
}

function MiniLabel({ children }: { children: string }) {
  const style: CSSProperties = {
    fontSize: 9,
    fontWeight: 600,
    color: TEXT_PRIMARY,
    lineHeight: 1.4,
  };
  return <span style={style}>{children}</span>;
}

/* ------------------------------------------------------------------ */
/*  Miniature Molecule Components                                      */
/* ------------------------------------------------------------------ */

function MiniSearchBar() {
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 0,
    border: `1px solid ${BORDER}`,
    borderRadius: 4,
    overflow: "hidden",
    background: SURFACE,
  };
  const inputStyle: CSSProperties = {
    padding: "3px 6px",
    fontSize: 9,
    color: TEXT_TERTIARY,
    border: "none",
    outline: "none",
    width: 70,
    lineHeight: 1.4,
    background: "transparent",
  };
  const btnStyle: CSSProperties = {
    padding: "3px 8px",
    fontSize: 9,
    fontWeight: 600,
    border: "none",
    borderLeft: `1px solid ${BORDER}`,
    background: TEXT_PRIMARY,
    color: SURFACE,
    lineHeight: 1.4,
    cursor: "default",
  };
  return (
    <span style={style}>
      <span style={inputStyle}>検索...</span>
      <span style={btnStyle}>Search</span>
    </span>
  );
}

function MiniFormField() {
  const style: CSSProperties = {
    display: "inline-flex",
    flexDirection: "column",
    gap: 2,
  };
  return (
    <span style={style}>
      <MiniLabel>Email</MiniLabel>
      <MiniInput placeholder="user@example.com" width={90} />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Miniature Organism Components                                      */
/* ------------------------------------------------------------------ */

function MiniHeader() {
  const wrapper: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "4px 10px",
    background: SURFACE,
    border: `1px solid ${BORDER}`,
    borderRadius: 4,
    width: 180,
  };
  const logo: CSSProperties = {
    fontSize: 9,
    fontWeight: 700,
    color: TEXT_PRIMARY,
    letterSpacing: "-0.02em",
  };
  const nav: CSSProperties = {
    display: "flex",
    gap: 8,
    marginLeft: "auto",
  };
  const navItem: CSSProperties = {
    fontSize: 8,
    color: TEXT_SECONDARY,
    lineHeight: 1.4,
  };
  return (
    <span style={wrapper}>
      <span style={logo}>Logo</span>
      <span style={nav}>
        <span style={navItem}>Home</span>
        <span style={navItem}>About</span>
        <span style={navItem}>Contact</span>
      </span>
    </span>
  );
}

function MiniCard() {
  const wrapper: CSSProperties = {
    display: "inline-flex",
    flexDirection: "column",
    width: 100,
    border: `1px solid ${BORDER}`,
    borderRadius: 4,
    overflow: "hidden",
    background: SURFACE,
  };
  const imgPlaceholder: CSSProperties = {
    width: "100%",
    height: 28,
    background: BG_FRAME,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 8,
    color: TEXT_TERTIARY,
  };
  const body: CSSProperties = {
    padding: "4px 6px",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  };
  const title: CSSProperties = {
    fontSize: 8,
    fontWeight: 600,
    color: TEXT_PRIMARY,
    lineHeight: 1.3,
  };
  const desc: CSSProperties = {
    fontSize: 7,
    color: TEXT_SECONDARY,
    lineHeight: 1.3,
  };
  return (
    <span style={wrapper}>
      <span style={imgPlaceholder}>IMG</span>
      <span style={body}>
        <span style={title}>Card Title</span>
        <span style={desc}>Description text</span>
        <MiniButton>Detail</MiniButton>
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Miniature Template & Page                                          */
/* ------------------------------------------------------------------ */

function MiniTemplate() {
  const wrapper: CSSProperties = {
    display: "inline-flex",
    flexDirection: "column",
    width: 200,
    height: 80,
    border: `1px solid ${BORDER}`,
    borderRadius: 4,
    overflow: "hidden",
    background: SURFACE,
  };
  const header: CSSProperties = {
    height: 12,
    background: BG_FRAME,
    borderBottom: `1px solid ${BORDER}`,
  };
  const bodyRow: CSSProperties = {
    display: "flex",
    flex: 1,
  };
  const sidebar: CSSProperties = {
    width: 40,
    borderRight: `1px solid ${BORDER}`,
    padding: 4,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  };
  const sidebarLine: CSSProperties = {
    height: 3,
    borderRadius: 1,
    background: "#e4e4e7",
  };
  const main: CSSProperties = {
    flex: 1,
    padding: 6,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  };
  const block: CSSProperties = {
    height: 6,
    borderRadius: 2,
    background: BG_FRAME,
  };
  const blockWide: CSSProperties = {
    ...block,
    width: "80%",
  };
  const blockNarrow: CSSProperties = {
    ...block,
    width: "50%",
  };
  return (
    <span style={wrapper}>
      <span style={header} />
      <span style={bodyRow}>
        <span style={sidebar}>
          <span style={sidebarLine} />
          <span style={sidebarLine} />
          <span style={sidebarLine} />
        </span>
        <span style={main}>
          <span style={blockWide} />
          <span style={blockNarrow} />
          <span style={block} />
          <span style={blockNarrow} />
        </span>
      </span>
    </span>
  );
}

function MiniPage() {
  const wrapper: CSSProperties = {
    display: "inline-flex",
    flexDirection: "column",
    width: 200,
    height: 80,
    border: `1px solid ${BORDER}`,
    borderRadius: 4,
    overflow: "hidden",
    background: SURFACE,
  };
  const header: CSSProperties = {
    height: 12,
    background: BG_FRAME,
    borderBottom: `1px solid ${BORDER}`,
    display: "flex",
    alignItems: "center",
    padding: "0 6px",
    gap: 8,
  };
  const headerLogo: CSSProperties = {
    fontSize: 6,
    fontWeight: 700,
    color: TEXT_PRIMARY,
  };
  const headerNav: CSSProperties = {
    fontSize: 5,
    color: TEXT_SECONDARY,
  };
  const bodyRow: CSSProperties = {
    display: "flex",
    flex: 1,
  };
  const sidebar: CSSProperties = {
    width: 40,
    borderRight: `1px solid ${BORDER}`,
    padding: 4,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  };
  const sidebarItem: CSSProperties = {
    fontSize: 5,
    color: TEXT_SECONDARY,
    lineHeight: 1.3,
  };
  const main: CSSProperties = {
    flex: 1,
    padding: 6,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  };
  const pageTitle: CSSProperties = {
    fontSize: 6,
    fontWeight: 700,
    color: TEXT_PRIMARY,
    lineHeight: 1.3,
  };
  const pageText: CSSProperties = {
    fontSize: 5,
    color: TEXT_SECONDARY,
    lineHeight: 1.3,
  };
  const pageCta: CSSProperties = {
    display: "inline-block",
    padding: "1px 5px",
    fontSize: 5,
    fontWeight: 600,
    background: TEXT_PRIMARY,
    color: SURFACE,
    borderRadius: 2,
    alignSelf: "flex-start",
    lineHeight: 1.4,
  };
  return (
    <span style={wrapper}>
      <span style={header}>
        <span style={headerLogo}>MyApp</span>
        <span style={headerNav}>Home</span>
        <span style={headerNav}>Products</span>
        <span style={headerNav}>Contact</span>
      </span>
      <span style={bodyRow}>
        <span style={sidebar}>
          <span style={sidebarItem}>Dashboard</span>
          <span style={sidebarItem}>Settings</span>
          <span style={sidebarItem}>Profile</span>
        </span>
        <span style={main}>
          <span style={pageTitle}>Welcome back, Taro</span>
          <span style={pageText}>本日の売上: ¥124,500</span>
          <span style={pageText}>新規ユーザー: 38人</span>
          <span style={pageCta}>View Report</span>
        </span>
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Layer definitions                                                  */
/* ------------------------------------------------------------------ */

interface Layer {
  name: string;
  nameJa: string;
  content: ReactNode;
}

const layers: Layer[] = [
  {
    name: "Pages",
    nameJa: "ページ",
    content: <MiniPage />,
  },
  {
    name: "Templates",
    nameJa: "テンプレート",
    content: <MiniTemplate />,
  },
  {
    name: "Organisms",
    nameJa: "有機体",
    content: (
      <span style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <MiniHeader />
        <MiniCard />
      </span>
    ),
  },
  {
    name: "Molecules",
    nameJa: "分子",
    content: (
      <span style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
        <MiniSearchBar />
        <MiniFormField />
      </span>
    ),
  },
  {
    name: "Atoms",
    nameJa: "原子",
    content: (
      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <MiniButton primary>Button</MiniButton>
        <MiniInput placeholder="Text input..." width={80} />
        <MiniLabel>Label</MiniLabel>
      </span>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Shared styles                                                      */
/* ------------------------------------------------------------------ */

const layerRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  background: SURFACE,
  border: `1px solid ${BORDER}`,
  borderRadius: 6,
  padding: "10px 16px",
  gap: 16,
};

const labelColumn: CSSProperties = {
  width: 100,
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

const nameStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: TEXT_PRIMARY,
  fontFamily: MONO,
  lineHeight: 1.3,
};

const nameJaStyle: CSSProperties = {
  fontSize: 9,
  color: TEXT_TERTIARY,
  lineHeight: 1.3,
};

const contentColumn: CSSProperties = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/* ------------------------------------------------------------------ */
/*  Upward arrow SVG                                                   */
/* ------------------------------------------------------------------ */

function CompositionArrow({ height }: { height: number }) {
  const w = 20;
  const arrowHeadY = 8;
  const arrowBottomY = height - 4;
  return (
    <svg
      width={w}
      height={height}
      viewBox={`0 0 ${w} ${height}`}
      fill="none"
      style={{ flexShrink: 0 }}
    >
      {/* shaft */}
      <line
        x1={w / 2}
        y1={arrowBottomY}
        x2={w / 2}
        y2={arrowHeadY}
        stroke="#d4d4d8"
        strokeWidth={1.5}
      />
      {/* arrowhead pointing up */}
      <polygon
        points={`${w / 2},${arrowHeadY - 6} ${w / 2 - 4},${arrowHeadY} ${w / 2 + 4},${arrowHeadY}`}
        fill="#d4d4d8"
      />
      {/* label: small */}
      <text
        x={w / 2}
        y={arrowBottomY + 10}
        textAnchor="middle"
        fontSize={7}
        fill={TEXT_TERTIARY}
      >
        小
      </text>
      {/* label: big */}
      <text
        x={w / 2}
        y={arrowHeadY - 10}
        textAnchor="middle"
        fontSize={7}
        fill={TEXT_TERTIARY}
      >
        大
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Figure                                                        */
/* ------------------------------------------------------------------ */

export default function Fig40() {
  const rowGap = 8;
  const totalRows = layers.length;
  /* approximate height of the arrow to span all rows */
  const arrowHeight = totalRows * 60 + (totalRows - 1) * rowGap;

  return (
    <IllustrationFrame title="Atomic Design: 5つの階層">
      <div style={{ width: CONTENT_WIDTH, display: "flex", gap: 8 }}>
        {/* Left: upward arrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CompositionArrow height={arrowHeight} />
        </div>

        {/* Right: layer rows */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: rowGap,
          }}
        >
          {layers.map((layer) => (
            <div key={layer.name} style={layerRow}>
              <div style={labelColumn}>
                <span style={nameStyle}>{layer.name}</span>
                <span style={nameJaStyle}>{layer.nameJa}</span>
              </div>
              <div style={contentColumn}>{layer.content}</div>
            </div>
          ))}
        </div>
      </div>

    </IllustrationFrame>
  );
}
