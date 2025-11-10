'use client';

import { TextType } from '@/components/ui/text-type';

export default function TextTypeDemo() {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-5xl">
          <TextType
            text={['Text typing effect', 'for your websites', 'Happy coding!']}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="text-foreground"
          />
        </h1>
      </div>
    </div>
  );
}

