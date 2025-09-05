import { type NextRequest, NextResponse } from 'next/server';
import { getLLMText } from '@/lib/getllmstext';
import { source } from '@/lib/source';

export const revalidate = false;

export async function GET(
  _req: NextRequest,
  props: {
    params: Promise<{ slug?: string[] }>;
  },
) {
  const slug = (await props.params).slug;
  const page = source.getPage(slug);

  if (!page) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  }

  return new NextResponse(await getLLMText(page));
}

export function generateStaticParams() {
  return source.generateParams();
}
