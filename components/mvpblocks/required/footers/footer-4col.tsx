import {
  Dribbble,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Github, label: 'GitHub' },
  { icon: Dribbble, label: 'Dribbble' },
];

const aboutLinks = [
  { text: 'Company History', href: '#' },
  { text: 'Meet the Team', href: '#' },
  { text: 'Employee Handbook', href: '#' },
  { text: 'Careers', href: '#' },
];

const serviceLinks = [
  { text: 'Web Development', href: '#' },
  { text: 'Web Design', href: '#' },
  { text: 'Marketing', href: '#' },
  { text: 'Google Ads', href: '#' },
];

const helpfulLinks = [
  { text: 'FAQs', href: '#' },
  { text: 'Support', href: '#' },
  { text: 'Live Chat', href: '#', hasIndicator: true },
];

const contactInfo = [
  { icon: Mail, text: 'Subhadeep' },
  { icon: Phone, text: '8637373116' },
  { icon: MapPin, text: 'Kolkata, India', isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="mt-16 w-full place-self-end rounded-t-xl bg-secondary dark:bg-secondary/20">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-2 text-primary sm:justify-start">
              <img
                src="/logo.webp"
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="bg-primary from-foreground via-rose-200 to-primary bg-clip-text text-2xl font-semibold text-transparent dark:bg-gradient-to-b">
                Mvpblocks
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-foreground/50 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-primary transition hover:text-primary/80"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">About Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Services</p>

              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Helpful Links</p>

              <ul className="mt-8 space-y-4 text-sm">
                {helpfulLinks.map(({ text, href, hasIndicator }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className={`${
                        hasIndicator
                          ? 'group flex justify-center gap-1.5 sm:justify-start'
                          : 'text-secondary-foreground/70 transition'
                      }`}
                    >
                      <span className="text-secondary-foreground/70 transition">
                        {text}
                      </span>
                      {hasIndicator && (
                        <span className="relative flex size-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="size-5 shrink-0 text-primary shadow-sm" />
                      {isAddress ? (
                        <address className="-mt-0.5 flex-1 not-italic text-secondary-foreground/70 transition">
                          {text}
                        </address>
                      ) : (
                        <span className="flex-1 text-secondary-foreground/70 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70-foreground mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; 2025 Mvpblocks
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
