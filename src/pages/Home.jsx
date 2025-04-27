import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import { ExclusiveOffers } from '../components/ExclusiveOffers'
import Testomonial from '../components/Testomonial'
import NewsLetter from '../components/NewsLetter'



const Home = () => {
  return (
    <>
       <Hero />
       <FeaturedDestination/>
       <ExclusiveOffers />
       <Testomonial/>
       <NewsLetter/>
       
    </>
  )
}

export default Home