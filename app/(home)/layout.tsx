import { NavbarDemo } from "@/components/home/navbar";
import ReactLenis from "lenis/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReactLenis root><NavbarDemo />{ children } </ReactLenis>;
}
