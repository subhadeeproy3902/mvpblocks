import TextGenerateEffect from "@/components/ui/typewriter";

export default function GradientTypewriter() {
  return (
    <div className="flex items-center justify-center">
      <TextGenerateEffect
        words="Gradient Text"
        className="text-6xl font-bold bg-gradient-to-r from-rose-400 to-red-600 bg-clip-text text-transparent"
      />
    </div>
  );
}