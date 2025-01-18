'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export function StickyCard() {
  return (
    <Card className="fixed right-4 top-24 z-50 w-72 overflow-hidden">
      <Link
        href="#appointment"
        className="block p-4 bg-teal-600 text-white hover:bg-teal-700 transition-colors"
      >
        <div className="flex items-center space-x-4">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Appointment"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h3 className="font-medium">Book Appointment</h3>
            <p className="text-sm text-white/80">Quick and easy booking</p>
          </div>
        </div>
      </Link>
      <div className="p-4 bg-gray-50">
        <div className="flex items-center space-x-4">
          <Image
            src="/placeholder.svg?height=60&width=60"
            alt="Contact"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h3 className="font-medium text-gray-900">Contact Us</h3>
            <p className="text-sm text-gray-500">058-243-2600</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

