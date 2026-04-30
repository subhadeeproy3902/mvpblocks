import { source } from '@/lib/source';
import { siteConfig } from '@/config/site';

export const revalidate = false;

export async function GET() {
  const out: string[] = [];

  out.push(`# ${siteConfig.name}`);
  out.push('');
  out.push(`> ${siteConfig.description}`);
  out.push('');
  out.push(
    'MVPBlocks is an open-source, developer-first UI library of plug-and-play sections, blocks, and templates for Next.js, React, Tailwind CSS, and Framer Motion. It is designed for shipping MVPs, landing pages, and SaaS products quickly. All blocks are responsive, accessible, dark-mode ready, and free to use in personal and commercial projects under the BSD 3-Clause license.',
  );
  out.push('');

  out.push('## Key links');
  out.push(`- Site: ${siteConfig.url}`);
  out.push(`- Docs: ${siteConfig.url}/docs`);
  out.push(`- Templates: ${siteConfig.url}/templates`);
  out.push(`- Showcase: ${siteConfig.url}/showcase`);
  out.push(`- About: ${siteConfig.url}/about`);
  out.push(`- License (BSD 3-Clause): ${siteConfig.url}/license`);
  out.push(`- GitHub: ${siteConfig.links.github}`);
  out.push(`- Twitter: ${siteConfig.links.twitter}`);
  out.push(`- Full LLM index: ${siteConfig.url}/llms-full.txt`);
  out.push('');

  out.push('## Stack');
  out.push('- Next.js (App Router)');
  out.push('- React');
  out.push('- TypeScript');
  out.push('- Tailwind CSS');
  out.push('- Framer Motion');
  out.push('- shadcn/ui-compatible registry');
  out.push('');

  out.push('## FAQ');
  out.push('### What is MVPBlocks?');
  out.push(
    'MVPBlocks is a free, open-source library of copy-paste UI blocks, sections, and full templates for Next.js, React, and Tailwind CSS. Use it to ship MVPs, landing pages, and SaaS products faster.',
  );
  out.push('### Is MVPBlocks free?');
  out.push(
    'Yes. MVPBlocks is fully open-source under the BSD 3-Clause license and free to use in personal and commercial projects without attribution.',
  );
  out.push('### How do I use an MVPBlock?');
  out.push(
    'Open the docs, pick a block, and copy its code into your Next.js, Vite, or React project. Many blocks are also installable via the shadcn CLI registry.',
  );
  out.push('### Are MVPBlocks components responsive and accessible?');
  out.push(
    'Yes. Every block is mobile, tablet, and desktop responsive and follows accessibility best practices including semantic HTML and ARIA usage.',
  );
  out.push('### Who maintains MVPBlocks?');
  out.push(
    `MVPBlocks is created and maintained by ${siteConfig.author.name} and the open-source community on GitHub at ${siteConfig.links.github}.`,
  );
  out.push('');

  out.push('## Docs');
  const map = new Map<string, string[]>();
  for (const page of source.getPages()) {
    const dir = page.slugs[0] ?? 'root';
    const list = map.get(dir) ?? [];
    list.push(
      `- [${page.data.title}](${siteConfig.url}${page.url}): ${page.data.description ?? ''}`,
    );
    map.set(dir, list);
  }
  for (const [key, value] of map) {
    out.push(`### ${key}`);
    out.push(value.join('\n'));
    out.push('');
  }

  return new Response(out.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
