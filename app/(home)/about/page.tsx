import Keyboard from "@/components/home/keyboard";
import { Spotlight } from "@/components/ui/spotlight";

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background py-32 md:px-6">
      <Spotlight />
      <Keyboard />
    </div>
  )
}