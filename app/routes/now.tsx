import React from 'react'
import { type MetaFunction } from '@remix-run/node'

import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import EmojiWiggle from '~/components/EmojiWiggle'
import Layout from '~/components/Layout'
import { ExternalLink } from '~/components/Links'

export const meta: MetaFunction = () => ({
  title: `What I'm up to now - Andrew Lazenka`,
})

function About() {
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-8 text-center font-bold">
          <EmojiWiggle>🕒</EmojiWiggle> What I'm Doing Now
        </h1>
        <h3 className="text-center font-normal">Updated April 28th, 2023</h3>
      </HeroBanner>
      <Layout>
        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold" id="about">
            Billing @ GitHub
          </h2>
          It's been an awesome 8 months thus far working at{' '}
          <ExternalLink to="https://github.com">GitHub</ExternalLink>. It's a
          humbling experience being the small fish in a big pond, but that just
          means there are so many opportunities for growth.
          <br />
          <br />I was part of a small & scrappy team that helped to launch{' '}
          <ExternalLink to="https://github.blog/2023-02-14-github-copilot-for-business-is-now-available/">
            Copilot for Business
          </ExternalLink>{' '}
          in Feburary 2023, and since then I've been investing in React tooling
          for a "something new" project the Billing team has been working hard
          to ship.
        </section>

        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold" id="about">
            The Merging of Two Lives
          </h2>
          November 2022 I asked the love of my life is she would marry me.
          <br />
          <br />
          Unfortunately for her, she said yes.
          <br />
          <br />
          Having lived separately our entire relationship, we're finally making
          plans to move in together. I've been splitting my time at her place in
          Toronto and commutting back home for work during the day.
          <br />
          <br />
          Having set ourselves a 4 year goal to become homeowners, we'll be
          joining forces in Markham in the coming weeks, slowly savings our
          pennies to have a place we can call our own.
        </section>

        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold" id="about">
            Live Music is Back!
          </h2>
          For the first time since March 2020, my band{' '}
          <ExternalLink to="https://prettyyoungthangband.com">
            Pretty Young Thang
          </ExternalLink>{' '}
          will play our first show on June 8th at The Piston in Toronto.
          <br />
          <br />
          It's been a great time getting the boys back in the room together.
          Jamming, laughing, and bonding over music.
        </section>

        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold" id="about">
            Riding the Wave of AI
          </h2>
          It's been said that AI will have as great, if not greater, an impact
          than the invention of the Internet.
          <br />
          <br />
          Do I believe this? Maybe. But that doesn't take away from the shear
          amount of innovation taking place! Starting in tech, and quickly
          spanning across industries.
          <br />
          <br />
          To seize the opportunity and make a small contribution to this new era
          of computing, and friend & I have been collaborating to create{' '}
          <ExternalLink to="https://herby.ai">HerbyAI</ExternalLink> - a chat
          bot with high-quality, curated, personalized herbal information.
          <br />
          <br />
          We're passionate about our mission to democratize access to herbal
          knowledge. It's been extra rewarding being able to flex both my
          developer + business chops.
        </section>

        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold" id="about">
            Currently Reading
          </h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to="https://www.goodreads.com/book/show/23848190-extreme-ownership">
                Extreme Ownership by Jocko Willink & Leif Babin
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://www.goodreads.com/book/show/60965426-the-creative-act">
                The Creative Act by Rick Rubin
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://www.goodreads.com/en/book/show/4099">
                The Pragmatic Programmer by Andy Hunt & Dave Thomas
              </ExternalLink>
            </li>
          </ul>
        </section>
      </Layout>
    </Theme>
  )
}

export default About
