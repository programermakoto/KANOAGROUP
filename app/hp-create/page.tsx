import Hero from '@/components/Hero'
import React from 'react'
import TopWrapper from './components/TopWrapper'
import MainWrapper from './components/MainWrapper'

export default function page() {
    return (
        <section className='container'>
            <TopWrapper/>
            <MainWrapper/>
        </section>
    )
}
