import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { StickyCard } from '@/components/sticky-card'
import { VerticalSection } from '@/components/vertical-section'
import { Location } from '@/components/location'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StickyCard />
      <main>
        <VerticalSection />
        <Location />
      </main>
      <ScrollToTop />
    </div>
  )
}

