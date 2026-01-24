import { FuzzyText } from '@/components/ui/fuzzy-text';

export default function FuzzyTextFast() {
  return (
    <div className="flex items-center justify-center p-8">
      <FuzzyText
        text="404 NOT FOUND"
        fontSize="clamp(2rem, 8vw, 4rem)"
        noiseIntensity={1.5}
        enableHover={false}
        baseColor="#ff0040"
        glowColor="#ff0040"
        speed={30}
      />
    </div>
  );
}
