import { githubData } from '@/constants/github-data';
import { bricolage } from '@/lib/fonts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Contributors() {
  const contributors = githubData.contributors;

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contributors.map((contributor) => (
          <Link key={contributor.id} href={`https://github.com/${contributor.login}`} className="group no-underline" target="_blank" rel="noopener noreferrer">
              <Card className="flex max-w-sm h-80">
                <CardHeader>
                  <CardTitle className={`${bricolage.className} font-normal! no-underline!`}>
                    {contributor.name}
                  </CardTitle>
                  <CardDescription className="no-underline!">
                    {contributor.contributions} contributions
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-full overflow-hidden! mx-6! px-0! rounded-lg flex items-center justify-center">
                  <img src={contributor.avatar_url} alt="Contributor Avatar" className="object-cover group-hover:scale-110 transition-all duration-500 ease-in-out" />
                </CardContent>
              </Card>
            </Link>
        ))}
      </div>
    </div>
  );
}
