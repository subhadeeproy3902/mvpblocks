import { NavbarDemo } from '@/components/shared/navbar';
import ReactLenis from 'lenis/react';
import EndSlider from '@/components/shared/comeagain';
import Footer from '@/components/shared/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <NavbarDemo />
      {children}
      <EndSlider />
      <Footer />
    </ReactLenis>
  );
}
