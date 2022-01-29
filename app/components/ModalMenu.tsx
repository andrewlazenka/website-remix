import React from 'react'
import clsx from 'classnames'

const ModalMenu = ({ open = false, ...props }) => (
  <div
    className={clsx(
      'fixed inset-0 z-40 flex h-screen w-full flex-col justify-center bg-gray-50 transition-all duration-300 ease-in-out dark:bg-gray-900',
      open ? 'visible opacity-100' : 'invisible opacity-0'
    )}
    {...props}
  />
)

export default ModalMenu
