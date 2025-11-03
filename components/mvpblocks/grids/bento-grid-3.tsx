'use client';

import React from 'react';
import {
  Code,
  Zap,
  Brain,
  Shield,
  Layers,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react';

const items = [
  {
    title: 'AI-Powered Analytics',
    meta: 'Real-time insights',
    description:
      'Transform your data into actionable insights with advanced machine learning algorithms that adapt to your business needs.',
    icon: <Brain className="h-4 w-4 text-blue-600" />,
    status: 'Popular',
    tags: ['AI', 'Analytics', 'ML'],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: 'Lightning Performance',
    meta: 'Sub-second response',
    description:
      'Experience blazing-fast performance with our optimized infrastructure built for scale.',
    icon: <Zap className="h-4 w-4 text-amber-600" />,
    status: 'Featured',
    tags: ['Speed', 'Cloud'],
  },
  {
    title: 'Security First',
    description:
      'Enterprise-grade security with end-to-end encryption, compliance certifications, and regular audits.',
    icon: <Shield className="h-4 w-4 text-emerald-600" />,
    status: 'Essential',
  },
  {
    title: 'Smart Automation',
    description:
      'Automate complex workflows with intelligent triggers and actions that save hours of manual work.',
    icon: <Sparkles className="h-4 w-4 text-purple-600" />,
    meta: 'Save 20hrs/week',
    tags: ['Automation', 'Workflow'],
  },
  {
    title: 'Team Collaboration',
    description:
      'Work together seamlessly with real-time sync, comments, and version control for your entire team.',
    icon: <Users className="h-4 w-4 text-pink-600" />,
    meta: 'Unlimited users',
    tags: ['Teams', 'Sync'],
  },
  {
    title: 'Advanced Integration',
    meta: '500+ apps',
    description:
      'Connect with all your favorite tools through our extensive integration marketplace and REST API.',
    icon: <Layers className="h-4 w-4 text-indigo-600" />,
    status: 'New',
    tags: ['API', 'Integrations'],
  },
  {
    title: 'Growth Analytics',
    meta: 'Predictive AI',
    description:
      'Forecast trends, identify opportunities, and optimize your strategy with predictive analytics powered by machine learning models.',
    icon: <TrendingUp className="h-4 w-4 text-cyan-600" />,
    status: 'Premium',
    tags: ['Growth', 'Predictions'],
    colSpan: 2,
  },
];

export default function BentoGrid3() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-slate-900">
            Build Faster, Smarter, Better
          </h1>
          <p className="text-xl text-slate-600">
            Everything you need to scale your business in one powerful platform
          </p>
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">
          {items.map((item, index) => (
            <a
              href="#"
              key={`${item.title}-${index}`}
              className={`group relative ${item.colSpan === 2 ? 'md:col-span-2' : 'col-span-1'}`}
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both`,
              }}
            >
              <div
                className={`relative h-full border border-slate-200 bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 ${
                  item.hasPersistentHover
                    ? 'bg-white shadow-lg shadow-slate-200/50'
                    : ''
                }`}
              >
                {/* Dot pattern overlay */}
                <div
                  className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:16px_16px] transition-opacity duration-300 ${
                    item.hasPersistentHover
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Header */}
                <div className="relative mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-slate-200 transition-all duration-300 group-hover:scale-110 group-hover:ring-2">
                    {item.icon}
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {item.status || 'Active'}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mb-4 space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {item.title}
                    {item.meta && (
                      <span className="ml-2 text-sm font-normal text-slate-500">
                        {item.meta}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="relative flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-xs">
                    {item.tags?.map((tag) => (
                      <span
                        key={`${item.title}-${tag}`}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-600 transition-colors duration-200 hover:bg-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more →
                  </span>
                </div>

                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 transition-opacity duration-300 ${
                    item.hasPersistentHover
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
