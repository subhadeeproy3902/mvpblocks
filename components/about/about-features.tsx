import { cn } from "@/lib/utils";
import { Book, Code, GitCommit, Layout, Monitor, PlusCircle, Sliders, Terminal } from "lucide-react";


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
      description: "Initial version support to kickstart your MVP without hassle.",
      icon: <GitCommit />,
    },
    {
      title: "Fully Functional Docs Understanding",
      description: "Comprehensive documentation to understand every feature and usage.",
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
      description: "Add your own features and customize your MVPBlocks experience.",
      icon: <PlusCircle />,
    },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
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
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
