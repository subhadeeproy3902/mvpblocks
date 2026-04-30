import type { Metadata } from 'next';
import { v4 } from '@/config/site';
import { ComingSoon } from '@/components/ui/coming-soon';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'MVPBlocks AI — Smart UI Generation (Coming Soon)',
  description:
    'MVPBlocks AI brings smart component generation, intelligent code suggestions, auto layout optimization, and AI-powered theming to your workflow. Coming in v4.',
  pathname: '/ai',
  extraKeywords: [
    'AI component generator',
    'AI UI builder',
    'AI code suggestions',
    'MVPBlocks AI',
    'generative UI',
  ],
});

export default function AILayout({ children }: { children: React.ReactNode }) {
  if (!v4) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <ComingSoon
          title="AI Features"
          description="Revolutionary AI-powered tools are on the way to supercharge your development workflow with MVPBlocks."
          version="v4"
          features={[
            'Smart Component Generation',
            'Intelligent Code Suggestions',
            'Auto Layout Optimization',
            'AI-Powered Theming',
          ]}
        />
      </div>
    );
  }
  return <>{children}</>;
}
