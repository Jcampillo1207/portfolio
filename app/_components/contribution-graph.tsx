"use client"

import { useEffect, useState } from "react"
import posthog from "posthog-js"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Day = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type ApiResponse = {
  total: Record<string, number>
  contributions: Day[]
}

const levelClass: Record<Day["level"], string> = {
  0: "bg-muted",
  1: "bg-chart-1",
  2: "bg-chart-2",
  3: "bg-chart-3",
  4: "bg-chart-5",
}

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export const ContributionGraph = ({
  username,
  startYear = 2020,
}: {
  username: string
  startYear?: number
}) => {
  const currentYear = new Date().getFullYear()
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i
  )

  const [year, setYear] = useState<number>(currentYear)
  const [data, setData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
    )
      .then((r) => r.json())
      .then((json: ApiResponse) => {
        if (!cancelled) {
          setData(json)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [username, year])

  const days = data?.contributions ?? []

  const weeks: Day[][] = []
  let current: Day[] = []
  for (const day of days) {
    const dow = new Date(day.date).getUTCDay()
    if (dow === 0 && current.length) {
      weeks.push(current)
      current = []
    }
    current.push(day)
  }
  if (current.length) weeks.push(current)

  const monthHeader: { label: string; weekIndex: number }[] = []
  let lastMonth = -1
  weeks.forEach((week, i) => {
    const month = new Date(week[0].date).getUTCMonth()
    if (month !== lastMonth) {
      monthHeader.push({ label: monthLabels[month], weekIndex: i })
      lastMonth = month
    }
  })

  const total = data?.total?.[year] ?? 0

  return (
    <div className="flex w-full flex-col gap-y-3">
      <div className="flex items-center justify-between gap-x-2">
        <span className="text-xs text-muted-foreground">
          {loading ? "Loading…" : `${total} contributions in ${year}`}
        </span>
        <Select
          value={String(year)}
          onValueChange={(v) => {
            const newYear = Number(v)
            setYear(newYear)
            posthog.capture("contribution_year_changed", { year: newYear })
          }}
        >
          <SelectTrigger className="h-8 w-[110px] text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {years.map((y) => (
              <SelectItem key={y} value={String(y)} className="text-xs">
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-end gap-x-1 overflow-x-auto pb-1">
        <div className="flex flex-col gap-y-1">
          <div className="relative h-3 text-[10px] text-muted-foreground">
            {monthHeader.map((m) => (
              <span
                key={`${m.label}-${m.weekIndex}`}
                className="absolute"
                style={{ left: `${m.weekIndex * 14}px` }}
              >
                {m.label}
              </span>
            ))}
          </div>
          <div className="flex gap-x-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-y-[3px]">
                {Array.from({ length: 7 }).map((_, di) => {
                  const day = week[di]
                  if (!day) return <div key={di} className="size-[11px]" />
                  return (
                    <div
                      key={day.date}
                      title={`${day.count} contributions on ${day.date}`}
                      className={`size-[11px] rounded-[2px] ${levelClass[day.level]}`}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-1 text-xs text-muted-foreground">
        Less
        {[0, 1, 2, 3, 4].map((l) => (
          <span
            key={l}
            className={`size-[11px] rounded-[2px] ${levelClass[l as Day["level"]]}`}
          />
        ))}
        More
      </div>
    </div>
  )
}
