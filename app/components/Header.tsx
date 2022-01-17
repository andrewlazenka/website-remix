import React from 'react'
import { useLoaderData } from 'remix'
import clsx from 'classnames'

import HamburgerMenu from '~/components/HamburgerMenu'
import ModalMenu from '~/components/ModalMenu'
import ModeToggle from '~/components/ModeToggle'
import SocialLinks from '~/components/SocialLinks'

const MobileMenu = () => {
  const { socialLinks } =
    useLoaderData<{ socialLinks: { [key: string]: string } }>()
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around items-center w-4/5 py-6">
        <SocialLinks
          {...socialLinks}
          iconClassName="dark:text-gray-50 dark:hover:text-orange-500"
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
      className={clsx('sticky z-10 top-0 left-0 w-full', {
        ['bg-opacity-70 backdrop-blur-md']: !disableTransparency,
      })}
    >
      <nav className="flex sm:flex-row justify-end mx-auto max-w-5xl w-3/4">
        <div className="flex">
          <div className="flex items-center px-4 py-7">
            <ModeToggle className={modeToggleClassName} />
          </div>
          <div className="flex items-center px-4 py-7 cursor-default sm:hidden">
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
