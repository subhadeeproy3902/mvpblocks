"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { MouseEvent, useRef, useState } from "react";

export default function SpotlightCard({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  const boxWrapper = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = React.useState({
    x: null,
    y: null,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    let { left, top } = currentTarget.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    setOverlayColor({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={boxWrapper}
      className={cn(
        "group relative w-full overflow-hidden rounded-lg bg-secondary/10 p-[2px]",
      )}
    >
      {/* Cursor Flow Gradient  */}

      {isHovered && (
        <div
          className="pointer-events-none absolute h-full w-full rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgba(255, 255, 255, 0.068),
              transparent 80%
            )
          `,
          }}
        />
      )}

      {/* Hover Spotlight  */}
      <div
        className="absolute inset-0 rounded-lg bg-fixed opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #e60a6410 0%,transparent 20%,transparent) fixed `,
        }}
      ></div>
      <div className="relative h-full w-full rounded-lg bg-secondary/10 bg-cover px-8 py-6 text-center">
        <>
          <Image
            src={"/statistic.png"}
            alt="grid"
            width={600}
            className="mx-auto w-fit"
            height={600}
          />
          <h1 className="pt-6 text-2xl font-medium tracking-tight">{title}</h1>
          {desc && (
            <p className="pt-2 capitalize text-gray-500">
              {desc}
              <br />
            </p>
          )}
        </>
      </div>
    </div>
  );
}
