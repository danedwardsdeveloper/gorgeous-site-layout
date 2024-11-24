'use client'

import { LayoutProvider } from '@/providers/layout/layout'

export function Providers({ children }: { children: React.ReactNode }) {
  return <LayoutProvider>{children}</LayoutProvider>
}
