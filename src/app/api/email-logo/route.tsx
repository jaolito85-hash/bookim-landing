import { ImageResponse } from "next/og"

export const runtime = "edge"

/**
 * Renders the Bookim logo as a 400x400 PNG, served with cache headers
 * suitable for email clients (1 day cache).
 *
 * Used by the email templates as <img src="https://www.bookim.com.br/api/email-logo">
 * because most mail clients (Gmail, Outlook) strip SVG.
 */
export async function GET() {
  // Sizes scaled from 200x200 (the SVG viewBox) to 400x400 for retina.
  // strokeWidth = 4% of size = 16px
  const stroke = 16
  return new ImageResponse(
    (
      <div
        style={{
          width: "400px",
          height: "400px",
          background: "#2D4057",
          borderRadius: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="400"
          height="400"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="200" height="200" rx="40" fill="#2D4057" />
          <rect x="30" y="30" width="140" height="140" rx="28" fill="#F8F9FA" />
          <circle cx="70" cy="90" r="22" stroke="#2D4057" strokeWidth={stroke / 4} fill="none" />
          <circle cx="130" cy="90" r="22" stroke="#2D4057" strokeWidth={stroke / 4} fill="none" />
          <path d="M 92 90 Q 100 85 108 90" stroke="#2D4057" strokeWidth={stroke / 4} fill="none" strokeLinecap="round" />
          <path d="M 48 90 L 40 90" stroke="#2D4057" strokeWidth={stroke / 4} strokeLinecap="round" />
          <path d="M 152 90 L 160 90" stroke="#2D4057" strokeWidth={stroke / 4} strokeLinecap="round" />
          <circle cx="70" cy="90" r="6" fill="#2D4057" />
          <circle cx="130" cy="90" r="6" fill="#2D4057" />
          <path d="M 80 120 Q 100 130 120 120" stroke="#2D4057" strokeWidth={stroke / 4} fill="none" strokeLinecap="round" />
        </svg>
      </div>
    ),
    {
      width: 400,
      height: 400,
      headers: {
        // Cache for 1 day on CDN, 1 hour in client
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  )
}
