import React from 'react'
import clsx from 'classnames'

const HeroBanner = ({ slim = false, ...props }) => (
  <div
    className={clsx(
      'relative mx-auto w-10/12 px-12 mb-24 bg-pattern-wavey rounded-md transition-colors duration-300 ease-in-out dark:bg-white bg-blue-500  dark:text-gray-900 text-gray-50',
      { 'pb-24 pt-32': slim === false }
    )}
    {...props}
  />
)

export default HeroBanner
