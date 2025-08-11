import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Add caching to reduce function invocations
export const revalidate = 3600; // Cache for 1 hour
export const runtime = 'nodejs';

export const { GET } = createFromSource(source);
