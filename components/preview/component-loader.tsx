"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getComponentByName } from "@/registry";
import { AlertCircle, ArrowLeft, RefreshCw, RotateCw } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Link from "next/link";
import { AuthorBadge } from "../ui/author-badge";
import { siteLink } from "@/config/site";

type ComponentLoaderProps = {
  name: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  fromDocs?: boolean;
};

export function ComponentLoader({
  classNameComponentContainer,
  hasReTrigger = false,
  name,
  fromDocs,
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
          <RotateCw className="h-6 w-6 animate-spin text-foreground" />
        </div>
      </div>
    </div>
    );
  }

  if (!Component) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
          <Card className="mx-auto max-w-md shadow-lg">
            <CardHeader className="flex flex-col items-center space-y-1 pb-2 text-center">
              <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/0">
                <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground">
                Component not found
              </h1>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  The component{" "}
                  <span className="font-mono font-medium text-foreground">
                    {name}
                  </span>{" "}
                  could not be found. Please check the name and try again.
                </p>
                <div className="rounded-lg bg-secondary p-4">
                  <h3 className="mb-2 text-sm font-medium">
                    Troubleshooting steps:
                  </h3>
                  <ul className="space-y-2 text-left text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        If you are the developer, ensure the component is
                        registered correctly in your component registry.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>
                        Check for typos in the component name or import
                        statement.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
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
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Need help?{" "}
            <Link href="#" className="font-medium text-primary hover:underline">
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
};

function ComponentDisplay({
  className,
  component,
  hasReTrigger,
  reTrigger,
  reTriggerKey,
  fromDocs,
  name,
  author
}: ComponentDisplayProps) {
  return (
    <div
      className={cn(
        "component-preview relative flex w-full items-center justify-center overflow-y-auto rounded-lg border border-secondary/50",
        className,
      )}
      id="preview"
    >
      {/* Author badge */}
      {author && <AuthorBadge username={author} />}

      {hasReTrigger && (
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer text-muted-foreground/80 hover:bg-transparent hover:text-foreground"
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
          className="h-full w-full"
        />
      ) : (
        component
      )}
    </div>
  );
}
