import { ImageResponse } from "next/og";

import { formatEntryDate, getEntryByVersion } from "@/lib/changelog";

export const runtime = "nodejs";
export const alt = "nteract release";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const isDev = process.env.NODE_ENV === "development";

export default async function OGImage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  const entry = await getEntryByVersion(version, {
    includeUnpublished: isDev,
  });

  if (!entry) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: "#0e0e0e",
          }}
        />
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0e0e0e",
          position: "relative",
          overflow: "hidden",
          padding: "60px 80px",
        }}
      >
        {/* Teal accent bar at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            display: "flex",
            background:
              "linear-gradient(to right, #8ef4e9, #8ef4e9 60%, transparent)",
          }}
        />

        {/* Decorative circles — peer diagram echo */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "80px",
            display: "flex",
            opacity: 0.15,
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="#8ef4e9"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              stroke="#8ef4e9"
              strokeWidth="1"
              strokeDasharray="4 4"
              fill="none"
            />
            <rect
              x="80"
              y="80"
              width="40"
              height="40"
              rx="2"
              transform="rotate(45 100 100)"
              stroke="#8ef4e9"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Version + date eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              color: "#8ef4e9",
              fontFamily: "monospace",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            nteract {entry.version}
          </span>
          <div
            style={{
              height: "1px",
              flex: 1,
              maxWidth: "120px",
              background: "rgba(142, 244, 233, 0.3)",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "#484848",
              fontFamily: "monospace",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            {formatEntryDate(entry)}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: "84px",
            fontWeight: 700,
            color: "#e5e5e5",
            lineHeight: 0.95,
            letterSpacing: "-3px",
            marginBottom: "28px",
          }}
        >
          {entry.title}
        </div>

        {/* Summary */}
        <div
          style={{
            display: "flex",
            fontSize: "30px",
            fontWeight: 500,
            color: "rgba(229, 229, 229, 0.7)",
            lineHeight: 1.2,
            maxWidth: "900px",
          }}
        >
          {entry.summary}
        </div>

        {/* Tags at bottom */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "60px",
            left: "80px",
            gap: "12px",
          }}
        >
          {entry.tags.map((tag) => (
            <span
              key={tag}
              style={{
                display: "flex",
                padding: "6px 16px",
                fontSize: "12px",
                fontFamily: "monospace",
                color: "#ababab",
                letterSpacing: "2px",
                textTransform: "uppercase",
                backgroundColor: "#1f1f1f",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
