import React from 'react'
import clsx from 'classnames'

import SunIcon from '~/components/svg/icons/sun'
import MoonIcon from '~/components/svg/icons/moon'

const baseIconStyle =
  'absolute cursor-pointer transition duration-300 ease-in-out hover:text-indigo-300 text-gray-50'
const hiddenStyle = 'opacity-0 invisible'
const shownStyle = 'opacity-100 visible'

type Themes = 'dark' | 'light'

function ModeToggle() {
  // fix for Gatsby SSR when window is not yet defined
  let initialTheme = null
  if (typeof window !== `undefined`) {
    initialTheme = window.__theme
  }

  const [theme, setTheme] = React.useState(initialTheme)

  React.useEffect(() => {
    window.__onThemeChange = () => {
      setTheme(window.__theme)
    }
    setTheme(window.__theme)
  }, [])

  function changeTheme(newMode: Themes) {
    setTheme(newMode)
    window.__setPreferredTheme(newMode)
  }

  const isDarkTheme = theme === 'dark'

  // fix for Gatsby SSR when window is not yet defined
  if (theme === null) {
    return <div className="h-6 w-6" />
  }

  return (
    <span className="relative w-6 h-6 leading-[0px]">
      <SunIcon
        className={clsx(
          baseIconStyle,
          { [shownStyle]: !isDarkTheme },
          { [hiddenStyle]: isDarkTheme }
        )}
        onClick={() => changeTheme('dark')}
      />
      <MoonIcon
        className={clsx(
          baseIconStyle,
          { [hiddenStyle]: !isDarkTheme },
          { [shownStyle]: isDarkTheme }
        )}
        onClick={() => changeTheme('light')}
      />
    </span>
  )
}

export default ModeToggle
