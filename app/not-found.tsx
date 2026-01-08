import NotFound from '@/components/shared/notfound';

export default function NotFoundPage() {
  return <NotFound />;
}

export function generateStaticParams() {
  return [{}];
}

export const dynamic = 'force-static';
export const revalidate = false;
