import React from 'react'
import clsx from 'classnames'

import { ExternalLink } from '~/components/Links'

import EmailLogo from '~/components/svg/icons/email'
import GitHubLogo from '~/components/svg/icons/github'
import InstaLogo from '~/components/svg/icons/instagram'
import LinkedInLogo from '~/components/svg/icons/linkedin'
import ResumeLogo from '~/components/svg/icons/resume'
import TikTokLogo from '~/components/svg/icons/tiktok'
import TwitterLogo from '~/components/svg/icons/twitter'

const linkStyle = 'h-6 w-6 p-2 hvr-float-shadow text-gray-50 hover:text-orange-500'

type SocialLinksProps = {
  twitter?: string
  tiktok?: string
  instagram?: string
  linkedin?: string
  email?: string
  github?: string
  resume?: string
  iconClassName?: string
}

const SocialLinks = ({
  twitter = '',
  tiktok = '',
  instagram = '',
  linkedin = '',
  email = '',
  github = '',
  resume = '',
  iconClassName,
}: SocialLinksProps) => {
  const iconStyle = clsx(
    'transition-colors duration-300 ease-in-out h-6 w-6',
    iconClassName
  )

  return (
    <>
      {github && (
        <ExternalLink className={linkStyle} to={github}>
          <GitHubLogo className={iconStyle} />
        </ExternalLink>
      )}
      {tiktok && (
        <ExternalLink className={linkStyle} to={tiktok}>
          <TikTokLogo className={clsx(iconStyle, 'h-[1.6rem]')} />
        </ExternalLink>
      )}
      {twitter && (
        <ExternalLink
          className={linkStyle}
          to={twitter}
        >
          <TwitterLogo className={iconStyle} />
        </ExternalLink>
      )}
      {instagram && (
        <ExternalLink
          className={linkStyle}
          to={instagram}
        >
          <InstaLogo className={iconStyle} />
        </ExternalLink>
      )}
      {linkedin && (
        <ExternalLink
          className={linkStyle}
          to={linkedin}
        >
          <LinkedInLogo className={iconStyle} />
        </ExternalLink>
      )}
      {email && (
        <ExternalLink className={linkStyle} to={typeof email === 'string' ? `mailto:${email}` : ''}>
          <EmailLogo className={iconStyle} />
        </ExternalLink>
      )}
      {resume && (
        <ExternalLink className={linkStyle} to={resume}>
          <ResumeLogo className={iconStyle} />
        </ExternalLink>
      )}
    </>
  )
}

export default SocialLinks
