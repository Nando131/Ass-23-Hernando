// app/students/[id]/page.js
import { Card, Descriptions, List } from 'antd'

export const dynamic = 'force-dynamic' // SSR untuk setiap userId

export default async function StudentDetailPage({ params }) {
  const { id } = params

  // Ambil data student (static-like, bisa di-cache)
  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: 'force-cache',
  })
  const user = await userRes.json()

  // Ambil posts student (server-side)
  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {
    cache: 'no-store',
  })
  const posts = await postRes.json()

  return (
    <div>
      <h2>Student Details</h2>

      <Card style={{ marginBottom: 16 }}>
        <Descriptions title={user.name} bordered column={1}>
          <Descriptions.Item label="Username">{user.username}</Descriptions.Item>
          <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
          <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
          <Descriptions.Item label="Website">{user.website}</Descriptions.Item>
          <Descriptions.Item label="City">{user.address?.city}</Descriptions.Item>
          <Descriptions.Item label="Company">{user.company?.name}</Descriptions.Item>
        </Descriptions>
      </Card>

      <Card title={`Posts by ${user.name}`}>
        <List
          dataSource={posts}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={item.title} description={item.body} />
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}
