import { Github, Heart, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-3xl md:rounded-t-[4rem] border-t bg-muted/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl dark:bg-primary/10"></div>
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl dark:bg-blue-500/10"></div>
      </div>
      <div className="container mx-auto max-w-6xl px-5 pb-8 pt-16">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2">
            <div className="mb-4 flex items-center justify-start gap-2">
              <img
                src="/logo.png"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="bg-primary from-foreground via-rose-200 to-primary bg-clip-text text-2xl font-semibold text-transparent dark:bg-gradient-to-b">
                Mvpblocks
              </span>
            </div>
            <p className="mb-4 text-muted-foreground">
              Copy-paste UI components that just work — responsive, animated,
              and beautifully styled.
            </p>
            <div className="flex space-x-3">
              <Link
                href="https://github.com/subhadeeproy3902/mvpblocks"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://x.com/mvp_Subha"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/mvp_Subha"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/subhadeep3902"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 transition-colors hover:bg-muted"
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
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/introduction"
                  className="text-muted-foreground transition-colors hover:text-foreground"
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
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/get-started"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/add-a-block"
                  className="text-muted-foreground transition-colors hover:text-foreground"
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
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/license"
                  className="text-muted-foreground transition-colors hover:text-foreground"
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
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/subhadeeproy3902/mvpblocks/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contribute
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t relative border-muted/50 pt-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
          <div className="flex flex-col items-center justify-between text-sm text-muted-foreground md:flex-row">
            <p>©{new Date().getFullYear()} <span className="font-medium text-foreground">Mvpblocks</span>. All rights reserved.</p>
            <div className="mt-4 flex items-center space-x-1 md:mt-0">
              <span>Building in public at
                <Link
                  href="http://mvp-subha.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 font-medium text-primary hover:underline"
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
