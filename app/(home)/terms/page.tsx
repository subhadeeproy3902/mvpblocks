import { Spotlight } from '@/components/ui/spotlight';
import { geist } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export default function TermsPage() {
  return (
    <div className="bg-background relative min-h-screen w-full overflow-x-hidden px-2 py-32 md:px-6">
      <Spotlight />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative mb-12 text-center">
            <h1
              className={cn(
                'from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 relative bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]',
                geist.className,
              )}
            >
              Terms and Conditions
            </h1>
            <p className="mt-4 text-gray-500">Last updated: April 17, 2025</p>
          </div>

          <div
            className="prose text-foreground max-w-none rounded-2xl border p-6 md:p-10"
            style={{ boxShadow: 'inset 0 0 30px 1px rgba(244, 63, 94, 0.1)' }}
          >
            <div className="mb-8 border-b">
              <p className="text-lg leading-relaxed">
                Welcome to MVPBlocks! By accessing and using our platform, you
                agree to comply with these Terms and Conditions
                (&quot;Terms&quot;). Please read them carefully. If you do not
                agree to these Terms, you should immediately cease using the
                platform.
              </p>
            </div>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-rose-600">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">1</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Introduction to MVPBlocks
                </h2>
              </div>
              <div className="sm:pl-14">
                <p>
                  MVPBlocks is a platform designed for quick, efficient, and
                  customizable MVP (Minimum Viable Product) development. It
                  provides developers, designers, and creators with a collection
                  of ready-to-use blocks, components, and UI elements to build,
                  prototype, and deploy applications. Our goal is to help you
                  rapidly create MVPs without requiring complex setup or coding
                  from scratch.
                </p>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-rose-600">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">2</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  User Responsibility and Ownership
                </h2>
              </div>
              <div className="sm:pl-14">
                <h3 className="mt-6 mb-3 text-xl font-semibold">
                  2.1 User-Generated Content
                </h3>
                <p>
                  MVPBlocks empowers you to contribute to the platform by adding
                  your own custom blocks and components. As a contributor:
                </p>
                <ul>
                  <li className="mb-2">
                    <strong>Ownership:</strong> You retain full ownership and
                    intellectual property rights to any blocks or components you
                    create and upload to the platform.
                  </li>
                  <li>
                    <strong>License:</strong> By submitting blocks, you grant
                    MVPBlocks a non-exclusive, royalty-free license to display,
                    distribute, and use your creations within the platform.
                  </li>
                </ul>

                <h3 className="mt-6 mb-3 text-xl font-semibold">
                  2.2 Acceptable Use
                </h3>
                <p>
                  You agree to use MVPBlocks in a manner consistent with its
                  intended purpose. You may not:
                </p>
                <ul>
                  <li className="mb-2">
                    Engage in piracy or upload pirated content.
                  </li>
                  <li className="mb-2">
                    Reverse-engineer, exploit, or misuse the platform in any
                    way.
                  </li>
                  <li className="mb-2">
                    Use MVPBlocks for any unlawful, harmful, or illegal
                    activities.
                  </li>
                  <li>
                    Upload or integrate content that infringes on third-party
                    intellectual property rights, including copyrighted works,
                    trademarks, or patents.
                  </li>
                </ul>

                <h3 className="mt-6 mb-3 text-xl font-semibold">
                  2.3 Respect for Other Users
                </h3>
                <p>
                  MVPBlocks encourages collaboration and sharing. However,
                  it&apos;s important that you respect the work and intellectual
                  property of others in the community. Any attempt to infringe
                  upon the rights of other users, whether intentionally or not,
                  will result in immediate termination of access to the
                  platform.
                </p>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-rose-600">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">3</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Platform Usage
                </h2>
              </div>
              <div className="sm:pl-14">
                <p>
                  MVPBlocks offers a variety of features designed to streamline
                  the MVP development process, including:
                </p>
                <ul>
                  <li className="mb-2">
                    <strong>Customizable Blocks:</strong> Add your own blocks
                    and components to tailor the platform to your specific
                    needs.
                  </li>
                  <li className="mb-2">
                    <strong>Multi-Viewport:</strong> Preview your project across
                    different screen sizes and devices to ensure compatibility.
                  </li>
                  <li className="mb-2">
                    <strong>No User Accounts:</strong> There is no need for
                    registration or login to use MVPBlocks, ensuring ease of
                    access and simplicity.
                  </li>
                  <li>
                    <strong>CLI Support:</strong> MVPBlocks also supports a
                    Command-Line Interface (CLI) for advanced users to
                    integrate, manage, and deploy their MVPs.
                  </li>
                </ul>
                <p>
                  By using MVPBlocks, you agree to utilize these features
                  responsibly and only for lawful purposes. You are solely
                  responsible for the content and projects you create using the
                  platform.
                </p>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-rose-600">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">4</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Restrictions and Prohibited Activities
                </h2>
              </div>
              <div className="sm:pl-14">
                <p>While using MVPBlocks, you agree that you will not:</p>
                <ul>
                  <li className="mb-2">
                    Engage in activities that could damage, disable, or impair
                    the platform&apos;s functionality or interfere with other
                    users&apos; access.
                  </li>
                  <li className="mb-2">
                    Upload or distribute malware, viruses, or any other harmful
                    code.
                  </li>
                  <li className="mb-2">
                    Attempt to gain unauthorized access to any part of the
                    platform or other systems connected to it.
                  </li>
                  <li>
                    Use the platform to collect, store, or transmit personal
                    information of other users without their consent.
                  </li>
                </ul>
                <p>
                  We reserve the right to monitor, suspend, or terminate your
                  access to MVPBlocks if we suspect any violations of these
                  terms.
                </p>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-rose-600">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">5</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Intellectual Property and Licensing
                </h2>
              </div>
              <div className="sm:pl-14">
                <h3 className="mt-6 mb-3 text-xl font-semibold">
                  5.1 Platform Content
                </h3>
                <p>
                  All components, tools, and features provided by MVPBlocks are
                  owned by MVPBlocks or our licensors and are protected by
                  copyright, trademark, and other intellectual property laws.
                  You may not copy, modify, or redistribute the platform or any
                  of its proprietary components.
                </p>

                <h3 className="mt-6 mb-3 text-xl font-semibold">
                  5.2 User-Generated Content
                </h3>
                <p>
                  As a user, you retain ownership of the content you upload,
                  including any custom blocks or components. However, by
                  submitting content to MVPBlocks, you grant MVPBlocks a
                  non-exclusive, worldwide, royalty-free license to use, copy,
                  modify, distribute, and publicly display such content within
                  the scope of the platform&apos;s operations.
                </p>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-rose-600">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="font-bold">6</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  No Warranty
                </h2>
              </div>
              <div className="sm:pl-14">
                <p>
                  MVPBlocks is provided &quot;as is&quot; and &quot;as
                  available.&quot; While we strive to provide a reliable and
                  functional platform, we do not guarantee that MVPBlocks will
                  always be error-free or available without interruptions. We do
                  not warrant the accuracy, reliability, or completeness of any
                  information or materials on the platform.
                </p>
                <p>
                  You agree to use MVPBlocks at your own risk. MVPBlocks is not
                  liable for any damages, loss of data, or any other issues that
                  arise from the use or inability to use the platform.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              By using MVPBlocks, you acknowledge that you have read and
              understood these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}