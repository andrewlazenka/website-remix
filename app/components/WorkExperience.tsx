import React from 'react'
import { format } from 'date-fns'

import { InternalLink } from './Links'

import type { JourneyMeta } from '~/types/journey'

function WorkExperience({
  company,
  position,
  start_date,
  end_date,
  image_url,
  slug,
  is_published,
}: JourneyMeta) {
  const startDate = format(new Date(start_date), 'MMMM yyyy')
  const endDate = end_date ? format(new Date(end_date), 'MMMM yyyy') : 'Present'

  return (
    <article className="flex flex-col justify-between py-8 px-4 pl-0 md:flex-row">
      <div className="flex justify-center md:w-1/2 lg:w-2/5">
        {is_published ?
          <InternalLink to={`/journey/${slug}`}>
            <img
              src={image_url}
              className="h-[175px] w-[250px] rounded-full sm:h-[200px] sm:w-[275px]"
            />
          </InternalLink>
          :
          <img
            src={image_url}
            className="h-[175px] w-[250px] rounded-full sm:h-[200px] sm:w-[275px]"
          />
        }
      </div>
      <div className="align-center mt-6 flex flex-col justify-center text-center md:mt-0 md:w-2/5 md:text-left lg:w-3/5">
        {is_published ? (
          <InternalLink to={`/journey/${slug}`}>
            <h3 className="font-medium text-blue-500">{position}</h3>
          </InternalLink>
        ) : (
          <h3 className="font-medium text-blue-500">{position}</h3>
        )}
        <p className="m-0 text-orange-500">{company}</p>
        <p className="m-0">{`${startDate} - ${endDate}`}</p>
      </div>
    </article>
  )
}

export default WorkExperience
