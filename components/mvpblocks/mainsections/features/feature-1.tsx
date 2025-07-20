import {
  Code,
  Terminal,
  Paintbrush,
  Rocket,
  Book,
  PlusCircle,
} from 'lucide-react';

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Developer-Friendly',
    desc: 'Tailored for developers to create and iterate fast, with minimal overhead and maximum flexibility.',
  },
  {
    icon: <Terminal className="h-6 w-6" />,
    title: 'CLI Support',
    desc: 'Command-line interface support for seamless development and workflow integration.',
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: 'Easily Customizable',
    desc: 'Every block is built to be editable. From layout to logic, style to structure—make it your own.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'v0 Support',
    desc: 'Launch fast with confidence. Perfect for MVPs, prototypes, and weekend projects.',
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: 'Full Documentation',
    desc: 'Comprehensive documentation to understand every feature and maximize your development experience.',
  },
  {
    icon: <PlusCircle className="h-6 w-6" />,
    title: 'Contribute Yours',
    desc: 'Add your own blocks to the library and become part of the MVPBlocks community.',
  },
];
export default function Feature1() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="relative mx-auto max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              Let’s help build your MVP
            </h3>
            <p className="font-geist text-foreground/60 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)',
            }}
          ></div>
        </div>
        <hr className="bg-foreground/30 mx-auto mt-5 h-px w-1/2" />
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="transform-gpu space-y-3 rounded-xl border bg-transparent p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa42f_inset]"
              >
                <div className="text-primary w-fit transform-gpu rounded-full border p-4 [box-shadow:0_-20px_80px_-20px_#ff7aa43f_inset] dark:[box-shadow:0_-20px_80px_-20px_#ff7aa40f_inset]">
                  {item.icon}
                </div>
                <h4 className="font-geist text-lg font-bold tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
