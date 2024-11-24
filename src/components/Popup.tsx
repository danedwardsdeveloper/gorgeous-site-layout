'use client'

import clsx from 'clsx'

import { PopupButton } from './PopupButton'
import { useLayout } from '@/providers/layout'

export default function Popup() {
  const { showPopup } = useLayout()

  return (
    <div
      data-container="Popup"
      className={clsx(
        'bg-slate-100',
        'transition-all duration-500 overflow-hidden',
        showPopup ? 'h-[80px]' : 'h-0',
      )}
    >
      <div className="border-t border-slate-200" />
      <div className="flex h-full max-w-3xl px-4 mx-auto items-center justify-between">
        <span className="text-lg font-medium">Popup</span>
        <PopupButton onClick="close" />
      </div>
    </div>
  )
}
