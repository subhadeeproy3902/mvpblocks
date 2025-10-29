import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-1 border-t mt-8 p-5 text-center w-full h-20">
      <span className="text-xs text-muted-foreground">
        © {currentYear} FinDash Pro. All rights reserved.
      </span>
      <div className="flex justify-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded text-muted-foreground hover:!bg-primary hover:text-white hover:scale-105 transition-all duration-500"
        >
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <Twitter className="size-4" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded text-muted-foreground hover:!bg-primary hover:text-white hover:scale-105 transition-all duration-500"
        >
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="size-4" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded text-muted-foreground hover:!bg-primary hover:text-white hover:scale-105 transition-all duration-500"
        >
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
