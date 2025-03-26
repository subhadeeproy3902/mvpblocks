import type { Registry } from "@/registry/schema";
import * as React from "react";

export const ui: Registry = [
  {
    name: "globe",
    type: "registry:ui",
    dependencies: ["lucide-react", "cobe"],
    files: [
      {
        path: "@/components/ui/globe.tsx",
        type: "registry:ui",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/ui/globe")
    ),
  },
];