import React from 'react'
import type { MetaFunction } from '@remix-run/cloudflare'

import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import EmojiWiggle from '~/components/EmojiWiggle'
import Layout from '~/components/Layout'
import { ExternalLink } from '~/components/Links'

export const meta: MetaFunction = () => [
  {
    title: `Reading List - Andrew Lazenka`,
  },
]

const affiliateUrl = (asin: string) =>
  `https://www.amazon.com/dp/${asin}/ref=nosim?tag=andrewlazenka-20`

function ReadingList() {
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-4 text-center font-bold">
          <EmojiWiggle>📚</EmojiWiggle> Reading List
        </h1>
        <h3 className="text-center font-normal">Updated February 13th, 2024</h3>
      </HeroBanner>
      <Layout>
        <section className="py-4 text-lg">
          This is a list of books I've read on a variety of topics.
        </section>

        <section className="py-4 text-lg">
          <h2>Currently Reading</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('')}>
                <ExternalLink to={affiliateUrl('0316219282')}>
                  The Everything Store
                </ExternalLink>{' '}
              </ExternalLink>{' '}
              by Brad Stone
            </li>
          </ul>
        </section>
        <section className="py-4 text-lg">
          <h2>General</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('1991152310')}>
                How to Live
              </ExternalLink>{' '}
              by Derek Sivers
            </li>
            <li>
              <ExternalLink to={affiliateUrl('0525536515')}>
                Digital Minimalist
              </ExternalLink>{' '}
              by Cal Newport
            </li>
            <li>
              <ExternalLink to={affiliateUrl('1455586692')}>
                Deep Work
              </ExternalLink>{' '}
              by Cal Newport
            </li>
            <li>
              <ExternalLink to={affiliateUrl('1936891026')}>
                The War of Art
              </ExternalLink>{' '}
              by Steven Pressfield
            </li>
            <li>
              <ExternalLink to={affiliateUrl('0593652886')}>
                The Creative Act
              </ExternalLink>{' '}
              by Rick Ruben
            </li>
          </ul>
        </section>
        <section className="py-4 text-lg">
          <h2>Business</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('1591845823')}>
                Built to Sell
              </ExternalLink>{' '}
              by John Warrillow
            </li>
            <li>
              <ExternalLink to={affiliateUrl('034943140X')}>
                The Minimalist Entrepeneur
              </ExternalLink>{' '}
              by Sahil Lavignia
            </li>
            <li>
              <ExternalLink to={affiliateUrl('059353977X')}>
                Million Dollar Weekend
              </ExternalLink>{' '}
              by Noah Kagan
            </li>
          </ul>
        </section>
        <section className="py-4 text-lg">
          <h2>Programming</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('0135957052')}>
                The Pragmatic Programmer
              </ExternalLink>{' '}
              by David Thomas
            </li>
            <li>
              <ExternalLink to={affiliateUrl('1098151240')}>
                Tidy First?
              </ExternalLink>{' '}
              by Kent Beck
            </li>
            <li>
              <ExternalLink to={affiliateUrl('1449373321')}>
                Designing Data-Intensive Applications
              </ExternalLink>{' '}
              by Martin Kleppmann
            </li>
            <li>
              <ExternalLink to={affiliateUrl('1718501838')}>
                The Missing README
              </ExternalLink>{' '}
              by Chris Riccomini & Dmitriy Ryaboy
            </li>
            <li>
              <ExternalLink to={affiliateUrl('0984782850')}>
                Cracking the Coding Interview
              </ExternalLink>{' '}
              by Gayle Laakmann McDowell
            </li>
            <li>
              <ExternalLink to={affiliateUrl('1736049119')}>
                Systems Design Interview (Volume 2)
              </ExternalLink>{' '}
              by Alex Xu
            </li>
            <li>
              <ExternalLink to={affiliateUrl('0131177052')}>
                Working Effectively with Legacy Code
              </ExternalLink>{' '}
              by Michael Feathers
            </li>
          </ul>
        </section>
        <section className="py-4 text-lg">
          <h2>Finance</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('0857197681')}>
                The Psychology of Money
              </ExternalLink>{' '}
              by Morgan Housel
            </li>
          </ul>
        </section>
        <section className="py-4 text-lg">
          <h2>Marketing</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('076117897X')}>
                Show Your Work
              </ExternalLink>{' '}
              by Austin Kleon
            </li>
            <li>
              <ExternalLink to={affiliateUrl('0887306667')}>
                The 22 Immutable Laws of Marketing
              </ExternalLink>{' '}
              by Al Ries & Jack Trout
            </li>
          </ul>
        </section>
        <section className="py-4 text-lg">
          <h2>Writing</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('0060891548')}>
                On Writing Well
              </ExternalLink>{' '}
              by William Zinsser
            </li>
            <li>
              <ExternalLink to={affiliateUrl('3982438802')}>
                How to Take Smart Notes
              </ExternalLink>{' '}
              by Sohen Ahrens
            </li>
          </ul>
        </section>
        <section className="py-4 text-lg">
          <h2>Management</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('8126522747')}>
                The 5 Dysfunctions of a Team
              </ExternalLink>{' '}
              by Patrick Lencioni
            </li>
            <li>
              <ExternalLink to={affiliateUrl('1942788290')}>
                The Phoenix Project
              </ExternalLink>{' '}
              by Kevin Behr
            </li>
            <li>
              <ExternalLink to={affiliateUrl('B0BHX8BQ9C')}>
                Engineering Management for the Rest of Us
              </ExternalLink>{' '}
              by Sarah Drasner
            </li>
          </ul>
        </section>
        <section className="py-4 text-lg">
          <h2>Biography</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to={affiliateUrl('0812979273')}>
                Buffett: The Making of an American Capitalist
              </ExternalLink>{' '}
              by Roger Lowenstein
            </li>
            <li>
              <ExternalLink to={affiliateUrl('006230125X')}>
                Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future
              </ExternalLink>{' '}
              by Ashlee Vance
            </li>
          </ul>
        </section>
      </Layout>
    </Theme>
  )
}

export default ReadingList
