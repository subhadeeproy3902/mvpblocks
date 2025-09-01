import { AlertCircle, ArrowLeft, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function ComponentNotFound({ name }: { name: string }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
        <Card className="mx-auto max-w-md shadow-lg">
          <CardHeader className="flex flex-col items-center space-y-1 pb-2 text-center">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/0">
              <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <h1 className="text-foreground mt-4 text-2xl font-bold tracking-tight">
              Component not found
            </h1>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                The component{' '}
                <span className="text-foreground font-mono font-medium">
                  {name}
                </span>{' '}
                could not be found. Please check the name and try again.
              </p>
              <div className="bg-secondary rounded-lg p-4">
                <h3 className="mb-2 text-sm font-medium">
                  Troubleshooting steps:
                </h3>
                <ul className="text-muted-foreground space-y-2 text-left text-sm">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      If you are the developer, ensure the component is
                      registered correctly in your component registry.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Check for typos in the component name or import statement.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      If you are the user, please contact the developer to fix
                      this issue.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
            <Button size="sm" onClick={() => window.location.reload()}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Retry
            </Button>
          </CardFooter>
        </Card>
        <p className="text-muted-foreground mt-6 text-center text-sm">
          Need help?{' '}
          <Link
            prefetch={false}
            href="#"
            className="text-primary font-medium hover:underline"
          >
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
