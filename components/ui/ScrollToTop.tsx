"use client";

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!visible) return null

  return (
    <button
  onClick={scrollToTop}
  className="
    fixed bottom-6 right-6 z-50
    rounded-full bg-[#f8386e99] p-3 text-black
    shadow-lg transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-110
    hover:bg-black hover:text-pink-500
    hover:shadow-[#f8386e99]-400/50 hover:shadow-2xl animate-bounce 
  "
  aria-label="Scroll to top"
>
  <ArrowUp size={20} />
</button>
  )
}

