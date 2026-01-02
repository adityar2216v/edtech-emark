"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-xl">
              e
            </div>
            <span className="text-xl font-bold tracking-tight">emark</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">Courses</Link>
            <Link href="/instructors" className="text-sm font-medium hover:text-primary transition-colors">Instructors</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search courses..."
              className="h-9 w-64 rounded-md border border-input bg-background px-9 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
          <Link href="/auth?mode=login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link href="/auth?mode=signup">
            <Button size="sm">Sign up</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-4">
          <Link href="/courses" className="block text-sm font-medium">Courses</Link>
          <Link href="/instructors" className="block text-sm font-medium">Instructors</Link>
          <Link href="/about" className="block text-sm font-medium">About</Link>
          <Link href="/contact" className="block text-sm font-medium">Contact</Link>
          <div className="pt-4 space-y-2 border-t">
            <Link href="/auth?mode=login" className="block">
              <Button variant="ghost" className="w-full justify-start">Log in</Button>
            </Link>
            <Link href="/auth?mode=signup" className="block">
              <Button className="w-full justify-start">Sign up</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
