import type { Registry } from "@/registry/schema";
import * as React from "react";

export const blocks: Registry = [
  {
    name: "animated-btn1",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/buttons/animated-btn1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/buttons/animated-btn1"),
    ),
  },
  {
    name: "bolt",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://mvpblocks.vercel.app/r/button.json"],
    files: [
      {
        path: "@/components/mvpblocks/chatbot-ui/bolt.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/chatbot-ui/bolt"),
    ),
  },
  {
    name: "bouncing-loader",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/loaders/bouncing-loader.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/loaders/bouncing-loader"),
    ),
  },
  {
    name: "btn-gradient1",
    type: "registry:block",
    dependencies: [],
    registryDependencies: ["https://mvpblocks.vercel.app/r/button.json"],
    files: [
      {
        path: "@/components/mvpblocks/basics/buttons/btn-gradient1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/buttons/btn-gradient1"),
    ),
  },
  {
    name: "classic-loader",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/loaders/classic-loader.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/loaders/classic-loader"),
    ),
  },
  {
    name: "concentric-loader",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/loaders/concentric-loader.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/loaders/concentric-loader"),
    ),
  },
  {
    name: "cta-1",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/cta/cta-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/cta/cta-1"),
    ),
  },
  {
    name: "dot-card",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/cards/basic/dot-card.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/cards/basic/dot-card"),
    ),
  },
  {
    name: "feature-1",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/features/feature-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/features/feature-1"),
    ),
  },
  {
    name: "feature-2",
    type: "registry:block",
    dependencies: ["framer-motion","react"],
    registryDependencies: ["https://mvpblocks.vercel.app/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/features/feature-2.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/features/feature-2"),
    ),
  },
  {
    name: "fitness-hero",
    type: "registry:block",
    dependencies: [],
    registryDependencies: ["https://mvpblocks.vercel.app/r/button.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero/fitness-hero.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero/fitness-hero"),
    ),
  },
  {
    name: "footer-4col",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/required/footers/footer-4col.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/required/footers/footer-4col"),
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
        path: "@/components/mvpblocks/mainsections/hero/hero-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero/hero-1"),
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
    name: "modified-classic-loader",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/loaders/modified-classic-loader.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/loaders/modified-classic-loader"),
    ),
  },
  {
    name: "pulsating-loader",
    type: "registry:block",
    dependencies: ["framer-motion"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/loaders/pulsating-loader.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/loaders/pulsating-loader"),
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
    name: "ripple-loader",
    type: "registry:block",
    dependencies: ["framer-motion"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/loaders/ripple-loader.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/loaders/ripple-loader"),
    ),
  },
  {
    name: "spiral-loader",
    type: "registry:block",
    dependencies: ["framer-motion"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/loaders/spiral-loader.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/loaders/spiral-loader"),
    ),
  },
  {
    name: "star-on-github",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://mvpblocks.vercel.app/r/button.json"],
    files: [
      {
        path: "@/components/mvpblocks/basics/buttons/star-on-github.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/buttons/star-on-github"),
    ),
  },
  {
    name: "twittercard",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://mvpblocks.vercel.app/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/cards/twitter/twittercard.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/cards/twitter/twittercard"),
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