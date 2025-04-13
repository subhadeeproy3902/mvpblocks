import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative overflow-x-hidden min-h-screen bg-background">
      {/* <div className="absolute inset-0 z-[1]" style={{ background: 'radial-gradient(100% 100% at 50% 0%, #000 40%, rgba(0, 14, 15, 0) 60%)' }} />
      <Image src="/homebgdark.png" alt="Background" fill className="object-cover object-center" priority /> */}
      <Image src="/vector1.png" alt="Vector" width={250} height={250} className="absolute top-0 right-0 z-[2] object-cover object-center" priority />
      <Image src="/vector2.png" alt="Vector" width={250} height={250} className="absolute top-0 left-0 z-[2] object-cover object-center" priority />
    </div>
  );
}