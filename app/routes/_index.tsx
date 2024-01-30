import React from 'react'
import type { MetaFunction } from '@remix-run/cloudflare'
import { animated, useSpring } from 'react-spring'

import EmojiWiggle from '~/components/EmojiWiggle'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'

export const meta: MetaFunction = () => [
  {
    title: 'Andrew Lazenka',
  },
]

export default function Home() {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 750,
    },
  })

  return (
    <Theme>
      <Header />
      <HeroBanner slim>
        <animated.div
          style={fade}
          className="mx-auto my-0 flex w-3/4 max-w-4xl flex-row justify-center pb-8 pt-16"
        >
          <h1
            style={{
              backgroundImage:
                'linear-gradient(to right,var(--tw-gradient-stops))',
              color: 'transparent',
              backgroundClip: 'text',
            }}
            className="z-0 m-0 from-ctp-sapphire to-ctp-lavender pb-2 text-5xl font-semibold"
          >
            Hey! I'm Andrew{' '}
          </h1>
          <EmojiWiggle className="pl-2 text-5xl">👋🏻</EmojiWiggle>
        </animated.div>
        <animated.div style={fade} className="flex w-full justify-center">
          <img
            src="/assets/png/AndrewCandid.png"
            alt="Candid headshot of Andrew"
            className="h-[250px] w-[250px] md:h-[400px] md:w-[400px]"
          />
        </animated.div>
      </HeroBanner>
      <Footer />
    </Theme>
  )
}
