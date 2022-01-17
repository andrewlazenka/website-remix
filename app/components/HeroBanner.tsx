import React from 'react'
import clsx from 'classnames'

const HeroBanner = ({ fullHeight = false, ...props }) => (
  <div
    className={clsx(
      'h-screen relative max-h-[700px] bg-cover transition-colors duration-300 ease-in-out bg-blue-500 dark:bg-gray-900 bg-pattern-triangles',
    )}
    {...props}
  />
)

export default HeroBanner
