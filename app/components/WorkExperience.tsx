import React from 'react'
import { format } from 'date-fns'

// import { InternalLink } from '../components/Links'
import type { JourneyMeta } from '~/types/journey'

function WorkExperience({
  company,
  position,
  is_active,
  start_date,
  end_date,
  image_url,
}: JourneyMeta) {
  const startDate = format(
    new Date(start_date),
    'MMMM yyyy'
  )
  const endDate = format(new Date(end_date), 'MMMM yyyy')

  const jobEnd = is_active ? 'Present' : endDate
  return (
    <article className="py-8 px-4 pl-0 flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2 lg:w-2/5 flex justify-center">
        <img
          src={image_url}
          className="h-[175px] w-[250px] sm:h-[200px] sm:w-[275px] rounded-full"
        />
      </div>
      <div className="md:w-2/5 lg:w-3/5 flex flex-col align-center justify-center text-center md:text-left">
        {/* <InternalLink to='/'> */}
          <h3 className="text-blue-500">{position}</h3>
        {/* </InternalLink> */}
        <h4 className="text-orange-500">{company}</h4>
        <p className="m-0">{`${startDate} - ${jobEnd}`}</p>
      </div>
    </article>
  )
}

export default WorkExperience
