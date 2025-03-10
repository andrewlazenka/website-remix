import React from 'react'
import { Link, useLocation } from '@remix-run/react'
import clsx from 'classnames'

interface LinkProps {
  className?: string
  to: string
  children: React.ReactNode
  textColour?: string
}

export const InternalLink = ({
  className,
  textColour,
  ...props
}: LinkProps) => (
  <Link
    className={clsx(
      textColour || 'hover:text-ctp-mauve',
      'cursor-pointer text-base transition-colors duration-300 ease-in-out',
      className
    )}
    prefetch="intent"
    {...props}
  />
)

export const ExternalLink = ({
  to,
  className,
  textColour,
  ...props
}: LinkProps) => (
  <a
    className={clsx(
      textColour || 'hover:text-ctp-mauve',
      'cursor-pointer underline transition-colors duration-300 ease-in-out',
      className
    )}
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {props.children}
  </a>
)

export const LocationAwareLink = (props: LinkProps) => {
  const location = useLocation()
  const [, baseRoute] = location.pathname.split('/')
  const isActiveRoute =
    location.pathname !== '/' && props.to === `/${baseRoute}`

  return (
    <Link
      className={clsx(
        'cursor-pointer text-base uppercase transition-colors duration-300 ease-in-out hover:text-blue-300',
        isActiveRoute ? 'text-blue-500' : 'text-gray-900 dark:text-gray-50'
      )}
      {...props}
    />
  )
}
