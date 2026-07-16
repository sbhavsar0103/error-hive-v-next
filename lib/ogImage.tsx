import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function createOgImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#060010",
          color: "white",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#f59e0b", fontWeight: 700 }}>
          Error-Hive Solutions
        </div>
        <div>
          <h1
            style={{
              margin: 0,
              maxWidth: 950,
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              marginTop: 28,
              maxWidth: 860,
              fontSize: 34,
              lineHeight: 1.3,
              color: "#fef3c7",
            }}
          >
            {subtitle}
          </p>
        </div>
        <div style={{ fontSize: 26, color: "#d1d5db" }}>
          www.error-hive.com
        </div>
      </div>
    ),
    ogSize,
  );
}
