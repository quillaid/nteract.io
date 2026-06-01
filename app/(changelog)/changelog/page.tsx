import type { Metadata } from "next";
import Link from "next/link";

import { ChangelogFeedEntry } from "@/components/changelog/changelog-feed-entry";
import { getAllEntries, includeDrafts } from "@/lib/changelog";
import { absoluteUrl, siteConfig } from "@/lib/site";

// Rendered at request time so the draft gate reads VERCEL_ENV at runtime
// (it is not reliably exposed during the Vercel build). Production hides
// drafts; dev and preview deployments show them.
export const dynamic = "force-dynamic";

const description =
  "Every nteract stable release, in human terms. What changed, why it matters, and what to try next.";

export const metadata: Metadata = {
  title: "Changelog",
  description,
  alternates: {
    canonical: absoluteUrl("/changelog"),
    types: {
      "application/rss+xml": absoluteUrl("/changelog/feed.xml"),
    },
  },
  openGraph: {
    title: `Changelog | ${siteConfig.name}`,
    description,
    url: absoluteUrl("/changelog"),
    type: "website",
    images: [absoluteUrl("/opengraph-image")],
  },
  twitter: {
    card: "summary_large_image",
    title: `Changelog | ${siteConfig.name}`,
    description,
  },
};

export default async function ChangelogPage() {
  const entries = await getAllEntries({ includeUnpublished: includeDrafts });

  return (
    <div className="px-6 pb-24 pt-12 md:px-12">
      <section className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-widest text-[#a993d1] transition-colors hover:text-on-surface"
          >
            ← Home
          </Link>
          <div className="h-px flex-grow bg-outline-variant/20" />
          <a
            href="/changelog/feed.xml"
            className="font-mono text-[11px] uppercase tracking-widest text-outline-variant transition-colors hover:text-on-surface"
          >
            RSS
          </a>
        </div>

        <h1 className="mb-6 font-headline text-6xl font-bold leading-[0.9] tracking-tighter text-on-surface md:text-8xl">
          Changelog
        </h1>

        <p className="mb-16 max-w-2xl text-xl leading-snug text-on-surface/60">
          A local AI-native notebook workspace where humans and agents
          collaborate through the same live document and runtime. Here is how it
          gets better, release by release.
        </p>

        {entries.length > 0 ? (
          <div className="space-y-12">
            {entries.map((entry) => (
              <ChangelogFeedEntry key={entry.version} entry={entry} />
            ))}
          </div>
        ) : (
          <div className="bg-surface-container-low px-6 py-10 text-on-surface-variant">
            The first release notes are still in draft. Check back soon.
          </div>
        )}
      </section>
    </div>
  );
}
