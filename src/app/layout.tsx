import type { Metadata, Viewport } from 'next'

import MainContainer from '@/components/MainContainer'
import Menus from '@/components/Menu'
import Popup from '@/components/Popup'
import { Providers } from '@/components/Providers'

import './styles.tailwind.css'

export const metadata: Metadata = {
  title: `Horizontal layout test`,
}

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <body className="antialiased h-screen flex flex-col overflow-hidden bg-slate-50 dark:bg-black">
        <Providers>
          <Menus />
          <MainContainer>{children}</MainContainer>
          <Popup />
        </Providers>
      </body>
    </html>
  )
}
