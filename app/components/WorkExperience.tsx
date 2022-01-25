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
  const startDate = format(new Date(start_date), 'MMMM yyyy')
  const endDate = format(new Date(end_date), 'MMMM yyyy')

  const jobEnd = is_active ? 'Present' : endDate
  return (
    <article className="flex flex-col justify-between py-8 px-4 pl-0 md:flex-row">
      <div className="flex justify-center md:w-1/2 lg:w-2/5">
        <img
          src={image_url}
          className="h-[175px] w-[250px] rounded-full sm:h-[200px] sm:w-[275px]"
        />
      </div>
      <div className="align-center flex flex-col justify-center text-center md:w-2/5 md:text-left lg:w-3/5">
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
