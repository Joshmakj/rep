import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { resourceCards } from '../blogContent';
import '../components/Componetcss/RemoteFrontDeskSections.css';
import testimonialPortrait from '../assets/JobseekerAssets/Jobpro.png';

const Blog = () => {
  const { blogKind } = useParams();
  const card = resourceCards.find((item) => item.kind === blogKind);
  const [activeSection, setActiveSection] = React.useState(card?.content?.[0]?.id || '');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [blogKind]);

  useEffect(() => {
    if (card?.content?.[0]?.id) {
      setActiveSection(card.content[0].id);
    }
  }, [card]);

  if (!card) {
    return (
      <div className="container py-5">
        <Helmet>
          <title>Blog not found | Teamup</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="text-center py-5">
          <h1 className="mb-4">Blog page not found</h1>
          <p className="mb-4">
            The article you're looking for is not available. Please return to the resources section.
          </p>
          <Link to="/remote-front-desk" className="btn btn-main">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const isGuide = card.kind === 'guide';

  return (
    <div className="blog-page">
      <Helmet>
        <title>{card.title} | Teamup</title>
        <meta name="description" content={card.desc} />
        <link rel="canonical" href={`https://teamupconsultants.com/blog/${card.kind}`} />
      </Helmet>

      <section className="rfd-blog-detail-container" style={{ margin: '2rem auto' }}>
        <div className={`rfd-blog-detail-header ${isGuide ? 'rfd-blog-detail-header--guide' : ''}`}>
          <div className="rfd-blog-detail-header__content">
            <span className="rfd-blog-detail-tag">{card.tag}</span>
            <h1>{card.title}</h1>
            <p>{card.desc}</p>
            <div className="rfd-blog-detail-meta">
              <div className="rfd-blog-detail-author">
                <img src={testimonialPortrait} alt={card.author} />
                <div>
                  <strong>{card.author}</strong>
                  <span>{card.role}</span>
                </div>
              </div>
              <div className="rfd-blog-detail-info">
                <span>
                  <i className="bi bi-clock" /> {card.readTime}
                </span>
                <span>
                  <i className="bi bi-calendar" /> {card.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {card.kind === 'checklist' ? (
          <div className="rfd-blog-detail-wrapper">
            <aside className="rfd-blog-sidebar">
              <div className="rfd-blog-sidebar__header">Checklist Sections</div>
              <nav className="rfd-blog-sidebar__nav">
                {card.content.map((section) => (
                  <button
                    key={section.id}
                    className={`rfd-blog-sidebar__link ${activeSection === section.id ? 'is-active' : ''}`}
                    onClick={() => {
                      setActiveSection(section.id);
                      document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </aside>

            <div className="rfd-blog-detail-body">
              <div className="rfd-blog-detail-content">
                {card.content.map((section) => (
                  <section key={section.id} id={section.id} className="rfd-blog-section">
                    <div className="rfd-blog-section__number">{section.number}</div>
                    <div className="rfd-blog-section__content">
                      <h2>{section.title}</h2>
                      <p className="rfd-blog-section__desc">{section.desc}</p>
                      {section.paragraphs?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      {section.checklist && (
                        <div className="rfd-blog-checklist">
                          {section.checklist.map((item, i) => (
                            <div key={i} className="rfd-blog-checklist__item">
                              <input type="checkbox" id={`check-${section.id}-${i}`} />
                              <label htmlFor={`check-${section.id}-${i}`}>{item}</label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </section>
                ))}

                <div className="rfd-blog-quote">
                  <i className="bi bi-lightbulb" />
                  <p>Preparation is the key to a successful launch. Take time to plan and communicate clearly with your team.</p>
                  <span>— Remote Front Desk Success Guide</span>
                </div>

                <div className="rfd-blog-stats">
                  <div className="rfd-blog-stat">
                    <div className="rfd-blog-stat__icon">
                      <i className="bi bi-lightning" />
                    </div>
                    <strong>48 hrs</strong>
                    <span>Average time to<br />go live</span>
                  </div>
                  <div className="rfd-blog-stat">
                    <div className="rfd-blog-stat__icon">
                      <i className="bi bi-shield-check" />
                    </div>
                    <strong>100%</strong>
                    <span>Compliance with<br />security standards</span>
                  </div>
                  <div className="rfd-blog-stat">
                    <div className="rfd-blog-stat__icon">
                      <i className="bi bi-people" />
                    </div>
                    <strong>3-5</strong>
                    <span>Team members<br />to train</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rfd-blog-detail-body">
            <div className="rfd-blog-detail-content">
              {card.content.map((section) => {
                const isNumericSection = /^\d+$/.test(section.number);
                return (
                  <section key={section.id} id={section.id} className="rfd-blog-section">
                    <div className={`rfd-blog-section__number ${isNumericSection ? '' : 'rfd-blog-section__number--label'}`}>
                      {section.number}
                    </div>
                    <div className="rfd-blog-section__content">
                      <h2>{section.title}</h2>
                      <p className="rfd-blog-section__desc">{section.desc}</p>
                      {section.paragraphs?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      {section.details && (
                        <ul className="rfd-blog-section__details">
                          {section.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      )}
                      {section.benefits && <p className="rfd-blog-section__benefits">{section.benefits}</p>}
                    </div>
                  </section>
                );
              })}

              <div className="rfd-blog-quote">
                <i className="bi bi-quote" />
                <p>Technology should improve hospitality, not replace it.</p>
                <span>— TeamUp Reception Team</span>
              </div>

              <div className="rfd-blog-stats">
                <div className="rfd-blog-stat">
                  <div className="rfd-blog-stat__icon">
                    <i className="bi bi-clock" />
                  </div>
                  <strong>24/7</strong>
                  <span>Always-on reception<br />for your business</span>
                </div>
                <div className="rfd-blog-stat">
                  <div className="rfd-blog-stat__icon">
                    <i className="bi bi-building" />
                  </div>
                  <strong>60%</strong>
                  <span>Reduce operational costs<br />without compromising service</span>
                </div>
                <div className="rfd-blog-stat">
                  <div className="rfd-blog-stat__icon">
                    <i className="bi bi-lightning-charge" />
                  </div>
                  <strong>&lt; 30s</strong>
                  <span>Response time<br />for visitor connected in</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="rfd-blog-detail-footer">
          <div>
            <h3>Ready to transform your reception?</h3>
            <p>Let's work together to create a modern, efficient visitor experience that reflects your brand values.</p>
          </div>
          <div className="rfd-blog-detail-actions">
            <Link to="/remote-front-desk" className="rfd-blog-detail-btn rfd-blog-detail-btn--primary">
              <i className="bi bi-calendar" />
              Schedule Demo
            </Link>
            <a href="mailto:info@teamupconsultants.com" className="rfd-blog-detail-btn rfd-blog-detail-btn--secondary">
              <i className="bi bi-download" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
