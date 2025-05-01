import { cn } from "@/lib/utils";
import {
  Book,
  Code,
  GitCommit,
  Layout,
  Monitor,
  PlusCircle,
  Sliders,
  Terminal,
} from "lucide-react";

export default function AboutFeaturesSection() {
  const features = [
    {
      title: "Developer-Friendly",
      description: "Tailored for developers to create and iterate fast.",
      icon: <Code />,
    },
    {
      title: "CLI Support",
      description: "Command-line interface support for seamless development.",
      icon: <Terminal />,
    },
    {
      title: "Easily Customisable",
      description: "Fully adaptable to fit your unique needs.",
      icon: <Sliders />,
    },
    {
      title: "v0 Support",
      description:
        "Initial version support to kickstart your MVP without hassle.",
      icon: <GitCommit />,
    },
    {
      title: "Fully Functional Docs Understanding",
      description:
        "Comprehensive documentation to understand every feature and usage.",
      icon: <Book />,
    },
    {
      title: "Multi Viewport",
      description: "Preview your MVP across multiple devices and screen sizes.",
      icon: <Monitor />,
    },
    {
      title: "Easy-to-Use Interface",
      description: "Simple, intuitive UI for seamless MVP creation.",
      icon: <Layout />,
    },
    {
      title: "Add Yours!",
      description:
        "Add your own features and customize your MVPBlocks experience.",
      icon: <PlusCircle />,
    },
  ];

  return (
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10 dark:border-neutral-800 lg:border-r",
        (index === 0 || index === 4) && "dark:border-neutral-800 lg:border-l",
        index < 4 && "dark:border-neutral-800 lg:border-b",
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
