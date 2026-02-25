import { ConfigProvider, Tag, Badge, Space } from "antd";
import { IllustrationFrame } from "../shared/IllustrationFrame";
import { ServiceIcon } from "../shared/icons";
import { CONTENT_WIDTH } from "../styles/tokens";
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
const note = { fontSize: 11, color: "#3f3f46", marginTop: 14 } as const;

export default function Fig13() {
  return (
    <ConfigProvider theme={{ token: { fontFamily: '"Inter", "Tazugane Gothic StdN", sans-serif' } }}>
      <IllustrationFrame>
        <div style={{ display: "flex", gap: 16, width: CONTENT_WIDTH }}>
          <div style={{ flex: 1 }}>
            <div style={name}><ServiceIcon name="antdesign" size={18} />Tag</div>
            <div style={panel}>
              <Space size={[6, 8]} wrap>
                <Tag color="processing">Processing</Tag>
                <Tag color="success">Success</Tag>
                <Tag color="warning">Warning</Tag>
                <Tag color="error">Error</Tag>
              </Space>
              <div style={{ marginTop: 10 }}>
                <Space size={[6, 8]} wrap>
                  <Tag color="magenta">magenta</Tag>
                  <Tag color="volcano">volcano</Tag>
                  <Tag color="cyan">cyan</Tag>
                  <Tag color="geekblue">geekblue</Tag>
                </Space>
              </div>
              <div style={note}>カテゴリやステータスのラベル</div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={name}><ServiceIcon name="antdesign" size={18} />Badge</div>
            <div style={panel}>
              <Space direction="vertical" size={8}>
                <Badge status="success" text="Success" />
                <Badge status="processing" text="Processing" />
                <Badge status="warning" text="Warning" />
                <Badge status="error" text="Error" />
              </Space>
              <div style={{ marginTop: 14 }}>
                <Space size={12}>
                  <Badge count={5} />
                  <Badge count={25} />
                  <Badge count={99} />
                </Space>
              </div>
              <div style={note}>件数や状態を示すドット</div>
            </div>
          </div>
        </div>
      </IllustrationFrame>
    </ConfigProvider>
  );
}
