import React from 'react'

const EmojiWiggle: React.FC = ({ className: propsClassName, ...props }) => {
  let className = 'inline-block hover:animate-wave'
  if (propsClassName) className += ` ${propsClassName}`
  console.log(className)

  return <span className={className} {...props} />
}

export default EmojiWiggle
