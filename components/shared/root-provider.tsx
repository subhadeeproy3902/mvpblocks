'use client';

import { RootProvider as FumadocsRootProvider } from 'fumadocs-ui/provider';
import type { ReactNode } from 'react';

interface RootProviderProps {
  search?: any;
  children: ReactNode;
}

export function RootProvider(props: RootProviderProps) {
  return <FumadocsRootProvider {...props} />;
}
