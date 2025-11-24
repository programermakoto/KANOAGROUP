import React from 'react'
import Hero from './components/hero'
import Service from './components/service'
import ForContact from '@/components/ForContact'
import Attachment from '@/components/ui/Attachment'

export default function service() {
  return (
    <div>
      <Hero />
      <Attachment/>
      <Service />
      <ForContact/>
    </div>
  )
}
