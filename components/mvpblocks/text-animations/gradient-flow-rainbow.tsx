import { GradientFlowText } from '@/components/ui/gradient-flow-text';

export default function GradientFlowRainbow() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-4xl md:text-6xl">
        <GradientFlowText
          text="Rainbow Flow"
          colors={[
            '#ff0000',
            '#ff7f00',
            '#ffff00',
            '#00ff00',
            '#0000ff',
            '#4b0082',
            '#9400d3',
            '#ff0000',
          ]}
          speed={6}
          angle={90}
          trigger="continuous"
        />
      </h1>
    </div>
  );
}
