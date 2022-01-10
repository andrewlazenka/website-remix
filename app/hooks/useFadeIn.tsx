import React, { CSSProperties } from 'react'
import { useInView } from 'react-intersection-observer'

const fadeInVisibleStyle: CSSProperties = {
  opacity: 1,
  visibility: 'visible',
  transform: 'none',
}

interface UseFadeInProps {
  delay?: number
  duration?: number
  fadeFrom: 'top' | 'left' | 'right' | 'bottom' | null
}

function useFadeIn({
  delay,
  duration = 1,
  fadeFrom,
}: UseFadeInProps): [
  React.CSSProperties,
  (node?: Element | null | undefined) => void
] {
  const { ref, inView } = useInView({ delay });

  const fadeInBaseStyle: CSSProperties = {
    opacity: 0,
    visibility: 'hidden',
    willChange: 'opacity, visibility',
    transition: `opacity ${duration + 's'} ease-out, transform ${
      duration + 's'
    } ease-out`,
  }

  switch (fadeFrom) {
    case 'top':
      fadeInBaseStyle.transform = 'translateY(-5%)'
      break
    case 'left':
      fadeInBaseStyle.transform = 'translateX(-5%)'
      break
    case 'right':
      fadeInBaseStyle.transform = 'translateX(5%)'
      break
    case 'bottom':
      fadeInBaseStyle.transform = 'translateY(5%)'
      break
    default:
      break
  }

  if (delay) {
    fadeInBaseStyle.transitionDelay = `${delay}ms`
  }

  const fadeCss = inView
    ? { ...fadeInBaseStyle, ...fadeInVisibleStyle }
    : fadeInBaseStyle

  return [fadeCss, ref]
}

export default useFadeIn
