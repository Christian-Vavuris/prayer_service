import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prayer API";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: 340,
            height: 340,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,116,42,0.18) 0%, transparent 70%)",
            top: 100,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {/* Candle SVG */}
        <svg
          width="90"
          height="160"
          viewBox="0 0 90 160"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flame outer */}
          <path
            d="M45 10 C33 30 30 50 36 65 C39 74 51 74 54 65 C60 50 57 30 45 10Z"
            fill="#f97316"
          />
          {/* Flame inner */}
          <path
            d="M45 22 C39 36 38 48 42 56 C43.5 60 46.5 60 48 56 C52 48 51 36 45 22Z"
            fill="#fef08a"
          />
          {/* Wick */}
          <line
            x1="45"
            y1="72"
            x2="45"
            y2="82"
            stroke="#1c1917"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Candle body */}
          <rect x="29" y="82" width="32" height="70" rx="5" fill="#e8e0cc" />
          {/* Highlight */}
          <rect
            x="34"
            y="87"
            width="7"
            height="60"
            rx="3"
            fill="white"
            opacity="0.25"
          />
        </svg>

        {/* Title */}
        <div
          style={{
            marginTop: 40,
            fontSize: 64,
            color: "#c9b89a",
            letterSpacing: "0.04em",
            fontWeight: 400,
          }}
        >
          Prayer API
        </div>

        {/* Subtitle */}
        <div
          style={{
            marginTop: 16,
            fontSize: 26,
            color: "#7a6a56",
            letterSpacing: "0.06em",
          }}
        >
          prayerapi.org
        </div>
      </div>
    ),
    { ...size }
  );
}
