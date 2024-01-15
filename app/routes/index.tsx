import React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { useNavigate, useLocation } from '@remix-run/react'
import { animated, useSpring } from 'react-spring'

import EmojiWiggle from '~/components/EmojiWiggle'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import type { Location } from 'history'

export let meta: MetaFunction = () => {
  return {
    title: 'Andrew Lazenka',
  }
}

function getResetPasswordRoute(location: Location) {
  if (location.hash && location.hash.substr(0, 1) === '#') {
    const tokens = location.hash.substr(1).split('&')
    const entryPayload: { [key: string]: string } = {}
    tokens.map((token) => {
      const pair = (token + '=').split('=')
      entryPayload[pair[0]] = pair[1]
    })
    if (entryPayload?.type === 'recovery') {
      return `/admin/reset-password/?token=${entryPayload.access_token}`
    }
  }
  let path = location.pathname.replace(/\//, '')
  // remove querystring from path
  if (path.indexOf('?') > -1) {
    path = path.substr(0, path.indexOf('?'))
  }
  return path
}

function useResetPassword() {
  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    const path = getResetPasswordRoute(location)

    if (path) {
      navigate(path, { replace: true })
    }
  }, [])
}

export default function Home() {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 750,
    },
  })
  useResetPassword()

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
