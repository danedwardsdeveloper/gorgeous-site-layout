import { PopupButton } from '@/components/PopupButton'

import { generateBulldogParagraphs } from '../bulldogContent'

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-16">Two-column layout</h1>

      <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-[1fr_320px] lg:gap-y-12">
        <div>
          <h1 className="text-2xl font-bold mb-4">Column one</h1>
          <PopupButton classes="mb-6" />
          {generateBulldogParagraphs(10)}
        </div>
        <div className="lg:mt-20">
          <h1 className="text-2xl font-bold mb-4">Column two</h1>
          {generateBulldogParagraphs(10)}
        </div>
      </div>
    </>
  )
}
