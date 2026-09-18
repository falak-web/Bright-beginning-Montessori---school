import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Northbridge Academy",
  description: "A professional school website focused on academic excellence, equality and student wellbeing."
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}