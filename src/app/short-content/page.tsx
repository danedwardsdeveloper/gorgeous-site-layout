import { PopupButton } from '@/components/PopupButton'

import { generateBulldogParagraphs } from '../bulldogContent'

export default function Page() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Short content</h1>
      <PopupButton classes="mb-6" />
      {generateBulldogParagraphs(2)}
    </>
  )
}
