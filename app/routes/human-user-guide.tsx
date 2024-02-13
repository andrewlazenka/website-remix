import React from 'react'
import type { MetaFunction } from '@remix-run/cloudflare'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import EmojiWiggle from '~/components/EmojiWiggle'
import Layout from '~/components/Layout'

export const meta: MetaFunction = () => [
  {
    title: `Human User Guide - Andrew Lazenka`,
  },
]

function HumanUserGuide() {
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-8 text-center font-bold">
          <EmojiWiggle>📔</EmojiWiggle> Human User Guide
        </h1>
        <h3 className="m-auto max-w-3xl text-center font-normal text-ctp-subtext1">
          This is a living document intended to capture my priorities, life
          philosophies, and ways in which I choose to work.
        </h3>
      </HeroBanner>
      <Layout>
        <h2 id="who-i-am">Who I am</h2>
        <ul>
          <li>
            Mental & physical wellness are my top priority, full stop. If you
            can't serve yourself, you won't be able to serve others.
          </li>
          <li>
            Family & friends are a close second. I wouldn't be where I am today
            without the incredible folks that surround me.
          </li>
          <li>Currently living in Markham, ON, Canada.</li>
          <li>
            I have a number of hobbies that I enjoy; writing, reading, playing
            guitar, producing music, collecting & listening to vinyl, and most
            recently martial arts classes in the form of muay thai + jiu-jitsu.
          </li>
          <li>
            My fiancee and I are mega foodies. We love travelling and often
            explore the local cuisine at each of our destinations. Hit me up if
            you have any recommendations!
          </li>
        </ul>
        <h2 id="how-i-work">How I work</h2>
        <ul>
          <li>
            Default to async. I'll do my best to respond, though it might not be
            immediately or promptly.
          </li>
          <li>
            I value large blocks of uninterrupted time. The needle moves further
            when I can dive deep for hours at a time.
          </li>
          <li>
            Waking hours are typically 6am-11pm, though I'm working to make this
            more consistent.
          </li>
          <li>
            Working from home can make "switching off" difficult. To combat this
            I give myself a hard cutoff at 5pm from any full-time work.
          </li>
          <li>
            5pm-9pm is strictly personal time. Cooking a meal with my fiancee,
            catching up with friends, reading articles, playing guitar, watching
            shows, martial arts classes, etc.
          </li>
          <li>
            Communication channels I use, in order of priority: phone calls and
            texts/messages (usually on DnD), Slack, GitHub notifications, Google
            Docs / GitHub Discussions, Email. During blocks of focus time I
            actively avoid checking all types of inbound communication to
            maintain focus.
          </li>
        </ul>
        <h2 id="what-i-believe">What I believe</h2>
        <ul>
          <li>Optimize for freedom, flexibility, and agency.</li>
          <li>
            Devote an outsized amount of time & energy on things you can
            control.
          </li>
          <li>
            The best ROI you'll ever get is investing in yourself; skills,
            experiences, saving time.
          </li>
          <li>
            Just-in-time learning is an extremely underrated skill. I respect
            folks who know a lot, but I admire even more people who can absorb,
            distill, and understand new information quickly. The world moves
            fast, so if you can optimize for change and new information, you'll
            get ahead of most.
          </li>
          <li>
            They say you're the product of the 5 closest people to you, yet most
            people spend more time on a device than they do with people.
            <br />
            In the age of information, I would take this one step further;
            you're the product of the information you consume. Choose wisely.
          </li>
          <li>
            Slow content &gt; "newsfeed" content. Any product or company
            building real-time social networks are investing millions of dollars
            to <span class="font-bold">buy your attention</span>.
            <br />
            My preference is to consume slow, quality media to keep my attention
            in my control. Books, web articles, long-form educational YouTube
            videos, and podcasts.
          </li>
        </ul>
      </Layout>
      <Footer />
    </Theme>
  )
}

export default HumanUserGuide
