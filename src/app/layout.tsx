import type { Metadata } from "next";
import "./globals.css";
import { HeroProvider } from "@/providers/hero-ui";
import { Loader } from "@/shared/ui";
/* import { HeroProvider } from "@/providers/hero-ui"; */

export const metadata: Metadata = {
  title: "Electro Solar",
  description: "Una empresa generadora de energía renovable y gestión de activos con sede en Peru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-satoshi`}
      >
        <Loader
          theme="dark"
          classNames={{
            container: "-z-10"
          }}
        />
        <HeroProvider>
          {children}
        </HeroProvider>
      </body>
    </html>
  );
}
