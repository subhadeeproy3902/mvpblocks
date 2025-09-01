// import { source } from '@/lib/source';
// import { createFromSource } from 'fumadocs-core/search/server';

// export const { GET } = createFromSource(source);

import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// it should be cached forever
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source);
