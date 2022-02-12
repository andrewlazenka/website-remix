import React from 'react'
import clsx from 'classnames'
import { animated, useSpring } from 'react-spring'

const HeroBanner = ({ slim = false, ...props }) => {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: {
      duration: 750,
    },
  })
  return (
    <animated.div
      style={fade}
      className={clsx(
        'relative mx-auto mb-24 w-10/12 rounded-xl bg-blue-500 bg-pattern-wavey px-12 text-gray-50 transition-colors duration-300 ease-in-out  dark:bg-white dark:text-gray-900',
        { 'pb-24 pt-32': slim === false }
      )}
      {...props}
    />
  )
}

export default HeroBanner
