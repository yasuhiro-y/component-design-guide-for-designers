import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiButton from "@mui/material/Button";
import MuiTextField from "@mui/material/TextField";
import MuiChip from "@mui/material/Chip";
import MuiSwitch from "@mui/material/Switch";
import { Button as AntButton, Input as AntInput, Tag as AntTag, Switch as AntSwitch } from "antd";
import { ChakraProvider, Button as ChakraButton, Input as ChakraInput, Tag as ChakraTag, Switch as ChakraSwitch } from "@chakra-ui/react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { LibraryLabel } from "../shared/LibraryLabel";
import { CONTENT_WIDTH } from "../styles/tokens";

const muiTheme = createTheme({
  typography: { fontFamily: '"Inter", "Noto Sans JP", sans-serif', fontSize: 13 },
});

const nameStyle = {
  fontSize: 15,
  fontWeight: 500,
  color: "#18181b",
  letterSpacing: "-0.01em",
  marginBottom: 12,
} as const;

const panel = {
  background: "#f4f4f5",
  borderRadius: 8,
  border: "1px solid #e4e4e7",
  padding: 14,
  display: "flex",
  flexDirection: "column" as const,
  gap: 10,
};

const row = {
  display: "flex",
  alignItems: "center" as const,
  gap: 8,
  flexWrap: "wrap" as const,
};

const label = {
  fontSize: 11,
  fontWeight: 500,
  color: "#52525b",
  minWidth: 48,
} as const;

export default function Fig56() {
  return (
    <ThemeProvider theme={muiTheme}>
      <IllustrationFrame title="汎用ライブラリのコンポーネント例: MUI / Chakra UI / Ant Design">
        <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
          {/* MUI */}
          <div style={{ flex: 1 }}>
            <LibraryLabel name="MUI" icon="mui" />
            <div style={nameStyle}>Material UI</div>
            <div style={panel}>
              <div style={row}>
                <span style={label}>Button</span>
                <MuiButton variant="contained" size="small">Primary</MuiButton>
                <MuiButton variant="outlined" size="small">Outlined</MuiButton>
              </div>
              <div style={row}>
                <span style={label}>Input</span>
                <MuiTextField size="small" placeholder="Text field" variant="outlined" sx={{ flex: 1 }} />
              </div>
              <div style={row}>
                <span style={label}>Chip</span>
                <MuiChip label="Tag A" size="small" />
                <MuiChip label="Tag B" size="small" color="primary" />
              </div>
              <div style={row}>
                <span style={label}>Switch</span>
                <MuiSwitch size="small" defaultChecked />
                <MuiSwitch size="small" />
              </div>
            </div>
          </div>

          {/* Chakra UI */}
          <div style={{ flex: 1 }}>
            <ChakraProvider>
              <LibraryLabel name="Chakra UI" icon="chakra" />
              <div style={nameStyle}>Chakra UI</div>
              <div style={panel}>
                <div style={row}>
                  <span style={label}>Button</span>
                  <ChakraButton size="sm" colorScheme="blue">Primary</ChakraButton>
                  <ChakraButton size="sm" variant="outline">Outline</ChakraButton>
                </div>
                <div style={row}>
                  <span style={label}>Input</span>
                  <ChakraInput size="sm" placeholder="Text input" />
                </div>
                <div style={row}>
                  <span style={label}>Tag</span>
                  <ChakraTag size="sm">Tag A</ChakraTag>
                  <ChakraTag size="sm" colorScheme="blue">Tag B</ChakraTag>
                </div>
                <div style={row}>
                  <span style={label}>Switch</span>
                  <ChakraSwitch size="sm" defaultChecked />
                  <ChakraSwitch size="sm" />
                </div>
              </div>
            </ChakraProvider>
          </div>

          {/* Ant Design */}
          <div style={{ flex: 1 }}>
            <LibraryLabel name="Ant Design" icon="antdesign" />
            <div style={nameStyle}>Ant Design</div>
            <div style={panel}>
              <div style={row}>
                <span style={label}>Button</span>
                <AntButton type="primary" size="small">Primary</AntButton>
                <AntButton size="small">Default</AntButton>
              </div>
              <div style={row}>
                <span style={label}>Input</span>
                <AntInput size="small" placeholder="Text input" style={{ flex: 1 }} />
              </div>
              <div style={row}>
                <span style={label}>Tag</span>
                <AntTag>Tag A</AntTag>
                <AntTag color="blue">Tag B</AntTag>
              </div>
              <div style={row}>
                <span style={label}>Switch</span>
                <AntSwitch size="small" defaultChecked />
                <AntSwitch size="small" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: "#52525b", marginTop: 14, textAlign: "center" }}>
          どのライブラリも Button・Input・Tag・Switch といった基本部品がそろっている
        </div>
      </IllustrationFrame>
    </ThemeProvider>
  );
}
