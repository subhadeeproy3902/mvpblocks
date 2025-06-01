import {
  Building2,
  Lightbulb,
  ScreenShare,
  Trophy,
  User,
  User2,
  LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the feature item type
type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  position?: 'left' | 'right';
  cornerStyle?: string;
};

// Create feature data arrays for left and right columns
const leftFeatures: FeatureItem[] = [
  {
    icon: Building2,
    title: 'Taught by Professionals',
    description:
      'Learn directly from top engineers and founders with real-world experience.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: User2,
    title: 'Coding Hostels',
    description:
      'Join virtual hostels to study, collaborate, and vibe with fellow learners.',
    position: 'left',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-br-[2px]',
  },
  {
    icon: Trophy,
    title: 'Bounties',
    description:
      'Win rewards for solving challenges, contributing to projects, and helping peers.',
    position: 'left',
    cornerStyle: 'sm:translate-x-4 sm:rounded-tr-[2px]',
  },
];

const rightFeatures: FeatureItem[] = [
  {
    icon: ScreenShare,
    title: 'Revision Classes',
    description:
      'Stay sharp with weekly revision sessions and topic refreshers.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: User,
    title: 'Peer Code Reviews',
    description:
      'Improve faster with feedback from mentors and batchmates on your actual code.',
    position: 'right',
    cornerStyle: 'sm:translate-x-4 sm:rounded-bl-[2px]',
  },
  {
    icon: Lightbulb,
    title: 'Leet Lab',
    description:
      'Ace coding interviews with daily DSA problems, contests, and tracking.',
    position: 'right',
    cornerStyle: 'sm:-translate-x-4 sm:rounded-tl-[2px]',
  },
];

// Feature card component
const FeatureCard = ({ feature }: { feature: FeatureItem }) => {
  const Icon = feature.icon;

  return (
    <div>
      <div
        className={cn(
          'relative rounded-2xl px-4 pb-4 pt-4 text-sm',
          'bg-secondary/50 ring ring-border',
          feature.cornerStyle,
        )}
      >
        <div className="mb-3 text-[2rem] text-primary">
          <Icon />
        </div>
        <h2 className="mb-2.5 text-2xl text-foreground">{feature.title}</h2>
        <p className="text-pretty text-base text-muted-foreground">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};

export default function Feature3() {
  return (
    <section className="pb-8 pt-20" id="features">
      <div className="mx-6 max-w-[1120px] pb-16 pt-2 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="mb-4.5 relative mx-auto w-fit rounded-full rounded-bl-[2px] bg-secondary px-4 py-2 text-sm text-foreground ring ring-border">
              <span className="z-1 relative flex items-center gap-2">
                Features
              </span>
              <span className="absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,hsl(var(--primary)/0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="mb-2 text-center text-2xl text-foreground sm:mb-2.5 md:text-[2rem]">
              Key Benefits of Cohorts
            </h2>
            <p className="mx-auto max-w-[18rem] text-pretty text-center text-muted-foreground">
              Cohorts are best way to learn because you finish the course in a
              timely manner
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
