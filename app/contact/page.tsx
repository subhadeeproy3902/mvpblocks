

import AnimatedText from '@/components/ui/AnimatedText';

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-xl py-12 px-4">
      <AnimatedText text="Contact Us" className="text-3xl font-bold mb-6" />
      <form className="space-y-5">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input id="name" name="name" type="text" required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input id="email" name="email" type="email" required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea id="message" name="message" rows={4} required className="w-full border rounded px-3 py-2"></textarea>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition">Send</button>
      </form>
    </main>
  );
}
