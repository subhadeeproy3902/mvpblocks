import type { Registry } from '@/registry/schema';

export const lib: Registry = [
  {
    name: 'utils',
    type: 'registry:lib',
    files: [
      {
        path: 'lib/utils.ts',
        type: 'registry:lib',
      },
    ],
  },
];
