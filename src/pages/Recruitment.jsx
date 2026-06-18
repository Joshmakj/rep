import React from 'react'
import EcoSystem from '../components/EcoSystem'
import { Helmet } from 'react-helmet-async';
import RecruitCom from '../components/RecruitCom'
const Recruitment = () => {
  return (
    <div>
      <Helmet>
        <title>Recruitment | Teamup</title>
        <meta
          name="description"
          content="Teamup helps you collaborate easily with your team."
        />
         <link rel="canonical" href="https://teamupconsultants.com/recruitment" />
      </Helmet>
  <RecruitCom/>
        <EcoSystem/>
    </div>
  )
}

export default Recruitment
