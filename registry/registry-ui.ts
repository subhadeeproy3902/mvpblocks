import type { Registry } from '@/registry/schema';
import * as React from 'react';

export const ui: Registry = [
  {
    name: 'text-reveal',
    type: 'registry:ui',
    description: 'Text reveal animation multiuse base component',
    dependencies: [],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/text-reveal.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/text-reveal').then((mod) => ({
        default: mod.TextReveal,
      })),
    ),
    categories: ['text-animation'],
  },
  {
    name: 'gradient-bars',
    description: 'Animated gradient bars background base UI component',
    type: 'registry:ui',
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: '@/components/ui/gradient-bars.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/gradient-bars').then((mod) => ({
        default: mod.GradientBars,
      })),
    ),
    categories: ['background'],
  },
  {
    name: 'sparkles',
    description:
      'Sparkles effect component using tsparticles making the background magical and sparkly',
    type: 'registry:ui',
    dependencies: [
      '@tsparticles/engine',
      '@tsparticles/react',
      '@tsparticles/slim',
      'react',
    ],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/sparkles.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/sparkles').then((mod) => ({
        default: mod.SparklesCore,
      })),
    ),
    categories: ['background'],
  },
  {
    name: 'particles',
    description:
      'Particles effect component making the background lively and interactive on mouse move',
    type: 'registry:ui',
    dependencies: ['react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/particles.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/particles').then((mod) => ({
        default: mod.Particles,
      })),
    ),
    categories: ['background'],
  },
  {
    name: 'spotlight',
    description:
      'Spotlight effect which is a nice touch to any landing page which needs a stunning hero section',
    type: 'registry:ui',
    dependencies: ['react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/ui/spotlight.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/spotlight').then((mod) => ({
        default: mod.Spotlight,
      })),
    ),
    categories: ['background', 'hero'],
  },
  {
    name: 'pulse-card',
    description:
      'An interactive card component with smooth hover animations, glowing borders, and variant colors.',
    type: 'registry:ui',
    dependencies: ['framer-motion', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/pulse-card.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/pulse-card').then((mod) => ({
        default: mod.CardHoverEffect,
      })),
    ),
    categories: ['card', 'interactive'],
  },
  {
    name: 'border-beam',
    description:
      'An animated border beam effect component used in a card or div',
    type: 'registry:ui',
    dependencies: [],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/border-beam.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/border-beam').then((mod) => ({
        default: mod.BorderBeam,
      })),
    ),
    categories: ['card', 'interactive'],
  },
  {
    name: 'phone-mockup',
    description: 'A phone mockup component to showcase app screenshots',
    type: 'registry:ui',
    dependencies: ['framer-motion', 'next-themes', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/phone-mockup.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() => import('../components/ui/phone-mockup')),
    categories: ['mockup'],
  },
  {
    name: 'multi-step-form',
    description:
      'A multi-step form component with validation and progress tracking',
    type: 'registry:ui',
    dependencies: [
      'framer-motion',
      'lucide-react',
      'react',
      'react-hook-form',
      'zod',
    ],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/utils.json',
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/input.json',
      'https://blocks.mvp-subha.me/r/label.json',
      'https://blocks.mvp-subha.me/r/progress.json',
    ],
    files: [
      {
        path: '@/components/ui/multi-step-form.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() => import('../components/ui/multi-step-form')),
    categories: ['form', 'interactive'],
  },
  {
    name: 'marquee',
    description:
      'A marquee component for scrolling text or elements horizontally or vertically',
    categories: ['carousel', 'animation'],
    type: 'registry:ui',
    dependencies: ['react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/marquee.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/marquee').then((mod) => ({
        default: mod.Marquee,
      })),
    ),
    tailwind: {
      config: {
        theme: {
          extend: {
            animation: {
              marquee: 'marquee var(--duration) linear infinite',
              'marquee-vertical':
                'marquee-vertical var(--duration) linear infinite',
            },
            keyframes: {
              marquee: {
                from: { transform: 'translateX(0)' },
                to: { transform: 'translateX(calc(-100% - var(--gap)))' },
              },
              'marquee-vertical': {
                from: { transform: 'translateY(0)' },
                to: { transform: 'translateY(calc(-100% - var(--gap)))' },
              },
            },
          },
        },
      },
    },
  },
  {
    name: 'scrollbasedvelocity',
    description:
      'Scroll velocity animations create a dynamic and engaging effect as elements move on the screen. This technique can be used to draw attention to specific content or enhance the overall user experience.',
    categories: ['scroll-animation', 'design'],
    type: 'registry:ui',
    dependencies: ['framer-motion', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/scrollbasedvelocity.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/scrollbasedvelocity').then((mod) => ({
        default: mod.VelocityScroll,
      })),
    ),
  },
  {
    name: 'typewriter',
    description:
      'Typewriter animations simulate the effect of text being typed out in real-time. This technique can be used to create a sense of anticipation and engagement as users watch the text appear on the screen.',
    type: 'registry:ui',
    dependencies: ['framer-motion', 'react'],
    registryDependencies: [],
    files: [
      {
        path: '@/components/ui/typewriter.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() => import('../components/ui/typewriter')),
    categories: ['text-animation'],
  },
  {
    name: 'pricing-card',
    type: 'registry:ui',
    dependencies: ['lucide-react', 'react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/payment-modal.json',
      'https://blocks.mvp-subha.me/r/dialog.json',
      'https://blocks.mvp-subha.me/r/label.json',
      'https://blocks.mvp-subha.me/r/radio-group.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/ui/pricing-card.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/pricing-card').then((mod) => ({
        default: mod.PricingCard,
      })),
    ),
    categories: ['card', 'pricing-section'],
  },
  {
    name: 'payment-modal',
    description:
      'A payment modal component with multiple payment options and smooth animations',
    type: 'registry:ui',
    dependencies: ['react'],
    registryDependencies: [
      'https://blocks.mvp-subha.me/r/button.json',
      'https://blocks.mvp-subha.me/r/dialog.json',
      'https://blocks.mvp-subha.me/r/label.json',
      'https://blocks.mvp-subha.me/r/radio-group.json',
      'https://blocks.mvp-subha.me/r/utils.json',
    ],
    files: [
      {
        path: '@/components/ui/payment-modal.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/payment-modal').then((mod) => ({
        default: mod.PaymentModal,
      })),
    ),
    categories: ['modal', 'interactive'],
  },
  {
    name: 'accordion',
    type: 'registry:ui',
    description:
      'An accordion component for expanding and collapsing content sections. Official Shadcn UI component.',
    categories: ['accordion', 'interactive', 'shadcn'],
    dependencies: ['@radix-ui/react-accordion'],
    files: [
      {
        path: '@/components/ui/accordion.tsx',
        type: 'registry:ui',
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            keyframes: {
              'accordion-down': {
                from: { height: '0' },
                to: { height: 'var(--radix-accordion-content-height)' },
              },
              'accordion-up': {
                from: { height: 'var(--radix-accordion-content-height)' },
                to: { height: '0' },
              },
            },
            animation: {
              'accordion-down': 'accordion-down 0.2s ease-out',
              'accordion-up': 'accordion-up 0.2s ease-out',
            },
          },
        },
      },
    },
  },
  {
    name: 'alert',
    description:
      'An alert component for displaying important messages to users. Official Shadcn UI component.',
    categories: ['alert', 'notification', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['class-variance-authority'],
    files: [
      {
        path: '@/components/ui/alert.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'alert-dialog',
    description: 'An alert dialog component for critical messages. Official Shadcn UI component.',
    categories: ['dialog', 'modal', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-alert-dialog'],
    registryDependencies: ['button'],
    files: [
      {
        path: '@/components/ui/alert-dialog.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'aspect-ratio',
    description: 'A component for maintaining a consistent aspect ratio. Official Shadcn UI component.',
    categories: ['layout', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-aspect-ratio'],
    files: [
      {
        path: '@/components/ui/aspect-ratio.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'avatar',
    description: 'An avatar component for displaying user profile images. Official Shadcn UI component.',
    categories: ['avatar', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-avatar'],
    files: [
      {
        path: '@/components/ui/avatar.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'badge',
    description: 'A badge component for displaying small status descriptors. Official Shadcn UI component.',
    categories: ['badge', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot'],
    files: [
      {
        path: '@/components/ui/badge.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'breadcrumb',
    description: 'A breadcrumb component for displaying navigation hierarchy. Official Shadcn UI component.',
    categories: ['breadcrumb', 'navigation', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot'],
    files: [
      {
        path: '@/components/ui/breadcrumb.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'button',
    description: 'A button component with multiple variants and sizes. Official Shadcn UI component.',
    categories: ['button', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority'],
    files: [
      {
        path: '@/components/ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'calendar',
    description: 'A calendar component for date selection. Official Shadcn UI component.',
    categories: ['calendar', 'date-picker', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['react-day-picker@8.10.1', 'date-fns'],
    registryDependencies: ['button'],
    files: [
      {
        path: '@/components/ui/calendar.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'card',
    description: 'A card component for displaying content in a structured layout. Official Shadcn UI component.',
    categories: ['card', 'shadcn'],
    type: 'registry:ui',
    files: [
      {
        path: '@/components/ui/card.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'carousel',
    description: 'A carousel component for cycling through content. Official Shadcn UI component.',
    categories: ['carousel', 'shadcn'],
    type: 'registry:ui',
    files: [
      {
        path: '@/components/ui/carousel.tsx',
        type: 'registry:ui',
      },
    ],
    registryDependencies: ['button'],
    dependencies: ['embla-carousel-react'],
  },
  {
    name: 'chart',
    description: 'A chart component for data visualization. Official Shadcn UI component.',
    categories: ['chart', 'data-visualization', 'shadcn'],
    type: 'registry:ui',
    files: [
      {
        path: '@/components/ui/chart.tsx',
        type: 'registry:ui',
      },
    ],
    registryDependencies: ['card'],
    dependencies: ['recharts', 'lucide-react'],
  },
  {
    name: 'checkbox',
    description: 'A checkbox component for selecting options. Official Shadcn UI component.',
    categories: ['checkbox', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-checkbox'],
    files: [
      {
        path: '@/components/ui/checkbox.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'collapsible',
    description: 'A collapsible component for showing and hiding content. Official Shadcn UI component.',
    categories: ['collapsible', 'interactive', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-collapsible'],
    files: [
      {
        path: '@/components/ui/collapsible.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'command',
    description: 'A command palette component for quick navigation and actions. Official Shadcn UI component.',
    categories: ['command-palette', 'navigation', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['cmdk'],
    registryDependencies: ['dialog'],
    files: [
      {
        path: '@/components/ui/command.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'context-menu',
    description: 'A context menu component for right-click actions. Official Shadcn UI component.',
    categories: ['context-menu', 'interactive', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-context-menu'],
    files: [
      {
        path: '@/components/ui/context-menu.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'dialog',
    description: 'A dialog component for modal interactions. Official Shadcn UI component.',
    categories: ['dialog', 'modal', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-dialog'],
    files: [
      {
        path: '@/components/ui/dialog.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'drawer',
    description: 'A drawer component for side panel interactions. Official Shadcn UI component.',
    categories: ['drawer', 'navigation', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['vaul', '@radix-ui/react-dialog'],
    files: [
      {
        path: '@/components/ui/drawer.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'dropdown-menu',
    description: 'A dropdown menu component for additional options. Official Shadcn UI component.',
    categories: ['dropdown', 'menu', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-dropdown-menu'],
    files: [
      {
        path: '@/components/ui/dropdown-menu.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'form',
    description:
      'A form component with validation and error handling. Official Shadcn UI component.',
    categories: ['form', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: [
      '@radix-ui/react-label',
      '@radix-ui/react-slot',
      '@hookform/resolvers',
      'zod',
      'react-hook-form',
    ],
    registryDependencies: ['button', 'label'],
    files: [
      {
        path: '@/components/ui/form.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'globe',
    description: 'A 3D globe component used for a design element. Mostly used in Bento grids',
    categories: ['3d', 'design'],
    type: 'registry:ui',
    dependencies: ['lucide-react', 'cobe'],
    files: [
      {
        path: '@/components/ui/globe.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() => import('../components/ui/globe')),
  },
  {
    name: 'hover-card',
    description: 'A hover card component for displaying additional information on hover. Official Shadcn UI component.',
    categories: ['hover-card', 'interactive', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-hover-card'],
    files: [
      {
        path: '@/components/ui/hover-card.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'input',
    description: 'An input component for user text input. Official Shadcn UI component.',
    categories: ['input', 'form-element', 'shadcn'],
    type: 'registry:ui',
    files: [
      {
        path: '@/components/ui/input.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'input-otp',
    description: 'An OTP input component for entering one-time passwords. Official Shadcn UI component.',
    categories: ['input', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['input-otp'],
    files: [
      {
        path: '@/components/ui/input-otp.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'label',
    description: 'A label component for form elements. Official Shadcn UI component.',
    categories: ['label', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-label', 'class-variance-authority'],
    files: [
      {
        path: '@/components/ui/label.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'menubar',
    description: 'A menubar component for navigation. Official Shadcn UI component.',
    categories: ['menubar', 'navigation', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-menubar'],
    files: [
      {
        path: '@/components/ui/menubar.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'navigation-menu',
    description: 'A navigation menu component for site navigation. Official Shadcn UI component.',
    categories: ['navigation-menu', 'navigation', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-navigation-menu', 'class-variance-authority'],
    files: [
      {
        path: '@/components/ui/navigation-menu.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'pagination',
    description: 'A pagination component for navigating through pages of content. Official Shadcn UI component.',
    categories: ['pagination', 'navigation', 'shadcn'],
    type: 'registry:ui',
    registryDependencies: ['button'],
    files: [
      {
        path: '@/components/ui/pagination.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'popover',
    description: 'A popover component for displaying content in a floating container. Official Shadcn UI component.',
    categories: ['popover', 'interactive', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-popover'],
    files: [
      {
        path: '@/components/ui/popover.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'progress',
    description: 'A progress bar component for indicating task progress. Official Shadcn UI component.',
    categories: ['progress', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-progress'],
    files: [
      {
        path: '@/components/ui/progress.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'radio-group',
    description: 'A radio group component for selecting one option from a set. Official Shadcn UI component.',
    categories: ['radio', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-radio-group'],
    files: [
      {
        path: '@/components/ui/radio-group.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'resizable',
    description: 'A resizable component for creating resizable panels. Official Shadcn UI component.',
    categories: ['layout', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['react-resizable-panels'],
    files: [
      {
        path: '@/components/ui/resizable.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'scroll-area',
    description: 'A scroll area component smooth overflow scrolling. Official Shadcn UI component.',
    categories: ['scrollbar', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-scroll-area'],
    files: [
      {
        path: '@/components/ui/scroll-area.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'select',
    description: 'A select component for choosing from a list of options. Official Shadcn UI component.',
    categories: ['select', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-select'],
    files: [
      {
        path: '@/components/ui/select.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'separator',
    description: 'A separator component for dividing content. Official Shadcn UI component.',
    categories: ['separator', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-separator'],
    files: [
      {
        path: '@/components/ui/separator.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'sheet',
    description: 'A sheet component for displaying content in a sliding panel. Official Shadcn UI component.',
    categories: ['sheet', 'navigation', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-dialog'],
    files: [
      {
        path: '@/components/ui/sheet.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'sidebar',
    description: 'A sidebar component for navigation and additional content areas. Official Shadcn UI component.',
    categories: ['sidebar', 'navigation', 'shadcn'],
    type: 'registry:ui',
    dependencies: [
      '@radix-ui/react-slot',
      'class-variance-authority',
      'lucide-react',
    ],
    registryDependencies: [
      'button',
      'separator',
      'sheet',
      'tooltip',
      'input',
      'use-mobile',
      'skeleton',
    ],
    files: [
      {
        path: '@/components/ui/sidebar.tsx',
        type: 'registry:ui',
      },
    ],
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              sidebar: {
                DEFAULT: 'hsl(var(--sidebar-background))',
                foreground: 'hsl(var(--sidebar-foreground))',
                primary: 'hsl(var(--sidebar-primary))',
                'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                accent: 'hsl(var(--sidebar-accent))',
                'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                border: 'hsl(var(--sidebar-border))',
                ring: 'hsl(var(--sidebar-ring))',
              },
            },
          },
        },
      },
    },
    cssVars: {
      light: {
        'sidebar-background': '0 0% 98%',
        'sidebar-foreground': '240 5.3% 26.1%',
        'sidebar-primary': '240 5.9% 10%',
        'sidebar-primary-foreground': '0 0% 98%',
        'sidebar-accent': '240 4.8% 95.9%',
        'sidebar-accent-foreground': '240 5.9% 10%',
        'sidebar-border': '220 13% 91%',
        'sidebar-ring': '217.2 91.2% 59.8%',
      },
      dark: {
        'sidebar-background': '240 5.9% 10%',
        'sidebar-foreground': '240 4.8% 95.9%',
        'sidebar-primary': '224.3 76.3% 48%',
        'sidebar-primary-foreground': '0 0% 100%',
        'sidebar-accent': '240 3.7% 15.9%',
        'sidebar-accent-foreground': '240 4.8% 95.9%',
        'sidebar-border': '240 3.7% 15.9%',
        'sidebar-ring': '217.2 91.2% 59.8%',
      },
    },
  },
  {
    name: 'skeleton',
    description: 'A skeleton component for displaying loading placeholders. Official Shadcn UI component.',
    categories: ['skeleton', 'loading', 'shadcn'],
    type: 'registry:ui',
    files: [
      {
        path: '@/components/ui/skeleton.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'slider',
    description: 'A slider component for selecting a value from a range. Official Shadcn UI component.',
    categories: ['slider', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-slider'],
    files: [
      {
        path: '@/components/ui/slider.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'sonner',
    description: 'A toast notification component using Sonner library',
    categories: ['toast', 'notification'],
    type: 'registry:ui',
    dependencies: ['sonner', 'next-themes', 'class-variance-authority'],
    files: [
      {
        path: '@/components/ui/sonner.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'switch',
    description: 'A switch component for toggling between two states. Official Shadcn UI component.',
    categories: ['switch', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-switch'],
    files: [
      {
        path: '@/components/ui/switch.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'table',
    description: 'A table component for displaying tabular data. Official Shadcn UI component.',
    categories: ['table', 'data-visualization', 'shadcn'],
    type: 'registry:ui',
    files: [
      {
        path: '@/components/ui/table.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tabs',
    description: 'A tabs component for switching between content sections. Official Shadcn UI component.',
    categories: ['tabs', 'navigation', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-tabs'],
    files: [
      {
        path: '@/components/ui/tabs.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'textarea',
    description: 'A textarea component for multi-line text input. Official Shadcn UI component.',
    categories: ['textarea', 'form-element', 'shadcn'],
    type: 'registry:ui',
    files: [
      {
        path: '@/components/ui/textarea.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'toast',
    description: 'A toast notification component. Official Shadcn UI component.',
    categories: ['toast', 'notification', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-toast', 'class-variance-authority'],
    files: [
      {
        path: '@/components/ui/toast.tsx',
        type: 'registry:ui',
      },
      {
        path: 'hooks/use-toast.ts',
        type: 'registry:hook',
      },
      {
        path: '@/components/ui/toaster.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'toggle',
    description: 'A toggle component for switching between two states. Official Shadcn UI component.',
    categories: ['toggle', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-toggle', 'class-variance-authority'],
    files: [
      {
        path: '@/components/ui/toggle.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'toggle-group',
    description: 'A toggle group component for grouping multiple toggle buttons. Official Shadcn UI component.',
    categories: ['toggle', 'form-element', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-toggle-group', 'class-variance-authority'],
    registryDependencies: ['toggle'],
    files: [
      {
        path: '@/components/ui/toggle-group.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tooltip',
    description: 'A tooltip component for displaying additional information on hover. Official Shadcn UI component.',
    categories: ['tooltip', 'interactive', 'shadcn'],
    type: 'registry:ui',
    dependencies: ['@radix-ui/react-tooltip'],
    files: [
      {
        path: '@/components/ui/tooltip.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'floating-dock',
    type: 'registry:ui',
    description:
      'A floating dock navigation component with smooth hover animations. Features desktop and mobile variants with interactive icon scaling.',
    dependencies: ['motion/react', 'lucide-react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/floating-dock.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/floating-dock').then((mod) => ({
        default: mod.FloatingDock,
      })),
    ),
    categories: ['ui', 'navigation', 'animation'],
  },
  {
    name: 'pointer-highlight',
    type: 'registry:ui',
    description:
      'A pointer highlight component that animates a border and pointer around text or content. Perfect for highlighting important text with smooth animations.',
    dependencies: ['motion/react', 'react'],
    registryDependencies: ['https://blocks.mvp-subha.me/r/utils.json'],
    files: [
      {
        path: '@/components/ui/pointer-highlight.tsx',
        type: 'registry:ui',
      },
    ],
    component: React.lazy(() =>
      import('../components/ui/pointer-highlight').then((mod) => ({
        default: mod.PointerHighlight,
      })),
    ),
    categories: ['ui', 'animation', 'highlight'],
  },
];
