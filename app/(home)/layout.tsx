import ReactLenis from "lenis/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ReactLenis root>{ children } </ReactLenis>;
}
