import { Globe, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CTA1() {
  return (
    <div className="w-full">
      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-20">
        <div
          className="relative isolate w-full overflow-hidden rounded-2xl"
          style={{
            background:
              'linear-gradient(100.5deg,rgba(57,18,241,.4) 29.55%,rgba(164,129,255,.4) 93.8%),radial-gradient(38.35% 93.72% at 18.31% 6.28%,rgba(170,135,252,.8) 0,rgba(61,27,205,.8) 100%)',
          }}
        >
          <img
            alt="bg"
            loading="lazy"
            width="1840"
            height="694"
            className="absolute top-0"
            src="https://blocks.mvp-subha.me/assets/cta/grid.svg"
          />
          <div className="relative isolate overflow-hidden px-4 py-12 sm:px-24">
            <p className="w-fit rounded-xl bg-white px-4 py-1 text-center text-base leading-7 font-semibold text-black uppercase lg:text-left">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-md text-4xl font-semibold text-white md:text-6xl">
              How Can You <span className="text-primary-2"> Reach Us</span>?
            </h2>
            <p className="my-auto mt-3 max-w-2xl text-base text-gray-300 md:text-lg">
              If you need to get in touch, there are several ways to contact us.
            </p>
            <div className="mt-8 flex w-full flex-col justify-between gap-4 text-lg md:flex-row">
              <a
                className="flex items-center gap-2 text-white"
                href="mailto:subha9.5roy350@gmail.com"
              >
                <Mail className="h-7 w-7 text-red-500" />
                subha9.5roy350@gmail.com
              </a>
              <a className="flex items-center gap-2 text-white" href="#">
                <Phone className="h-7 w-7 text-green-500" />
                +91-8637373116
              </a>
              <Link className="flex items-center gap-2 text-white" href="/">
                <Globe className="h-7 w-7 text-blue-500" />
                mvp-subha.me
              </Link>
            </div>
            <ul className="mt-8 ml-4 list-disc text-sm text-gray-300 md:text-base">
              <li>Submit your query and state your requirements.</li>
              <li>
                Receive a call back from our experts as per your query to help
                for your need.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
