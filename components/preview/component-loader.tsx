'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getComponentByName } from '@/registry';
import { AlertCircle, ArrowLeft, RefreshCw, RotateCw } from 'lucide-react';
import React, {
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import Link from 'next/link';
import { AuthorBadge } from '../ui/author-badge';
import { siteLink } from '@/config/site';
import ComponentNotFound from './component-not-found';

type ComponentLoaderProps = {
  name: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  fromDocs?: boolean;
  previewMode?: boolean;
};

const LazyComponentWrapper = lazy(() =>
  Promise.resolve({
    default: ({
      Component,
      reTriggerKey,
    }: {
      Component: React.ComponentType;
      reTriggerKey: number;
    }) => <Component key={reTriggerKey} />,
  }),
);

export function ComponentLoader({
  classNameComponentContainer,
  hasReTrigger = false,
  name,
  fromDocs,
  previewMode,
}: ComponentLoaderProps) {
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const componentInfo = useMemo(() => {
    try {
      return getComponentByName(name);
    } catch (err) {
      setError(`Component "${name}" not found`);
      return null;
    }
  }, [name]);

  const Component = componentInfo?.component;
  const author = componentInfo?.author;

  const reTrigger = useCallback(() => {
    setReTriggerKey(Date.now());
  }, []);

  useEffect(() => {
    if (Component) {
      setLoading(false);
      setError(null);
    } else if (!componentInfo) {
      setLoading(false);
      setError(`Component "${name}" not found`);
    }
  }, [Component, componentInfo, name]);

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

  if (error || !Component) {
    return <ComponentNotFound name={name} />;
  }

  return (
    <ComponentDisplay
      component={
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              <RotateCw className="text-foreground h-6 w-6 animate-spin" />
            </div>
          }
        >
          <LazyComponentWrapper
            Component={Component}
            reTriggerKey={reTriggerKey}
          />
        </Suspense>
      }
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
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
          rel="noopener noreferrer"
        />
      ) : (
        <div className="flex h-full w-full justify-center overflow-y-auto">
          {component}
        </div>
      )}
    </div>
  );
}
