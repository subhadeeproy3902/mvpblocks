'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';
import {
  Github,
  Linkedin,
  Twitter,
  Moon,
  Sun,
  ArrowDownLeft,
  MessageCircle,
} from 'lucide-react';

function useThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme, mounted };
}

export default function FooterModern() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Integrations', href: '#integrations' },
      { name: 'Roadmap', href: '#roadmap' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api' },
      { name: 'Community', href: '/community' },
      { name: 'Status', href: '/status' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const { theme, toggleTheme, mounted } = useThemeToggle();

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: MessageCircle, label: 'Discord', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  if (!mounted) return null;

  const footerLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/cookies', label: 'Cookie Policy' },
  ];

  return (
    <footer className="mt-20 w-full border-t">
      <div className="via-primary animate-energy-flow h-px w-full bg-gradient-to-r from-transparent to-transparent" />
      <div className="relative container m-auto w-full px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="https://i.postimg.cc/2SRcktkT/Mvpblocks.webp"
                alt="Logo"
                width={200}
                height={200}
                className="size-10 rounded-md"
              />
              <span className="text-xl font-semibold">Mvpblocks</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Building innovative solutions for modern businesses. Fast,
              reliable, and scalable.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <Button
                    key={label}
                    size="icon"
                    variant="outline"
                    asChild
                    className="hover:bg-primary dark:hover:bg-primary !border-primary/30 !hover:border-primary cursor-pointer shadow-none transition-all duration-500 hover:scale-110 hover:-rotate-12 hover:text-white hover:shadow-md"
                  >
                    <Link href={href}>
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-primary dark:hover:bg-primary !border-primary/30 !hover:border-primary cursor-pointer shadow-none transition-all duration-1000 hover:scale-110 hover:-rotate-12 hover:text-white hover:shadow-md"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-md space-y-3"
            >
              <label htmlFor="email" className="block text-sm font-medium">
                Subscribe to our newsletter
              </label>
              <div className="relative w-full">
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="h-12 w-full"
                  required
                />
                <Button
                  type="submit"
                  className="absolute top-1.5 right-1.5 cursor-pointer transition-all duration-1000 hover:px-10"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-muted-foreground text-xs">
                Get the latest updates, tutorials, and exclusive offers.
              </p>
            </form>
            <h1 className="from-muted-foreground/15 bg-gradient-to-b bg-clip-text text-5xl font-extrabold text-transparent lg:text-7xl">
              Developer
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="grid w-full grid-cols-2 items-start justify-between gap-8 px-5 lg:col-span-3">
            {(['product', 'company', 'resources', 'legal'] as const).map(
              (section) => (
                <div key={section} className="w-full">
                  <h3 className="border-primary mb-4 -ml-5 border-l-2 pl-5 text-sm font-semibold tracking-wider uppercase">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </h3>
                  <ul className="space-y-3">
                    {navigation[section].map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="group text-muted-foreground hover:text-foreground decoration-primary -ml-5 inline-flex items-center gap-2 underline-offset-8 transition-all duration-500 hover:pl-5 hover:underline"
                        >
                          <ArrowDownLeft className="text-primary rotate-[225deg] opacity-30 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100 sm:group-hover:rotate-[225deg] md:rotate-0" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="via-primary animate-rotate-3d h-px w-full bg-gradient-to-r from-transparent to-transparent" />
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 p-4 text-xs md:flex-row md:px-0 md:text-sm">
          <p className="">
            &copy; {currentYear} Mvpblocks | All rights reserved
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-foreground">
                {label}
              </Link>
            ))}
          </div>
        </div>
        <span className="from-primary/20 absolute inset-x-0 bottom-0 left-0 -z-10 h-1/3 w-full bg-gradient-to-t" />
      </div>
    </footer>
  );
}
