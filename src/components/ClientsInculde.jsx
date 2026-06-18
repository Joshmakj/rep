import React from "react";
import "../components/Componetcss/Include.css";
import img1 from "../assets/HomeAssets/AXA.png";
import img2 from "../assets/HomeAssets/Arabic.png";
import img3 from "../assets/HomeAssets/MDS.png";
import img4 from "../assets/HomeAssets/Fama.png";
import img5 from "../assets/HomeAssets/Master.png";
import img6 from "../assets/HomeAssets/Dokkan.png";
import img7 from "../assets/HomeAssets/2P-Perfect.png";

const IncludeMarquee = () => {
  const images = [
    { src: img1, alt: "AXA" },
    { src: img2, alt: "Arabic" },
    { src: img3, alt: "MDS" },
    { src: img4, alt: "Fama" },
    { src: img5, alt: "Master" },
    { src: img6, alt: "Dokkan" },
    { src: img7, alt: "2P Perfect" },
  ];

  return (
    <section className="include-marquee py-5 container client-section">
      <h5 className="clients-h5 text-center">Some of our Clients include</h5>
      <div className="marquee">
        <div className="marquee-track">
          {images.concat(images).map((item, index) => (
            <div key={index} className="marquee-item">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludeMarquee;
