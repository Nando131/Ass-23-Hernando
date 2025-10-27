import { Typography } from 'antd'

const { Title, Paragraph } = Typography

export default function AboutPage() {
  return (
    <div>
      <Title level={2}>About This Project</Title>
      <Paragraph>
        This project is part of an assessment to show how Next.js App Router handles different
        data-fetching strategies — using Ant Design for a clean UI.
      </Paragraph>
      <Paragraph>
        Created by <b>Hernando</b> 😎
      </Paragraph>
    </div>
  )
}
