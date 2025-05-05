import TestimonialsCarousel from "@/components/mvpblocks/mainsections/testimonials/testimonials-carousel";

export default function TestimonialsCarouselDemo() {
  // Custom testimonials data
  const testimonials = [
    {
      text: "MVPBlocks has completely changed the way I build UIs. Copy-paste, done. No more design stress.",
      imageSrc: "/assets/avatars/avatar-1.webp",
      name: "Arjun Mehta",
      username: "@arjdev",
      role: "Frontend Developer"
    },
    {
      text: "Honestly shocked at how smooth the animations and styling are out of the box. Just works.",
      imageSrc: "/assets/avatars/avatar-2.webp",
      name: "Sara Lin",
      username: "@sara.codes",
      role: "UX Designer"
    },
    {
      text: "Our team launched a client site in 2 days using MVPBlocks. Saved so much time.",
      imageSrc: "/assets/avatars/avatar-3.webp",
      name: "Devon Carter",
      username: "@devninja",
      role: "Product Manager"
    },
    {
      text: "Plugged a few blocks into our existing codebase and everything blended perfectly. Massive W.",
      imageSrc: "/assets/avatars/avatar-4.webp",
      name: "Priya Shah",
      username: "@priyacodes",
      role: "Full Stack Developer"
    },
    {
      text: "Found a beautiful hero section, dropped it into V0, tweaked copy, and shipped in 15 minutes.",
      imageSrc: "/assets/avatars/avatar-5.webp",
      name: "Leo Martin",
      username: "@leobuilds",
      role: "Startup Founder"
    },
    {
      text: "MVPBlocks helped us prototype multiple landing pages without writing CSS once.",
      imageSrc: "/assets/avatars/avatar-6.webp",
      name: "Chloe Winters",
      username: "@chloewinters",
      role: "UI Designer"
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Testimonials Carousel Demo</h1>
      
      {/* Default testimonials carousel */}
      <TestimonialsCarousel />
      
      {/* Custom testimonials carousel with different settings */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Custom Settings</h2>
        <TestimonialsCarousel 
          testimonials={testimonials}
          title="What our customers say"
          subtitle="Our customers love using MVPBlocks to build their projects quickly and efficiently."
          autoplaySpeed={5000}
        />
      </div>
    </div>
  );
}
