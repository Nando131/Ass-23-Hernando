"use client";
import { Typography, Card } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  return (
    <div style={{ padding: "20px" }}>
      <Card>
        <Title level={2}>About This App</Title>
        <Paragraph>
          This app demonstrates how to combine static, server-side, and dynamic data fetching using Next.js and Ant Design.
        </Paragraph>
      </Card>
    </div>
  );
}
