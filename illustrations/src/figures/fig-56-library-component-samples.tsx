import { IllustrationFrame } from "../shared/IllustrationFrame";
import { LibraryLabel } from "../shared/LibraryLabel";
import { CONTENT_WIDTH, font } from "../styles/tokens";

/* ── MUI ── */
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import MuiTextField from "@mui/material/TextField";
import MuiSelect from "@mui/material/Select";
import MuiMenuItem from "@mui/material/MenuItem";
import MuiChip from "@mui/material/Chip";
import MuiSwitch from "@mui/material/Switch";
import MuiCheckbox from "@mui/material/Checkbox";
import MuiFormControl from "@mui/material/FormControl";

/* ── Chakra UI ── */
import {
  ChakraProvider,
  Button as ChakraButton,
  Input as ChakraInput,
  Select as ChakraSelect,
  Tag as ChakraTag,
  TagLabel,
  Switch as ChakraSwitch,
  Checkbox as ChakraCheckbox,
  Stack,
  extendTheme,
} from "@chakra-ui/react";

/* ── Ant Design ── */
import { ConfigProvider, Button as AntButton, Input as AntInput, Select as AntSelect, Tag as AntTag, Switch as AntSwitch, Checkbox as AntCheckbox } from "antd";

/**
 * MUI / Chakra UI / Ant Design の実コンポーネントを並べて
 * 各ライブラリが同じ基本部品を提供していることを伝える図。
 */

const muiTheme = createTheme({
  typography: { fontFamily: font.sans, fontSize: 12 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { textTransform: "none", fontSize: 12, padding: "4px 14px", minWidth: 0 } } },
    MuiTextField: { defaultProps: { size: "small" }, styleOverrides: { root: { "& .MuiInputBase-root": { fontSize: 12 } } } },
    MuiSelect: { defaultProps: { size: "small" }, styleOverrides: { select: { fontSize: 12, padding: "4px 8px" } } },
    MuiChip: { styleOverrides: { root: { fontSize: 11, height: 24 } } },
    MuiSwitch: { styleOverrides: { root: { padding: 4 } } },
  },
});

const chakraTheme = extendTheme({
  fonts: { body: font.sans, heading: font.sans },
});

const nameStyle = {
  fontSize: 15,
  fontWeight: 500,
  color: "#18181b",
  letterSpacing: "-0.01em",
  marginBottom: 12,
} as const;

const panel = {
  background: "#fff",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: "12px 14px",
  display: "flex",
  flexDirection: "column" as const,
  gap: 0,
} as const;

const rowStyle = {
  display: "flex",
  alignItems: "center" as const,
  padding: "8px 0",
  borderBottom: "1px solid #f4f4f5",
  minHeight: 36,
} as const;

const rowLast = {
  ...rowStyle,
  borderBottom: "none",
} as const;

const previewArea = {
  display: "flex",
  alignItems: "center" as const,
  gap: 6,
  flex: 1,
} as const;

/* ── MUI Column ── */
function MuiColumn() {
  return (
    <ThemeProvider theme={muiTheme}>
      <div style={{ flex: 1 }}>
        <LibraryLabel name="Material UI" icon="mui" />
        <div style={nameStyle}>Material UI</div>
        <div style={panel}>
          <div style={rowStyle}>
            <div style={previewArea}>
              <MuiButton variant="contained" size="small">Primary</MuiButton>
              <MuiButton variant="outlined" size="small">Default</MuiButton>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <MuiTextField placeholder="Placeholder" size="small" sx={{ flex: 1, "& .MuiInputBase-input": { padding: "6px 8px" } }} />
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <MuiFormControl size="small" sx={{ minWidth: 100 }}>
                <MuiSelect value="medium" sx={{ fontSize: 12, "& .MuiSelect-select": { padding: "4px 8px" } }}>
                  <MuiMenuItem value="small">Small</MuiMenuItem>
                  <MuiMenuItem value="medium">Medium</MuiMenuItem>
                  <MuiMenuItem value="large">Large</MuiMenuItem>
                </MuiSelect>
              </MuiFormControl>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <MuiChip label="Default" size="small" />
              <MuiChip label="Primary" size="small" color="primary" />
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <MuiSwitch defaultChecked size="small" />
            </div>
          </div>
          <div style={rowLast}>
            <div style={previewArea}>
              <MuiCheckbox defaultChecked size="small" sx={{ padding: 0 }} />
              <MuiCheckbox size="small" sx={{ padding: 0 }} />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

/* ── Chakra UI Column ── */
function ChakraColumn() {
  return (
    <ChakraProvider theme={chakraTheme} resetCSS={false}>
      <div style={{ flex: 1 }}>
        <LibraryLabel name="Chakra UI" icon="chakra" />
        <div style={nameStyle}>Chakra UI</div>
        <div style={panel}>
          <div style={rowStyle}>
            <div style={previewArea}>
              <ChakraButton size="xs" colorScheme="blue">Primary</ChakraButton>
              <ChakraButton size="xs" variant="outline">Default</ChakraButton>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <ChakraInput placeholder="Placeholder" size="xs" />
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <ChakraSelect size="xs" defaultValue="medium" width="auto">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </ChakraSelect>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <ChakraTag size="sm"><TagLabel>Default</TagLabel></ChakraTag>
              <ChakraTag size="sm" colorScheme="blue"><TagLabel>Primary</TagLabel></ChakraTag>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <ChakraSwitch size="sm" defaultChecked />
            </div>
          </div>
          <div style={rowLast}>
            <div style={previewArea}>
              <ChakraCheckbox size="sm" defaultChecked />
              <ChakraCheckbox size="sm" />
            </div>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}

/* ── Ant Design Column ── */
function AntColumn() {
  return (
    <ConfigProvider theme={{ token: { fontFamily: font.sans, fontSize: 12 } }}>
      <div style={{ flex: 1 }}>
        <LibraryLabel name="Ant Design" icon="antdesign" />
        <div style={nameStyle}>Ant Design</div>
        <div style={panel}>
          <div style={rowStyle}>
            <div style={previewArea}>
              <AntButton type="primary" size="small">Primary</AntButton>
              <AntButton size="small">Default</AntButton>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <AntInput placeholder="Placeholder" size="small" style={{ flex: 1 }} />
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <AntSelect defaultValue="medium" size="small" style={{ width: 100 }} options={[{ value: "small", label: "Small" }, { value: "medium", label: "Medium" }, { value: "large", label: "Large" }]} />
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <AntTag>Default</AntTag>
              <AntTag color="processing">Primary</AntTag>
            </div>
          </div>
          <div style={rowStyle}>
            <div style={previewArea}>
              <AntSwitch defaultChecked size="small" />
            </div>
          </div>
          <div style={rowLast}>
            <div style={previewArea}>
              <AntCheckbox defaultChecked />
              <AntCheckbox />
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default function Fig56() {
  return (
    <IllustrationFrame title="汎用ライブラリのコンポーネント例: MUI / Chakra UI / Ant Design">
      <div style={{ display: "flex", gap: 14, width: CONTENT_WIDTH }}>
        <MuiColumn />
        <ChakraColumn />
        <AntColumn />
      </div>
      <div style={{ fontSize: 11, color: "#52525b", marginTop: 14, textAlign: "center" }}>
        どのライブラリも Button・Input・Select・Tag・Switch といった基本部品がそろっている
      </div>
    </IllustrationFrame>
  );
}
