// components/LayoutAntd.js
'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Layout, Menu, Drawer, Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useState } from 'react'

const { Header, Content, Footer } = Layout

export default function LayoutAntd({ children }) {
  const pathname = usePathname() || '/'
  const [open, setOpen] = useState(false)

  // determine selected menu key
  const getSelectedKey = (path) => {
    if (path.startsWith('/students')) return '/students'
    if (path.startsWith('/about')) return '/about'
    return '/'
  }

  const selectedKey = getSelectedKey(pathname)

  const menuItems = [
    { label: <Link href="/">Home</Link>, key: '/' },
    { label: <Link href="/students">Students</Link>, key: '/students' },
    { label: <Link href="/about">About</Link>, key: '/about' },
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <div style={{ color: 'white', fontWeight: 700, fontSize: 18, marginRight: 24 }}>
          MySchool
        </div>

        {/* desktop menu */}
        <div style={{ flex: 1, display: 'none', justifyContent: 'flex-start' }} className="nav-desktop">
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[selectedKey]}
            items={menuItems}
          />
        </div>

        {/* mobile hamburger */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: 'white', fontSize: 20 }} />}
            onClick={() => setOpen(true)}
          />
        </div>

        <Drawer
          title="Navigation"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <Menu
            mode="vertical"
            selectedKeys={[selectedKey]}
            items={menuItems.map(item => ({ ...item, label: <Link href={item.key}>{item.label.props?.children ?? item.label}</Link> }))}
            onClick={() => setOpen(false)}
          />
        </Drawer>
      </Header>

      <Content style={{ padding: '24px 24px', maxWidth: 1100, margin: '24px auto', width: '100%' }}>
        <div style={{ background: '#ffffff', padding: 24, minHeight: 480, borderRadius: 8 }}>
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Built with Next.js (App Router) • Ant Design
      </Footer>

      <style jsx>{`
        /* show desktop menu on wide screens */
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
        }
      `}</style>
    </Layout>
  )
}
