"use client";

import { Table, Button } from "antd";
import Link from "next/link";

export default function StudentsTable({ students }) {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
    {
      title: "Details",
      key: "details",
      render: (_, record) => (
        <Link href={`/students/${record.id}`}>
          <Button type="primary">View</Button>
        </Link>
      ),
    },
  ];

  return <Table dataSource={students} columns={columns} rowKey="id" />;
}
