import React from 'react'
import clsx from 'classnames'

const HeroBanner = ({ slim = false, ...props }) => (
  <div
    className={clsx(
      'relative mx-auto w-10/12 mb-24 bg-blue-500 bg-pattern-wavey rounded-md transition-colors duration-300 ease-in-out dark:bg-sky-50 dark:text-gray-900 text-gray-50',
      { 'pb-24 pt-32 px-12': slim === false }
    )}
    {...props}
  />
)

export default HeroBanner
