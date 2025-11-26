import React from 'react'
import Hero from './components/hero'
import Service from './components/service'
import ForContact from '@/components/ForContact'
import Attachment from '@/components/ui/Attachment'
import Mission from '@/components/Mission'
import Movie from '@/components/ui/movie'

export default function service() {
  return (
    <div>
      <Hero />
      <Service />
      <Mission />
      <ForContact />
    </div>
  )
}
