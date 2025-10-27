// app/layout.js
import '../styles/globals.css'
import 'antd/dist/reset.css'
import LayoutAntd from '../components/LayoutAntd'

export const metadata = {
  title: 'Students App',
  description: 'Next.js App Router demo with Ant Design and data fetching',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#f0f2f5' }}>
        <LayoutAntd>
          {children}
        </LayoutAntd>
      </body>
    </html>
  )
}
