import React from 'react'
import { LoaderFunction, useLoaderData } from 'remix'

import ModeToggle from '~/components/ModeToggle'
import { InternalLink, ExternalLink } from '~/components/Links'
import HeroBanner from '~/components/HeroBanner'
import SocialLinks from '~/components/SocialLinks'
import useFadeIn from '~/hooks/useFadeIn'
import { getLinks } from '~/queries/links'
import type { Link } from '~/types/links'
import { formatLinks } from '~/util/links'

export const loader: LoaderFunction = async () => {
  const links = await getLinks()
  if (links) {
    return formatLinks(links)
  }

  return null
}

function Links() {
  const [imageAnimation, imageRef] = useFadeIn({ duration: 1, fadeFrom: 'top' })
  const [socialsAnimation, socialsRef] = useFadeIn({
    duration: 1,
    fadeFrom: 'left',
    observerProps: {
      delay: 500,
    },
  })
  const [linksAnimation, linksRef] = useFadeIn({
    duration: 1,
    fadeFrom: 'right',
    observerProps: {
      delay: 500,
    },
  })
  const { customLinks, socialLinks } = useLoaderData<{
    customLinks: Link[]
    socialLinks: { [key: string]: string }
  }>()

  return (
    <div className="relative w-full h-[100vh]">
      <main className="relative max-w-screen-md m-auto">
        <div className="absolute flex flex-row-reverse z-10 top-0 left-0 w-full">
          <div className="flex justify-end w-4/5 max-w-[525px] m-auto py-9 text-gray-50">
            <ModeToggle />
          </div>
        </div>
        <div
          className="flex justify-center pt-16 pb-4"
          style={imageAnimation}
          ref={imageRef}
        >
          <img
            src="/assets/png/AndrewCandid.png"
            className="h-[150px] w-[150px] border-solid border-4 bg-orange-500 border-gray-50 rounded-full hvr-float-shadow"
            alt="Candid headshot of Andrew"
          />
        </div>
        <div
          className="z-10 flex justify-center m-auto relative"
          style={imageAnimation}
          ref={imageRef}
        >
          <h2 className="text-gray-50 tracking-widest">Andrew Lazenka</h2>
        </div>
        <div
          className="flex flex-wrap w-4/5 max-w-[450px] justify-around m-auto py-6"
          style={socialsAnimation}
          ref={socialsRef}
        >
          <SocialLinks
            {...socialLinks}
            iconClassName="text-gray-50 hover:text-orange-500"
          />
        </div>
        <div style={linksAnimation} ref={linksRef}>
          {customLinks.map((l) => (
            <>
              {l.url.charAt(0) === '/' ? (
                <div className="flex justify-center m-auto text-gray-50">
                  <InternalLink
                    className="block relative w-4/5 my-4 py-4 hover:bg-orange-500 text-gray-50 border-solid border-2 border-gray-50 rounded-full m-auto text-center uppercase font-semibold tracking-[0.2em]"
                    to={l.url}
                    textColour="text-gray-50"
                  >
                    {l.content}
                  </InternalLink>
                </div>
              ) : (
                <div className="flex justify-center m-auto">
                  <ExternalLink
                    className="block relative w-4/5 my-4 py-4 hover:bg-orange-500 text-gray-50 border-solid border-2 border-gray-50 rounded-full m-auto text-center uppercase font-semibold tracking-[0.2em]"
                    to={l.url}
                    textColour="text-gray-50"
                  >
                    {l.content}
                  </ExternalLink>
                </div>
              )}
            </>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Links
