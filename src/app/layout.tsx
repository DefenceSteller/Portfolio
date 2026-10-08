import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: `Portfolio of ${profile.name} (@${profile.handle}) — ${profile.role.toLowerCase()} shipping web and mobile products with Next.js, TypeScript, React and Flutter.`,
  keywords: [
    profile.name,
    profile.handle,
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Flutter",
    "Portfolio",
  ],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
    images: [{ url: profile.avatar }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    images: [profile.avatar],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} dark h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <div
          aria-hidden="true"
          className="bg-grid-mask pointer-events-none fixed inset-0 -z-10"
        />
        <div
          aria-hidden="true"
          className="bg-noise pointer-events-none fixed inset-0 -z-10"
        />
      </body>
    </html>
  );
}
