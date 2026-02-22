import { ThemeProvider, createTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const theme = createTheme({
  typography: { fontFamily: '"Inter", sans-serif', fontSize: 13 },
});

const lib = { fontSize: 11, color: "#a1a1aa", marginBottom: 4 } as const;
const name = {
  fontSize: 15,
  fontWeight: 500,
  color: "#18181b",
  fontFamily: '"SF Mono", "Fira Code", Menlo, monospace',
  marginBottom: 10,
} as const;
const panel = {
  background: "#f4f4f5",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 14,
} as const;
const note = { fontSize: 11, color: "#71717a", marginTop: 14 } as const;
const subLabel = { fontSize: 11, fontWeight: 500, color: "#52525b", marginBottom: 8 } as const;

export default function Fig12() {
  return (
    <ThemeProvider theme={theme}>
      <IllustrationFrame title="MUI Chip vs Badge">
        <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
          <div style={{ flex: 1 }}>
            <div style={lib}>MUI</div>
            <div style={name}>Chip</div>
            <div style={panel}>
              <div style={subLabel}>Deletable</div>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="React" onDelete={() => {}} size="small" />
                <Chip label="TypeScript" onDelete={() => {}} size="small" />
                <Chip label="Figma" onDelete={() => {}} size="small" />
              </Stack>
              <div style={{ ...subLabel, marginTop: 14 }}>Clickable</div>
              <Stack direction="row" spacing={1}>
                <Chip label="Filter A" size="small" onClick={() => {}} color="primary" />
                <Chip label="Filter B" size="small" onClick={() => {}} variant="outlined" />
              </Stack>
              <div style={{ ...subLabel, marginTop: 14 }}>With Avatar</div>
              <Stack direction="row" spacing={1}>
                <Chip avatar={<Avatar>A</Avatar>} label="田中" size="small" />
                <Chip avatar={<Avatar>K</Avatar>} label="佐藤" size="small" />
              </Stack>
              <div style={note}>クリック・削除・アバター付きなどインタラクティブな要素</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={lib}>MUI</div>
            <div style={name}>Badge</div>
            <div style={panel}>
              <div style={subLabel}>With Avatar</div>
              <Stack direction="row" spacing={4} sx={{ py: 1 }}>
                <Badge badgeContent={4} color="primary">
                  <Avatar sx={{ width: 36, height: 36 }}>A</Avatar>
                </Badge>
                <Badge badgeContent={12} color="secondary">
                  <Avatar sx={{ width: 36, height: 36 }}>B</Avatar>
                </Badge>
                <Badge badgeContent={99} color="error">
                  <Avatar sx={{ width: 36, height: 36 }}>C</Avatar>
                </Badge>
              </Stack>
              <div style={{ ...subLabel, marginTop: 14 }}>Dot variant</div>
              <Stack direction="row" spacing={4} sx={{ py: 1 }}>
                <Badge variant="dot" color="primary">
                  <Avatar sx={{ width: 36, height: 36 }}>D</Avatar>
                </Badge>
                <Badge variant="dot" color="error">
                  <Avatar sx={{ width: 36, height: 36 }}>E</Avatar>
                </Badge>
              </Stack>
              <div style={note}>Avatar やアイコンの右上に数字やドットを重ねて表示</div>
            </div>
          </div>
        </div>
        <Caption text="MUI: Chip（操作できる）と Badge（見るだけ）" />
      </IllustrationFrame>
    </ThemeProvider>
  );
}
