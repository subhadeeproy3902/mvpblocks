import type { Registry } from "@/registry/schema";
import * as React from "react";

export const blocks: Registry = [
  {
    name: "fitness-hero",
    type: "registry:block",
    dependencies: [],
    registryDependencies: ["https://mvpblocks.vercel.app/r/button.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/fitness-hero.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/fitness-hero"),
    ),
  },
  {
    name: "globe1",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://mvpblocks.vercel.app/r/globe.json"],
    files: [
      {
        path: "@/components/mvpblocks/creative/globe1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/creative/globe1"),
    ),
  },
  {
    name: "globe2",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://mvpblocks.vercel.app/r/globe.json"],
    files: [
      {
        path: "@/components/mvpblocks/creative/globe2.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/creative/globe2"),
    ),
  },
  {
    name: "hero-1",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero-1"),
    ),
  },
  {
    name: "login-form1",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/forms/login-form1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/forms/login-form1"),
    ),
  },
  {
    name: "retro-card",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/cards/basic/retro-card.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/cards/basic/retro-card"),
    ),
  },
  {
    name: "v0-chat",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://mvpblocks.vercel.app/r/use-auto-resize-textarea.json","https://mvpblocks.vercel.app/r/textarea.json","https://mvpblocks.vercel.app/r/utils.json","https://mvpblocks.vercel.app/r/button.json"],
    files: [
      {
        path: "@/components/mvpblocks/chatbot-ui/v0-chat.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/chatbot-ui/v0-chat"),
    ),
  }
];