"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getComponentByName } from "@/registry";
import { RotateCw } from "lucide-react";
import React, { useEffect, useState } from "react";

type ComponentLoaderProps = {
  name: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
};

export function ComponentLoader({
  classNameComponentContainer,
  hasReTrigger = false,
  name,
}: ComponentLoaderProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());

  useEffect(() => {
    const component = getComponentByName(name)?.component;
    console.log("component", name);
    if (component) {
      setComponent(() => component);
    }
  }, [name]);

  const reTrigger = () => {
    setReTriggerKey(Date.now());
  };

  if (!Component) {
    return (
      <div className="flex items-center justify-center text-sm text-muted-foreground">
        <RotateCw className="mr-2 h-4 w-4 animate-spin" />
        Loading...
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
    />
  );
}

function ComponentDisplay({
  className,
  component,
  hasReTrigger,
  reTrigger,
  reTriggerKey,
}: ComponentDisplayProps) {
  return (
    <div
      className={cn(
        "flex min-h-[350px] w-full items-center justify-center rounded-md",
        className,
      )}
    >
      {hasReTrigger && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 cursor-pointer text-muted-foreground/80 hover:bg-transparent hover:text-foreground"
          onClick={reTrigger}
          aria-label="Refresh component"
        >
          <RotateCw className="h-4 w-4" />
        </Button>
      )}
      {hasReTrigger
        ? React.cloneElement(component, { key: reTriggerKey })
        : component}
    </div>
  );
}
