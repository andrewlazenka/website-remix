import React from 'react'

import SunIcon from '~/components/svg/icons/Sun'
import MoonIcon from '~/components/svg/icons/Moon'

type Themes = 'dark' | 'light'

interface ModeToggleProps {
  className?: string
}

function ModeToggle(props: ModeToggleProps) {
  // fix for SSR when window is not yet defined
  let initialTheme = null
  if (typeof window !== `undefined`) {
    initialTheme = window.__theme
  }

  const [theme, setTheme] = React.useState(initialTheme)

  function changeTheme() {
    const updatedTheme: Themes = isDarkTheme ? 'light' : 'dark'
    setTheme(updatedTheme)
    window.__setPreferredTheme(updatedTheme)
  }

  const isDarkTheme = theme === 'dark'

  // fix for SSR when window is not yet defined
  if (theme === null) {
    return <div className="h-6 w-6" />
  }

  const ToggleIcon = isDarkTheme ? MoonIcon : SunIcon

  return (
    <span className="relative z-50 w-6 h-6 leading-[0px]">
      <ToggleIcon
        className='absolute cursor-pointer transition duration-300 ease-in-out hover:text-orange-500'
        onClick={changeTheme}
      />
    </span>
  )
}

export default ModeToggle
