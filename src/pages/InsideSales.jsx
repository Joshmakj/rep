import React from 'react'
import { Helmet} from 'react-helmet-async';
import InsideComponent from '../components/InsideComponent'
import HeroInside from '../components/HeroInside'
import PaintPoints from '../components/PaintPoints'
import SolutionSection from '../components/SolutionSection'
import ImplementationCard from '../components/ImplementationCard'
import ImplementationTeam from '../components/ImplementationTeam';

const InsideSales = () => {
  return (
    <div>
        <Helmet>
        <title>InsideSales | Teamup</title>
        <meta
          name="description"
          content="Teamup helps you collaborate easily with your team."
        />
                 <link rel="canonical" href="https://teamupconsultants.com/insidesales" />
      </Helmet>
      <HeroInside/>
      <PaintPoints/>
      <SolutionSection/>
      <InsideComponent/>
        <ImplementationCard/>
        <ImplementationTeam/>
    </div>
  )
}

export default InsideSales
