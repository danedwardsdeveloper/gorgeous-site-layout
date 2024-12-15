'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ElementRef, RefObject, useEffect, useRef } from 'react'

import { useLayout } from '@/providers/layout'

const menuItems: Array<{ displayName: string; href: string; id: string }> = [
  { displayName: 'Short content', href: '/short-content', id: 'menuItemOne' },
  {
    displayName: 'Long content',
    href: '/long-content',
    id: 'menuItemTwo',
  },
  {
    displayName: 'Two-column layout',
    href: '/two-column-layout',
    id: 'twoColumnLayout',
  },
]

function NavLink({
  href,
  displayName,
  classes,
  activeClasses,
  isActive,
}: {
  href: string
  displayName: string
  classes: string
  activeClasses: string
  isActive: boolean
}) {
  const { setMobilePanelVisible } = useLayout()
  return (
    <Link
      href={href}
      className={clsx(classes, isActive && activeClasses)}
      onClick={() => setMobilePanelVisible(false)}
    >
      {displayName}
    </Link>
  )
}

export function MenuIcon({ menuOpen }: { menuOpen: boolean }) {
  const baseClasses = 'w-6 h-0.5 bg-slate-400 rounded-full transform transition-all duration-500'
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
      <span className={clsx(baseClasses, menuOpen ? 'rotate-45 translate-y-2' : '')} />
      <span className={clsx(baseClasses, menuOpen && 'opacity-0')} />
      <span className={clsx(baseClasses, menuOpen ? '-rotate-45 -translate-y-2' : '')} />
    </div>
  )
}

function MobileMenuButton({ classes, activeClasses }: { classes: string; activeClasses: string }) {
  const { mobilePanelVisible, toggleMobilePanelVisible } = useLayout()

  return (
    <button
      onClick={() => {
        toggleMobilePanelVisible()
      }}
      className={clsx(classes, mobilePanelVisible && activeClasses, 'flex space-x-2')}
    >
      <span>Menu</span>
      <MenuIcon menuOpen={mobilePanelVisible} />
    </button>
  )
}

export function MobileMenu({ ref }: { ref: RefObject<HTMLDivElement> }) {
  const { mobilePanelVisible, menusVisible } = useLayout()
  const pathname = usePathname()

  const baseClasses =
    'bg-slate-100 border border-transparent active:border-slate-500 py-0.5 px-2 rounded transition-colors duration-300'

  return (
    <header
      ref={ref}
      data-component="MobileMenu"
      className={clsx(
        'md:hidden relative overflow-hidden',
        'transition-all duration-500 transform-gpu',
        'after:absolute after:bottom-0 after:left-0 after:right-0',
        'after:bg-slate-300 after:transition-all after:duration-500',
        menusVisible
          ? mobilePanelVisible
            ? 'h-[206px] after:bottom-0 after:h-[2px]'
            : 'h-10 after:bottom-0 after:h-[2px]'
          : 'h-0 after:h-0',
      )}
    >
      <div
        data-component="MobileMenuHeader"
        className="h-10 bg-slate-50 flex items-center justify-between px-2 border-t border-slate-200"
      >
        <NavLink
          displayName="Home"
          href="/"
          classes={clsx(baseClasses, 'font-medium')}
          activeClasses={'bg-slate-200'}
          isActive={pathname === '/'}
        />
        <MobileMenuButton classes={clsx(baseClasses, 'font-medium')} activeClasses={'bg-slate-200'} />
      </div>
      <div
        data-component="MobileMenuPanel"
        className={clsx(
          'absolute z-50 w-full top-10',
          'bg-slate-50',
          'border-t border-t-slate-200',
          'transition-all duration-700 ease-in-out overflow-hidden',
          'after:absolute after:bottom-0 after:left-0 after:right-0',
          'after:bg-slate-300 after:transition-all after:duration-500',
          mobilePanelVisible ? 'h-[164px]' : 'h-0',
        )}
      >
        <div className="px-6 py-4">
          <div className="flex flex-col space-y-6">
            {menuItems.map(({ displayName, href, id }) => (
              <NavLink
                key={id}
                displayName={displayName}
                href={href}
                classes={clsx(baseClasses, 'w-fit')}
                activeClasses={'bg-slate-100'}
                isActive={pathname === href}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export function DesktopMenu({ ref }: { ref: RefObject<HTMLDivElement> }) {
  const { menusVisible } = useLayout()
  const pathname = usePathname()

  const baseClasses =
    'bg:slate-100 hover:bg-slate-200 border border-transparent active:border-slate-500 py-0.5 px-2 rounded transition-colors duration-300'
  const activeClasses = 'bg-slate-200'

  return (
    <header
      ref={ref}
      data-component="DesktopMenu"
      className={clsx(
        'hidden md:block',
        'bg-slate-50',
        'transition-all duration-500 overflow-hidden relative transform-gpu',
        menusVisible ? 'h-10 after:h-[2px]' : 'h-0 after:h-0',
        'after:absolute after:bottom-0 after:left-0 after:right-0',
        'after:bg-slate-100 after:transition-all after:duration-500',
      )}
    >
      <div className="flex h-full items-center justify-start gap-4 max-w-4xl px-4 mx-auto">
        <NavLink
          href="/"
          displayName="Home"
          classes={baseClasses}
          activeClasses={activeClasses}
          isActive={pathname === '/'}
        />
        {menuItems.map(({ displayName, href, id }) => (
          <NavLink
            key={id}
            displayName={displayName}
            href={href}
            classes={baseClasses}
            activeClasses={activeClasses}
            isActive={pathname === href}
          />
        ))}
      </div>
    </header>
  )
}

export default function Menus() {
  const ref = useRef<ElementRef<'div'>>(null)
  const lastScrollTop = useRef(0)
  const { setMenusVisible, mobilePanelVisible } = useLayout()

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto') as HTMLElement
    if (!scrollContainer) return

    function updateHeaderStyles() {
      if (mobilePanelVisible) {
        setMenusVisible(true)
        return
      }

      const scrollTop = scrollContainer.scrollTop
      const isAtBottom = scrollContainer.scrollHeight - scrollContainer.clientHeight <= scrollTop + 10

      if (!isAtBottom) {
        if (scrollTop > lastScrollTop.current) {
          setMenusVisible(false)
        } else {
          setMenusVisible(true)
        }
      }

      lastScrollTop.current = scrollTop
    }

    const handleScroll = () => requestAnimationFrame(updateHeaderStyles)

    scrollContainer.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [mobilePanelVisible, setMenusVisible])

  return (
    <>
      <MobileMenu ref={ref} />
      <DesktopMenu ref={ref} />
    </>
  )
}
