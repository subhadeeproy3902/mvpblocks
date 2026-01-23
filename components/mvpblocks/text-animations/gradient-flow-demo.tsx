import { GradientFlowText } from '@/components/ui/gradient-flow-text';

export default function GradientFlowDemo() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-4xl font-bold md:text-6xl">
        <GradientFlowText
          text="Flowing Colors"
          colors={['#ff0080', '#7928ca', '#0070f3', '#ff0080']}
          speed={4}
          angle={90}
          trigger="continuous"
        />
      </h1>
    </div>
  );
}
