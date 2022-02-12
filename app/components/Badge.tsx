import React from 'react'

const Badge = (props: any) => (
  <span
    {...props}
    className="mb-2 mr-2 rounded-full py-1 px-3 text-xs text-white hover:animate-funBounce"
    style={{ background: 'linear-gradient(270deg, #2563eb, #9c20f0, #f41b87, #f97316)' }}
  />
)

export default Badge
