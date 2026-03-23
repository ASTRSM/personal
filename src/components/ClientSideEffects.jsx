'use client'

import { useEffect } from 'react'
import { heroObserver } from '@/helpers/observers'

export default function ClientSideEffects() {
  useEffect(() => {
    heroObserver()
  }, [])

  return null
}
