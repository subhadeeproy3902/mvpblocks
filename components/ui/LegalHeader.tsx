"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LegalHeader() {
  return (
    <div className="mb-6">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
      >
        <ArrowLeft size={18} />
        Back to Home
      </Link>
    </div>
  )
}
