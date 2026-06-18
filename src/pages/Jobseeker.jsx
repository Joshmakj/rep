import React from 'react'
import { Helmet} from 'react-helmet-async';
import JobBanner from '../components/JobBanner';
import HowItWorks from '../components/HowItWorks';
import WhyChoTeam from '../components/WhyChoTeam';

// import JobCard from '../components/JobCard';
import CareerGrowth from '../components/CareerGrowth';
const Jobseeker = () => {
  return (
    <div>
        <Helmet>
              <title>JobSeeker | Teamup</title>
              <meta
                name="description"
                content="Teamup helps you collaborate easily with your team."
              />
               <link rel="canonical" href="https://teamupconsultants.com/jobseeker" />
            </Helmet>
     <JobBanner/>
     <HowItWorks/>
     <WhyChoTeam/>
    <CareerGrowth/>
     {/* <JobCard/> */}
    </div>
  )
}

export default Jobseeker
