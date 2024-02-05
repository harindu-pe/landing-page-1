import type { Metadata } from "next";
import { Jost, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

const dM_Serif_Display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm_serif_display",
});

export const metadata: Metadata = {
  title: "Interno",
  description: "Landing Page Template 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${jost.variable} ${dM_Serif_Display.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
