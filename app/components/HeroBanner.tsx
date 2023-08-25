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
        'relative mx-auto mb-16 mt-8 w-10/12 max-w-6xl rounded-3xl border-8 border-solid border-ctp-sapphire bg-pattern-wavey text-gray-900 transition-colors duration-300 ease-in-out dark:border-ctp-mauve dark:bg-ctp-surface0 dark:text-gray-50',
        { 'pb-24 pt-32': slim === false }
      )}
      {...props}
    />
  )
}

export default HeroBanner
