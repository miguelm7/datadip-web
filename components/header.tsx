import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Database } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2">
          <Database className="h-6 w-6 text-black" />
          <span className="text-xl font-bold">DataDip</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#services" className="text-sm font-medium hover:text-gray-800">
            Services
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-gray-800">
            About
          </Link>
          <Link href="#team" className="text-sm font-medium hover:text-gray-800">
            Team
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-gray-800">
            Contact
          </Link>
        </nav>
        <div className="ml-4">
          <Button asChild>
            <Link href="#contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

