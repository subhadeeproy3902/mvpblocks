export interface Product {
  id: string;
  image: string;
  name: string;
  link: string;
  price: number;
  delay?: string;
  description: string;
  category: string;
  techStack: string[];
  features: string[];
  videoUrl?: string;
  isNew?: boolean;
}

export const products: Product[] = [
    {
    id: 'auraclaw-ai-chatbot-template',
    image: '/images/auraclaw.webp',
    name: 'AuraClaw',
    link: '/docs/auraclaw-ai-chatbot',
    price: 149,
    delay: 'delay-350',
    category: 'AI Chatbot',
    description: 'A multi-model AI chat workspace with streaming, persistence, voice mode, and shareable chats. Production-ready out of the box.',
    techStack: ['Next.js', 'TypeScript', 'Neon Postgres', 'Clerk', 'Tailwind CSS'],
    features: ['Multi-model picker', 'Streaming markdown + KaTeX', 'Persistent history', 'Voice mode', 'Shareable chats'],
    isNew: true,
    videoUrl: "https://9o0poboblj.ufs.sh/f/vsatf5J1TVQG6qihrrkoN3bxOusEVH9CeJgrztjAZ05c8QnY"
  },
  {
    id: 'ai-saas-marketing-template',
    videoUrl: 'https://9o0poboblj.ufs.sh/f/vsatf5J1TVQGem0Af1DSqpzWl4st3oVrQZ8njMaE05PvCOkJ',
    image: '/images/pollen.webp',
    name: 'AI SaaS Marketing',
    link: '/docs/ai-saas-marketing',
    price: 29,
    delay: 'delay-400',
    category: 'Marketing',
    description: 'Premium AI SaaS marketing template with advanced animations and conversion-optimized design.',
    techStack: ['Next.js 14', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    features: ['Landing Page', 'Pricing Section', 'Testimonials', 'CTA Optimized'],
    isNew: true,
  },
  {
    id: 'fiona-designer-portfolio-template',
    videoUrl: 'https://9o0poboblj.ufs.sh/f/vsatf5J1TVQGdgwMu75vFOAunaGJx5mqovQ42MK7ysVIEfBg',
    image: '/images/fiona.webp',
    name: 'Fiona Designer Portfolio',
    link: '/docs/designer-portfolio',
    price: 19,
    delay: 'delay-400',
    category: 'Portfolio',
    description: 'Elegant portfolio template for designers and creative professionals. Showcase your work with style.',
    techStack: ['Next.js', 'React', 'Framer Motion', 'Image Gallery'],
    features: ['Project Gallery', 'About Section', 'Contact Form', 'Smooth Animations'],
  },
  {
    id: 'agno-ai-studio-template',
    image: '/images/agnoai.webp',
    name: 'Agno AI Studio',
    link: '/docs/agno-ai-studio',
    price: 9,
    delay: 'delay-100',
    category: 'AI SaaS',
    description: 'A modern AI-powered studio template with sleek design and responsive layout. Perfect for AI startups and SaaS products.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: ['Dark Mode', 'Responsive Design', 'AI Integration Ready', 'Modern UI'],
    videoUrl: 'https://9o0poboblj.ufs.sh/f/vsatf5J1TVQGa9Ba3ewHRjBGCLpmP4YbQhknVWx0TAX6oKts',
  },
  {
    id: 'paymintx-template',
    videoUrl: 'https://9o0poboblj.ufs.sh/f/vsatf5J1TVQG1VYYKhm6qNlBTIiCt3YoJAeOFWsHr7EamQ4X',
    image: '/images/paymint.webp',
    name: 'PayMintX',
    link: '/docs/paymintx',
    price: 9,
    delay: 'delay-200',
    category: 'Fintech',
    description: 'Professional fintech template with payment-focused design. Ideal for financial services, payment processors, and banking apps.',
    techStack: ['Next.js', 'React', 'Stripe Integration', 'Shadcn UI'],
    features: ['Payment UI', 'Dashboard', 'Transaction History', 'Secure Design'],
  },
  {
    id: 'opus-devops-template',
    videoUrl: 'https://9o0poboblj.ufs.sh/f/vsatf5J1TVQG6d75MXoN3bxOusEVH9CeJgrztjAZ05c8QnYq',
    image: '/images/opus.webp',
    name: 'Opus DevOps',
    link: '/docs/opus-devops',
    price: 9,
    delay: 'delay-300',
    category: 'DevOps',
    description: 'Clean and technical template for DevOps services. Perfect for infrastructure monitoring, CI/CD tools, and tech platforms.',
    techStack: ['Next.js', 'TypeScript', 'Recharts', 'Lucide Icons'],
    features: ['Dashboard', 'Metrics Display', 'Server Status', 'Log Viewer'],
    isNew: true,
  },
  {
    id: 'porta-developer-portfolio-template',
    videoUrl: 'https://9o0poboblj.ufs.sh/f/vsatf5J1TVQGLXfFySqI75juDCedH8UnytAKFaVsWMqp4fkc',
    image: '/images/porta.webp',
    name: 'Porta Developer Portfolio',
    link: '/docs/developer-portfolio',
    price: 0,
    delay: 'delay-500',
    category: 'Portfolio',
    description: 'Clean developer portfolio template with code-focused design. Free and open source for developers.',
    techStack: ['Next.js', 'TypeScript', 'Prism.js', 'GitHub Integration'],
    features: ['Project Showcase', 'GitHub Stats', 'Skills Section', 'Blog Ready'],
  },
];
