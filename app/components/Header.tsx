import React from 'react'
import clsx from 'classnames'

import HamburgerMenu from '~/components/HamburgerMenu'
import ModalMenu from '~/components/ModalMenu'
import ModeToggle from '~/components/ModeToggle'
import SocialLinks from '~/components/SocialLinks'
import { InternalLink } from '~/components/Links'
import useLinksData from '~/hooks/useLinkData'

const menuItems = [
  {
    name: '🏡 Home',
    to: '/',
  },
  {
    name: '📝 Notebook',
    to: '/notebook',
  },
]

const MobileMenu = () => {
  const { socialLinks } = useLinksData()
  return (
    <div className="flex flex-col items-center">
      {menuItems.map(({ name, to }, index) => (
        <div className="flex py-6 items-center" key={`${name}-${index}`}>
          <InternalLink to={to}>
            <h3 className="font-normal">{name}</h3>
          </InternalLink>
        </div>
      ))}
      <div className="h-[32px]" />
      <div className="flex w-4/5 items-center justify-around py-6">
        <SocialLinks
          {...socialLinks}
          iconColour="text-gray-900 dark:text-gray-50 dark:hover:text-orange-500"
        />
      </div>
    </div>
  )
}

interface HeaderProps {
  modeToggleClassName?: string
  disableTransparency?: boolean
}

function Header({
  modeToggleClassName,
  disableTransparency = false,
}: HeaderProps) {
  const [menuModalOpen, setMenuModalOpen] = React.useState<boolean>(false)

  return (
    <div
      className={clsx('sticky top-0 left-0 z-10 w-full', {
        ['bg-opacity-70 backdrop-blur-md']: !disableTransparency,
      })}
    >
      <nav className="mx-auto flex w-11/12 max-w-5xl justify-end sm:flex-row">
        <div className="flex">
          <div className="flex items-center p-6">
            <ModeToggle className={modeToggleClassName} />
          </div>
          <div className="flex cursor-default items-center py-8 px-6">
            <HamburgerMenu
              active={menuModalOpen}
              onClick={() => setMenuModalOpen(!menuModalOpen)}
            />
          </div>
        </div>
        <ModalMenu open={menuModalOpen}>
          <MobileMenu />
        </ModalMenu>
      </nav>
    </div>
  )
}

export default Header
