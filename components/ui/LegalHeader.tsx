"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LegalHeader() {
  return (
    <div className="mb-6 flex justify-center">
      <Button variant="ghost" asChild>
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </Button>
    </div>
  )
}
