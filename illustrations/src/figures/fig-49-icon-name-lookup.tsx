import { CSSProperties } from "react";
import {
  Search, Home, User, Settings, Mail, Trash2,
} from "lucide-react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { CONTENT_WIDTH } from "../styles/tokens";

const colTitle: CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "#18181b",
  marginBottom: 10,
};

const mono: CSSProperties = {
  fontFamily: '"SF Mono", Menlo, monospace',
  fontSize: 10,
  lineHeight: 1.5,
  color: "#3f3f46",
  background: "#fff",
  border: "1px solid #e4e4e7",
  borderRadius: 6,
  padding: "10px 12px",
  whiteSpace: "pre",
  overflow: "hidden",
};

const note: CSSProperties = {
  fontSize: 10,
  color: "#52525b",
  marginTop: 10,
  lineHeight: 1.5,
  textAlign: "center",
};

const kw: CSSProperties = { color: "#7c3aed" };
const str: CSSProperties = { color: "#059669" };
const dim: CSSProperties = { color: "#a1a1aa" };
const tag: CSSProperties = { color: "#2563eb" };

/* ── Left: File-based management ── */
function FileTree() {
  const files = [
    "search.svg",
    "home.svg",
    "user.svg",
    "settings.svg",
    "mail.svg",
    "trash.svg",
  ];
  return (
    <div
      style={{
        ...mono,
        padding: "8px 12px",
        marginBottom: 8,
      }}
    >
      <div style={{ fontWeight: 600, color: "#18181b", marginBottom: 2 }}>
        icons/
      </div>
      {files.map((f) => (
        <div key={f} style={{ paddingLeft: 16 }}>
          <span style={dim}>├── </span>
          {f}
        </div>
      ))}
    </div>
  );
}

function FileImports() {
  return (
    <div style={{ ...mono, marginBottom: 8 }}>
      <div>
        <span style={kw}>import</span> SearchIcon{" "}
        <span style={kw}>from</span>{" "}
        <span style={str}>"./icons/search.svg"</span>
      </div>
      <div>
        <span style={kw}>import</span> HomeIcon{" "}
        <span style={kw}>from</span>{" "}
        <span style={str}>"./icons/home.svg"</span>
      </div>
      <div>
        <span style={kw}>import</span> UserIcon{" "}
        <span style={kw}>from</span>{" "}
        <span style={str}>"./icons/user.svg"</span>
      </div>
      <div style={dim}>// ... 3 more imports</div>
    </div>
  );
}

function FileUsage() {
  return (
    <div style={mono}>
      <span style={dim}>{"<"}</span>
      <span style={tag}>img</span> <span style={{ color: "#9333ea" }}>src</span>
      <span style={dim}>{"={"}</span>SearchIcon<span style={dim}>{"}"}</span>
      <span style={dim}>{" />"}</span>
    </div>
  );
}

/* ── Right: Name-based Icon component ── */
function IconComponentUsage() {
  const icons = [
    { name: "search", label: "search" },
    { name: "home", label: "home" },
    { name: "user", label: "user" },
    { name: "settings", label: "settings" },
    { name: "mail", label: "mail" },
    { name: "trash", label: "trash" },
  ];
  return (
    <div style={{ ...mono, marginBottom: 8 }}>
      {icons.map((icon, i) => (
        <div key={icon.name}>
          <span style={dim}>{"<"}</span>
          <span style={tag}>Icon</span>
          {" "}
          <span style={{ color: "#9333ea" }}>name</span>
          <span style={dim}>="</span>
          <span style={str}>{icon.name}</span>
          <span style={dim}>"</span>
          {" "}
          <span style={{ color: "#9333ea" }}>size</span>
          <span style={dim}>="</span>
          <span style={str}>m</span>
          <span style={dim}>"</span>
          <span style={dim}>{" />"}</span>
        </div>
      ))}
    </div>
  );
}

const iconBox: CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: 6,
  background: "#fff",
  border: "1px solid #e4e4e7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const libraryIcons = [
  { Icon: Search, name: "search" },
  { Icon: Home, name: "home" },
  { Icon: User, name: "user" },
  { Icon: Settings, name: "settings" },
  { Icon: Mail, name: "mail" },
  { Icon: Trash2, name: "trash" },
];

export default function Fig49() {
  return (
    <IllustrationFrame title="ファイル個別管理 vs 名前で呼び出し">
      <div style={{ display: "flex", gap: 20, width: CONTENT_WIDTH }}>
        {/* Left: File-based */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>ファイル個別管理</div>
          <FileTree />
          <FileImports />
          <FileUsage />
          <div style={note}>
            アイコンごとにファイルを追加し、
            <br />
            毎回 import を書く必要がある
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            background: "#e4e4e7",
            alignSelf: "stretch",
            flexShrink: 0,
          }}
        />

        {/* Right: Name-based Icon component */}
        <div style={{ flex: 1 }}>
          <div style={colTitle}>名前で呼び出し</div>
          <IconComponentUsage />

          {/* Rendered icons grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: 6,
              marginTop: 12,
            }}
          >
            {libraryIcons.map(({ Icon, name }) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <div style={iconBox}>
                  <Icon size={16} color="#3f3f46" strokeWidth={1.75} />
                </div>
                <span style={{ fontSize: 8, color: "#52525b" }}>{name}</span>
              </div>
            ))}
          </div>

          <div style={note}>
            <span style={{ ...mono, display: "inline", padding: "1px 5px", fontSize: 9, border: "none", background: "#f4f4f5" }}>
              {"<Icon name=\"...\" />"}
            </span>
            {" "}と書くだけ
          </div>
        </div>
      </div>
    </IllustrationFrame>
  );
}
