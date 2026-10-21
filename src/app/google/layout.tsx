import type { Metadata } from "next"
import type { ReactNode } from "react"

// The page is a look-alike built to test the library, so search engines leave it out.
export const metadata: Metadata = {
  title: "Google, for Puppies, rebuilt with Unison",
  robots: { index: false, follow: false },
}

export default ({ children }: { children: ReactNode }) => children
