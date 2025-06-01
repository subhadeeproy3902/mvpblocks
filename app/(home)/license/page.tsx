'use client';

import { Shield, FileText, Check, Copy, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Spotlight } from '@/components/ui/spotlight';
import { Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const space = Geist({
  subsets: ['latin'],
  variable: '--font-carlito',
  weight: '400',
});

export default function LicensePage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background px-2 py-32 md:px-6">
      <Spotlight />
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="relative mb-12 text-center">
            <h1
              className={cn(
                'relative bg-gradient-to-r from-foreground/60 via-foreground to-foreground/60 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 md:text-[54px] md:leading-[60px]',
                space.className,
              )}
            >
              BSD 3-Clause License
            </h1>
            <p className="mt-4 text-gray-500">
              Copyright (c) 2025, Subhadeep Roy
            </p>
          </div>

          <div
            className="prose max-w-none rounded-2xl border p-6 text-foreground md:p-10"
            style={{ boxShadow: 'inset 0 0 30px 1px rgba(244, 63, 94, 0.1)' }}
          >
            <div className="mb-8 border-b">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Open Source License
                  </span>
                </div>
                <CopyButton />
              </div>
              <p className="text-lg leading-relaxed">
                Redistribution and use in source and binary forms, with or
                without modification, are permitted provided that the following
                conditions are met:
              </p>
            </div>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30">
                  <span className="font-bold">1</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Source Code Redistribution
                </h2>
              </div>
              <div className="pl-14">
                <p className="mb-4">
                  Redistributions of source code must retain the above copyright
                  notice, this list of conditions and the following disclaimer.
                </p>
                <div className="rounded-lg border border-rose-100 bg-rose-50 p-4 dark:border-rose-800/30 dark:bg-rose-900/20">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="m-0 text-sm text-rose-800 dark:text-rose-300">
                      When you share the source code, make sure to include the
                      copyright notice and license terms.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30">
                  <span className="font-bold">2</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Binary Redistribution
                </h2>
              </div>
              <div className="pl-14">
                <p className="mb-4">
                  Redistributions in binary form must reproduce the above
                  copyright notice, this list of conditions and the following
                  disclaimer in the documentation and/or other materials
                  provided with the distribution.
                </p>
                <div className="rounded-lg border border-rose-100 bg-rose-50 p-4 dark:border-rose-800/30 dark:bg-rose-900/20">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="m-0 text-sm text-rose-800 dark:text-rose-300">
                      When distributing compiled versions, include the license
                      in your documentation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="group mb-10">
              <div className="mb-4 flex items-center gap-4 transition-colors duration-300 group-hover:text-primary">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-primary dark:bg-rose-900/30">
                  <span className="font-bold">3</span>
                </div>
                <h2 className="m-0 text-2xl font-bold tracking-tight">
                  Endorsement Restriction
                </h2>
              </div>
              <div className="pl-14">
                <p className="mb-4">
                  Neither the name of the copyright holder nor the names of its
                  contributors may be used to endorse or promote products
                  derived from this software without specific prior written
                  permission.
                </p>
                <div className="rounded-lg border border-rose-100 bg-rose-50 p-4 dark:border-rose-800/30 dark:bg-rose-900/20">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <p className="m-0 text-sm text-rose-800 dark:text-rose-300">
                      Don&apos;t use the author&apos;s name to promote your
                      product without permission.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-secondary/40 to-secondary/10 p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset]">
                <h2 className="m-0 text-xl font-bold text-slate-800 dark:text-slate-200">
                  Disclaimer of Warranty
                </h2>
                <div className="overflow-x-auto font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <p className="mb-0">
                    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
                    CONTRIBUTORS &quot;AS IS&quot; AND ANY EXPRESS OR IMPLIED
                    WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
                    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
                    PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
                    HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
                    INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
                    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
                    GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR
                    BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
                    LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
                    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
                    OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGE.
                  </p>
                </div>
              </div>
            </section>

            <div className="mt-12 border-t pt-6">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="text-sm text-gray-400">
                  <p className="m-0">
                    The BSD 3-Clause License is a permissive free software
                    license.
                  </p>
                </div>
                <Link
                  href="https://github.com/subhadeeproy3902/mvpblocks/blob/main/LICENSE"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors"
                >
                  <span>View Full License ?</span>
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const licenseText = `BSD 3-Clause License

Copyright (c) 2025, Subhadeep Roy

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its
   contributors may be used to endorse or promote products derived from
   this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;

    navigator.clipboard.writeText(licenseText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      onClick={handleCopy}
      className="inline-flex h-8 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy License</span>
        </>
      )}
    </Button>
  );
}
