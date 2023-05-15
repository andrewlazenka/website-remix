import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <div className="h-full min-h-screen bg-white transition-all duration-300 ease-in-out dark:bg-gradient-to-b dark:from-ctp-base dark:to-ctp-crust dark:text-gray-100">
    {children}
  </div>
)
