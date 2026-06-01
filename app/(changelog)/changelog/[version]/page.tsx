import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { BlogTagList } from "@/components/blog/tag-list";
import { Prose } from "@/components/prose";
import {
  formatEntryDate,
  getAllVersionParams,
  includeDrafts,
  resolveVersionParam,
} from "@/lib/changelog";
import { absoluteUrl } from "@/lib/site";

type ChangelogVersionPageProps = {
  params: Promise<{
    version: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const versions = await getAllVersionParams({
    includeUnpublished: includeDrafts,
  });
  return versions.map((version) => ({ version }));
}

export async function generateMetadata({
  params,
}: ChangelogVersionPageProps): Promise<Metadata> {
  const { version } = await params;
  const resolved = await resolveVersionParam(version, {
    includeUnpublished: includeDrafts,
  });

  if (!resolved || resolved.kind !== "canonical") {
    return {};
  }

  const { entry } = resolved;
  const canonical = absoluteUrl(`/changelog/${entry.version}`);
  const ogImage = entry.heroImage ?? absoluteUrl(`/changelog/${entry.version}/opengraph-image`);

  return {
    title: `nteract ${entry.version} — ${entry.title}`,
    description: entry.summary,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `nteract ${entry.version} — ${entry.title}`,
      description: entry.summary,
      url: canonical,
      type: "article",
      publishedTime: entry.date,
      tags: entry.tags,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `nteract ${entry.version} — ${entry.title}`,
      description: entry.summary,
      images: [ogImage],
    },
  };
}

export default async function ChangelogVersionPage({
  params,
}: ChangelogVersionPageProps) {
  const { version } = await params;
  const resolved = await resolveVersionParam(version, {
    includeUnpublished: includeDrafts,
  });

  if (!resolved) {
    notFound();
  }

  if (resolved.kind === "redirect") {
    redirect(`/changelog/${resolved.version}`);
  }

  const { entry } = resolved;
  const { default: Content } = await import(
    `@/content/changelog/${entry.version}.mdx`
  );

  return (
    <div className="px-6 pb-24 pt-12 md:px-12">
      <article className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <Link
              href="/changelog"
              className="font-mono text-[11px] uppercase tracking-widest text-[#a993d1] transition-colors hover:text-on-surface"
            >
              ← Changelog
            </Link>
            <div className="h-px flex-grow bg-outline-variant/20" />
            <time
              dateTime={entry.date}
              className="font-mono text-xs uppercase tracking-widest text-secondary"
            >
              {formatEntryDate(entry)}
            </time>
          </div>

          <div className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-tertiary">
            nteract {entry.version}
          </div>

          <h1 className="mb-6 font-headline text-5xl font-bold leading-[0.95] tracking-tighter text-on-surface md:text-7xl">
            {entry.title}
          </h1>

          <p className="mb-6 max-w-2xl text-xl leading-snug text-on-surface/60">
            {entry.summary}
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <BlogTagList tags={entry.tags} />
          </div>
        </header>

        {/* Hero */}
        {entry.heroVideo ? (
          <section className="mb-16">
            <video
              src={entry.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            />
          </section>
        ) : entry.heroImage ? (
          <section className="mb-16">
            <div className="aspect-video w-full overflow-hidden bg-surface-container-low">
              <img
                alt={entry.title}
                className="h-full w-full object-cover"
                src={entry.heroImage}
              />
            </div>
          </section>
        ) : null}

        {/* Highlights */}
        {entry.highlights.length > 0 ? (
          <section className="mx-auto mb-16 max-w-2xl">
            <h2 className="mb-5 font-headline text-2xl font-bold tracking-tight text-on-surface">
              Highlights
            </h2>
            <ul className="space-y-3">
              {entry.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-lg text-on-surface-variant"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 bg-tertiary"
                  />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {/* Body — narrative + full technical changelog */}
        <Prose className="prose-invert mx-auto max-w-2xl">
          <Content />
        </Prose>

        {/* Footer */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center gap-4">
          <Link
            href="/changelog"
            className="font-mono text-[11px] uppercase tracking-widest text-[#a993d1] transition-colors hover:text-on-surface"
          >
            ← All releases
          </Link>
          <div className="h-px flex-grow bg-outline-variant/20" />
          {entry.githubReleaseUrl ? (
            <a
              href={entry.githubReleaseUrl}
              className="font-mono text-[11px] uppercase tracking-widest text-outline-variant transition-colors hover:text-on-surface"
              rel="noreferrer"
              target="_blank"
            >
              GitHub release →
            </a>
          ) : null}
        </div>
      </article>
    </div>
  );
}
