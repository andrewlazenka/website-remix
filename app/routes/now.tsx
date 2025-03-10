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
    title: `Now - Andrew Lazenka`,
  },
]

function Now() {
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-8 text-center font-bold">
          <EmojiWiggle>🕒</EmojiWiggle> What I'm Doing Now
        </h1>
        <h3 className="text-center font-normal">Updated February 8th, 2024</h3>
      </HeroBanner>
      <Layout>
        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold">GitHub</h2>
          In August 2022, I started working at{' '}
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
          <br />
          <br />
          In September 2023, I transitioned into a newly formed Licensing team -
          a subset of the Billing domain that needed some extra TLC - with my
          manager and 3 other teammates.
        </section>

        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold">The Merging of Two Lives</h2>
          November 2022 I asked the love of my life is she would marry me.
          <br />
          <br />
          Unfortunately for her, she said yes.
          <br />
          <br />
          Having lived separately our entire relationship, we finally made
          arrangements to move in together at the end of May 2023. Our current
          place is extremely affordable, but comes at the cost of a longer
          commute for my fiance. Our plan is to save like crazy, get married
          September 2024, and eventually buy a place we can call home.
        </section>

        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold">Martial Arts</h2>
          For Christmas 2023, my fiance gifted me 3 classes to a local martial
          arts training center. Talk about a great gift idea!
          <br />
          <br />
          Since watching the UFC and other promotions, I've had a curiosity to
          attempt training myself. Something about the discipline, dedication,
          and self-improvement really struck a chord with me. I decided to start
          with muay thai as it provides a better full-body work out compared to
          something like jiu-jitsu (although I will definitely try rolling at
          some point in the near future).
          <br />
          <br />
          Well, I've since finished those classes and purchased a membership to
          train twice a week. I'm absolutely hooked! And there is a likely
          chance I bump that up to an unlimited membership once my body is
          better conditioned 😅
        </section>

        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold">Live Music is Back!</h2>
          For the first time since March 2020, my band{' '}
          <ExternalLink to="https://prettyyoungthangband.com">
            Pretty Young Thang
          </ExternalLink>{' '}
          played our first show on June 8th at The Piston in Toronto. We were
          lucky enough to find ourselves on another bill in August which was
          equally as fun.
          <br />
          <br />
          It's been a great time getting the boys back in the room together.
          Jamming, laughing, and bonding over music.
        </section>

        <section className="py-8 text-lg">
          <h2 className="py-8 text-4xl font-bold">Riding the Wave of AI</h2>
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
          <h2 className="py-8 text-4xl font-bold">Currently Reading</h2>
          <ul className="m-0 py-0">
            <li>
              <ExternalLink to="https://www.goodreads.com/book/show/171691901">
                Tidy First?: A Personal Exercise in Empirical Software Design by
                Kent Beck
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://www.goodreads.com/book/show/56913172">
                The Minimalist Entrepreneur: How Great Founders Do More with
                Less by Sahil Lavingia
              </ExternalLink>
            </li>
            <li>
              <ExternalLink to="https://www.goodreads.com/book/show/6732019">
                Rework by Jason Fried & David Heinemeier Hansson
              </ExternalLink>
            </li>
          </ul>
        </section>
      </Layout>
    </Theme>
  )
}

export default Now
