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
      name: 'Features',
      link: '/#features',
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
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
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
