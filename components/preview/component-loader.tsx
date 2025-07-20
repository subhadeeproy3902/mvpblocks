'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getComponentByName } from '@/registry';
import { AlertCircle, ArrowLeft, RefreshCw, RotateCw } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Link from 'next/link';
import { AuthorBadge } from '../ui/author-badge';
import { siteLink } from '@/config/site';

type ComponentLoaderProps = {
  name: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  fromDocs?: boolean;
  previewMode?: boolean;
};

export function ComponentLoader({
  classNameComponentContainer,
  hasReTrigger = false,
  name,
  fromDocs,
  previewMode,
}: ComponentLoaderProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState<string | null>(null);

  useEffect(() => {
    const componentInfo = getComponentByName(name);
    const component = componentInfo?.component;

    if (component) {
      setComponent(() => component);
    }

    // Check if the component has an author
    if (componentInfo?.author) {
      setAuthor(componentInfo.author);
    }

    setLoading(false);
  }, [name]);

  const reTrigger = () => {
    setReTriggerKey(Date.now());
  };

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center p-16">
        <div className="flex h-full w-full flex-col items-center justify-center bg-transparent p-4">
          <div className="rounded-full p-3">
            <RotateCw className="text-foreground h-6 w-6 animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  if (!Component) {
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
                        Check for typos in the component name or import
                        statement.
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
            <Link href="#" className="text-primary font-medium hover:underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <ComponentDisplay
      component={<Component />}
      hasReTrigger={hasReTrigger}
      className={classNameComponentContainer}
      reTriggerKey={reTriggerKey}
      reTrigger={reTrigger}
      name={name}
      fromDocs={fromDocs}
      author={author}
      previewMode={previewMode}
    />
  );
}

type ComponentDisplayProps = {
  className?: string;
  component: React.ReactElement;
  hasReTrigger?: boolean;
  reTrigger?: () => void;
  reTriggerKey?: number;
  fromDocs?: boolean;
  name: string;
  author?: string | null;
  previewMode?: boolean;
};

function ComponentDisplay({
  className,
  component,
  hasReTrigger,
  reTrigger,
  reTriggerKey,
  fromDocs,
  name,
  author,
  previewMode = false,
}: ComponentDisplayProps) {
  return (
    <div
      className={cn(
        'component-preview border-secondary/50 relative flex w-full items-center justify-center overflow-y-auto rounded-lg border',
        className,
      )}
      id="preview"
    >
      {/* Author badge */}
      {author && !previewMode && <AuthorBadge username={author} />}

      {hasReTrigger && (
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground/80 hover:text-foreground absolute top-0 left-0 z-50 cursor-pointer hover:bg-transparent"
          onClick={reTrigger}
          aria-label="Refresh component"
        >
          <RotateCw className="h-4 w-4" />
        </Button>
      )}
      {hasReTrigger ? (
        React.cloneElement(component, { key: reTriggerKey })
      ) : fromDocs ? (
        <iframe
          src={`${siteLink}/preview/${name}`}
          className={`${className} w-full`}
        />
      ) : (
        <div className="flex h-full w-full justify-center overflow-y-auto">
          {component}
        </div>
      )}
    </div>
  );
}
