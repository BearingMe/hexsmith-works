import { ImageResponse } from "next/og";

export const alt = "Hexsmith Works — software reliability for the AI era";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#090d12",
          backgroundImage:
            "linear-gradient(rgba(114, 143, 165, .055) 1px, transparent 1px), linear-gradient(90deg, rgba(114, 143, 165, .055) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#f1f5f9",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "76px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #2b3947",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "46px 54px",
            width: "100%",
          }}
        >
          <div style={{ alignItems: "center", display: "flex", gap: "16px" }}>
            <svg fill="none" height="42" viewBox="0 0 40 40" width="42">
              <path d="M20 2.5 35.2 11.25v17.5L20 37.5 4.8 28.75v-17.5L20 2.5Z" stroke="#a9bac8" strokeWidth="1.5" />
              <path d="M20 9.5 29.1 14.75v10.5L20 30.5l-9.1-5.25v-10.5L20 9.5Z" stroke="#58d5e8" strokeWidth="1.4" />
              <path d="M20 15v10m-5-7.5 10 5" stroke="#a9bac8" strokeWidth="1.4" />
            </svg>
            <span style={{ color: "#dce6ed", fontSize: "19px", letterSpacing: "3px" }}>HEXSMITH WORKS</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ color: "#75cfdd", fontSize: "16px", letterSpacing: "3px" }}>SOFTWARE RELIABILITY / AI ERA</span>
            <span style={{ fontSize: "66px", fontWeight: 600, letterSpacing: "-3px", lineHeight: 1.08 }}>AI writes the code.<br />Who verifies it?</span>
          </div>
          <div style={{ alignItems: "center", borderTop: "1px solid #2b3947", color: "#9aaaba", display: "flex", fontSize: "18px", justifyContent: "space-between", paddingTop: "20px" }}>
            <span>INTRODUCING FORGE</span>
            <span>HEXSMITH.TECH</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
