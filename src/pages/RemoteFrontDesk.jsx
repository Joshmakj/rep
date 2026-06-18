import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroFrontDesk from '../components/HeroFrontDesk'
import RemoteFrontDeskSections from '../components/RemoteFrontDeskSections'

const RemoteFrontDesk = () => {
  return (
    <div>
      <Helmet>
        <title>Remote Front Desk Assistant | Teamup</title>
        <meta
          name="description"
          content="Teamup's Remote Human Front Desk Assistant connects your visitors to a live professional via video call, 24/7, cost-effective, and fully managed."
        />
        <link rel="canonical" href="https://teamupconsultants.com/remote-front-desk" />
      </Helmet>
      <HeroFrontDesk />
      <RemoteFrontDeskSections />
    </div>
  )
}

export default RemoteFrontDesk
