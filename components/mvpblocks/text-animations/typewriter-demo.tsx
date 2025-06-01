import TextGenerateEffect from '@/components/ui/typewriter';

export default function TypewriterDemo() {
  return (
    <div className="flex items-center justify-center">
      <TextGenerateEffect words="Hello World!" className="text-6xl font-bold" />
    </div>
  );
}
