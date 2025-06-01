import { Spotlight } from '@/components/ui/spotlight';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background px-2 py-32 md:px-6">
      <Spotlight />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative mb-12 text-center">
            <h1
              className={cn(
                'relative bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 md:text-[54px] md:leading-[60px]',
                space.className,
              )}
            >
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-500">Last updated: April 17, 2025</p>
          </div>

          <div
            className="prose max-w-none rounded-2xl border p-6 text-foreground md:p-10"
            style={{ boxShadow: 'inset 0 0 30px 1px rgba(244, 63, 94, 0.1)' }}
          >
            <div className="mb-8 border-b">
              <p className="text-lg leading-relaxed">
                At MVPBlocks, your privacy is not just respected — it&apos;s
                structurally baked into how we work. We don&apos;t track. We
                don&apos;t snoop. We don&apos;t ask for more than we
                need—because we don&apos;t need much at all.
              </p>
              <p className="text-lg leading-relaxed">
                This Privacy Policy explains what limited information we
                collect, how we use it, and how we keep it secure.
              </p>
            </div>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">1</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">TL;DR</h2>
              </div>
              <div className="pl-14">
                <ul>
                  <li className="mb-2">
                    We do not require account registration.
                  </li>
                  <li className="mb-2">We do not collect personal data.</li>
                  <li className="mb-2">
                    We do not track you across the internet.
                  </li>
                  <li className="mb-2">
                    We do not store anything unless explicitly needed for core
                    functionality.
                  </li>
                  <li>
                    We do not sell or share your data with third parties. Ever.
                  </li>
                </ul>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">2</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  What We Collect
                </h2>
              </div>
              <div className="pl-14">
                <p>
                  We intentionally collect as little data as possible.
                  Here&apos;s the breakdown:
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold">
                  a. Site Analytics (Optional, Minimal & Anonymous)
                </h3>
                <p>
                  We may use privacy-friendly analytics (like Plausible or
                  Umami) to understand how MVPBlocks is used. These tools
                  collect non-personal, anonymized information like:
                </p>
                <ul>
                  <li className="mb-2">Pages visited</li>
                  <li className="mb-2">Time spent on pages</li>
                  <li className="mb-2">Browser type and OS</li>
                  <li>Referring website</li>
                </ul>
                <p>
                  These analytics do not use cookies, and we do not track
                  personal identifiers like IP addresses or device IDs.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold">
                  b. User-Generated Content
                </h3>
                <p>
                  If you choose to create or upload custom blocks/components:
                </p>
                <ul>
                  <li className="mb-2">
                    Your content is stored for rendering and reusability within
                    MVPBlocks.
                  </li>
                  <li className="mb-2">
                    You retain full ownership of your components.
                  </li>
                  <li>
                    We do not associate these with any personal identity or
                    login.
                  </li>
                </ul>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">3</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  No Cookies Policy
                </h2>
              </div>
              <div className="pl-14">
                <p>
                  We believe cookies should be in your browser&apos;s snack bar,
                  not your browser&apos;s storage.
                </p>
                <p>
                  MVPBlocks uses zero tracking cookies. If we ever need to use
                  local storage or temporary session data for editor
                  functionality, it&apos;s purely for user experience and never
                  sent to our servers.
                </p>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">4</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Third-Party Tools
                </h2>
              </div>
              <div className="pl-14">
                <p>
                  If we integrate third-party tools (like analytics, hosting, or
                  icons):
                </p>
                <ul>
                  <li className="mb-2">
                    We choose privacy-focused services whenever possible.
                  </li>
                  <li className="mb-2">
                    These services must comply with strong data protection
                    practices.
                  </li>
                  <li>
                    We don&apos;t share user data with them unless it&apos;s
                    essential for platform operation—and even then, no personal
                    data is shared.
                  </li>
                </ul>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">5</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Data Sharing and Selling
                </h2>
              </div>
              <div className="pl-14">
                <p>
                  We do not sell, rent, trade, or otherwise disclose your data
                  to anyone. Period.
                </p>
                <p>
                  We&apos;re developers too. We know how annoying that stuff is.
                </p>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">6</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Children&apos;s Privacy
                </h2>
              </div>
              <div className="pl-14">
                <p>
                  MVPBlocks is not intended for use by children under the age of
                  13. We do not knowingly collect personal information from
                  children. If we discover that a child under 13 has submitted
                  data, we will delete it immediately.
                </p>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">7</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Security Measures
                </h2>
              </div>
              <div className="pl-14">
                <p>
                  We take your privacy seriously and use modern infrastructure
                  to ensure platform security. This includes:
                </p>
                <ul>
                  <li className="mb-2">HTTPS-only access</li>
                  <li className="mb-2">Regular code audits</li>
                  <li>No centralized user databases</li>
                </ul>
                <p>
                  Since there are no accounts, there&apos;s no password to steal
                  and no profile to breach.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
