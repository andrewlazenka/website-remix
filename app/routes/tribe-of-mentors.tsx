import React from 'react'
import type { MetaFunction } from '@remix-run/cloudflare'

import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import EmojiWiggle from '~/components/EmojiWiggle'
import Layout from '~/components/Layout'

export const meta: MetaFunction = () => [
  {
    title: `Tribe of Mentors - Andrew Lazenka`,
  },
]

function TribeOfMentors() {
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-8 text-center font-bold">
          <EmojiWiggle>🤝</EmojiWiggle> Tribe of Mentors
        </h1>
        <h3 className="text-center font-normal">Updated February 7th, 2024</h3>
      </HeroBanner>
      <Layout>
        <section className="py-8 text-lg">
          They say you're the product of the 5 people you're closest with. But
          thanks to the internet, you can be connected with some of the
          brightest minds in the world.
          <br />
          <br />
          Geolocation no longer plays a factor in selected who can be a mentor.
          Hell they can be from completely disparate walks of life, industries,
          background, etc.
          <br />
          <br />
          Below is a collection of people whom I consider phenominal mentors,
          the majority of which have no idea I exist:
        </section>

        <section className="py-8 text-lg">
          <ul className="m-0 py-0">
            <li>Alex Hormozi</li>
            <li>David Heinemeier Hansson</li>
            <li>Jason Fried</li>
            <li>Tim Ferriss</li>
            <li>Sam Parr</li>
            <li>Shaan Puri</li>
            <li>Noah Kagan</li>
            <li>Chris Williamson</li>
            <li>Jordan Peterson</li>
            <li>Steph Smith</li>
            <li>Michael Paulsen aka The Primeagen</li>
            <li>Ariel Helwani</li>
            <li>Kent Beck</li>
            <li>John Petrucci</li>
            <li>Rabea Massaad</li>
            <li>Ali Abdaal</li>
            <li>Patrick Bet-David</li>
            <li>Ramit Sethi</li>
            <li>Kobe Bryant</li>
            <li>Francis Ngannou</li>
            <li>Elon Musk</li>
            <li>Pat Walls</li>
            <li>Dickie Bush</li>
            <li>Pieter Levels</li>
            <li>Danny Postma</li>
            <li>Martin Fowler</li>
            <li>Warren Buffett</li>
            <li>Charlie Munger</li>
          </ul>
        </section>
      </Layout>
    </Theme>
  )
}

export default TribeOfMentors
