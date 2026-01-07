'use client';

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar';
import { useState } from 'react';
import { ModeToggle } from '../ui/mode-toggle';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export function NavbarDemo() {
  const navItems = [
    {
      name: 'Docs',
      link: '/docs/introduction',
    },
    {
      name: 'About',
      link: '/about',
    },
    {
      name: 'Templates',
      link: '/templates',
    },
    {
      name: "Hire Us",
      link: 'https://aura-devs.netlify.app',
    },
    {
      name: 'Showcase',
      link: '/showcase',
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="z-[150]">
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="gradient">
            <Link
              prefetch={false}
              href="https://github.com/subhadeeproy3902/mvpblocks"
            >
              Github
            </Link>
          </NavbarButton>
          <ModeToggle />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-4">
            <ModeToggle />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 flex items-center justify-between"
            >
              <span className="block">{item.name}</span>
              {
            item.name === "Templates" && (
              <button className="z-50 group relative rounded-md border-2 border-primary bg-primary px-1 py-0.5 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-red-500/50 text-[9px] ml-1 inline-block cursor-pointer select-none pointer-events-none">
                <span className="absolute left-0 top-0 size-full rounded-sm border border-dashed border-white shadow-inner shadow-white/30 group-active:shadow-white/10"></span>
                <span className="absolute left-0 top-0 size-full rotate-180 rounded-sm border-white shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
                New
              </button>
            )
          }
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              variant="gradient"
              className="w-full"
              onClick={() =>
                redirect('https://github.com/subhadeeproy3902/mvpblocks')
              }
            >
              Github
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
