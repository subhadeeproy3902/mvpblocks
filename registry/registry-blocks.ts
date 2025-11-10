import type { Registry } from '@/registry/schema';
import * as React from 'react';

export const blocks: Registry = [
  {
    name: 'footer-animated',
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/required/footers/footer-animated.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/required/footers/footer-animated'),
    ),
  },
  {
    name: 'footer-standard',
    author: 'thevinayakgore',
    type: 'registry:block',
    dependencies: ['react', 'next-themes', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/input.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/required/footers/footer-standard.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/required/footers/footer-standard'),
    ),
  },
  {
    name: 'text-reveal-1',
    description:
      'A text reveal animation that reveals text from the bottom. Used for titles, headings, etc.',
    categories: ['text-animation'],
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/text-reveal.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/text-animations/text-reveal-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/text-animations/text-reveal-1'),
    ),
  },
  {
    name: 'text-reveal-2',
    description:
      'A text reveal animation that reveals text from the bottom with a gradient effect with word split. Used for titles, headings, etc.',
    categories: ['text-animation'],
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/text-reveal.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/text-animations/text-reveal-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/text-animations/text-reveal-2'),
    ),
  },
  {
    name: 'gradient-bars-preview',
    description:
      'A background with animated gradient bars component. Used for sections, cards, etc as a sleek awesome background.',
    categories: ['background'],
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/gradient-bars.json',
      'https://blocks.mvp-subha.me/r/text-reveal.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/backgrounds/gradient-bars-preview.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/backgrounds/gradient-bars-preview'),
    ),
  },
  {
    name: 'masonry-grid-1',
    description:
      'A responsive masonry grid layout component. Used for galleries, portfolios, image grids, etc.',
    categories: ['grid', 'layout'],
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/grids/masonry-grid-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/grids/masonry-grid-1'),
    ),
  },
  {
    name: 'glow-card',
    description:
      'A card component with a glowing inner box shadow effect whose colors can be changed as well. Used for showcasing products, features, etc.',
    categories: ['card', 'design'],
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/cards/glow/glow-card.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/cards/glow/glow-card'),
    ),
  },
  {
    name: 'pricing-5',
    description:
      'A modern pricing section with 4 pricing tiers. Used for SaaS products, pricing sections, etc.',
    categories: ['pricing', 'mainsection'],
    type: 'registry:block',
    dependencies: ['lucide-react', 'react', '@number-flow/react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/badge.json',
      'https://blocks.mvp-subha.me/r/button.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/pricing-5.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/pricing/pricing-5'),
    ),
  },
  {
    name: 'pricing-glassmorphism',
    description:
      'A glassmorphism styled pricing section with 3 pricing tiers. Used for SaaS products, pricing sections, etc.',
    categories: ['pricing', 'mainsection'],
    author: 'surya10102000',
    type: 'registry:block',
    dependencies: ['lucide-react', 'framer-motion'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/switch.json',
      'https://blocks.mvp-subha.me/r/label.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/pricing-glassmorphism.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '../components/mvpblocks/mainsections/pricing/pricing-glassmorphism'
        ),
    ),
  },
  {
    name: 'login-form-3',
    description:
      'A modern login form with social login options and a sleek design with a nice image background. Used for authentication pages, login sections, etc.',
    categories: ['form', 'authentication'],
    type: 'registry:block',
    dependencies: ['framer-motion', 'lucide-react', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/forms/login-form-3.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/forms/login-form-3'),
    ),
  },
  {
    name: 'product-1',
    description:
      'A Learn and grow card component with a sleek design and hover effects. Used for showcasing products, features, etc.',
    categories: ['card', 'design'],
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/cards/product/product-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('.././components/mvpblocks/cards/product/product-1'),
    ),
  },
  {
    name: 'code-block-1',
    description:
      'A code block component with syntax highlighting and a sleek design. Used for showcasing code snippets, tutorials, etc.',
    categories: ['code', 'design', 'technical'],
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/cards/code/code-block-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('.././components/mvpblocks/cards/code/code-block-1'),
    ),
  },
  {
    name: 'ellipsis-block',
    description:
      'A code block component that shows an ellipsis animation to indicate loading or more content. Used for showcasing code snippets, tutorials, etc.',
    categories: ['code', 'design', 'technical'],
    type: 'registry:block',
    dependencies: ['react', 'lucide-react', 'framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/cards/code/ellipsis-block.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('.././components/mvpblocks/cards/code/ellipsis-block'),
    ),
  },
  {
    name: 'web3-hero',
    description:
      'A futuristic web3 themed hero section with a sleek design and hover effects. Used for SaaS products, Web3 related page heroes, hero sections, etc.',
    categories: ['hero', 'mainsection'],
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/web3-hero.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('.././components/mvpblocks/mainsections/hero/web3-hero'),
    ),
  },
  {
    name: 'technical-pricing',
    description:
      'A technical pricing section with a sleek design and hover effects. Used for SaaS products, pricing sections, etc.',
    categories: ['pricing', 'mainsection'],
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/technical-pricing.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '.././components/mvpblocks/mainsections/pricing/technical-pricing'
        ),
    ),
  },
  {
    name: 'meshy-cards',
    description:
      'A set of cards with a meshy gradient background. Used for showcasing products, features, etc.',
    categories: ['card', 'design'],
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/cards/basic/meshy-cards.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/cards/basic/meshy-cards'),
    ),
  },
  {
    name: 'login-form-2',
    description:
      'A sleek login form with a nice logo in the left and the form in the right with responsiveness. Used for authentication pages, login sections, etc.',
    categories: ['form', 'authentication'],
    author: 'Xeven777',
    type: 'registry:block',
    dependencies: ['framer-motion'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/label.json',
      'https://blocks.mvp-subha.me/r/card.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/forms/login-form-2.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/forms/login-form-2'),
    ),
  },
  {
    name: 'footer-newsletter',
    description:
      'A modern footer with a newsletter subscription form and social media links. Used for website footers, etc.',
    categories: ['footer', 'mainsection'],
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/required/footers/footer-newsletter.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/required/footers/footer-newsletter'),
    ),
  },
  {
    name: 'designer-pricing',
    description:
      'A modern designer pricing section with 3 pricing tiers. Used for SaaS products, pricing sections, etc.',
    categories: ['pricing', 'mainsection'],
    type: 'registry:block',
    dependencies: [],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/pricing/designer-pricing.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/mainsections/pricing/designer-pricing'),
    ),
  },
  {
    name: 'minimal-hero',
    description:
      'A cool looking minimal hero section with a sleek design and animation. Used for SaaS products, hero sections, etc.',
    categories: ['hero', 'mainsection'],
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/hero/minimal-hero.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/hero/minimal-hero'),
    ),
  },
  {
    name: 'footer-glow',
    description:
      'A modern footer with a glowing effect and social media links. Used for website footers, etc.',
    categories: ['footer', 'mainsection', 'design'],
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/required/footers/footer-glow.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/required/footers/footer-glow'),
    ),
  },
  {
    name: 'admin-dashboard-1',
    description:
      'A complete and professional admin dashboard layout with sidebar, header, cards, charts, tables, and more. Used for admin panels, analytics dashboards, etc.',
    categories: ['dashboard', 'layout', 'page'],
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
    description:
      'A dashboard header component with a title, subtitle, and action buttons. Used a base component for admin-dashboard-1. Used for admin dashboards, analytics pages, etc.',
    categories: ['dashboard', 'layout'],
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
    description:
      'A recent activity component that shows a list of recent activities with timestamps. Used a base component for admin-dashboard-1. Used for admin dashboards, activity feeds, etc.',
    categories: ['dashboard', 'layout'],
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
    description:
      'A system status component that shows the status of various system components with indicators. Used a base component for admin-dashboard-1. Used for admin dashboards, system monitoring pages, etc.',
    categories: ['dashboard', 'layout'],
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
    categories: ['dashboard', 'layout'],
    description:
      'A quick actions component that shows a set of action buttons for quick access. Used a base component for admin-dashboard-1. Used for admin dashboards, action panels, etc.',
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
    categories: ['dashboard', 'layout'],
    description:
      'A users table component that shows a list of users with details and actions. Used a base component for admin-dashboard-1. Used for admin dashboards, user management pages, etc.',
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
    categories: ['dashboard', 'layout'],
    description:
      'A dashboard card component that shows key metrics with icons and values. Used a base component for admin-dashboard-1. Used for admin dashboards, analytics pages, etc.',
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
    categories: ['dashboard', 'layout'],
    description:
      'A revenue chart component that shows revenue data over time with a line chart. Used a base component for admin-dashboard-1. Used for admin dashboards, analytics pages, etc.',
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
    categories: ['dashboard', 'layout'],
    description:
      'A responsive admin sidebar component with navigation links and a collapsible design. Used a base component for admin-dashboard-1. Used for admin dashboards, side navigation, etc.',
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
    name: 'personal-finance-dashboard-1',
    author: 'thevinayakgore',
    description:
      'Personal Finance Dashboard with budget tracking, expense analytics, savings goals, and transaction management micro UI components.',
    categories: ['dashboard', 'layout', 'page'],
    type: 'registry:block',
    dependencies: ['lucide-react', 'recharts', 'next-themes'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/badge.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/chart.json',
      'https://blocks.mvp-subha.me/r/dropdown-menu.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/progress.json',
      'https://blocks.mvp-subha.me/r/budget-progress.json',
      'https://blocks.mvp-subha.me/r/dashboard-layout.json',
      'https://blocks.mvp-subha.me/r/personal-header.json',
      'https://blocks.mvp-subha.me/r/personal-footer.json',
      'https://blocks.mvp-subha.me/r/income-expense-chart.json',
      'https://blocks.mvp-subha.me/r/monthly-spending-chart.json',
      'https://blocks.mvp-subha.me/r/recent-transactions.json',
      'https://blocks.mvp-subha.me/r/savings-goals.json',
      'https://blocks.mvp-subha.me/r/personal-sidebar.json',
      'https://blocks.mvp-subha.me/r/stats-cards.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/index.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import(
          '../components/mvpblocks/dashboards/personal-finance-dashboard-1/index'
        ),
    ),
  },
  {
    name: 'budget-progress',
    description:
      'A visual budget tracking widget that displays spending progress using icons and progress bars. Perfect for personal finance, analytics, or dashboard UIs.',
    categories: ['dashboard', 'finance', 'analytics'],
    type: 'registry:block',
    dependencies: ['react', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/progress.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/budget-progress.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/budget-progress.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/budget-progress'
      ).then((mod) => ({
        default: mod.default, // because the file exports default function
      })),
    ),
  },
  {
    name: 'dashboard-layout',
    description:
      'A responsive dashboard layout with collapsible sidebar, header, and footer. Includes main content area for dynamic children components. Ideal for admin, analytics, or finance dashboards.',
    categories: ['dashboard', 'layout'],
    type: 'registry:block',
    dependencies: ['react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/personal-sidebar.json',
      'https://blocks.mvp-subha.me/r/personal-header.json',
      'https://blocks.mvp-subha.me/r/personal-footer.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/dashboard-layout.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/dashboard-layout.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/dashboard-layout'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'personal-header',
    description:
      'A responsive dashboard header component with date display, theme toggling, user menu, and notification button. Designed for finance or admin dashboards with support for dark/light mode and dropdown menus.',
    categories: ['dashboard', 'layout'],
    type: 'registry:block',
    dependencies: ['react', 'lucide-react', 'next-themes'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/dropdown-menu.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/personal-header.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/personal-header.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/personal-header'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'personal-footer',
    description:
      'A clean, responsive dashboard footer with social media links and copyright text. Ideal for finance, admin, and analytics dashboards.',
    categories: ['dashboard', 'layout'],
    type: 'registry:block',
    dependencies: ['react', 'lucide-react', 'next'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/button.json'],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/personal-footer.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/personal-footer.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/personal-footer'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'income-expense-chart',
    description:
      'An interactive bar chart comparing monthly income, expenses, and net balance. Built with Recharts and MVPBlocks chart components for analytics dashboards.',
    categories: ['dashboard', 'finance', 'analytics'],
    type: 'registry:block',
    dependencies: ['react', 'recharts'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/chart.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/income-expense-chart.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/income-expense-chart.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/income-expense-chart'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'monthly-spending-chart',
    description:
      'A colorful pie chart visualization showing monthly spending by category with tooltips, legends, and a total/remaining budget summary. Ideal for personal finance dashboards or analytics pages.',
    categories: ['dashboard', 'finance', 'analytics'],
    type: 'registry:block',
    dependencies: ['react', 'recharts'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/chart.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/monthly-spending-chart.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/monthly-spending-chart.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/monthly-spending-chart'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'recent-transactions',
    description:
      'A detailed transaction list displaying recent income and expense records with category badges, icons, and color-coded indicators for gains and spends. Ideal for personal finance or analytics dashboards.',
    categories: ['dashboard', 'finance', 'analytics'],
    type: 'registry:block',
    dependencies: ['react', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/badge.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/recent-transactions.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/recent-transactions.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/recent-transactions'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'savings-goals',
    description:
      'A savings goals tracker displaying progress towards multiple financial targets with progress bars, deadlines, and status indicators. Ideal for personal finance dashboards and analytics pages.',
    categories: ['dashboard', 'finance', 'analytics'],
    type: 'registry:block',
    dependencies: ['react', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/progress.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/savings-goals.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/savings-goals.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/savings-goals'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'personal-sidebar',
    description:
      'A responsive, collapsible sidebar navigation for finance or analytics dashboards. Includes dynamic links, mobile toggle, and interactive states for modern layouts.',
    categories: ['dashboard', 'layout', 'navigation'],
    type: 'registry:block',
    dependencies: ['react', 'lucide-react', 'next'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/personal-sidebar.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/personal-sidebar.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/personal-sidebar'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'stats-cards',
    description:
      'A responsive grid of financial statistic cards displaying key metrics like balance, income, expenses, and savings rate. Each card includes icons, gradients, and change indicators for a clean analytics dashboard view.',
    categories: ['dashboard', 'finance', 'analytics'],
    type: 'registry:block',
    dependencies: ['react', 'lucide-react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/card.json',
      'https://blocks.mvp-subha.me/r/badge.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/stats-cards.tsx',
        type: 'registry:block',
        target: 'components/mvpblocks/ui/stats-cards.tsx',
      },
    ],
    component: React.lazy(() =>
      import(
        '../components/mvpblocks/dashboards/personal-finance-dashboard-1/ui/stats-cards'
      ).then((mod) => ({
        default: mod.default,
      })),
    ),
  },
  {
    name: 'header-2',
    description:
      'A modern header with navigation links and a call-to-action button. Used for website headers, webpages, etc.',
    categories: ['header', 'mainsection'],
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
    description:
      'A simple header with navigation links and a call-to-action button. Used for website headers, webpages, etc.',
    categories: ['header', 'mainsection'],
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
    categories: ['page', 'layout'],
    description:
      'A complete waitlist page with a form to collect user emails and a sleek design. Used for product launches, waitlisting page, etc.',
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
    categories: ['pagination', 'navigation'],
    description:
      'A basic pagination component with previous and next buttons and page numbers. Used for navigating through pages of content, lists, etc.',
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
    categories: ['pricing', 'mainsection'],
    description:
      'A modern pricing section with 3 pricing tiers and a sleek design where pricing cards too close too each other giving it a really good design look. Used for SaaS products, pricing sections, etc.',
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
    categories: ['hero', 'mainsection'],
    description:
      'A modern hero section with a phone mockup image which when hovered has a 3D like animation and a sleek design. Used for SaaS products, hero sections, etc.',
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
    categories: ['hero', 'mainsection'],
    description:
      'A modern app hero section with a sleek design and hover effects. Used for SaaS products, hero sections, etc.',
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
    categories: ['contact', 'mainsection', 'form'],
    description:
      'A modern contact us section with a sleek design and a contact form. Used for contact sections, etc.',
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
    categories: ['logo-cloud', 'mainsection', 'branding'],
    description:
      'A logo cloud section with a sparkle animation effect with the logos. Logo clouds are used to showcase a collection of logos or brands in a visually appealing way. They can be used to highlight partnerships, sponsors, or featured brands.',
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
    categories: ['chatbot', 'ai'],
    description:
      'An animated AI chat interface component with a sleek design and animations. Used for chatbot interfaces, AI assistants, etc.',
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
    categories: ['form', 'authentication'],
    description:
      'A multi-step form component with a progress bar and navigation buttons. Used for signup forms, surveys, etc.',
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
    categories: ['modal', 'authentication'],
    description:
      'A sign-in modal component with social login options and a sleek design. Used for authentication modals, sign-in forms, etc.',
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
    categories: ['modal', 'authentication'],
    description:
      'A sign-up modal component with social sign-up options and a sleek design. Used for authentication modals, sign-up forms, etc.',
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
    categories: ['modal', 'confirmation'],
    description:
      'A delete project confirmation modal component with a sleek design and confirmation buttons. Used for delete confirmations, modals, etc.',
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
    categories: ['modal', 'navigation'],
    description:
      'A table of contents dialog component with a sleek design and navigation links. Used for table of contents, modals, etc.',
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
    categories: ['chatbot', 'ai'],
    description:
      'A working chatbot UI component with a sleek design and chat functionality. Used for chatbot interfaces, AI assistants, etc.',
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
    categories: ['hero', 'mainsection'],
    description:
      'A modern cool looking hero section for documentations or notebook or study related websites. Used for Documented products like APIs, educational hero sections, hero sections, etc.',
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
    categories: ['hero', 'mainsection'],
    description:
      'A modern geometric hero section with abstract shapes and a sleek design. Used for SaaS products, hero sections, etc.',
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
    categories: ['faq', 'mainsection'],
    description:
      'A modern FAQ section with accordion style questions and answers. Used for FAQ sections, help centers, etc.',
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
    categories: ['testimonials', 'mainsection'],
    description:
      'A testimonials section with a marquee style scrolling effect and a sleek design. Used for testimonials sections, reviews, etc.',
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
    categories: ['grid', 'layout'],
    description:
      'A bento grid layout component with a sleek design and hover effects. Used for features, gallery, small showoffs etc.',
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
    name: 'bento-grid-3',
    categories: ['grid', 'layout'],
    description:
      'A modern bento grid showcase featuring key platform capabilities. Each card highlights a different feature with icons, metrics, and tags, creating an engaging overview of AI-powered analytics, automation, security, and collaboration tools.',
    type: 'registry:block',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/grids/bento-grid-3.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/grids/bento-grid-3'),
    ),
  },
  {
    name: 'faq-3',
    categories: ['faq', 'mainsection'],
    description:
      'A modern FAQ section with accordion style questions and answers. Used for FAQ sections, help centers, etc.',
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
    name: 'faq-4',
    author: 'thevinayakgore',
    categories: ['faq', 'mainsection'],
    description:
      'A modern FAQ section with accordion style questions and answers. Used for FAQ sections, help centers, etc.',
    type: 'registry:block',
    dependencies: [
      '@radix-ui/react-accordion',
      'framer-motion',
      'lucide-react',
    ],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/accordion.json',
      'https://blocks.mvp-subha.me/r/border-beam.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/mainsections/faqs/faq-4.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/mainsections/faqs/faq-4'),
    ),
  },
  {
    name: 'scrollbasedvelocity-demo',
    categories: ['scroll-animation', 'design'],
    description:
      'A demo of scroll based velocity text animation using framer motion. Used for showcasing text animations.',
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
    categories: ['text-animation'],
    description:
      'A gradient typewriter text animation using framer motion. Used for showcasing text animations.',
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
    categories: ['text-animation'],
    description:
      'A simple typewriter text animation using framer motion. Used for showcasing text animations.',
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
    name: 'circular-text',
    categories: ['text-animation'],
    description:
      'A circular text animation using framer motion. Used for showcasing text animations.',
    type: 'registry:block',
    author: 'nuelst',
    dependencies: ['framer-motion', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/text-animations/circular-text.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/text-animations/circular-text'),
    ),
  },
  {
    name: 'trading',
    categories: ['hero', 'mainsection'],
    description:
      'A simple yet awesome looking hero section with a image or video being the perfect showcase of any useful product with the immediate details of it. Used for SaaS products, hero sections, etc.',
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
    categories: ['cta', 'mainsection'],
    description:
      'A modern call-to-action section. Used for call-to-action sections, etc.',
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
    categories: ['faq', 'mainsection'],
    description:
      'A modern FAQ section with accordion style questions and answers. Used for FAQ sections, help centers, etc.',
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
    categories: ['pricing', 'mainsection'],
    description:
      'A modern pricing section with 3 pricing tiers and modals for payment options. Best use for actual payment options stuffs',
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
    categories: ['hero', 'mainsection'],
    description:
      'A modern hero section with a 3D globe animation and a sleek design. Used for SaaS products, hero sections, etc.',
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
    name: 'interactive-tooltip',
    categories: ['tooltip', 'interactive', 'design'],
    description:
      'A dynamic tooltip component with mouse-following animations and spring physics. Perfect for displaying user profiles or team member information with engaging hover effects.',
    author: 'nuelst',
    type: 'registry:block',
    dependencies: ['motion/react', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/creative/interactive-tooltip.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('@/components/mvpblocks/creative/interactive-tooltip'),
    ),
  },
  {
    name: 'about-us-1',
    categories: ['about', 'mainsection'],
    description:
      'About sections provide a brief overview of your product or service, highlighting its key features and benefits. They help users understand what your product is about and why they should use it.',
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
    categories: ['about', 'mainsection'],
    description:
      'About sections provide a brief overview of your product or service, highlighting its key features and benefits. They help users understand what your product is about and why they should use it.',
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
    categories: ['button', 'interactive'],
    description: 'Just a simple animated button with hover effects.',
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
    name: 'premium-btn',
    categories: ['button', 'interactive'],
    description: 'Just a simple premium button with hover effects.',
    type: 'registry:block',
    dependencies: ['lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/buttons/premium-btn.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/buttons/premium-btn'),
    ),
  },
  {
    name: 'progress-download-btn',
    categories: ['button', 'interactive'],
    description: 'Just a download button with progress indicator.',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/buttons/progress-download-btn.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/basics/buttons/progress-download-btn'),
    ),
  },
  {
    name: 'glow-btn',
    categories: ['button', 'interactive'],
    description: 'A fancy glow button with hover effects.',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/buttons/glow-btn.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/buttons/glow-btn'),
    ),
  },
  {
    name: 'bento-grid-1',
    categories: ['grid', 'layout'],
    description:
      'Bento grids are a flexible and responsive layout system that allows you to create complex grid structures with ease. They are designed to adapt to various screen sizes and orientations, making them ideal for modern web applications. This bento grid layout component features a sleek design and hover effects, making it perfect for showcasing features, or small showoffs.',
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
    categories: ['chatbot', 'ai'],
    description:
      'A bolt.new like chatbot UI component with a sleek design and chat functionality. Used for chatbot interfaces, AI assistants, etc.',
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
    categories: ['loader', 'animation'],
    description:
      'A simple bouncing loader animation component with a sleek design. Used for loading animations, etc.',
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
    name: 'ball-bouncing-loader',
    categories: ['loader', 'animation'],
    description:
      'A ball bouncing loader animation with five animated bars and a bouncing ball. Ideal for loading states.',
    type: 'registry:block',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/loaders/ball-bouncing-loader.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/basics/loaders/ball-bouncing-loader'),
    ),
  },
  {
    name: 'btn-gradient1',
    categories: ['button', 'interactive'],
    description: 'A cool looking button with hover effects.',
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
    categories: ['loader', 'animation'],
    description:
      'A classic loader animation component with a sleek design. Used for loading animations, etc.',
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
    categories: ['loader', 'animation'],
    description:
      'A concentric loader animation component with a sleek design. Used for loading animations, etc.',
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
    categories: ['contact', 'mainsection', 'form'],
    description:
      'A modern contact us section with a sleek modern and designer style. Used for contact sections, designer landing pages etc.',
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
    categories: ['chatbot', 'ai'],
    description:
      'A simple chatbot UI component with a sleek design and chat functionality. Used for chatbot interfaces, AI assistants, etc.',
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
    categories: ['cta', 'mainsection'],
    description:
      'A modern call-to-action section. Used for call-to-action sections, etc.',
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
    categories: ['cta', 'mainsection'],
    description:
      'A modern call-to-action section. Used for call-to-action sections, etc.',
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
    categories: ['card', 'design'],
    description:
      'A minimal grid card with a dot design element used normally for showing a info. Used in features, small showoffs etc.',
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
    categories: ['card', 'interactive', 'design'],
    description:
      'A flip card designer component with a sleek design and hover effects. Used in features, small showoffs etc.',
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
    categories: ['features', 'mainsection'],
    description:
      'A modern features section with a sleek design and feature cards. Used for features or services sections, etc.',
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
    categories: ['features', 'mainsection'],
    description:
      'A modern features section with a sleek design and feature cards. Used for features or services sections, etc.',
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
    categories: ['features', 'mainsection'],
    description:
      'A modern features section with a sleek design and feature cards. Used for features or services sections, etc.',
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
    categories: ['hero', 'mainsection'],
    description:
      'A modern fitness hero section with a sleek design and vibrant colors. Used for fitness products, health services, hero sections, etc.',
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
    categories: ['footer', 'required'],
    description:
      'A modern footer section with 4 columns for links and information. Used for website footers, etc.',
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
    categories: ['3d', 'design'],
    description:
      'A 3D globe animation component with a sleek design and interactive features. Used for showcasing global reach, locations, etc.',
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
    categories: ['3d', 'design'],
    description:
      'A 3D globe animation component with a sleek design and interactive features. Used for showcasing global reach, locations, etc.',
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
    categories: ['hero', 'mainsection'],
    description:
      'A modern gradient hero section with vibrant colors and a sleek design. Used for SaaS products, hero sections, etc.',
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
    categories: ['hero', 'mainsection'],
    description:
      'A simple yet awesome looking hero section with a image or video being the perfect showcase of any useful product with the immediate details of it. Used for SaaS products, hero sections, etc.',
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
    categories: ['form', 'authentication'],
    description:
      'A modern login form component with a sleek design and form validation. Used for authentication forms, login pages, etc.',
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
    categories: ['loader', 'animation'],
    description:
      'A modified classic loader animation component with a sleek design. Used for loading animations, etc.',
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
    categories: ['loader', 'animation'],
    description:
      'A pulsating loader animation component with a sleek design. Used for loading animations, etc.',
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
    categories: ['card', 'design'],
    description:
      'A retro styled card with a sleek design and hover effects. Used in features, small showoffs etc.',
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
    categories: ['loader', 'animation'],
    description:
      'A ripple loader animation component with a sleek design. Used for loading animations, etc.',
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
    categories: ['pricing', 'mainsection'],
    description:
      'A modern pricing section with 3 pricing tiers and a sleek design. Used for pricing sections, etc.',
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
    categories: ['loader', 'animation'],
    description:
      'A spiral loader animation component with a sleek design. Used for loading animations, etc.',
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
    categories: ['button', 'interactive'],
    description:
      'A star on GitHub button component with a sleek design and hover effects. Used for GitHub repositories, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A modern team section with team member cards with their location, name, designation, description and social icons. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A modern simple team section with team member cards with their name, designation and social icons. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A modern team section with team member cards with their name, role and social icons. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection', 'interactive'],
    description:
      'A designer team section with team member cards with their name, and role. Also has filtering options as well to filter team members based on their roles. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A simple team section with team member cards with their name and designation. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A professional team section with team member cards with their name and designation,. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A modern and technical team section with team member cards with their name, designation, small description and social icons. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A creative designer team section with team member cards with their name, designation and social icons along with hover animations. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A unique team section with team member cards with their name, designation and animated description entrance effect. Used in team sections, about us pages, etc.',
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
    categories: ['team', 'mainsection'],
    description:
      'A modern team section with team member cards with their name and designation but in a carousel format. Used in team sections, about us pages, etc.',
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
    categories: ['pricing', 'mainsection'],
    description:
      'A modern pricing section with 3 pricing tiers and a sleek design. Used for pricing sections, etc.',
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
    categories: ['pricing', 'mainsection'],
    description:
      'A basic pricing section with 2 pricing tiers and a simple design. Used for pricing sections, etc.',
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
    categories: ['pricing', 'mainsection'],
    description:
      'A beautiful descriptive pricing section with a single pricing tiers and a sleek design. Used for pricing sections, etc.',
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
    categories: ['testimonials', 'mainsection', 'interactive'],
    description:
      'A modern testimonials section with a sleek design and carousel functionality. Used for testimonials sections, reviews, etc.',
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
    categories: ['card', 'design'],
    description:
      'A twitter like card with a sleek design and hover effects. Used in reviews, small showoffs etc.',
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
    categories: ['chatbot', 'ai'],
    description:
      'A v0.dev like chatbot UI component with a sleek design and chat functionality. Used for chatbot interfaces, AI assistants, etc.',
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
    categories: ['shimmer', 'skeleton', 'loader'],
    description:
      'A simple skeleton card component with a sleek design and shimmer effect. Used for loading states, etc.',
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
    categories: ['shimmer', 'skeleton', 'loader'],
    description:
      'A simple skeleton table component with a sleek design and shimmer effect. Used for loading states, etc.',
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
    categories: ['shimmer', 'skeleton', 'loader'],
    description:
      'A detailed skeleton table component with a sleek design and shimmer effect. Used for loading states, etc.',
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
    name: 'download-animated-btn',
    categories: ['button', 'interactive'],
    description:
      'A download button with an animated download icon and hover effects.',
    author: 'Smalakargh',
    type: 'registry:block',
    dependencies: ['tailwindcss', 'react', 'lucide-react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/basics/buttons/download-animated-btn.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/basics/buttons/download-animated-btn'),
    ),
  },
  {
    name: 'preloader-1',
    author: 'twilightgoblin',
    type: 'registry:block',
    description:
      'A curtain-style animated preloader that cycles through words and reveals content.',
    dependencies: ['framer-motion'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/mvpblocks/preloaders/preloader-1/preloader-1.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () =>
        import('../components/mvpblocks/preloaders/preloader-1/preloader-1'),
    ),
  },
  {
    name: 'floating-dock-demo',
    author: 'nuelst',
    type: 'registry:block',
    description:
      'A floating dock navigation demo with smooth hover animations. Features interactive icons that scale on hover, with separate desktop and mobile layouts.',
    categories: ['navigation', 'interactive', 'animation'],
    dependencies: ['motion/react', 'lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/floating-dock.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/basics/floating-dock-demo.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/floating-dock-demo'),
    ),
  },
  {
    name: 'pointer-highlight-demo',
    author: 'nuelst',
    type: 'registry:block',
    description:
      'A demo of the pointer highlight component showcasing animated border and pointer effects around text. Perfect for highlighting important words or phrases.',
    categories: ['animation', 'text', 'highlight'],
    dependencies: ['motion/react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/pointer-highlight.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/basics/pointer-highlight-demo.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/pointer-highlight-demo'),
    ),
  },
  {
    name: 'text-type-demo',
    author: 'nuelst',
    type: 'registry:block',
    description:
      'A demo of the text typing animation component. Showcases typing, deleting, and looping text effects with customizable speed and cursor.',
    categories: ['animation', 'text', 'typing'],
    dependencies: ['gsap', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/text-type.json',
    ],
    files: [
      {
        path: '@/components/mvpblocks/basics/text-type-demo.tsx',
        type: 'registry:block',
      },
    ],
    component: React.lazy(
      () => import('../components/mvpblocks/basics/text-type-demo'),
    ),
  },
];
