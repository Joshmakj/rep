import React from 'react'
import "../components/Componetcss/HighPerfomance.css";
const HighPerfomance = () => {
  return (
   <div className="solutions-section container py-5">
  <h1 className="solutions-heading mb-5">High-Performance AI Solutions</h1>
  <div className="row g-4">

    <div className="col-lg-6">
      <div className="solutions-card h-100 shadow-sm">
        <div className="solutions-card-body">
          <h3 className="solutions-title">High-Performance AI at Scale</h3>
          <ul className="solutions-list list-unstyled">
            <li>Massively parallel GPU processing for ultra-fast inference</li>
            <li>Efficient handling of multi-billion-parameter LLMs</li>
            <li>Real-time analytics and chatbot performance at enterprise scale</li>
            <li>Scalable architecture from POC to global rollout</li>
          </ul>
        </div>
      </div>
    </div>

 
    <div className="col-lg-6">
      <div className="solutions-card h-100 shadow-sm">
        <div className="solutions-card-body">
          <h3 className="solutions-title">Advanced Natural Language Capabilities</h3>
          <ul className="solutions-list list-unstyled">
            <li>Contextual understanding across multiple languages and industries</li>
            <li>Sentiment analysis, summarization, Q&A, and content generation</li>
            <li>Domain-specific fine-tuning for Finance, HR, Healthcare, and more</li>
            <li>Unlock multimodal AI (text, speech, image, and code generation)</li>
          </ul>
        </div>
      </div>
    </div>

    
    <div className="col-lg-6">
      <div className="solutions-card h-100 shadow-sm">
        <div className="solutions-card-body">
          <h3 className="solutions-title">Cost-Effectiveness & Resource Optimization</h3>
          <ul className="solutions-list list-unstyled">
            <li>Maximize value from existing GPU infrastructure</li>
            <li>Memory optimization strategies reduce need for costly new hardware</li>
            <li>Fine-tuning and reusable model components accelerate deployment</li>
            <li>Significant long-term cost reduction over API-based models</li>
          </ul>
        </div>
      </div>
    </div>

 
    <div className="col-lg-6">
      <div className="solutions-card h-100 shadow-sm">
        <div className="solutions-card-body">
          <h3 className="solutions-title">Enterprise-Ready AI Integration</h3>
          <ul className="solutions-list list-unstyled">
            <li>Deploy in private cloud, on-premise, or hybrid setups</li>
            <li>Integrate with ERP, CRM, HRMS, supply chain systems</li>
            <li>Built-in monitoring, compliance, and audit trail features</li>
            <li>Future-proof infrastructure ready for continuous AI upgrades</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default HighPerfomance
