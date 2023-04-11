import React from 'react'
import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

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
    <div className="relative h-[100vh] w-full">
      <main className="relative m-auto max-w-screen-md">
        <div className="absolute left-0 top-0 z-10 flex w-full flex-row-reverse">
          <div className="m-auto flex w-4/5 max-w-[525px] justify-end py-9 text-gray-50">
            <ModeToggle />
          </div>
        </div>
        <div
          className="flex justify-center pb-4 pt-16"
          style={imageAnimation}
          ref={imageRef}
        >
          <img
            src="/assets/png/AndrewCandid.png"
            className="hvr-float-shadow h-[150px] w-[150px] rounded-full border-4 border-solid border-gray-50 bg-orange-500"
            alt="Candid headshot of Andrew"
          />
        </div>
        <div
          className="relative z-10 m-auto flex justify-center"
          style={imageAnimation}
          ref={imageRef}
        >
          <h2 className="tracking-widest text-gray-50">Andrew Lazenka</h2>
        </div>
        <div
          className="m-auto flex w-4/5 max-w-[450px] flex-wrap justify-around py-6"
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
                <div className="m-auto flex justify-center text-gray-50">
                  <InternalLink
                    className="relative m-auto my-4 block w-4/5 rounded-full border-2 border-solid border-gray-50 py-4 text-center font-semibold uppercase tracking-[0.2em] text-gray-50 hover:bg-orange-500"
                    to={l.url}
                    textColour="text-gray-50"
                  >
                    {l.content}
                  </InternalLink>
                </div>
              ) : (
                <div className="m-auto flex justify-center">
                  <ExternalLink
                    className="relative m-auto my-4 block w-4/5 rounded-full border-2 border-solid border-gray-50 py-4 text-center font-semibold uppercase tracking-[0.2em] text-gray-50 hover:bg-orange-500"
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
