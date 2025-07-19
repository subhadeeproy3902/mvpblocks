import type { Registry } from '@/registry/schema';
import * as React from 'react';

export const blocks: Registry = [
  {
    name: "pricing-5",
    type: "registry:block",
    dependencies: ["lucide-react", "react", "@number-flow/react"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/utils.json", "https://blocks.mvp-subha.me/r/badge.json", "https://blocks.mvp-subha.me/r/button.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/pricing/pricing-5.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/pricing/pricing-5"),
    ),
  },
  {
    name: "login-form-3",
    type: "registry:block",
    dependencies: ["framer-motion", "lucide-react", "react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/forms/login-form-3.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/forms/login-form-3"),
    ),
  },
  {
    name: "product-1",
    type: "registry:block",
    dependencies: ["react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/cards/product/product-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import(".././components/mvpblocks/cards/product/product-1"),
    ),
  },
  {
    name: "code-block-1",
    type: "registry:block",
    dependencies: ["react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/cards/code/code-block-1.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import(".././components/mvpblocks/cards/code/code-block-1"),
    ),
  },
  {
    name: "web3-hero",
    type: "registry:block",
    dependencies: ["react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero/web3-hero.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import(".././components/mvpblocks/mainsections/hero/web3-hero"),
    ),
  },
  {
    name: "technical-pricing",
    type: "registry:block",
    dependencies: ["react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/pricing/technical-pricing.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import(".././components/mvpblocks/mainsections/pricing/technical-pricing"),
    ),
  },
  {
    name: "meshy-cards",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/cards/basic/meshy-cards.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/cards/basic/meshy-cards"),
    ),
  },
  {
    name: "login-form-2",
    author: "Xeven777",
    type: "registry:block",
    dependencies: ["framer-motion"],
    registryDependencies: ["https://blocks.mvp-subha.me/r/button.json", "https://blocks.mvp-subha.me/r/utils.json", "https://blocks.mvp-subha.me/r/input.json", "https://blocks.mvp-subha.me/r/label.json", "https://blocks.mvp-subha.me/r/card.json"],
    files: [
      {
        path: "@/components/mvpblocks/forms/login-form-2.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/forms/login-form-2"),
    ),
  },
  {
    name: "footer-newsletter",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/required/footers/footer-newsletter.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/required/footers/footer-newsletter"),
    ),
  },
  {
    name: "designer-pricing",
    type: "registry:block",
    dependencies: [],
    registryDependencies: ["https://blocks.mvp-subha.me/r/utils.json"],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/pricing/designer-pricing.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/pricing/designer-pricing"),
    ),
  },
  {
    name: "minimal-hero",
    type: "registry:block",
    dependencies: ["react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/mainsections/hero/minimal-hero.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/mainsections/hero/minimal-hero"),
    ),
  },
  {
    name: "footer-glow",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/required/footers/footer-glow.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/required/footers/footer-glow"),
    ),
  },
  {
    name: 'admin-dashboard-1',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/sidebar.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/separator.json',
      'https://blocks.mvp-subha.me/r/sheet.json',
      'https://blocks.mvp-subha.me/r/skeleton.json',
      'https://blocks.mvp-subha.me/r/tooltip.json',
      'https://blocks.mvp-subha.me/r/use-mobile.json',
      'https://blocks.mvp-subha.me/r/dashboard-card.json',
      'https://blocks.mvp-subha.me/r/revenue-chart.json',
      'https://blocks.mvp-subha.me/r/users-table.json',
      'https://blocks.mvp-subha.me/r/quick-actions.json',
      'https://blocks.mvp-subha.me/r/system-status.json',
      'https://blocks.mvp-subha.me/r/recent-activity.json',
      'https://blocks.mvp-subha.me/r/dashboard-header.json',
      'https://blocks.mvp-subha.me/r/dropdown-menu.json',
      'https://blocks.mvp-subha.me/r/breadcrumb.json',
      'https://blocks.mvp-subha.me/r/admin-sidebar.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/index.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/dashboards/admin-dashboard-1/index'),
    ),
  },
  {
    name: 'dashboard-header',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/sidebar.json',
      'https://blocks.mvp-subha.me/r/separator.json',
      'https://blocks.mvp-subha.me/r/sheet.json',
      'https://blocks.mvp-subha.me/r/skeleton.json',
      'https://blocks.mvp-subha.me/r/tooltip.json',
      'https://blocks.mvp-subha.me/r/use-mobile.json',
      'https://blocks.mvp-subha.me/r/dropdown-menu.json',
      'https://blocks.mvp-subha.me/r/breadcrumb.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/ui/dashboard-header.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/dashboard-header.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/admin-dashboard-1/ui/dashboard-header'
      ).then((mod) => ({
        default: mod.DashboardHeader,
      })),
    ),
  },
  {
    name: 'recent-activity',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/ui/recent-activity.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/recent-activity.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/admin-dashboard-1/ui/recent-activity'
      ).then((mod) => ({
        default: mod.RecentActivity,
      })),
    ),
  },
  {
    name: 'system-status',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/ui/system-status.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/system-status.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/admin-dashboard-1/ui/system-status'
      ).then((mod) => ({
        default: mod.SystemStatus,
      })),
    ),
  },
  {
    name: 'quick-actions',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/ui/quick-actions.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/quick-actions.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/admin-dashboard-1/ui/quick-actions'
      ).then((mod) => ({
        default: mod.QuickActions,
      })),
    ),
  },
  {
    name: 'users-table',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/ui/users-table.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/users-table.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/admin-dashboard-1/ui/users-table'
      ).then((mod) => ({
        default: mod.UsersTable,
      })),
    ),
  },
  {
    name: 'dashboard-card',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/ui/dashboard-card.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/dashboard-card.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/admin-dashboard-1/ui/dashboard-card'
      ).then((mod) => ({
        default: mod.DashboardCard,
      })),
    ),
  },
  {
    name: 'revenue-chart',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/ui/revenue-chart.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/revenue-chart.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/admin-dashboard-1/ui/revenue-chart'
      ).then((mod) => ({
        default: mod.RevenueChart,
      })),
    ),
  },
  {
    name: 'admin-sidebar',
    type: 'registry:block',
    dependencies: ['lucide-react', 'next-themes', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/sidebar.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/separator.json',
      'https://blocks.mvp-subha.me/r/sheet.json',
      'https://blocks.mvp-subha.me/r/skeleton.json',
      'https://blocks.mvp-subha.me/r/tooltip.json',
      'https://blocks.mvp-subha.me/r/use-mobile.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/admin-dashboard-1/ui/admin-sidebar.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/admin-sidebar.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/admin-dashboard-1/ui/admin-sidebar'
      ).then((mod) => ({
        default: mod.AdminSidebar,
      })),
    ),
  },
  {
    name: 'header-2',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/required/headers/header-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/required/headers/header-2'),
    ),
  },
  {
    name: 'header-1',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'next-themes', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/required/headers/header-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/required/headers/header-1'),
    ),
  },
  {
    name: 'waitlist',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'next-themes', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/particles.json',
      'https://blocks.mvp-subha.me/r/spotlight.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/pages/waitlist.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/pages/waitlist'),
    ),
  },
  {
    name: 'basic-pagination',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/pagination.json',
      'https://blocks.mvp-subha.me/r/button.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/basics/pagination/basic-pagination.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/basics/pagination/basic-pagination'),
    ),
  },
  {
    name: 'congusted-pricing',
    type: 'registry:block',
    dependencies: [
      'framer-motion',
      'lucide-react',
      'react',
      '@number-flow/react',
      'canvas-confetti',
    ],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/label.json',
      'https://blocks.mvp-subha.me/r/switch.json',
      'https://blocks.mvp-subha.me/r/use-media-query.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/congusted-pricing.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '../components/mvpblocks/mainsections/pricing/congusted-pricing'
        ),
    ),
  },
  {
    name: 'mockup-hero',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'next-themes', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/phone-mockup.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/mockup-hero.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/mockup-hero'),
    ),
  },
  {
    name: 'app-hero',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/app-hero.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/app-hero'),
    ),
  },
  {
    name: 'contact-us-2',
    type: 'registry:block',
    author: 'ParnaRoyChowdhury777',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/contact/contact-us-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/contact/contact-us-2'),
    ),
  },
  {
    name: 'sparkles-logo',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/sparkles.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/required/logo-cloud/sparkles-logo.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/required/logo-cloud/sparkles-logo'),
    ),
  },
  {
    name: 'animated-ai-chat',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/chatbot-ui/animated-ai-chat.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/chatbot-ui/animated-ai-chat'),
    ),
  },
  {
    name: 'multi-step-form-preview',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/multi-step-form.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/label.json',
      'https://blocks.mvp-subha.me/r/progress.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/forms/multi-step-form-preview.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/forms/multi-step-form-preview'),
    ),
  },
  {
    name: 'signin-modal',
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/checkbox.json',
      'https://blocks.mvp-subha.me/r/dialog.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/label.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/basics/modals/signin-modal.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/modals/signin-modal'),
    ),
  },
  {
    name: 'signup-modal',
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/dialog.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/label.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/basics/modals/signup-modal.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/modals/signup-modal'),
    ),
  },
  {
    name: 'delete-project',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/dialog.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/label.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/basics/modals/delete-project.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/modals/delete-project'),
    ),
  },
  {
    name: 'toc-dialog',
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/dialog.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/basics/modals/toc-dialog.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/modals/toc-dialog'),
    ),
  },
  {
    name: 'working-chatbot',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react', 'react-markdown', 'sonner'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/textarea.json',
      'https://blocks.mvp-subha.me/r/use-auto-resize-textarea.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/chatbot-ui/working-chatbot.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/chatbot-ui/working-chatbot'),
    ),
  },
  {
    name: 'notebook',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/notebook.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/notebook'),
    ),
  },
  {
    name: 'geometric-hero',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/geometric-hero.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/geometric-hero'),
    ),
  },
  {
    name: 'faq-2',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/badge.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/faqs/faq-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/faqs/faq-2'),
    ),
  },
  {
    name: 'testimonials-marquee',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/marquee.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/testimonials/testimonials-marquee.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '../components/mvpblocks/mainsections/testimonials/testimonials-marquee'
        ),
    ),
  },
  {
    name: 'bento-grid-2',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/card.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/grids/bento-grid-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/grids/bento-grid-2'),
    ),
  },
  {
    name: 'faq-3',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/badge.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/faqs/faq-3.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/faqs/faq-3'),
    ),
  },
  {
    name: 'scrollbasedvelocity-demo',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/scrollbasedvelocity.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/text-animations/scrollbasedvelocity-demo.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '../components/mvpblocks/text-animations/scrollbasedvelocity-demo'
        ),
    ),
  },
  {
    name: 'gradient-typewriter',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: ['https://blocks.mvp-subha.me/r/typewriter.json'],
    files: [
      {
        path: '@/components/mvpblocks/text-animations/gradient-typewriter.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/text-animations/gradient-typewriter'),
    ),
  },
  {
    name: 'typewriter-demo',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: ['https://blocks.mvp-subha.me/r/typewriter.json'],
    files: [
      {
        path: '@/components/mvpblocks/text-animations/typewriter-demo.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/text-animations/typewriter-demo'),
    ),
  },
  {
    name: "circular-text",
    type: "registry:block",
    author: "nuelst",
    dependencies: ["framer-motion", "react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/text-animations/circular-text.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/text-animations/circular-text"),
    ),
  },
  {
    name: 'trading',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/typewriter.json',
      'https://blocks.mvp-subha.me/r/border-beam.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/trading.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/trading'),
    ),
  },
  {
    name: 'cta-3',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/cta/cta-3.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/cta/cta-3'),
    ),
  },
  {
    name: 'faq-1',
    type: 'registry:block',
    dependencies: [
      '@radix-ui/react-accordion',
      'framer-motion',
      'lucide-react',
    ],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/accordion.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/faqs/faq-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/faqs/faq-1'),
    ),
  },
  {
    name: 'pricing-with-modals',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/pricing-card.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/payment-modal.json',
      'https://blocks.mvp-subha.me/r/dialog.json',
      'https://blocks.mvp-subha.me/r/radio-group.json',
      'https://blocks.mvp-subha.me/r/label.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/pricing-with-modals.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '../components/mvpblocks/mainsections/pricing/pricing-with-modals'
        ),
    ),
  },
  {
    name: '3dglobe',
    type: 'registry:block',
    dependencies: ['framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/3dglobe.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/3dglobe'),
    ),
  },
  {
    name: 'about-us-1',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/border-beam.json',
      'https://blocks.mvp-subha.me/r/pulse-card.json',
      'https://blocks.mvp-subha.me/r/spotlight.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/about/about-us-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/about/about-us-1'),
    ),
  },
  {
    name: 'about-us-2',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'next-themes', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/border-beam.json',
      'https://blocks.mvp-subha.me/r/counter.json',
      'https://blocks.mvp-subha.me/r/spotlight.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/about/about-us-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/about/about-us-2'),
    ),
  },
  {
    name: 'animated-btn1',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/buttons/animated-btn1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/buttons/animated-btn1'),
    ),
  },
  {
    name: 'bento-grid-1',
    type: 'registry:block',
    author: 'Xeven777',
    dependencies: ['lucide-react', 'framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/grids/bento-grid-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/grids/bento-grid-1'),
    ),
  },
  {
    name: 'bolt',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/button.json'],
    files: [
      {
        path: '@/components/mvpblocks/chatbot-ui/bolt.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/chatbot-ui/bolt'),
    ),
  },
  {
    name: 'bouncing-loader',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/loaders/bouncing-loader.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/loaders/bouncing-loader'),
    ),
  },
  {
    name: 'btn-gradient1',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: ['https://blocks.mvp-subha.me/r/button.json'],
    files: [
      {
        path: '@/components/mvpblocks/basics/buttons/btn-gradient1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/buttons/btn-gradient1'),
    ),
  },
  {
    name: 'classic-loader',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/loaders/classic-loader.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/loaders/classic-loader'),
    ),
  },
  {
    name: 'concentric-loader',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/loaders/concentric-loader.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/loaders/concentric-loader'),
    ),
  },
  {
    name: 'contact-us-1',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/globe.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/label.json',
      'https://blocks.mvp-subha.me/r/sparkles.json',
      'https://blocks.mvp-subha.me/r/textarea.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/contact/contact-us-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/contact/contact-us-1'),
    ),
  },
  {
    name: 'conversation1',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/chatbot-ui/conversation1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/chatbot-ui/conversation1'),
    ),
  },
  {
    name: 'cta-1',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/cta/cta-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/cta/cta-1'),
    ),
  },
  {
    name: 'cta-2',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/cta/cta-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/cta/cta-2'),
    ),
  },
  {
    name: 'dot-card',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/cards/basic/dot-card.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/cards/basic/dot-card'),
    ),
  },
  {
    name: 'flip-card',
    author: 'nuelst',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react', 'cn'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/cards/basic/card-flip.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('@/components/mvpblocks/cards/basic/card-flip'),
    ),
  },
  {
    name: 'feature-1',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/features/feature-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/features/feature-1'),
    ),
  },
  {
    name: 'feature-2',
    type: 'registry:block',
    dependencies: ['framer-motion', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/features/feature-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/features/feature-2'),
    ),
  },
  {
    name: 'feature-3',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/features/feature-3.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/features/feature-3'),
    ),
  },
  {
    name: 'fitness-hero',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: ['https://blocks.mvp-subha.me/r/button.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/fitness-hero.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/fitness-hero'),
    ),
  },
  {
    name: 'footer-4col',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/required/footers/footer-4col.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/required/footers/footer-4col'),
    ),
  },
  {
    name: 'globe1',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/globe.json'],
    files: [
      {
        path: '@/components/mvpblocks/creative/globe1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/creative/globe1'),
    ),
  },
  {
    name: 'globe2',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/globe.json'],
    files: [
      {
        path: '@/components/mvpblocks/creative/globe2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/creative/globe2'),
    ),
  },
  {
    name: 'gradient-hero',
    author: 'Xeven777',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/gradient-hero.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/gradient-hero'),
    ),
  },
  {
    name: 'hero-1',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/hero-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/hero-1'),
    ),
  },
  {
    name: 'login-form1',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/forms/login-form1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/forms/login-form1'),
    ),
  },
  {
    name: 'modified-classic-loader',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/loaders/modified-classic-loader.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '../components/mvpblocks/basics/loaders/modified-classic-loader'
        ),
    ),
  },
  {
    name: 'pulsating-loader',
    type: 'registry:block',
    dependencies: ['framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/loaders/pulsating-loader.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/loaders/pulsating-loader'),
    ),
  },
  {
    name: 'retro-card',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/cards/basic/retro-card.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/cards/basic/retro-card'),
    ),
  },
  {
    name: 'ripple-loader',
    type: 'registry:block',
    dependencies: ['framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/loaders/ripple-loader.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/loaders/ripple-loader'),
    ),
  },
  {
    name: 'simple-pricing',
    type: 'registry:block',
    dependencies: [
      'framer-motion',
      'lucide-react',
      'react',
      '@number-flow/react',
    ],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/badge.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/tabs.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/simple-pricing.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/mainsections/pricing/simple-pricing'),
    ),
  },
  {
    name: 'spiral-loader',
    type: 'registry:block',
    dependencies: ['framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/loaders/spiral-loader.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/loaders/spiral-loader'),
    ),
  },
  {
    name: 'star-on-github',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/button.json'],
    files: [
      {
        path: '@/components/mvpblocks/basics/buttons/star-on-github.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/buttons/star-on-github'),
    ),
  },
  {
    name: 'team-1',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-1'),
    ),
  },
  {
    name: 'team-2',
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-2'),
    ),
  },
  {
    name: 'team-3',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-3.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-3'),
    ),
  },
  {
    name: 'team-4',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-4.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-4'),
    ),
  },
  {
    name: 'team-5',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-5.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-5'),
    ),
  },
  {
    name: 'team-6',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-6.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-6'),
    ),
  },
  {
    name: 'team-7',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-7.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-7'),
    ),
  },
  {
    name: 'team-8',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-8.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-8'),
    ),
  },
  {
    name: 'team-9',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-9.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-9'),
    ),
  },
  {
    name: 'team-10',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/team/team-10.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/team/team-10'),
    ),
  },
  {
    name: 'pricing-2',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/button.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/pricing-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/pricing/pricing-2'),
    ),
  },
  {
    name: 'pricing-3',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/pricing-3.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/pricing/pricing-3'),
    ),
  },
  {
    name: 'pricing-4',
    author: 'mosespace',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/pricing-4.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/pricing/pricing-4'),
    ),
  },
  {
    name: 'testimonials-carousel',
    type: 'registry:block',
    dependencies: [
      'embla-carousel-react',
      'framer-motion',
      'lucide-react',
      'react',
    ],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/avatar.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/testimonials/testimonials-carousel.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '../components/mvpblocks/mainsections/testimonials/testimonials-carousel'
        ),
    ),
  },

  {
    name: 'twittercard',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/cards/twitter/twittercard.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/cards/twitter/twittercard'),
    ),
  },
  {
    name: 'v0-chat',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/use-auto-resize-textarea.json',
      'https://blocks.mvp-subha.me/r/textarea.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/chatbot-ui/v0-chat.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/chatbot-ui/v0-chat'),
    ),
  },
  {
    name: 'skeleton-card-one',
    author: 'midhunkalarikkal',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/shimmers/skeleton-card-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/shimmers/skeleton-card-1'),
    ),
  },
  {
    name: 'skeleton-table-one',
    author: 'midhunkalarikkal',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/shimmers/skeleton-table-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/shimmers/skeleton-table-1'),
    ),
  },
  {
    name: 'skeleton-table-two',
    author: 'midhunkalarikkal',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/dropdown-menu.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/shimmers/skeleton-table-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/shimmers/skeleton-table-2'),
    ),
  },
  {
    name: "download-animated-btn",
    author: "Smalakargh",
    type: "registry:block",
    dependencies: ["tailwindcss", "react", "lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/mvpblocks/basics/buttons/download-animated-btn.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/mvpblocks/basics/buttons/download-animated-btn"),
    ),
  }
];
