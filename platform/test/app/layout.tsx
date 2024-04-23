import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "arsenstorm/ui",
    template: "%s - arsenstorm/ui",
  },
  description: "Extension of Catalyst UI components",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
