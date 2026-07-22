import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Seung han Jung — IDEA LAB Researcher";
  const description = "The research portfolio of Seung han Jung, an IDEA LAB researcher working across intelligent systems, engineering design, and human-centered technology.";

  return {
    metadataBase: base,
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: new URL("/og.png", base), width: 1536, height: 1024 }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base)] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
