'use client';
import React from 'react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactUs2() {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    message: '',
    errors: {} as Record<string, string>,
    submitting: false,
    submitted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    // Console log only
    console.log('Form submitted:', {
      name: state.name,
      email: state.email,
      message: state.message,
    });

    setState({
      ...state,
      submitting: false,
      submitted: true,
    });
  };

  return (
    <section className="w-full max-w-screen-md px-2">
      <h2 className="mt-4 mb-5 bg-gradient-to-br from-gray-300 via-blue-300 to-gray-700 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
        Let&apos;s Get in Touch
      </h2>
      <p className="text-muted-foreground mb-6 text-center">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>
      <div
        className="bg-opacity-10 mx-auto mb-6 grid w-full items-start gap-12 rounded-lg border bg-white px-4 pt-10 pb-6 shadow shadow-slate-800 md:grid-cols-2 lg:px-12"
        style={{
          backgroundImage:
            'radial-gradient(164.75% 100% at 50% 0,#272f3c 0,#0b1224 48.73%)',
        }}
      >
        <form className="space-y-8 text-slate-300" onSubmit={handleSubmit}>
          <div className="space-y-4 text-lg">
            <label htmlFor="name" />
            Name
            <input
              id="name"
              type="text"
              required
              className="bg-background flex h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm shadow-inner shadow-slate-800 outline-none hover:border-slate-600 hover:transition-all hover:outline-none focus:border-slate-500 focus:outline-none"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div className="space-y-4 text-lg">
            <label htmlFor="email" /> Email
            <input
              id="email"
              placeholder="Enter your email"
              type="email"
              className="hover:transition-al bg-background placeholder:text-muted-foreground flex h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm shadow-inner shadow-slate-800 outline-none file:text-sm file:font-medium hover:border-slate-400 hover:outline-none focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              name="email"
              required
            />
            {state.errors && state.errors.email && (
              <p className="mt-1 text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>
          <div className="space-y-4 text-lg">
            <label htmlFor="message" className="text-lg" />
            Message
            <textarea
              className="bg-background ring-offset-background placeholder:text-muted-foreground mb-5 flex min-h-[100px] w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white shadow-inner shadow-slate-800 outline-none hover:border-slate-400 hover:transition-all hover:outline-none focus:border-slate-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
              id="message"
              placeholder="Enter your message"
              name="message"
            />
            {state.errors && (state.errors as any).message && (
              <p className="mt-1 text-sm text-red-500">
                {(state.errors as any).message}
              </p>
            )}
          </div>
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-slate-800 to-slate-700 py-2 text-center font-medium text-white shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] transition-all duration-300 ease-in-out hover:from-slate-700 hover:to-slate-800 hover:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Sending...' : 'Send'}
            <Send className="mx-2 inline h-4" />
          </button>
        </form>
        <div>
          <h3 className="mb-10 text-2xl font-semibold text-slate-300">
            Connect with Us
          </h3>
          <div className="mb-12 flex gap-8">
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Mail className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Email to us at </p>
              <p>subha9.5roy350@gmail.com</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Phone className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Call us at </p>
              <p>XXXXX XXXXX</p>
            </div>
          </div>

          <div className="mb-12 flex gap-8">
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 px-2 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <MapPin className="h-5 w-5 text-white" />
            </Link>
            <div className="text-md text-slate-300">
              <p>Location at </p>
              <p>Techno Main Salt Lake, Sector-V, Kolkata-700091</p>
            </div>
          </div>

          <div className="flex space-x-12 py-7">
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Twitter className="h-5 w-5 text-white" />
            </Link>
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Facebook className="h-5 w-5 text-white" />
            </Link>
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Instagram className="h-5 w-5 text-white" />
            </Link>
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-gray-800 hover:shadow-md hover:shadow-slate-500 hover:transition hover:duration-300 hover:ease-in-out"
              href="#"
            >
              <Github className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
