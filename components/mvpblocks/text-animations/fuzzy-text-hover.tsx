import { FuzzyText } from '@/components/ui/fuzzy-text';

export default function FuzzyTextHover() {
  return (
    <div className="flex items-center justify-center p-8">
      <FuzzyText
        text="HOVER ME"
        fontSize="clamp(2rem, 8vw, 5rem)"
        noiseIntensity={1.2}
        enableHover={true}
        baseColor="#00ff00"
        glowColor="#00ff00"
      />
    </div>
  );
}
