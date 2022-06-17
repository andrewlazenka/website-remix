import React from 'react'
import {
  LoaderFunction,
  MetaFunction,
  useNavigate,
  useLoaderData,
  useLocation,
} from 'remix'
import { isBefore } from 'date-fns'
import { animated, useSpring } from 'react-spring'

import EmojiWiggle from '~/components/EmojiWiggle'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import { ExternalLink } from '~/components/Links'
import Theme from '~/components/Theme'
import WorkExperience from '~/components/WorkExperience'
import { getJourneyMeta } from '~/queries/journey'

import type { JourneyMeta } from '~/types/journey'
import type { Location } from 'history'

export let meta: MetaFunction = () => {
  return {
    title: 'Andrew Lazenka',
  }
}

export const loader: LoaderFunction = async () => {
  const journey = (await getJourneyMeta()) || []

  return {
    journey,
  }
}

function sortFilterWork(ex1: JourneyMeta, ex2: JourneyMeta) {
  const date1 = ex1.end_date ? new Date(ex1.end_date) : new Date()
  const date2 = ex2.end_date ? new Date(ex2.end_date) : new Date()

  return isBefore(date1, date2) ? 1 : -1
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
      return `/reset-password/?token=${entryPayload.access_token}`
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
  const { journey } = useLoaderData<{ journey: JourneyMeta[] }>()
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
          className="mx-auto my-0 w-3/4 max-w-4xl pt-16 pb-8"
        >
          <h1 className="z-0 m-0 text-center text-5xl font-semibold text-gray-50 dark:text-gray-900">
            Hey! I'm Andrew <EmojiWiggle>👋🏻</EmojiWiggle>
          </h1>
        </animated.div>
        <animated.div style={fade} className="flex w-full justify-center">
          <img
            src="/assets/png/AndrewCandid.png"
            alt="Candid headshot of Andrew"
            className="h-[250px] w-[250px] md:h-[400px] md:w-[400px]"
          />
        </animated.div>
      </HeroBanner>
      <main className="mx-auto my-0 w-3/4 max-w-5xl md:p-6">
        <section>
          <h2 id="journey" className="py-8 text-center text-4xl font-semibold">
            My Journey
          </h2>
          {journey
            .filter(({ is_active }) => Boolean(is_active))
            .sort(sortFilterWork)
            .map((entry: JourneyMeta) => {
              const startDate = new Date(entry.start_date)
              const jobEnd =
                entry.end_date === null
                  ? 'Present'
                  : `${startDate.getMonth()} ${startDate.getFullYear()}`
              return (
                <WorkExperience
                  key={`${entry.company} - ${entry.position} - ${jobEnd}`}
                  {...entry}
                />
              )
            })}
        </section>
        <section className="py-16 text-lg">
          <h2 className="py-8 text-4xl font-bold" id="about">
            Welcome to my corner of the metaverse!
          </h2>
          I'm a software engineer devoting my efforts to building scalable,
          resilient, highly available systems. I've got it pretty good working
          at <ExternalLink to="https://lunchbox.io">Lunchbox</ExternalLink>{' '}
          being able to combine my love for food & code ❤️
          <br />
          <br />
          In 2020, about a month after the world shutdown, I completed my
          undergraduate studies at Queen's University to receive a Bachelor in
          Computer Science with a specialization in Software Design.
          <br />
          <br />I have a passion for learning new technologies and incorporating
          them into my work. Right now I'm gravitating towards memory efficient,
          portable languages such as{' '}
          <ExternalLink to="https://www.rust-lang.org">Rust</ExternalLink>
          {' & '}
          <ExternalLink to="https://golang.org">Go</ExternalLink>. For frontend
          projects my go-to styling library is{' '}
          <ExternalLink to="https://www.tailwindcss.com">
            TailwindCSS
          </ExternalLink>
          , and the latest addition to my full-stack palette is{' '}
          <ExternalLink to="https://remix.run">Remix</ExternalLink>.
          <br />
          <br />I enjoy tinkering on side projects in my spare time, which you
          can find on{' '}
          <ExternalLink to="https://github.com/ALazenka">GitHub</ExternalLink>
          .
          <br />
          <br />
          In another life I would totally be a musician. Writing, producing and
          performing music is a big passion of mine. If you're into funk & rock
          you should definitely check out my band{' '}
          <ExternalLink to="https://prettyyoungthangband.com">
            Pretty Young Thang
          </ExternalLink>{' '}
          🤘🏻
        </section>
      </main>
      <Footer />
    </Theme>
  )
}
