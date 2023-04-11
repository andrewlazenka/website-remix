import { useMatches } from "@remix-run/react";
import type { SocialLinks as TSocialLinks } from '~/types/links'

function useLinksData(): TSocialLinks {
  const matches = useMatches();

  const match = matches.find(m =>
    m.pathname === "/" && m.data.socialLinks
  )

  return match?.data as TSocialLinks
}

export default useLinksData
