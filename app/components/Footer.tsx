import React from 'react'
import { useLoaderData } from 'remix'

import SocialLinks from '~/components/SocialLinks'
import { LocationAwareLink } from '~/components/Links'

import type { SocialLinks as TSocialLinks } from '~/types/links'

const year = new Date().getFullYear()
const copyright = `© ${year} Andrew Lazenka. All Rights Reserved.`

function Footer() {
  const { socialLinks } = useLoaderData<{ socialLinks: TSocialLinks }>()

  return (
    <footer className="via-grey-300 flex min-h-[300px] w-full items-center bg-gradient-to-b from-gray-50 to-blue-500 transition-all duration-300 ease-in-out dark:from-gray-900 dark:to-gray-600">
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
          <SocialLinks {...socialLinks} />
        </div>
        <div className="block text-center text-xs opacity-50 md:hidden">
          {copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
