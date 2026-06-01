import type { ReactNode } from "react";

import Link from "next/link";

import { BlogTagList } from "@/components/blog/tag-list";
import { Prose } from "@/components/prose";
import { formatEntryDate, type ChangelogEntrySummary } from "@/lib/changelog";

type ChangelogFeedEntryProps = {
  entry: ChangelogEntrySummary;
  /** The entry's MDX body, rendered inline in the feed. */
  children?: ReactNode;
};

/**
 * One release rendered in full inline in the scrolling feed: version + date in
 * a left rail, the whole story on the right (highlights, hero, and the MDX
 * body, whose exhaustive technical changelog stays inside its collapsed
 * disclosure). The version and date link to the shareable per-version page.
 */
export function ChangelogFeedEntry({ entry, children }: ChangelogFeedEntryProps) {
  const href = `/changelog/${entry.version}`;

  return (
    <article
      id={`v${entry.version}`}
      className="scroll-mt-24 border-t border-outline-variant/15 pt-12"
    >
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
        {/* Left rail — version + date */}
        <div className="flex flex-row items-baseline gap-4 md:flex-col md:items-start md:gap-3">
          <Link
            href={href}
            className="font-headline text-4xl font-bold tracking-tighter text-on-surface transition-colors hover:text-secondary md:text-5xl"
          >
            {entry.version}
          </Link>
          <time
            dateTime={entry.date}
            className="font-mono text-[11px] uppercase tracking-widest text-secondary"
          >
            {formatEntryDate(entry)}
          </time>
        </div>

        {/* Content */}
        <div>
          <Link href={href} className="group block">
            <h2 className="mb-3 font-headline text-3xl font-bold leading-[1.05] tracking-tight text-on-surface transition-colors group-hover:text-secondary md:text-4xl">
              {entry.title}
            </h2>
          </Link>

          <p className="mb-6 max-w-2xl text-lg leading-snug text-on-surface/60">
            {entry.summary}
          </p>

          {entry.highlights.length > 0 ? (
            <ul className="mb-6 space-y-2">
              {entry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-on-surface-variant"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 bg-tertiary"
                  />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {/* Hero — driven by heroVideo / heroImage frontmatter */}
          {entry.heroVideo ? (
            <div className="mb-6 overflow-hidden">
              <video
                src={entry.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              />
            </div>
          ) : entry.heroImage ? (
            <div className="mb-6 overflow-hidden">
              <img src={entry.heroImage} alt={entry.title} className="w-full" />
            </div>
          ) : null}

          {/* Full body, rendered inline */}
          {children ? (
            <Prose className="prose-invert max-w-2xl">{children}</Prose>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <BlogTagList tags={entry.tags} />
            <Link
              href={href}
              className="font-mono text-[11px] uppercase tracking-widest text-secondary transition-colors hover:text-on-surface"
            >
              Permalink →
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
