import React from 'react'

const Badge = (props: any) => (
  <span
    className="mb-2 mr-2 rounded-full bg-gradient-to-r from-ctp-pink to-ctp-mauve px-3 py-1 text-xs text-ctp-crust hover:animate-funBounce"
    {...props}
  />
)

export default Badge
