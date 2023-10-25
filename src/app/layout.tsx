import { ThemeProvider } from "@/components/common/ThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { appName } from "@/config/constants";

export const metadata: Metadata = {
  title: `${appName}`,
  description: `${appName}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
