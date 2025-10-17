"use client"

import Link from "next/link"
import { Instagram, Facebook, Youtube, Linkedin, LinkIcon } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/pyrus_darkus_dragonoid_x_tretorous_by_themrtusky_dfbqsie.png" className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors">
            DUCK THUNDER
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-foreground hover:text-primary transition-colors">
              home
            </Link>
            <Link href="/blog" className="text-sm text-foreground hover:text-primary transition-colors">
              blog
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-primary transition-colors">
              about
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/duckthunderz" className="text-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/nguyen.phuc.91580" className="text-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://www.youtube.com" className="text-foreground hover:text-primary transition-colors">
              <Youtube size={20} />
            </a>
            {/* <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <LinkIcon size={20} />
            </a> */}
          </div>
        </div>
      </div>
    </header>
  )
}
