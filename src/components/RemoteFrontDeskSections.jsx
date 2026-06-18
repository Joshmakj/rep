import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/Componetcss/RemoteFrontDeskSections.css";
import { resourceCards } from "../blogContent";
import heroImage from "../assets/HomeAssets/hero.png";
import demoImage from "../assets/HomeAssets/demo.png";
import demoVideo from "../assets/HomeAssets/demovideo.mp4";
import frontDeskVisual from "../assets/RemoteAssets/FrontDesk.png";
import testimonialPortrait from "../assets/JobseekerAssets/Jobpro.png";
import whatweofferImage from "../assets/HomeAssets/whatweoffer.png";

const features = [
  {
    icon: "bi-camera-video",
    title: "Live Call Answering",
    desc: "Never miss a visitor or opportunity.",
  },
  {
    icon: "bi-chat-left-text",
    title: "Visitor Engagement",
    desc: "Warm, helpful, and on-brand conversations.",
  },
  {
    icon: "bi-bell",
    title: "Real-time Updates",
    desc: "Instant notifications to your team.",
  },
  {
    icon: "bi-shield-check",
    title: "Secure & Reliable",
    desc: "Your visitors data is always protected.",
  },
];
const steps = [
  {
    number: "01",
    icon: "bi-clipboard2",
    title: "Visitor Arrives",
    desc: "Guest approaches the front desk screen or kiosk at your location.",
  },
  {
    number: "02",
    icon: "bi-clock",
    title: "One-Tap Connect",
    desc: "They tap to connect - a live HD video call starts within seconds.",
  },
  {
    number: "03",
    icon: "bi-people",
    title: "Professional Welcome",
    desc: "A trained remote assistant greets them, verifies identity, and notifies the host.",
  },
  {
    number: "04",
    icon: "bi-geo-alt",
    title: "Seamlessly Directed",
    desc: "Visitor is guided to their destination or waiting area with zero friction.",
  },
];

const compareRows = [
  ["Available 24/7", "check", "x", "check"],
  ["Human interaction", "check", "check", "x"],
  ["Fixed monthly cost", "check", "x", "check"],
  ["Multi-language support", "check", "warn", "warn"],
  ["No hardware/setup cost", "check", "check", "x"],
  ["Scalable to multi-site", "check", "x", "warn"],
  ["Visitor logging & reports", "check", "warn", "check"],
];

const demoSteps = [
  "Visitor arrives at kiosk",
  "Live video connection",
  "Visitor identity confirmed",
  "Host notified instantly",
  "Visitor escorted to destination",
];

const whyChooseCards = [
  {
    number: "01",
    icon: "bi-speedometer2",
    title: "Professional Image",
    desc: "Impress every visitor with a polished, consistent reception experience.",
    accent: "orange",
  },
  {
    number: "02",
    icon: "bi-graph-up",
    title: "Reduce Costs by 60%",
    desc: "Eliminate salary, benefits, and office space costs of an on-site receptionist.",
    accent: "violet",
  },
  {
    number: "03",
    icon: "bi-shield-check",
    title: "Secure & Compliant",
    desc: "Enterprise-grade encrypted video calls with visitor logging.",
    accent: "orange",
  },
  {
    number: "04",
    icon: "bi-globe2",
    title: "Infinitely Scalable",
    desc: "Add locations or shift hours instantly - no new hires needed.",
    accent: "violet",
  },
  {
    number: "05",
    icon: "bi-translate",
    title: "Multi-language Support",
    desc: "Assistants available in multiple languages to serve diverse visitors.",
    accent: "orange",
  },
  {
    number: "06",
    icon: "bi-lightning-charge",
    title: "Quick Setup",
    desc: "Go live in under 48 hours with training and onboarding handled for you.",
    accent: "violet",
  },
];

const testimonials = [
  {
    quote:
      "Installation was seamless and the support team is always responsive. We saw improvements in visitor satisfaction scores within the first week. Every visitor felt warmly welcomed, and our reception flow became much smoother. The experience made a noticeable difference in how our team operates.",
    name: "David Rodriguez",
    title: "Facilities Director",
    company: "Healthcare clinic",
    image: testimonialPortrait,
  },
  {
    quote:
      "Teamup Remote made our reception smarter and far more efficient. Visitors love the warm greeting and our staff can focus on higher-value work. The onboarding was quick and the service is consistently reliable. It feels like a natural extension of our own team.",
    name: "Maya Kumar",
    title: "Operations Lead",
    company: "Co-working space",
    image: testimonialPortrait,
  },
  {
    quote:
      "The service is reliable and the setup was faster than expected. It feels like we have an extension of our team taking care of every visitor. The communication is clear and professional every time. Our office flow has never been better.",
    name: "Ethan Park",
    title: "Office Manager",
    company: "Technology firm",
    image: testimonialPortrait,
  },
];

const faqItems = [
  {
    question: "How quickly can we go live?",
    answer: "We can launch remote front desk support in under 48 hours once your locations and workflows are confirmed.",
  },
  {
    question: "Can the service handle different visitor types?",
    answer: "Yes. Our team can manage guests, vendors, contractors, and deliveries with tailored check-in experiences.",
  },
  {
    question: "Is the service secure and compliant?",
    answer: "Security is built in with encrypted communication, visitor logging, and privacy controls for every interaction.",
  },
  {
    question: "Can we support multiple languages?",
    answer: "Absolutely. We offer multilingual reception support so visitors feel welcome in the language they prefer.",
  },
];



const RemoteFrontDeskSections = () => {
  const [activeFaqIndex, setActiveFaqIndex] = React.useState(null);
  const [hoverColumn, setHoverColumn] = React.useState(null);
  const [selectedColumn, setSelectedColumn] = React.useState(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = React.useState(0);
  const [showDemoVideo, setShowDemoVideo] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(null);
  const [activeBlogSection, setActiveBlogSection] = React.useState("overview");

  const toggleFaq = (index) => {
    setActiveFaqIndex((current) => (current === index ? null : index));
  };

  const isColumnActive = (index) => hoverColumn === index || selectedColumn === index;

  const clearHoverColumn = () => {
    setHoverColumn(null);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeTestimonialIndex];

  return (
    <>
      <section className="rfd-next rfd-next--split">
        <div className="container rfd-next__container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="rfd-eyebrow">
                <i className="bi bi-people" aria-hidden="true" />
                <span>REMOTE. RELIABLE. REMARKABLE.</span>
              </div>
              <h2 className="rfd-next__title">
                <span>Virtual Receptionist,</span>
                <span className="accent">Real Human Impact.</span>
              </h2>
              <p className="rfd-next__lead">
                Professional remote receptionists who greet, assist, and represent
                your business - seamlessly.
              </p>

              <div className="rfd-feature-grid">
                {features.map((item) => (
                  <article className="rfd-feature-card" key={item.title}>
                    <div className="rfd-feature-card__icon">
                      <i className={`bi ${item.icon}`} aria-hidden="true" />
                    </div>
                    <div className="rfd-feature-card__copy">
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </article>
                ))}
              </div>

              <button
                type="button"
                className="rfd-cta"
                onClick={() => window.dispatchEvent(new CustomEvent('open-contact-form'))}
              >
                Book a Demo
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>
            </div>

            <div className="col-lg-6">
              <div className="rfd-next__visual rfd-next__visual--reception">
                <img
                  src={whatweofferImage}
                  alt="What we offer"
                  className="rfd-next__image rfd-next__image--portrait"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rfd-process">
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-gear-wide-connected" aria-hidden="true" />
              <span>OUR PROCESS</span>
              <span className="rfd-eyebrow__dot" />
            </div>
            <h2 className="rfd-process__title">How It Works</h2>
          </div>

          <div className="rfd-process-grid">
            {steps.map((step) => (
              <article className="rfd-process-card" key={step.number}>
                <div className="rfd-process-card__corner">
                  <span>{step.number}</span>
                </div>
                <div className="rfd-process-card__icon">
                  <i className={`bi ${step.icon}`} aria-hidden="true" />
                </div>
                <div className="rfd-process-card__rule" />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rfd-demo">
        <div className="container">
          <div className="rfd-demo__card">
            <div className="rfd-demo__panel">
            <div className="row align-items-center g-4 g-xl-5">
              <div className="col-lg-5">
                <div className="rfd-eyebrow">
                  <i className="bi bi-camera-video" aria-hidden="true" />
                  <span>DEMO VIDEO</span>
                </div>
                <h2 className="rfd-demo__title">
                  Watch the visitor
                  <br />
                  journey
                </h2>
                <p className="rfd-demo__lead">
                  See how a visitor is greeted, connected, verified, and guided
                  from the first tap to the final handoff.
                </p>
                <button
                  type="button"
                  className="rfd-cta"
                  onClick={() => setShowDemoVideo(true)}
                >
                  Watch Demo
                  <i className="bi bi-play-circle" aria-hidden="true" />
                </button>
              </div>

              <div className="col-lg-7">
                <div className="rfd-demo__visual">
                  <div className="rfd-demo__list">
                    {demoSteps.map((step, index) => (
                      <div className="rfd-demo__list-item" key={step}>
                        <span className={`rfd-demo__bullet ${index === 0 ? "is-active" : ""}`} />
                        <div>
                          <strong>{step}</strong>
                          <span>
                            {index === 0 && "Front door / kiosk"}
                            {index === 1 && "Live video call"}
                            {index === 2 && "Identity confirmed"}
                            {index === 3 && "Notified host"}
                            {index === 4 && "Visitor guided"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rfd-demo__screen">
                    {showDemoVideo ? (
                      <div className="rfd-demo__video-wrap">
                        <button
                          type="button"
                          className="rfd-demo__video-close"
                          onClick={() => setShowDemoVideo(false)}
                          aria-label="Close demo"
                        >
                          <i className="bi bi-x-lg" />
                        </button>
                        <video
                          controls
                          autoPlay
                          playsInline
                          className="rfd-demo__screen-video"
                        >
                          <source src={demoVideo} type="video/mp4" />
                          Your browser does not support HTML video.
                        </video>
                      </div>
                    ) : (
                      <img
                        src={demoImage}
                        alt="Demo preview"
                        className="rfd-demo__screen-image"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rfd-why">
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <span className="rfd-eyebrow__star">✦</span>
              <span>WHY CHOOSE US</span>
              <span className="rfd-eyebrow__star">✦</span>
            </div>
            <h2 className="rfd-process__title">
              Why Choose Teamup&apos;s
              <span className="accent">Remote Front Desk?</span>
            </h2>
            <p className="rfd-process__subtitle">
              Smart, secure, and seamless front desk solutions built for modern businesses.
            </p>
          </div>

          <div className="rfd-why-grid">
            {whyChooseCards.map((card) => (
              <article className={`rfd-why-card rfd-why-card--${card.accent}`} key={card.number}>
                <div className="rfd-why-card__corner">
                  <span>{card.number}</span>
                </div>
                <div className="rfd-why-card__icon">
                  <i className={`bi ${card.icon}`} aria-hidden="true" />
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rfd-compare">
        <div className="container">
          <div className="rfd-process__header">
            <h2 className="rfd-process__title">How We Compare</h2>
            <p className="rfd-process__subtitle">
              See why businesses choose Teamup Remote for a smarter, more flexible front desk solution.
            </p>
          </div>

            <div className="rfd-compare__table-wrap">
            <table className={`rfd-compare__table ${hoverColumn !== null ? 'has-hover' : ''}`} onMouseLeave={clearHoverColumn}>
              <thead>
                <tr>
                  <th
                    className={`is-feature ${hoverColumn === 0 ? "is-active" : ""}`}
                    onMouseEnter={() => setHoverColumn(0)}
                  >
                    <span className="rfd-compare__head-icon">
                      <i className="bi bi-clipboard2" aria-hidden="true" />
                    </span>
                    Features
                  </th>
                  <th
                    className={isColumnActive(1) ? "is-active" : ""}
                    onMouseEnter={() => setHoverColumn(1)}
                    onClick={() => setSelectedColumn(1)}
                  >
                    <i className="bi bi-people" aria-hidden="true" />
                    Teamup Remote
                  </th>
                  <th
                    className={`is-highlight ${isColumnActive(2) ? "is-active" : ""}`}
                    onMouseEnter={() => setHoverColumn(2)}
                    onClick={() => setSelectedColumn(2)}
                  >
                    <i className="bi bi-person-badge" aria-hidden="true" />
                    In-house Receptionist
                  </th>
                  <th
                    className={isColumnActive(3) ? "is-active" : ""}
                    onMouseEnter={() => setHoverColumn(3)}
                    onClick={() => setSelectedColumn(3)}
                  >
                    <i className="bi bi-display" aria-hidden="true" />
                    Automated Kiosk
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([feature, remote, inhouse, automated]) => (
                  <tr key={feature}>
                    <td
                      className={`is-feature ${hoverColumn === 0 ? "is-active" : ""}`}
                      onMouseEnter={() => setHoverColumn(0)}
                    >
                      {feature}
                    </td>
                    <td
                      className={isColumnActive(1) ? "is-active" : ""}
                      onMouseEnter={() => setHoverColumn(1)}
                      onClick={() => setSelectedColumn(1)}
                    >
                      {renderCompareIcon(remote)}
                    </td>
                    <td
                      className={`is-highlight ${isColumnActive(2) ? "is-active" : ""}`}
                      onMouseEnter={() => setHoverColumn(2)}
                      onClick={() => setSelectedColumn(2)}
                    >
                      {renderCompareIcon(inhouse)}
                    </td>
                    <td
                      className={isColumnActive(3) ? "is-active" : ""}
                      onMouseEnter={() => setHoverColumn(3)}
                      onClick={() => setSelectedColumn(3)}
                    >
                      {renderCompareIcon(automated)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rfd-testimonial">
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-chat-square-heart" aria-hidden="true" />
              <span>CLIENT LOVE</span>
            </div>
            <h2 className="rfd-process__title">Client Testimonials</h2>
            <p className="rfd-process__subtitle">
              A modern, human front desk experience that feels welcoming and reliable.
            </p>
          </div>

          <div className="rfd-testimonial__card">
            <div className="rfd-testimonial__quote-mark">“</div>
            <p className="rfd-testimonial__quote">{currentTestimonial.quote}</p>
            <div className="rfd-testimonial__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`rfd-testimonial__dot ${index === activeTestimonialIndex ? "is-active" : ""}`}
                  onClick={() => setActiveTestimonialIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>
            <div className="rfd-testimonial__author">
              <img src={currentTestimonial.image} alt={currentTestimonial.name} />
              <div>
                <strong>{currentTestimonial.name}</strong>
                <span>{currentTestimonial.title}</span>
                <em>{currentTestimonial.company}</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rfd-faq">
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-question-circle" aria-hidden="true" />
              <span>FAQ</span>
            </div>
            <h2 className="rfd-process__title">Frequently Asked Questions</h2>
            <p className="rfd-process__subtitle">
              Quick answers to common questions about our front desk solutions.
            </p>
          </div>

          <div className="rfd-faq__list">
            {faqItems.map((item, index) => {
              const isOpen = activeFaqIndex === index;

              return (
                <div className="rfd-faq__item" key={item.question}>
                  <button
                    type="button"
                    className={`rfd-faq__question ${isOpen ? "rfd-faq__question--open" : ""}`}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="rfd-faq__icon">
                      <i className="bi bi-question-lg" aria-hidden="true" />
                    </span>
                    <span className="rfd-faq__question-text">{item.question}</span>
                    <span className={`rfd-faq__chev ${isOpen ? "rfd-faq__chev--open" : ""}`}>
                      <i className="bi bi-chevron-down" aria-hidden="true" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="rfd-faq__answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="rfd-resources">
        <div className="container">
          <div className="rfd-process__header">
            <div className="rfd-eyebrow rfd-eyebrow--center">
              <i className="bi bi-book" aria-hidden="true" />
              <span>RESOURCES</span>
            </div>
            <h2 className="rfd-process__title">Blog / Resources</h2>
            <p className="rfd-process__subtitle">
              Practical guides and checklists to help you run a smarter, smoother front desk.
            </p>
          </div>

          <div className="rfd-resources__grid">
            {resourceCards.map((card) => (
              <article className={`rfd-resource-card rfd-resource-card--${card.kind}`} key={card.title}>
                <div className="rfd-resource-card__content">
                  <span className="rfd-resource-card__tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  {card.cta && (
                    <Link to={`/blog/${card.kind}`} className="rfd-resource-card__cta">
                      {card.cta}
                      <i className="bi bi-arrow-right" aria-hidden="true" />
                    </Link>
                  )}
                </div>
                <div className="rfd-resource-card__image-wrap">
                  <img
                    src={card.kind === "guide" ? whatweofferImage : heroImage}
                    alt={card.imageAlt}
                    className={`rfd-resource-card__image rfd-resource-card__image--${card.kind}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

function renderCompareIcon(value) {
  if (value === "check") {
    return <span className="rfd-compare__badge is-check"><i className="bi bi-check-lg" aria-hidden="true" /></span>;
  }

  if (value === "warn") {
    return <span className="rfd-compare__badge is-warn"><i className="bi bi-exclamation-triangle" aria-hidden="true" /></span>;
  }

  return <span className="rfd-compare__badge is-x"><i className="bi bi-x-lg" aria-hidden="true" /></span>;
}

export default RemoteFrontDeskSections;
