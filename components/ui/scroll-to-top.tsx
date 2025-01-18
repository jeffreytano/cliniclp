'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        'fixed bottom-8 right-8 z-50 rounded-full transition-all duration-300',
        show ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      )}
      onClick={scrollToTop}
    >
      <ChevronUp className="h-6 w-6" />
    </Button>
  )
}

