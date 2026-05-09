import Link from "next/link"
import { Header } from "./_components/header"
import { Highlighter } from "@/components/ui/highlighter"
import { projects } from "@/lib/projects"
import { awards } from "@/lib/awards"
import { openSource } from "@/lib/open-source"
import { RiArrowRightUpLine } from "@remixicon/react"
import { ContributionGraph } from "./_components/contribution-graph"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <section className="flex w-full flex-col gap-y-4 px-3 py-10 md:px-5 lg:max-w-xl lg:px-0">
        <h1 className="text-base font-semibold lg:text-lg">Who am I?</h1>
        <p className="text-sm tracking-normal  text-muted-foreground">
          I'm{" "}
          <span className="text-foreground italic">
            <Highlighter
              action="underline"
              color="#4F39F6"
              isView
              padding={0}
              iterations={1}
            >
              José Campillo
            </Highlighter>
          </span>
          , a self-taught engineer from Mexico{" "}
          <span className="self-baseline text-base">🇲🇽</span>. I build things on
          the web and take them apart over a cold beer{" "}
          <span className="self-baseline text-base">🍺</span>. I created{" "}
          <Link
            href="https://knoott.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-foreground underline underline-offset-2"
          >
            Knoott
          </Link>{" "}
          &{" "}
          <Link
            href="https://slabsz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-foreground underline underline-offset-2"
          >
            Slabsz
          </Link>
          .
        </p>
      </section>
      <section className="flex w-full flex-col gap-y-4 px-3 py-10 md:px-5 lg:max-w-xl lg:px-0">
        <h1 className="text-base font-semibold lg:text-lg">Today</h1>
        <p className="text-sm tracking-normal  text-muted-foreground">
          I'm co-founder at{" "}
          <Link
            href="https://intelloai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-foreground underline underline-offset-2"
          >
            Intello
          </Link>
          , where we build digital innovation projects for governments and
          private companies <span className="self-baseline text-base">🏛️</span>.
          Turning ideas into software that actually ships{" "}
          <span className="self-baseline text-base">⚡</span>.
        </p>
      </section>
      <section className="flex w-full flex-col gap-y-4 px-3 py-10 md:px-5 lg:max-w-xl lg:px-0">
        <h1 className="text-base font-semibold lg:text-lg">Projects</h1>
        <div className="flex w-full flex-col items-start justify-start">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-col gap-y-1 last:border-b-0 border-b py-3 last:pb-0 first:pt-0 group"
            >
              <span className="flex items-center justify-between gap-x-3">
                <h2 className="text-sm font-medium group-hover:underline ease-in-out duration-300 underline-offset-2">{project.name}</h2>
                <RiArrowRightUpLine className="text-muted-foreground size-4 group-hover:text-foreground ease-in-out duration-300" />
              </span>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col gap-y-4 px-3 py-10 md:px-5 lg:max-w-xl lg:px-0">
        <h1 className="text-base font-semibold lg:text-lg">Open Source</h1>
        <div className="flex w-full flex-col items-start justify-start">
          {openSource.map((project) => (
            <Link
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-col gap-y-1 last:border-b-0 border-b py-3 last:pb-0 first:pt-0 group"
            >
              <span className="flex items-center justify-between gap-x-3">
                <h2 className="text-sm font-medium group-hover:underline ease-in-out duration-300 underline-offset-2">
                  {project.name}
                </h2>
                <RiArrowRightUpLine className="text-muted-foreground size-4 group-hover:text-foreground ease-in-out duration-300" />
              </span>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex w-full flex-col gap-y-4 px-3 py-10 md:px-5 lg:max-w-xl lg:px-0">
        <h1 className="text-base font-semibold lg:text-lg">Awards</h1>
        <div className="flex w-full flex-col items-start justify-start">
          {awards.map((award) => {
            const className =
              "flex w-full flex-col gap-y-1 last:border-b-0 border-b py-3 last:pb-0 first:pt-0 group"
            const content = (
              <>
                <span className="flex items-center justify-between gap-x-3">
                  <h2 className="text-sm font-medium group-hover:underline ease-in-out duration-300 underline-offset-2">
                    {award.name.split(/(Supabase)/).map((part, i) =>
                      part === "Supabase" ? (
                        <span key={i} style={{ color: "#40CF8E" }}>
                          {part}
                        </span>
                      ) : (
                        part
                      )
                    )}
                  </h2>
                  <span className="flex items-center gap-x-2 text-muted-foreground text-xs">
                    {award.year}
                    {award.link && (
                      <RiArrowRightUpLine className="size-4 group-hover:text-foreground ease-in-out duration-300" />
                    )}
                  </span>
                </span>
                <p className="text-sm text-muted-foreground">
                  {award.description}
                </p>
              </>
            )
            return award.link ? (
              <Link
                key={award.name}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                {content}
              </Link>
            ) : (
              <div key={award.name} className={className}>
                {content}
              </div>
            )
          })}
        </div>
      </section>
      <section className="flex w-full flex-col gap-y-4 px-3 py-10 md:px-5 lg:max-w-xl lg:px-0">
        <h1 className="text-base font-semibold lg:text-lg">Contributions</h1>
        <div className="w-full overflow-x-auto">
          <ContributionGraph username="Jcampillo1207" startYear={2023} />
        </div>
      </section>
      <section className="flex w-full flex-col gap-y-4 px-3 py-10 md:px-5 lg:max-w-xl lg:px-0">
        <h1 className="text-base font-semibold lg:text-lg">More</h1>
        <p className="text-sm tracking-normal text-muted-foreground">
          More of my work lives on{" "}
          <Link
            href="https://twitter.com/Chema12071"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-foreground underline underline-offset-2"
          >
            Twitter
          </Link>{" "}
          <span className="self-baseline text-base">🐦</span>, and more of my
          code on{" "}
          <Link
            href="https://github.com/Jcampillo1207"
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-foreground underline underline-offset-2"
          >
            GitHub
          </Link>{" "}
          <span className="self-baseline text-base">💻</span>.
        </p>
      </section>
    </main>
  )
}
