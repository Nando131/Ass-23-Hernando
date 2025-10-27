'use client'

import Link from 'next/link'
import { Typography, Button } from 'antd'

const { Title, Paragraph } = Typography

export default function HomePage() {
  return (
    <div>
      <Title level={2}>Welcome to the Students App</Title>
      <Paragraph>
        This app demonstrates <b>static</b>, <b>server-side</b>, and <b>dynamic</b> data fetching
        using Next.js App Router and Ant Design components.
      </Paragraph>
      <Paragraph>
        Click below to explore the student list:
      </Paragraph>
      <Link href="/students">
        <Button type="primary" size="large">
          View Students
        </Button>
      </Link>
    </div>
  )
}
