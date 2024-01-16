import React from 'react'
import { type MetaFunction } from '@remix-run/node'

import Header from '~/components/Header'
import Footer from '~/components/Footer'
import HeroBanner from '~/components/HeroBanner'
import Theme from '~/components/Theme'
import EmojiWiggle from '~/components/EmojiWiggle'
import Layout from '~/components/Layout'

export const meta: MetaFunction = () => ({
  title: `Human User Guide - Andrew Lazenka`,
})

function HumanUserGuide() {
  return (
    <Theme>
      <Header />
      <HeroBanner>
        <h1 className="py-8 text-center font-bold">
          <EmojiWiggle>📔</EmojiWiggle> Human User Guide
        </h1>
      </HeroBanner>
      <Layout>This is my human user guide.</Layout>
      <Footer />
    </Theme>
  )
}

export default HumanUserGuide
