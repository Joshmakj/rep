import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/Componetcss/AICard.css";

import FinanceImg from "../assets/AIAssests/finance.png";
import SupplyChainImg from "../assets/AIAssests/supplychain.png";
import HRImg from "../assets/AIAssests/hr.png";
import ITImg from "../assets/AIAssests/it.png";
import SalesImg from "../assets/AIAssests/sales.png";
import OpsImg from "../assets/AIAssests/operations.png";

const AICard = () => {
  const [activeTab, setActiveTab] = useState("finance");

  const sections = {
    finance: {
      title: "Finance",
      image: FinanceImg,
      categories: [
        {
          heading: "Fraud Detection & Risk Management",
          points: [
            "Real-time anomaly detection in transactions",
            "ML-based fraud detection models",
            "Automated credit scoring & loan risk analysis",
            "Portfolio optimization & investment risk assessment",
          ],
        },
        {
          heading: "Forecasting & Budgeting",
          points: [
            "AI-driven financial forecasting for revenue & cash flow",
            "Market trend & expense prediction",
            "Predictive cash flow planning",
            "Expense categorization & budget optimization",
          ],
        },
        {
          heading: "Audit & Compliance",
          points: [
            "AI-powered audit support for discrepancy checks",
            "Automated financial record reviews",
            "Risk-based audit prioritization",
            "Compliance monitoring with anomaly alerts",
          ],
        },
        {
          heading: "Process Automation",
          points: [
            "Automated invoice processing using OCR & NLP",
            "Expense & revenue anomaly detection",
            "Accounts payable automation",
            "Streamlined reconciliation workflows",
          ],
        },
      ],
    },

    supplychain: {
      title: "Supply Chain",
      image: SupplyChainImg,
      categories: [
        {
          heading: "Demand Forecasting & Inventory",
          points: [
            "Predict future product demand with higher accuracy",
            "Automated reordering based on ML models",
            "Inventory optimization to avoid stockouts/overstock",
            "Warehouse automation with AI-driven insights",
          ],
        },
        {
          heading: "Logistics & Route Optimization",
          points: [
            "Smart route planning for delivery efficiency",
            "Real-time logistics optimization",
            "Fuel & cost reduction through ML models",
            "Delivery scheduling automation",
          ],
        },
        {
          heading: "Supplier & Risk Management",
          points: [
            "Automated supplier discovery & qualification",
            "Supplier risk analysis & reliability scoring",
            "Predict supplier performance with AI",
            "Compliance & performance monitoring",
          ],
        },
        {
          heading: "Predictive Maintenance & Operations",
          points: [
            "Monitor equipment health to prevent failures",
            "Forecast machinery downtime before it occurs",
            "Optimize maintenance schedules with ML",
            "Reduce operational disruptions proactively",
          ],
        },
      ],
    },

   
    hr: {
      title: "Human Resources",
      image: HRImg,
      categories: [
        {
          heading: "Talent Acquisition & Recruitment",
          points: [
            "Resume parsing & candidate screening",
            "Skill & role-based matching with ML",
            "Automated candidate scoring & assessments",
            "Interview scheduling with AI assistants",
          ],
        },
         {
          heading: "Employee Retention & Engagement",
          points: [
            "Attrition/churn prediction models",
            "Sentiment analysis on surveys & feedback",
            "Early detection of disengaged employees",
            "Proactive retention campaignss",
          ],
        },  {
          heading: " Workforce & Performance Management",
          points: [
            "Smart workforce scheduling",
            "Capability mapping to align skills with projects",
            "AI-driven performance analytics",
            "Career path & promotion recommendations",
          ],
        }, {
          heading: "  Learning & HR Automation",
          points: [
            "Personalized learning & development programs",
            "HR chatbots for employee queries",
            "Automated onboarding assistants",
            "Intelligent recruitment chatbots",
          ],
        },
      ],
    },
    it: {
      title: "IT & Infrastructure",
      image: ITImg,
      categories: [
        {
          heading: "Predictive Monitoring & Maintenance",
          points: [
            "System performance monitoring with ML",
            "Predictive maintenance to prevent downtime",
            "Anomaly detection in logs & infrastructure",
            "Bottleneck forecasting & optimization",
          ],
        },{
          heading: " Cybersecurity & Threat Detection",
          points: [
            "AI-driven intrusion detection",
            "Real-time cybersecurity threat response",
            "Proactive risk monitoring with ML models",
            "Automated compliance alerts",
          ],
        },{
          heading: " Helpdesk & IT Automation",
          points: [
            "AI-powered IT support chatbots",
            "Automated resolution of common IT tickets",
            "Predictive maintenance for IT infrastructure",
            "Streamlined ticket management workflows",
          ],
        },{
          heading: "DevOps & Cloud Optimization",
          points: [
            "AIOps for root cause analysis of outages",
            "Automated code reviews & deployment",
            "Cloud resource optimization for cost & efficiency",
            "Efficiency analytics on IT usage",
          ],
        },
      ],
    },
    sales: {
      title: "Sales & Marketing",
      image: SalesImg,
      categories: [
        {
          heading: " Lead Management & Sales Forecasting",
          points: [
            "Predictive lead scoring & prioritization",
            "Customer segmentation with AI clustering",
            "Sales forecasting models for accurate predictions",
            "Opportunity ranking for sales focus",
          ],
        },        {
          heading: "Customer Engagement & Retention",
          points: [
            "Hyper-personalized recommendations & campaigns",
            "Churn prediction & retention strategies",
            "Customer loyalty prediction models",
            "Conversational AI for support & engagement",
          ],
        },   {
          heading: " Marketing Performance Optimization",
          points: [
            "Real-time campaign optimization & A/B testing",
            "ROI analytics for ad spend",
            "AI-powered email campaigns",
            "Automated channel performance tracking",
          ],
        },{
          heading: " Customer Insights & Sentiment Analysis",
          points: [
            "Sentiment analysis on multi-channel feedback",
            "Brand perception & customer behavior analysis",
            "Voice of customer analytics",
            "Insights for product & service improvements",
          ],
        },
      ],
    },
    operations: {
      title: "Operations",
      image: OpsImg,
      categories: [
        {
          heading: "Process Optimization & Efficiency",
          points: [
            "Automate repetitive workflows using AI-driven process mining",
            "Identify & eliminate bottlenecks in business operations",
            "Predictive workload balancing across teams and systems",
            "Optimize utilization of resources, tools, and assets",
          ],
        }, {
          heading: "Quality Control & Compliance",
          points: [
            "AI-powered defect detection in manufacturing and service workflows",
            "Automated compliance monitoring and reporting",
            "Root-cause analysis for recurring quality issues",
            "Real-time anomaly detection in operational data",
          ],
        },{
          heading: "Workforce & Productivity Management",
          points: [
            "AI-based workforce scheduling for shifts and projects",
            "Productivity analytics to track team efficiency",
            "Intelligent task allocation based on skills and availability",
            "Predictive modeling of workforce capacity needs",
          ],
        },{
          heading: "Customer Service & Experience",
          points: [
            "Conversational AI for faster query resolution",
            "Predictive analytics for demand spikes in support centers",
            "Sentiment and feedback analysis for service quality improvement",
            "Automated case classification and routing for faster resolutions",
          ],
        },
      ],
    },
  };

  return (
    <div className="container my-5 ai-section">
      {/* Tab Titles */}
      <div className="d-flex gap-4 mb-5 ai-tab-titles justify-content-center flex-wrap">
        {Object.keys(sections).map((key) => (
          <h5
            key={key}
            className={`ai-tab-title ${activeTab === key ? "active" : ""}`}
            onClick={() => setActiveTab(key)}
          >
            {sections[key].title}
          </h5>
        ))}
      </div>

      {/* Tab Content */}
      <div className="row align-items-center mx-5">
        <div className="col-md-6">
          <h3 className="mb-4">{sections[activeTab].title}</h3>
          <div className="row g-3">
            {sections[activeTab].categories.map((category, idx) => (
              <div className="col-md-6" key={idx}>
                <div className="ai-card shadow-sm">
                  <h6 className="ai-card-title">{category.heading}</h6>
                  <ul className="ai-card-text">
                    {category.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={sections[activeTab].image}
            alt={sections[activeTab].title}
            className="ai-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AICard;
