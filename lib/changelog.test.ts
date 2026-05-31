// @vitest-environment node

import { describe, expect, it } from "vitest";

import {
  formatEntryDate,
  getAllEntries,
  getAllVersionParams,
  getEntryByVersion,
  resolveVersionParam,
} from "@/lib/changelog";

// The backfilled entries ship as published: false until each is seasoned, so
// these tests opt into unpublished content to exercise the loader.
const all = { includeUnpublished: true } as const;

describe("changelog content utilities", () => {
  it("orders entries newest-first by release date", async () => {
    const entries = await getAllEntries(all);

    expect(entries.map((entry) => entry.version)).toEqual([
      "2.5.1",
      "2.5.0",
      "2.4",
      "2.3",
      "2.2",
      "2.1",
    ]);
  });

  it("hides unpublished entries from default lookups", async () => {
    const published = await getAllEntries();
    const draft = await getEntryByVersion("2.5.0");

    expect(published.some((entry) => entry.version === "2.5.0")).toBe(false);
    expect(draft).toBeNull();
  });

  it("redirects a covered patch version to its canonical entry", async () => {
    const resolved = await resolveVersionParam("2.4.1", all);

    expect(resolved).toEqual({ kind: "redirect", version: "2.4" });
  });

  it("resolves a canonical version to its entry", async () => {
    const resolved = await resolveVersionParam("2.4", all);

    expect(resolved?.kind).toBe("canonical");
    expect(resolved?.kind === "canonical" && resolved.entry.version).toBe("2.4");
  });

  it("returns null for an unknown version", async () => {
    expect(await resolveVersionParam("9.9.9", all)).toBeNull();
  });

  it("generates static params for canonical and every covered version", async () => {
    const params = await getAllVersionParams(all);

    // Canonical grouped slug plus the patch versions it absorbs.
    expect(params).toContain("2.4");
    expect(params).toContain("2.4.0");
    expect(params).toContain("2.4.8");
    // Skipped patch numbers never existed, so they are not params.
    expect(params).not.toContain("2.4.3");
  });

  it("prefers an explicit dateLabel for grouped ranges", async () => {
    const entry = await getEntryByVersion("2.4", all);

    expect(entry?.dateLabel).toBe("May 2–14, 2026");
    expect(formatEntryDate(entry!)).toBe("May 2–14, 2026");
  });
});
