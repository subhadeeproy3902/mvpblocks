import { GradientFlowText } from '@/components/ui/gradient-flow-text';

export default function GradientFlowHover() {
  return (
    <div className="flex items-center justify-center">
      <h1 className="cursor-pointer text-4xl md:text-6xl">
        <GradientFlowText
          text="Hover to Flow"
          colors={['#f97316', '#ec4899', '#8b5cf6', '#f97316']}
          speed={2}
          angle={45}
          trigger="hover"
        />
      </h1>
    </div>
  );
}
