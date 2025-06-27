import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Jagdeep Singh",
  description: "All about me is here.. if u wan to hire me🤞",
  icons: {
    icon: "/favicon.ico", 
  },

};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}