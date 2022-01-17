import React from 'react'

const Layout = (props: any) => (
  <main
    style={{ minHeight: 'calc(100vh - 292px)' }}
    className="mx-auto p-6 max-w-3xl w-3/4"
    {...props}
  />
)

export default Layout
