import { Github, Heart, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted/30 relative overflow-hidden rounded-t-3xl border-t md:rounded-t-[4rem]">
      <div className="absolute inset-0 -z-10">
        <div className="bg-primary/30 dark:bg-primary/10 absolute bottom-0 left-0 h-64 w-64 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl dark:bg-blue-500/10"></div>
      </div>
      <div className="container mx-auto max-w-6xl px-5 pt-16 pb-8">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-4 flex items-center justify-start gap-2">
              <img
                src="/logo.webp"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="bg-primary from-foreground to-primary via-rose-200 bg-clip-text text-2xl font-semibold text-transparent dark:bg-gradient-to-b">
                Mvpblocks
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Copy-paste UI components that just work — responsive, animated,
              and beautifully styled.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://github.com/subhadeeproy3902/mvpblocks"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-muted rounded-full p-2 transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/mvp_Subha"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-muted rounded-full p-2 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/mvp_Subha"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-muted rounded-full p-2 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/subhadeep3902"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-muted rounded-full p-2 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/introduction"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Introduction
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/get-started"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/add-a-block"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Add block
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  License
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="mb-4 font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/subhadeeproy3902/mvpblocks/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-muted/50 relative border-t pt-8">
          <div className="via-primary/70 absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent"></div>
          <div className="text-muted-foreground flex flex-col items-center justify-between text-sm md:flex-row">
            <p>
              ©{new Date().getFullYear()}{' '}
              <span className="text-foreground font-medium">Mvpblocks</span>.
              All rights reserved.
            </p>
            <div className="mt-4 flex items-center space-x-1 md:mt-0">
              <span>
                Building in public at
                <Link
                  href="http://mvp-subha.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary ml-1 font-medium hover:underline"
                >
                  Subhadeep
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
