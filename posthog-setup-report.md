<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your Next.js 16 App Router portfolio. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), which means analytics, session replay, and error tracking activate automatically on page load. A reverse proxy via Next.js rewrites routes PostHog traffic through `/ingest` to avoid ad-blocker interference. Six client-side events are now captured across four files, using a lightweight `TrackedLink` client component that wraps Next.js `Link` to track external link clicks without converting the server-rendered `page.tsx` to a client component.

| Event | Description | File |
|---|---|---|
| `project_link_clicked` | User clicked a project link in the Projects section | `app/page.tsx` |
| `open_source_link_clicked` | User clicked an open source project link | `app/page.tsx` |
| `award_link_clicked` | User clicked an award link in the Awards section | `app/page.tsx` |
| `social_link_clicked` | User clicked a social icon in the header (GitHub, Twitter, LinkedIn) | `app/_components/header.tsx` |
| `bio_link_clicked` | User clicked an external link in the bio or More sections | `app/page.tsx` |
| `contribution_year_changed` | User selected a different year in the contribution graph | `app/_components/contribution-graph.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics**: https://us.posthog.com/project/416974/dashboard/1564621
- **Project link clicks by project**: https://us.posthog.com/project/416974/insights/wsY7BYDT
- **Social link clicks by platform**: https://us.posthog.com/project/416974/insights/5dNA2JuN
- **Bio & More link clicks by destination**: https://us.posthog.com/project/416974/insights/RrzepRXL
- **All external link clicks over time**: https://us.posthog.com/project/416974/insights/MYfbBqIF
- **Contribution graph year changes**: https://us.posthog.com/project/416974/insights/jhASLZWc

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
