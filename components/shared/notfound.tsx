import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AlertCircle, Home, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { geist } from '@/utils/fonts';
import { Spotlight } from '@/components/ui/spotlight';

export default function NotFound() {
  return (
    <div className="bg-background relative h-screen w-full overflow-hidden">
      <Spotlight />
      <div className="flex h-full flex-col items-center justify-center p-4">
        <Card className="mx-auto max-w-2xl shadow-lg">
          <CardHeader className="flex flex-col items-center space-y-4 pb-6 text-center">
            <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/20">
              <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            </div>
            <div className="space-y-2">
              <h1
                className={cn(
                  'text-foreground text-6xl font-bold tracking-tight',
                  geist.className,
                )}
              >
                404
              </h1>
              <h2 className="text-foreground text-2xl font-semibold tracking-tight">
                Page Not Found
              </h2>
              <p className="text-muted-foreground max-w-md">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
                The page might have been moved, deleted, or you entered the
                wrong URL.
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Quick Actions */}
            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild className="h-12">
                <Link
                  prefetch={false}
                  href="/"
                  className="flex items-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12">
                <Link
                  prefetch={false}
                  href="/docs/introduction"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Browse Docs
                </Link>
              </Button>
            </div>
            {/* Help Section */}
            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="text-foreground mb-2 font-semibold">Need Help?</h3>
              <p className="text-muted-foreground mb-3 text-sm">
                If you believe this is an error, please let us know.
              </p>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link
                    prefetch={false}
                    href="https://github.com/subhadeeproy3902/mvpblocks/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Report Issue
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link
                    prefetch={false}
                    href="https://x.com/mvp_Subha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}