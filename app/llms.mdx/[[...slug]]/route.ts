import { type NextRequest, NextResponse } from 'next/server';
import { getLLMText } from '@/lib/getllmstext';
import { source } from '@/lib/source';
import { notFound } from 'next/navigation';

export const revalidate = false;

export async function GET(
  _req: NextRequest,
  props: {
    params: Promise<{ slug?: string[] }>;
  },
) {
  const slug = (await props.params).slug;
  const page = source.getPage(slug);
  if (!page) notFound();

  return new NextResponse(await getLLMText(page));
}

export function generateStaticParams() {
  return source.generateParams();
}
