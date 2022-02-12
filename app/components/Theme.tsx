import React from 'react'

export default ({ children }: { children: React.ReactNode }) => (
  <div className="h-full min-h-screen bg-white transition-colors duration-300 ease-in-out dark:bg-gray-900 dark:text-gray-100">
    {children}
  </div>
)
