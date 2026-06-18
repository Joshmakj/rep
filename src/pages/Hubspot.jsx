import React from 'react'
import { Helmet } from "@dr.pogodin/react-helmet";
import ImplementationTeam from '../components/ImplementationTeam'
import ImplementationCard from '../components/ImplementationCard'
import OnBoard from '../components/OnBoard'
const Hubspot = () => {
  return (
    <div>
       <Helmet>
        <title>HubspotImplemenation | Teamup</title>
        <meta
          name="description"
          content="Teamup helps you collaborate easily with your team."
        />
      </Helmet>
    <ImplementationTeam/>
  <ImplementationCard/>
  <OnBoard/>
    </div>
  )
}

export default Hubspot
