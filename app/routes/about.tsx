import React from "react"
import { MetaFunction } from 'remix'

import Header from '~/components/Header'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import EmojiWiggle from '~/components/EmojiWiggle'
import Layout from '~/components/Layout'

export const meta = () => ({
	title: `About - Andrew Lazenka`
})

function About() {
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-8 text-center font-bold">
          <EmojiWiggle>📝</EmojiWiggle> About
        </h1>
        <h3 className="text-center font-normal">
          Not much to see here
        </h3>
      </HeroBanner>
	  <Layout>
		Page content goes here!
	  </Layout>
	</Theme>
  )
}

export default About
