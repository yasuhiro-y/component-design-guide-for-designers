import { ChakraProvider, Badge, Tag, TagLabel, TagCloseButton, Stack, Box, extendTheme } from "@chakra-ui/react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { Caption } from "../shared/Caption";
import { CONTENT_WIDTH } from "../styles/tokens";

const theme = extendTheme({
  fonts: { body: '"Inter", sans-serif', heading: '"Inter", sans-serif' },
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

const colors = ["gray", "red", "green", "blue", "purple"] as const;
const variants = ["solid", "subtle", "outline"] as const;

export default function Fig16() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <IllustrationFrame>
        <div style={{ width: CONTENT_WIDTH }}>
          <div style={lib}>Chakra UI</div>
          <div style={name}>Badge / Tag — colorScheme × variant</div>
          <div style={panel}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#3f3f46", marginBottom: 12 }}>Badge</div>
            <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: 20 }}>
              <thead>
                <tr>
                  <th style={{ fontSize: 11, color: "#a1a1aa", fontWeight: 500, textAlign: "left", padding: "0 0 8px" }} />
                  {variants.map((v) => (
                    <th key={v} style={{ fontSize: 11, color: "#a1a1aa", fontWeight: 500, textAlign: "left", padding: "0 0 8px" }}>
                      {v}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {colors.map((c) => (
                  <tr key={c}>
                    <td style={{ fontSize: 12, color: "#71717a", padding: "4px 16px 4px 0", fontWeight: 500 }}>{c}</td>
                    {variants.map((v) => (
                      <td key={v} style={{ padding: "4px 8px 4px 0" }}>
                        <Badge colorScheme={c} variant={v}>{c}</Badge>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#3f3f46", marginBottom: 12 }}>Tag</div>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {colors.map((c) => (
                <Tag key={c} size="md" colorScheme={c} variant="subtle">
                  <TagLabel>{c}</TagLabel>
                  <TagCloseButton />
                </Tag>
              ))}
            </Stack>
          </div>
        </div>
        <Caption text="Chakra UI: Badge と Tag の colorScheme バリエーション" />
      </IllustrationFrame>
    </ChakraProvider>
  );
}
