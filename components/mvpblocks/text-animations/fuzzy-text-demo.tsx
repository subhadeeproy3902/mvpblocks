import { FuzzyText } from '@/components/ui/fuzzy-text';

export default function FuzzyTextDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <FuzzyText
        text="FUZZY STATIC"
        fontSize="clamp(2rem, 8vw, 5rem)"
        noiseIntensity={1}
        enableHover={true}
        baseColor="#ffaaaa"
        glowColor="#ffaaaa"
      />
    </div>
  );
}
