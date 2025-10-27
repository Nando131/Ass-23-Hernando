// app/students/page.js
import { Table, Button } from 'antd'
import Link from 'next/link'

export const dynamic = 'force-static' // SSG

export default async function StudentsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'force-cache',
  })
  const users = await res.json()

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'City', dataIndex: ['address', 'city'], key: 'city' },
    {
      title: 'Details',
      key: 'details',
      render: (_, record) => (
        <Link href={`/students/${record.id}`}>
          <Button type="primary">Details</Button>
        </Link>
      ),
    },
  ]

  return (
    <div>
      <h2>Students List</h2>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={users}
        pagination={{ pageSize: 5 }}
      />
    </div>
  )
}
