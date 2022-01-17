import React, { CSSProperties } from 'react'
import { IntersectionOptions, useInView } from 'react-intersection-observer'

const fadeInVisibleStyle: CSSProperties = {
  opacity: 1,
  visibility: 'visible',
  transform: 'none',
}

interface UseFadeInProps {
  observerProps?: IntersectionOptions
  duration?: number
  fadeFrom: 'top' | 'left' | 'right' | 'bottom' | null
}

function useFadeIn({
  observerProps,
  duration = 1,
  fadeFrom,
}: UseFadeInProps): [
  React.CSSProperties,
  (node?: Element | null | undefined) => void
] {
  const { ref, inView } = useInView(observerProps);

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

  if (observerProps?.delay) {
    fadeInBaseStyle.transitionDelay = `${observerProps?.delay}ms`
  }

  const fadeCss = inView
    ? { ...fadeInBaseStyle, ...fadeInVisibleStyle }
    : fadeInBaseStyle

  return [fadeCss, ref]
}

export default useFadeIn
