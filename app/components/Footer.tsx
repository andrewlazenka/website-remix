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
      <div className="bottom-0 left-0 mb-[-1px] w-full rotate-180 overflow-hidden">
        <ScifiWave />
      </div>
      <footer
        style={{
          backgroundImage: 'linear-gradient(to right,var(--tw-gradient-stops))',
        }}
        className="flex min-h-[250px] w-full items-center from-ctp-mauve to-ctp-sapphire transition-all duration-300 ease-in-out"
      >
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
            <div className="dark:text-ctp-subtext hidden text-center text-xs opacity-50 md:block">
              {copyright}
            </div>
          </div>
          <div className="mx-auto flex w-full justify-between pb-6 sm:w-3/4 md:m-0 md:w-1/2 md:p-0">
            <SocialLinks
              {...socialLinks}
              iconColour="text-white dark:text-gray-900 hover:text-ctp-mauve dark:hover:text-ctp-mauve"
            />
          </div>
          <div className="dark:text-ctp-subtext block text-center text-xs opacity-50 md:hidden">
            {copyright}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
