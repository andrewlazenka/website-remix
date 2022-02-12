import React from 'react'

import SocialLinks from '~/components/SocialLinks'
import { LocationAwareLink } from '~/components/Links'
import useLinksData from '~/hooks/useLinkData'
import ScifiWave from './svg/dividers/ScifiWave'

const year = new Date().getFullYear()
const copyright = `© ${year} Andrew Lazenka. All Rights Reserved.`

function Footer() {
  const { socialLinks } = useLinksData()

  return (
    <div className="pt-12">
      <div className="left-0 bottom-0 w-full rotate-180 overflow-hidden">
        <ScifiWave className="fill-blue-500 dark:fill-white" />
      </div>
      <footer className="flex min-h-[250px] w-full items-center bg-blue-500 dark:bg-white transition-all duration-300 ease-in-out">
        <div className="mx-auto flex w-3/4 max-w-5xl flex-col justify-between px-5 md:flex-row">
          <div>
            <div className="flex justify-center pb-6 md:p-0">
              <LocationAwareLink to="/">
                <img
                  src="/assets/png/AndrewLogo.png"
                  alt="Site Logo - Andrew Lazenka"
                  className="h-10"
                />
              </LocationAwareLink>
            </div>
            <div className="hidden text-center text-xs opacity-50 md:block">
              {copyright}
            </div>
          </div>
          <div className="mx-auto flex w-full justify-between pb-6 sm:w-3/4 md:m-0 md:w-1/2 md:p-0">
            <SocialLinks
              {...socialLinks}
              iconColour="text-white dark:text-gray-900 hover:text-orange-500 dark:hover:text-orange-500"
            />
          </div>
          <div className="block text-center text-xs dark:text-gray-900 opacity-50 md:hidden">
            {copyright}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
