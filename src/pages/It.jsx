import React from 'react'
import HeroAi from '../components/HeroAi'
import AICard from '../components/AICard'
import PlatformDevelopment from '../components/PlatformDevelopment'
import HighPerfomance from '../components/HighPerfomance'
import AIMLTable from '../components/AIMLTable'
import { Helmet } from 'react-helmet-async';
const It = () => {
  return (
    <div>
        <Helmet>
              <title>AI/ML | Teamup</title>
              <meta
                name="description"
                content="Teamup helps you collaborate easily with your team."
              />
           <link rel="canonical" href="https://teamupconsultants.com/enterprise-ai" />
            </Helmet>
      <HeroAi/>
      <AICard/>
      <PlatformDevelopment/>
      <HighPerfomance/>
      <AIMLTable/>
    </div>
  )
}

export default It
