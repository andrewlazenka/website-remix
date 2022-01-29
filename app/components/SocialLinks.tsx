import React from 'react'
import clsx from 'classnames'

import { ExternalLink } from '~/components/Links'

import EmailLogo from '~/components/svg/icons/Email'
import GitHubLogo from '~/components/svg/icons/Github'
import InstaLogo from '~/components/svg/icons/Instagram'
import LinkedInLogo from '~/components/svg/icons/Linkedin'
import ResumeLogo from '~/components/svg/icons/Resume'
import TikTokLogo from '~/components/svg/icons/Tiktok'
import TwitterLogo from '~/components/svg/icons/Twitter'

type SocialLinksProps = {
  twitter?: string
  tiktok?: string
  instagram?: string
  linkedin?: string
  email?: string
  github?: string
  resume?: string
  iconColour?: string
  linkColour?: string
  iconClassName?: string
  linkClassName?: string
}

const SocialLinks = ({
  twitter = '',
  tiktok = '',
  instagram = '',
  linkedin = '',
  email = '',
  github = '',
  resume = '',
  iconColour = '',
  linkColour,
  iconClassName,
  linkClassName,
}: SocialLinksProps) => {
  const iconStyle = clsx(
    'transition-colors duration-300 ease-in-out h-6 w-6',
    iconClassName,
    iconColour,
  )
  const linkStyle = clsx(
    'h-6 w-6 p-2 hvr-float-shadow',
    linkClassName,
    'text-gray-50 hover:text-orange-500' || linkColour,
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
        <ExternalLink className={linkStyle} to={twitter}>
          <TwitterLogo className={iconStyle} />
        </ExternalLink>
      )}
      {instagram && (
        <ExternalLink className={linkStyle} to={instagram}>
          <InstaLogo className={iconStyle} />
        </ExternalLink>
      )}
      {linkedin && (
        <ExternalLink className={linkStyle} to={linkedin}>
          <LinkedInLogo className={iconStyle} />
        </ExternalLink>
      )}
      {email && (
        <ExternalLink
          className={linkStyle}
          to={typeof email === 'string' ? `mailto:${email}` : ''}
        >
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
