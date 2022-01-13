import React from 'react'
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { isBefore } from 'date-fns'

import Footer from '~/components/Footer'
import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import { ExternalLink } from '~/components/Links'
import Theme from '~/components/Theme'
import WorkExperience from '~/components/WorkExperience'
import WaveDivider from '~/components/svg/dividers/Wave'
import { getJourneyMeta } from '~/queries/journey'
import { getLinks } from '~/queries/links'
import { formatLinks } from '~/util/links'

import type { JourneyMeta } from '~/types/journey'

export let meta: MetaFunction = () => {
  return {
    title: 'Andrew Lazenka',
  }
}

export const loader: LoaderFunction = async () => {
  const journey = (await getJourneyMeta()) || []
  const links = (await getLinks()) || []

  return {
    journey,
    ...formatLinks(links),
  }
}

function sortFilterWork(ex1: JourneyMeta, ex2: JourneyMeta) {
  const date1 = ex1.end_date ? new Date(ex1.end_date) : new Date()
  const date2 = ex2.end_date ? new Date(ex2.end_date) : new Date()

  return isBefore(date1, date2) ? 1 : -1
}

export default function Home() {
  const { journey } = useLoaderData<{ journey: JourneyMeta[] }>()

  return (
    <Theme>
      <HeroBanner>
        <div className="w-3/4 max-w-4xl mx-auto my-0 py-16 sm:py-24 lg:py-0">
          <h1 className="text-gray-50 z-0 m-0 font-bold text-center text-5xl">
            Hey! I'm Andrew{' '}
            <span className="inline-block hover:animate-wave">👋🏻</span>
          </h1>
        </div>
        <div className="absolute w-full flex justify-center bottom-0">
          <img
            src="/assets/png/AndrewCandid.png"
            alt="Candid headshot of Andrew"
            className="h-[475px] w-[475px]"
          />
        </div>
        <div className="absolute block overflow-hidden inset-x-0 bottom-0 w-full h-16">
          <WaveDivider className="left-[-3px] right-[-3px] min-w-[600px] w-[106%] transition-colors duration-300 ease-in-out absolute fill-grayLight dark:fill-grayDark" />
        </div>
      </HeroBanner>
      <Header />
      <main className="mx-auto my-0 py-12 px-6 max-w-5xl w-3/4">
        <section className="py-8">
          <h2 id="journey" className="text-4xl text-center">
            My Journey
          </h2>
          {journey.sort(sortFilterWork).map((entry: JourneyMeta) => {
            const startDate = new Date(entry.start_date)
            const jobEnd = entry.is_active
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
          <h2 className="py-8 text-4xl" id="about">
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
