import React from 'react'
import clsx from 'classnames'

const HeroBanner = ({ fullHeight = false, ...props }) => (
  <div
    className={clsx(
      'relative h-screen max-h-[700px] bg-blue-500 bg-pattern-triangles bg-cover transition-colors duration-300 ease-in-out dark:bg-gray-900'
    )}
    {...props}
  />
)

export default HeroBanner
