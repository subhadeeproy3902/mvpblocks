import type { Registry } from '@/registry/schema';

export const hooks: Registry = [
  {
    name: 'use-mobile',
    type: 'registry:hook',
    files: [
      {
        path: 'hooks/use-mobile.ts',
        type: 'registry:hook',
      },
    ],
  },
  {
    name: 'use-toast',
    type: 'registry:hook',
    files: [
      {
        path: 'hooks/use-toast.ts',
        type: 'registry:hook',
      },
    ],
  },
  {
    name: 'use-auto-resize-textarea',
    type: 'registry:hook',
    files: [
      {
        path: 'hooks/use-auto-resize-textarea.ts',
        type: 'registry:hook',
      },
    ],
  },
];
