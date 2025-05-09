import type { Registry } from "@/registry/schema";
import * as React from "react";

export const blocks: Registry = [
  {
    name: "3dglobe",
    type: "registry:block",
    dependencies: ["react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero/3dglobe.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero/3dglobe"),
    ),
  },
  {
    name: "about-us-1",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react","react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/border-beam.json","https://blocks.mvp-subha.me/r/pulse-card.json","https://blocks.mvp-subha.me/r/spotlight.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/about/about-us-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/about/about-us-1"),
    ),
  },
  {
    name: "about-us-2",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react","next-themes","react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/border-beam.json","https://blocks.mvp-subha.me/r/counter.json","https://blocks.mvp-subha.me/r/spotlight.json","https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/about/about-us-2.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/about/about-us-2"),
    ),
  },
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
    name: "app-hero",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json","https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero/app-hero.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero/app-hero"),
    ),
  },
  {
    name: "bento-grid-1",
    type: "registry:block",
    dependencies: ["lucide-react","framer-motion"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/grids/bento-grid-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/grids/bento-grid-1"),
    ),
  },
  {
    name: "bolt",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json"],
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
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json"],
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
    name: "contact-us-1",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react","react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json","https://blocks.mvp-subha.me/r/globe.json","https://blocks.mvp-subha.me/r/input.json","https://blocks.mvp-subha.me/r/label.json","https://blocks.mvp-subha.me/r/sparkles.json","https://blocks.mvp-subha.me/r/textarea.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/contact/contact-us-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/contact/contact-us-1"),
    ),
  },
  {
    name: "conversation1",
    type: "registry:block",
    dependencies: ["lucide-react","react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json","https://blocks.mvp-subha.me/r/input.json","https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/chatbot-ui/conversation1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/chatbot-ui/conversation1"),
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
    name: "cta-2",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/cta/cta-2.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/cta/cta-2"),
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
    registryDependencies: ["https://blocks.mvp-subha.me/r/utils.json"],
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
    name: "feature-3",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/features/feature-3.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/features/feature-3"),
    ),
  },
  {
    name: "fitness-hero",
    type: "registry:block",
    dependencies: [],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json"],
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
    name: "github-globe",
    type: "registry:block",
    dependencies: ["react","@react-three/drei","@react-three/fiber","three","three-globe"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/ui/github-globe.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/ui/github-globe"),
    ),
  },
  {
    name: "globe1",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/globe.json"],
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
    registryDependencies: ["https://blocks.mvp-subha.me/r/globe.json"],
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
    name: "gradient-hero",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json","https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero/gradient-hero.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero/gradient-hero"),
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
    name: "mockup-hero",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react","next-themes","react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json","https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero/mockup-hero.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero/mockup-hero"),
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
    name: "phone-mockup",
    type: "registry:block",
    dependencies: ["framer-motion","next-themes","react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/ui/phone-mockup.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/ui/phone-mockup"),
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
    name: "simple-pricing",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react","react","@number-flow/react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/badge.json","https://blocks.mvp-subha.me/r/button.json","https://blocks.mvp-subha.me/r/card.json","https://blocks.mvp-subha.me/r/tabs.json","https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/pricing/simple-pricing.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/pricing/simple-pricing"),
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
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json"],
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
    name: "team-1",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/team/team-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/team/team-1"),
    ),
  },
  {
    name: "team-2",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react","react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/team/team-2.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/team/team-2"),
    ),
  },
  {
    name: "testimonials-carousel",
    type: "registry:block",
    dependencies: ["embla-carousel-react","framer-motion","lucide-react","react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/avatar.json","https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/testimonials/testimonials-carousel.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/testimonials/testimonials-carousel"),
    ),
  },
  {
    name: "trading",
    type: "registry:block",
    dependencies: ["framer-motion","lucide-react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero/trading.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero/trading"),
    ),
  },
  {
    name: "twittercard",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/utils.json"],
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
    name: "typewriter-1",
    type: "registry:block",
    dependencies: ["framer-motion","react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/text-animations/typewriter-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/text-animations/typewriter-1"),
    ),
  },
  {
    name: "v0-chat",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/use-auto-resize-textarea.json","https://blocks.mvp-subha.me/r/textarea.json","https://blocks.mvp-subha.me/r/utils.json","https://blocks.mvp-subha.me/r/button.json"],
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