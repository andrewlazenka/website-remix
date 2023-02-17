import React from 'react'
import { useSpring, animated } from 'react-spring'

const Layout = ({ noFade = false, ...props }: any) => {
	const fade = useSpring({
		to: { opacity: 1 },
		from: { opacity: 0 },
		config: {
		  duration: 750,
		},
	})

	let style = { minHeight: 'calc(100vh - 292px)' }
	if (!noFade) {
		style = { ...style, ...fade }
	}

	return (
	  <animated.main
		style={style}
		className="mx-auto w-3/4 max-w-3xl p-6"
		{...props}
	  />
	)
}

export default Layout
