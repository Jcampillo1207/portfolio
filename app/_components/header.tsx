"use client"

import { Button } from "@/components/ui/button"
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiTwitterXLine,
} from "@remixicon/react"
import Link from "next/link"
import posthog from "posthog-js"

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full items-center justify-between border-b bg-background px-3 py-3 md:px-5 lg:max-w-xl lg:px-0">
      <Link href="/" className="text-sm font-medium">
        José Campillo
      </Link>
      <div className="flex items-center gap-x-0.5">
        <Button
          asChild
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground"
        >
          <Link
            href="https://github.com/Jcampillo1207"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture("social_link_clicked", { platform: "github" })
            }
          >
            <RiGithubLine />
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground"
        >
          <Link
            href="https://twitter.com/Chema12071"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture("social_link_clicked", { platform: "twitter" })
            }
          >
            <RiTwitterXLine />
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="icon-sm"
          className="text-muted-foreground"
        >
          <Link
            href="https://linkedin.com/in/josecampillo1207"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              posthog.capture("social_link_clicked", { platform: "linkedin" })
            }
          >
            <RiLinkedinBoxLine />
          </Link>
        </Button>
      </div>
    </header>
  )
}
