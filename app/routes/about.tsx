import React from 'react'
import { type LoaderFunction, type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { isBefore } from 'date-fns'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import EmojiWiggle from '~/components/EmojiWiggle'
import Layout from '~/components/Layout'
import { ExternalLink } from '~/components/Links'
import WorkExperience from '~/components/WorkExperience'

import { getJourneyMeta } from '~/queries/journey'

import type { JourneyMeta } from '~/types/journey'

export const meta: MetaFunction = () => ({
  title: `About - Andrew Lazenka`,
})

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

function About() {
  const { journey } = useLoaderData<{ journey: JourneyMeta[] }>()
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-8 text-center font-bold">
          <EmojiWiggle>📝</EmojiWiggle> About
        </h1>
      </HeroBanner>
      <Layout>
        <Bio />
        <Experience
          experience={journey.filter(({ type }) => type === 'work')}
        />
        <Education
          education={journey.filter(({ type }) => type === 'school')}
        />
      </Layout>
      <Footer />
    </Theme>
  )
}

function Bio() {
  return (
    <section className="py-16 text-lg">
      <h2 className="py-8 text-4xl font-bold" id="about">
        Welcome to my corner of the metaverse!
      </h2>
      I'm a software engineer devoting my efforts to building scalable,
      resilient, highly available systems.
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
      <ExternalLink to="https://www.tailwindcss.com">TailwindCSS</ExternalLink>,
      and the latest addition to my full-stack palette is{' '}
      <ExternalLink to="https://remix.run">Remix</ExternalLink>.
      <br />
      <br />I enjoy tinkering on side projects in my spare time, which you can
      find on{' '}
      <ExternalLink to="https://github.com/ALazenka">GitHub</ExternalLink>
      .
      <br />
      <br />
      In another life I would totally be a musician. Writing, producing and
      performing music is a big passion of mine. If you're into funk & rock you
      should definitely check out my band{' '}
      <ExternalLink to="https://prettyyoungthangband.com">
        Pretty Young Thang
      </ExternalLink>{' '}
      🤘🏻
    </section>
  )
}

function Experience({ experience }: { experience: JourneyMeta[] }) {
  return (
    <section>
      <h2 id="journey" className="py-8 text-center text-4xl font-semibold">
        Experience
      </h2>
      {experience
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
  )
}

function Education({ education }: { education: JourneyMeta[] }) {
  return (
    <section>
      <h2 id="journey" className="py-8 text-center text-4xl font-semibold">
        Education
      </h2>
      {education
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
  )
}

export default About
