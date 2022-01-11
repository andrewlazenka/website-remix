import React from 'react'
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { isBefore } from 'date-fns'

import Footer from '~/components/Footer'
import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import { ExternalLink } from '~/components/Links'
import Theme from '~/components/Theme'
import WorkExperience from '~/components/WorkExperience'
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
      <div className="relative w-full pt-24">
        <HeroBanner />
        <Header />
        <div className="flex justify-between w-3/4 max-w-screen-md mx-auto my-0 flex-col lg:flex-row items-center">
          <div className="flex flex-col text-xl pt-8 pb-6 lg:py-0 lg:max-w-md max-w-lg">
            <h1 className="text-gray-50 z-0 m-0 font-bold text-center text-5xl">
              Hey! I'm Andrew 👋🏻
            </h1>
          </div>
          <img
            src="/assets/png/AndrewCandid.png"
            alt="Candid headshot of Andrew"
            className="h-[400px] w-[400px] relative overflow-hidden"
          />
        </div>
        <div className="overflow-hidden block absolute inset-x-0 bottom-0 w-full h-16">
          <svg
            preserveAspectRatio="none"
            width="1440"
            height="74"
            viewBox="0 0 1440 74"
            className="left-[-3px] right-[-3px] min-w-[600px] w-[106%] transition-colors duration-300 ease-in-out absolute fill-grayLight dark:fill-grayDark"
          >
            <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
          </svg>
        </div>
      </div>
      <main className="mx-auto my-0 py-12 px-6 max-w-5xl w-3/4">
        <section className="mt-8 py-16">
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
        <section className="py-16">
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
          <ExternalLink to="https://github.com/ALazenka">GitHub</ExternalLink>.
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
