import { ReactNode } from 'react'

function Footer() {
  return (
    <div data-component="FooterContent">
      <span className="text-lg font-medium">Footer</span>
    </div>
  )
}

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <main data-component="MainContainer" className="flex-1 overflow-y-auto w-full">
      <div className="min-h-full flex flex-col lg:mx-16 bg-white">
        <div className="flex-1 max-w-4xl mx-auto pt-12 px-6 ">{children}</div>
        <div
          data-component="FooterContainer"
          className="w-full h-20 shrink-0 flex items-center justify-center border-t border-zinc-200 max-w-6xl mx-auto px-6"
        >
          <Footer />
        </div>
      </div>
    </main>
  )
}
