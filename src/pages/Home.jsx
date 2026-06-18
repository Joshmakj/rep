import React from 'react'
import Banner from '../components/Banner'
import ClientsInculde from '../components/ClientsInculde'
import Expertise from '../components/Expertise'
import Collaborative from '../components/Collaborative'
import { Helmet } from 'react-helmet-async';


import RecruitmentProcess from '../components/RecruitmentProcess'

const Home = () => {
  return (
    <div>
      <Helmet>
          <title>Home | Teamup</title>
        <meta
          name="description"
          content="Teamup helps you collaborate easily with your team."
        />
          <link rel="canonical" href="https://teamupconsultants.com/" />
      </Helmet>
     <Banner/>
      <ClientsInculde/>
      <Expertise/>
      <Collaborative/>
      <RecruitmentProcess/>
    </div>
  )
}

export default Home
