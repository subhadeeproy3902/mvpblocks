import React from "react";

export default function GlassGradientHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-blue-500/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Build faster with{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              MVPBlocks
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Launch your MVP quickly using modern, reusable UI blocks.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-gray-200 transition">
              Get Started
            </button>
            <button className="rounded-lg border border-white/30 px-6 py-3 hover:bg-white/10 transition">
              View Blocks
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
