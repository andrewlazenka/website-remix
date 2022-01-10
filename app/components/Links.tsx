import React from 'react'
import { Link, useLocation } from 'remix'
import clsx from 'classnames'

interface LinkProps {
  className?: string
  to: string
  children: React.ReactNode
}

export const InternalLink = ({ className, ...props }: LinkProps) => (
  <Link
    className={clsx(
      'text-base cursor-pointer text-blue-500 transition-colors duration-300 ease-in-out hover:text-blue-300',
      className
    )}
    {...props}
  />
)

export const ExternalLink = ({ to, className, ...props }: LinkProps) => (
  <a
    className={clsx(
      'cursor-pointer text-blue-500 dark:hover:text-blue-300 transition-colors duration-300 ease-in-out',
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
        'uppercase text-base cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-300',
        isActiveRoute ? 'text-blue-500' : 'text-gray-900 dark:text-gray-50'
      )}
      {...props}
    />
  )
}
