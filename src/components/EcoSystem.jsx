import React from 'react';
import "../components/Componetcss/EcoSystem.css";

import Comunitygrop from "../assets/HomeAssets/community-group.png";
import Ppay from "../assets/HomeAssets/protectpay.png";
import Quick from "../assets/HomeAssets/quicktat.png";
import Best from "../assets/HomeAssets/bestever.png";
import End from "../assets/HomeAssets/endtoend.png";

const EcoSystem = () => {
  return (
    <section className="ecosystem-section mb-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          
          <div className="col-lg-6">
            <h2 className="ecosystem-title mb-4">
              Collaborative ecosystem <br /> to work with Remote Teams
            </h2>
            <img
              src={Comunitygrop}
              alt="Community"
              className="grp-img"
            />
          </div>

        <div className="col-lg-6">
  <div className="feature-container">
    <div className="feature-box">
      <img src={Best} alt="Best Budget" className="feature-img" />
      <h5>Best for Every Budget</h5>
      <p>
        Cut down on Recruiting, Office & Admin expenses by engaging 
        a highly flexible team for any duration.
      </p>
    </div>

    <div className="feature-box">
      <img src={Quick} alt="Quick TAT" className="feature-img" />
      <h5>Quick TAT with Quality</h5>
      <p>
        Pre-vetted talents onboarded quickly and supported by success 
        managers to meet deadlines.
      </p>
    </div>

    <div className="feature-box">
      <img src={Ppay} alt="Payments" className="feature-img" />
      <h5>Protected Payments</h5>
      <p>
        Dedicated teams with pay-as-you-go model, no upfront cost, 
        fully approved by line managers.
      </p>
    </div>

    <div className="feature-box">
      <img src={End} alt="Support" className="feature-img" />
      <h5>End to End Support</h5>
      <p>
        Reliable team with end-to-end support via Calls, Emails & Chats 
        on secure VPN.
      </p>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default EcoSystem;
