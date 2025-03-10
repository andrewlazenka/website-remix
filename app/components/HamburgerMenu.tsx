import React from 'react'
import clsx from 'classnames'

const BaseLine = ({ className, d }: { className?: string; d?: string }) => (
  <path className={clsx('line', className)} d={d} />
)

const HamburgerMenu = ({
  active,
  onClick,
}: {
  active: boolean
  onClick: () => void
}) => (
  <button
    className={clsx(
      'flex cursor-pointer border-none bg-transparent p-0 hover:text-ctp-mauve',
      {
        opened: active,
        'z-50': active,
      }
    )}
    onClick={onClick}
    aria-label="Mobile Menu"
    aria-expanded={active ? 'true' : 'false'}
  >
    <svg
      className={clsx(
        'transition-colors duration-300 ease-in-out hover:text-ctp-mauve dark:text-gray-50 dark:hover:text-ctp-mauve'
      )}
      width="32"
      height="32"
      viewBox="0 0 100 100"
    >
      <BaseLine
        className="line1 stroke-current"
        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
      />
      <BaseLine className="line2 stroke-current" d="M 20,50 H 80" />
      <BaseLine
        className="line3 stroke-current"
        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
      />
    </svg>
  </button>
)

export default HamburgerMenu
