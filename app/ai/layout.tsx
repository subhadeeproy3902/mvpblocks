import { v4 } from '@/config/site';
import { ComingSoon } from '@/components/ui/coming-soon';

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