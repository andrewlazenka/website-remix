import React from 'react'
import { useLoaderData } from 'remix'

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
        <SocialLinks {...socialLinks} iconClassName='dark:text-gray-50 dark:hover:text-orange-500' />
      </div>
    </div>
  )
}

export default () => {
  const [menuModalOpen, setMenuModalOpen] = React.useState<boolean>(false)
  return (
    <div className="absolute z-10 top-0 left-0 w-full">
      <nav className="flex sm:flex-row justify-end mx-auto max-w-5xl w-3/4">
        <div className="flex">
          <div className="flex items-center p-7">
            <ModeToggle />
          </div>
          <div className="flex items-center p-7 cursor-default md:hidden">
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
