import { Button } from "@/components/ui/button"
import { RiGithubLine, RiLinkedinBoxLine, RiTwitterXLine } from "@remixicon/react"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between border-b px-3 py-3 md:px-5 lg:max-w-xl lg:px-0 bg-background sticky top-0 z-10">
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
          >
            <RiLinkedinBoxLine />
          </Link>
        </Button>
      </div>
    </header>
  )
}
