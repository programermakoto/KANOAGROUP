import Hero from '@/components/Hero'
import React from 'react'
import TopWrapper from './components/TopWrapper'
import MainWrapper from './components/MainWrapper'
import PortfolioGrid from './components/PortfolioGrid'
import WebsiteFourStep from './components/WebsiteFourStep'
import InfoWebCreate from './components/InfoWebCreate'
import PricingPlans from './components/PricingPlans'

export default function page() {
    return (
        <section className='container'>
            <TopWrapper />
            <MainWrapper />
            <WebsiteFourStep />
            <PortfolioGrid />
            <InfoWebCreate/>
            <PricingPlans/>
        </section>
    )
}
