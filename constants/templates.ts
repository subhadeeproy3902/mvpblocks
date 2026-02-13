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
}

export const products: Product[] = [
  {
    id: 'agno-ai-studio-template',
    image: '/images/agnoai.webp',
    name: 'Agno AI Studio',
    link: 'https://aurasites.vercel.app/products/agno-ai-studio-template',
    price: 9,
    delay: 'delay-100',
    category: 'AI SaaS',
    description: 'A modern AI-powered studio template with sleek design and responsive layout. Perfect for AI startups and SaaS products.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: ['Dark Mode', 'Responsive Design', 'AI Integration Ready', 'Modern UI'],
  },
  {
    id: 'paymintx-template',
    image: '/images/paymint.webp',
    name: 'PayMintX',
    link: 'https://aurasites.vercel.app/products/paymintx-template',
    price: 9,
    delay: 'delay-200',
    category: 'Fintech',
    description: 'Professional fintech template with payment-focused design. Ideal for financial services, payment processors, and banking apps.',
    techStack: ['Next.js', 'React', 'Stripe Integration', 'Shadcn UI'],
    features: ['Payment UI', 'Dashboard', 'Transaction History', 'Secure Design'],
  },
  {
    id: 'opus-devops-template',
    image: '/images/opus.webp',
    name: 'Opus DevOps',
    link: 'https://aurasites.vercel.app/products/opus-devops-template',
    price: 9,
    delay: 'delay-300',
    category: 'DevOps',
    description: 'Clean and technical template for DevOps services. Perfect for infrastructure monitoring, CI/CD tools, and tech platforms.',
    techStack: ['Next.js', 'TypeScript', 'Recharts', 'Lucide Icons'],
    features: ['Dashboard', 'Metrics Display', 'Server Status', 'Log Viewer'],
  },
  {
    id: 'ai-saas-marketing-template',
    image: '/images/pollen.webp',
    name: 'AI SaaS Marketing',
    link: "https://aurasites.vercel.app/products/ai-saas-marketing-template",
    price: 29,
    delay: 'delay-400',
    category: 'Marketing',
    description: 'Premium AI SaaS marketing template with advanced animations and conversion-optimized design.',
    techStack: ['Next.js 14', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    features: ['Landing Page', 'Pricing Section', 'Testimonials', 'CTA Optimized'],
  },
  {
    id: 'fiona-designer-portfolio-template',
    image: '/images/fiona.webp',
    name: 'Fiona Designer Portfolio',
    link: "https://aurasites.vercel.app/products/fiona-designer-portfolio-template",
    price: 19,
    delay: 'delay-400',
    category: 'Portfolio',
    description: 'Elegant portfolio template for designers and creative professionals. Showcase your work with style.',
    techStack: ['Next.js', 'React', 'Framer Motion', 'Image Gallery'],
    features: ['Project Gallery', 'About Section', 'Contact Form', 'Smooth Animations'],
  },
  {
    id: 'porta-developer-portfolio-template',
    image: '/images/porta.webp',
    name: 'Porta Developer Portfolio',
    link: "https://aurasites.vercel.app/products/porta-developer-portfolio-template",
    price: 0,
    delay: 'delay-500',
    category: 'Portfolio',
    description: 'Clean developer portfolio template with code-focused design. Free and open source for developers.',
    techStack: ['Next.js', 'TypeScript', 'Prism.js', 'GitHub Integration'],
    features: ['Project Showcase', 'GitHub Stats', 'Skills Section', 'Blog Ready'],
  },
];
