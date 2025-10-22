// "use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Linkedin, LinkIcon } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif font-bold text-primary-foreground hover:opacity-80 transition-opacity"
          >
            PhucNguyen
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-primary-foreground hover:opacity-80 transition-opacity">
              home
            </Link>
            <Link href="/blog" className="text-sm text-primary-foreground hover:opacity-80 transition-opacity">
              blog
            </Link>
            <Link href="/about" className="text-sm text-primary-foreground hover:opacity-80 transition-opacity">
              about
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/duckthunderz" className="text-primary-foreground hover:opacity-80 transition-opacity">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/nguyen.phuc.91580" className="text-primary-foreground hover:opacity-80 transition-opacity">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com" className="text-primary-foreground hover:opacity-80 transition-opacity">
              <Youtube size={20} />
            </a>
            <a href="#" className="text-primary-foreground hover:opacity-80 transition-opacity">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-primary-foreground hover:opacity-80 transition-opacity">
              <LinkIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
