import { ChakraProvider, Badge, Tag, TagLabel, Stack, extendTheme } from "@chakra-ui/react";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { ServiceIcon } from "../shared/icons";
import { CONTENT_WIDTH } from "../styles/tokens";

const theme = extendTheme({
  fonts: { body: '"Inter", "Tazugane Gothic StdN", sans-serif', heading: '"Inter", "Tazugane Gothic StdN", sans-serif' },
});
const name = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  fontSize: 15,
  fontWeight: 700,
  color: "#18181b",
  letterSpacing: "-0.01em",
  marginBottom: 10,
} as const;
const panel = {
  background: "#fff",
  borderRadius: 16,
  padding: 14,
} as const;

const colors = ["gray", "red", "green", "blue", "purple"] as const;
const variants = ["solid", "subtle", "outline"] as const;

export default function Fig16() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>
      <IllustrationFrame>
        <div style={{ width: CONTENT_WIDTH }}>
          <div style={name}><ServiceIcon name="chakra" size={18} />Badge / Tag — colorScheme × variant</div>
          <div style={panel}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#3f3f46", marginBottom: 12 }}>Badge</div>
            <table style={{ borderCollapse: "collapse", width: "100%", marginBottom: 20 }}>
              <thead>
                <tr>
                  <th style={{ fontSize: 11, color: "#52525b", fontWeight: 700, textAlign: "left", padding: "0 0 8px" }} />
                  {variants.map((v) => (
                    <th key={v} style={{ fontSize: 11, color: "#52525b", fontWeight: 700, textAlign: "left", padding: "0 0 8px" }}>
                      {v}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {colors.map((c) => (
                  <tr key={c}>
                    <td style={{ fontSize: 12, color: "#3f3f46", padding: "4px 16px 4px 0", fontWeight: 700 }}>{c}</td>
                    {variants.map((v) => (
                      <td key={v} style={{ padding: "4px 8px 4px 0" }}>
                        <Badge colorScheme={c} variant={v}>{c}</Badge>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#3f3f46", marginBottom: 12 }}>Tag</div>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {colors.map((c) => (
                <Tag key={c} size="md" colorScheme={c} variant="subtle">
                  <TagLabel>{c}</TagLabel>
                </Tag>
              ))}
            </Stack>
          </div>
        </div>
      </IllustrationFrame>
    </ChakraProvider>
  );
}
