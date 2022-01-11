import React from 'react'
import clsx from 'classnames'

const HeroBanner = ({ fullHeight = false }) => (
  <div
    className={clsx(
      'absolute w-full h-full bg-cover transition-colors duration-300 ease-in-out bg-blue-500 dark:bg-gray-900 bg-pattern-triangles',
      { 'mt-[-96px]': !fullHeight }
    )}
  />
)

export default HeroBanner
