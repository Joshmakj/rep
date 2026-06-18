import React from "react";
import "../components/Componetcss/PlatformDevelopment.css";

const PlatformDevelopment = () => {
  const advantages = [
    {
      title: "Absolute Data Privacy & Security",
      icon: "bi-shield-lock",
      description:
        "Your sensitive data (financial, customer, IP) never leaves your firewall. Perfect for industries with strict compliance requirements (Healthcare, BFSI, Legal). Eliminates the risk of third-party data exposure.",
    },
    {
      title: "Significant Long-Term Cost Reduction",
      icon: "bi-graph-down",
      description:
        "Avoid per-token costs and API rate limits. A one-time investment in GPU infrastructure and our expertise leads to predictable pricing and massive savings for high-volume applications.",
    },
    {
      title: "Total Customization & Fine-Tuning",
      icon: "bi-gear",
      description:
        "Achieve far superior accuracy by fine-tuning powerful models on your specific data, workflows, and industry jargon, not a one-size-fits-all solution.",
    },
    {
      title: "Uninterrupted Availability & Control",
      icon: "bi-server",
      description:
        "Gain full control over versioning, scaling, and performance. Your operations are immune to external API downtime, policy changes, or service degradation.",
    },
    {
      title: "Superior Performance & Low Latency",
      icon: "bi-lightning",
      description:
        "GPU-accelerated inference delivers real-time responses, which is critical for time-sensitive applications like fraud detection, live customer service, and real-time analytics.",
    },
    {
      title: "Offline Capability",
      icon: "bi-cloud-slash",
      description:
        "Run critical AI inference tasks completely offline. Essential for applications in secure environments or with unreliable internet connectivity.",
    },
  ];

  return (
    <section className="platform-development py-5 mb-5">
      <div className="container">
  <h1 className="section-title mb-4">
  Unlock the Full Potential of Private Large Language Models (LLMs)
</h1>

<p className="section-subtitle mb-5">
  Many businesses depend on API-based LLM's bringing risks such as data privacy 
  concerns, recurring costs, and limited flexibility. We help you take control by 
  deploying and fine-tuning powerful open-source models directly on your infrastructure.
</p>
        <h2 className="section-heading text-center mb-4">
          Advantages of Deploying LLMs on GPU Infrastructure
        </h2>

        <div className="row g-4">
          {advantages.map((advantage, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="advantage-card d-flex flex-column align-items-center text-center">
                <i className={`bi ${advantage.icon} advantage-icon`}></i>
                <h3 className="advantage-title">{advantage.title}</h3>
                <p className="advantage-text text-truncate-2">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
  
       
      </div>
    </section>
  );
};

export default PlatformDevelopment;
