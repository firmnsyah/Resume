import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LoadingScreen } from "@/components/loading-screen";
import { LiveChat } from "@/components/live-chat";
import { GsapAnimations } from "@/components/gsap-animations";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firmansyah's Resume",
  description:
    "Undergraduate @ UNHAS | Aspiring Data & Business Intelligence Analyst based in Makassar, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Blocking script — reads localStorage before first paint to avoid dark-mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('neu-theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
        <LoadingScreen />
        {children}
        <LiveChat />
        <GsapAnimations />
      </body>
    </html>
  );
}
