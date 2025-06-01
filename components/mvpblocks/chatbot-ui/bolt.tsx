import {
  Paperclip,
  Terminal,
  Figma,
  FileUp,
  MonitorIcon,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const EXAMPLE_ACTIONS = [
  { icon: <Figma className="h-4 w-4" />, text: 'Import from Figma' },
  {
    icon: <FileUp className="h-4 w-4" />,
    text: 'Build a mobile app with Expo',
  },
  {
    icon: <MonitorIcon className="h-4 w-4" />,
    text: 'Start a blog with Astro',
  },
  {
    icon: <Terminal className="h-4 w-4" />,
    text: 'Create a docs site with Vitepress',
  },
  { icon: <FileUp className="h-4 w-4" />, text: 'Scaffold UI with shadcn' },
];

export default function BoltChat() {
  return (
    <div className="selection-accent flex flex-grow flex-col py-20">
      <div className="mx-4 flex flex-col">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-5xl font-bold">
            What do you want to build?
          </h1>
          <p className="text-lg text-gray-400">
            Prompt, run, edit, and deploy full-stack{' '}
            <span className="font-medium text-foreground">web</span> and{' '}
            <span className="font-medium text-foreground">mobile</span> apps.
          </p>
        </div>

        <div className="mx-auto mb-6 w-full max-w-lg">
          <div className="relative h-[26px]">
            <div className="duration-350 absolute left-2 top-0 flex w-[calc(100%-1rem)] flex-wrap justify-between truncate rounded-t-lg border bg-secondary/50 px-2 py-1 text-xs opacity-100 backdrop-blur transition-opacity">
              <span>150K daily tokens remaining.</span>
              <button className="mr-4 inline-block bg-transparent font-semibold text-primary hover:underline">
                Subscribe to Pro for 66x more usage
              </button>
            </div>
          </div>
          <div className="shadow-xs relative rounded-lg backdrop-blur">
            <div className="flex flex-col rounded-lg border bg-secondary/50 p-4">
              <textarea
                placeholder="How can Bolt help you today?"
                className="mb-4 h-24 w-full resize-none bg-transparent outline-none"
              />

              <div className="mt-auto flex gap-4">
                <button className="text-zinc-400">
                  <Paperclip size={20} />
                </button>
                <button className="text-zinc-400">
                  <Sparkles size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-3xl flex-wrap justify-center gap-2">
          {EXAMPLE_ACTIONS.map((action, index) => (
            <Button
              key={index}
              size="sm"
              variant="outline"
              className="rounded-full px-4 py-0.5 text-xs"
            >
              {action.icon}
              <span>{action.text}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
