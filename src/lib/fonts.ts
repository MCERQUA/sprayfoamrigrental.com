import localFont from "next/font/local";

export const bodyFont = localFont({
  src: [{ path: "./fonts/SourceSans3-variable.woff2", weight: "200 900", style: "normal" }],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = localFont({
  src: [
    { path: "./fonts/Bitter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Bitter-variable.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Bitter-variable.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});
