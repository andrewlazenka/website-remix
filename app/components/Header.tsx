import React from 'react'
import clsx from 'classnames'

import HamburgerMenu from '~/components/HamburgerMenu'
import ModalMenu from '~/components/ModalMenu'
import ModeToggle from '~/components/ModeToggle'
import SocialLinks from '~/components/SocialLinks'
import { InternalLink } from '~/components/Links'
import useLinksData from '~/hooks/useLinkData'
import { useLocation } from "@remix-run/react";

const menuItems = [
  {
    name: '🏡 Home',
    to: '/',
  },
  {
	name: '🙋🏻‍♂️ About',
	to: '/about',
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
      {menuItems.map(({ name, ...linkProps }, index) => (
        <div className="flex items-center py-6" key={`${name}-${index}`}>
          <InternalLink {...linkProps}>
            <h3 className="font-normal">{name}</h3>
          </InternalLink>
        </div>
      ))}
      <div className="h-[32px]" />
      <div className="flex w-4/5 max-w-6xl items-center justify-around py-6">
        <SocialLinks
          {...socialLinks}
          iconColour="text-gray-900 dark:text-gray-50 hover:text-orange-500 dark:hover:text-orange-500"
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
  const location = useLocation()
  const [menuModalOpen, setMenuModalOpen] = React.useState<boolean>(false)

  const splitPath = location.pathname.split('/')
  let backLinkTo = ''
  let backLinkContent = ''

  if (splitPath.length > 2) {
    const route = String(splitPath[1])
    backLinkTo = `/${route}`
    backLinkContent = `← ${route}`
  } else if (splitPath.length === 2 && Boolean(splitPath[1])) {
    backLinkTo = '/'
    backLinkContent = `← Home`
  }

  return (
    <div
      className={clsx('sticky top-0 left-0 z-10 w-full', {
        ['bg-opacity-70 backdrop-blur-md']: !disableTransparency,
      })}
    >
      <nav className="mx-auto flex w-10/12 max-w-6xl justify-between sm:flex-row">
        {backLinkTo ? (
          <InternalLink
            to={backLinkTo}
            className="flex items-center p-6 capitalize"
          >
            {backLinkContent}
          </InternalLink>
        ) : (
          <div />
        )}
        <div className="flex">
          <div className="flex items-center p-6">
            <ModeToggle className={modeToggleClassName} />
          </div>
          <div className="flex cursor-default items-center p-6">
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
