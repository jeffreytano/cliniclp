'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=40&width=160"
              alt="Clinic Logo"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-teal-600">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-teal-600">
              Services
            </Link>
            <Link href="#schedule" className="text-gray-700 hover:text-teal-600">
              Schedule
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-teal-600">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

