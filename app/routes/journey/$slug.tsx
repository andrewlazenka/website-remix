import React from 'react'
import { format } from 'date-fns'
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { marked } from 'marked'

import { getJourneyBySlug } from '~/queries/journey'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Layout from '~/components/Layout'
import Badge from '~/components/Badge'

import Theme from '~/components/Theme'
import type { Journey } from '~/types/journey'

// https://www.conic.style/
const redBlueGradient =
  'conic-gradient(from -90deg at 25% 115%, #ff0000, #ff0066, #ff00cc, #cc00ff, #6600ff, #0000ff, #0000ff, #0000ff, #0000ff)'
const blueVioletGradient =
  'conic-gradient(from -90deg at 50% -25%, blue, blueviolet)'

export const loader: LoaderFunction = async ({ params }) => {
  if (!params.slug) {
    throw new Response('Journey not found', { status: 404 })
  }

  const journey = await getJourneyBySlug(params.slug)

  if (!journey) {
    throw new Response('Journey not found', { status: 404 })
  }

  return { journey }
}

export default function JourneyTemplate() {
  const { journey } = useLoaderData<{ journey: Journey }>()
  const {
    company,
    position,
    start_date,
    end_date,
    technologies,
    languages,
    content,
  } = journey

  const startDate = format(new Date(start_date), 'MMMM yyyy')
  const endDate = format(new Date(end_date), 'MMMM yyyy')
  const __html = marked.parse(content)

  return (
    <Theme>
      <Header />
      <Layout>
        <h1>{position}</h1>
        <h3 className="font-medium">{company}</h3>
        <h4 className="font-normal">{`${startDate} - ${endDate}`}</h4>
        <div className="flex flex-wrap pt-6">
          {technologies.map((t) => (
            <Badge
              style={{
                background: blueVioletGradient,
              }}
            >
              {t}
            </Badge>
          ))}
          {languages.map((l) => (
            <Badge
              style={{
                background: redBlueGradient,
              }}
            >
              {l}
            </Badge>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html }} />
      </Layout>
      <Footer />
    </Theme>
  )
}
