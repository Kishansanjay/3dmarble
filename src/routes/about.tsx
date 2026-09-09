import React from 'react';
import { Link } from '@tanstack/react-router';

export const AboutPage: React.FC = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcumb-area">
        <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(/assets/images/gallery/Banner.jpg)' }}>
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title text-anime">About Narmada Marbles</h1>
              <ul className="breadcumb-menu">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <Link to="/">Home</Link>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".3s">
                  About Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="overflow-hidden" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="about-area2">
            <div className="row align-items-center flex-row-reverse">
              <div className="col-xl-7">
                <div className="about-area3">
                  <div className="title-area mb-40 text-center text-sm-start">
                    <span className="sub-title style3 text-anime">Excellence in Natural Stone</span>
                    <h2 className="sec-title style4 split-text">Crafting Timeless Elegance Since Our Inception</h2>
                  </div>
                  <div className="about-box-wrap">
                    <div className="about-box wow fadeInUp" data-wow-delay=".4s">
                      <div className="media-body">
                        <p className="about-desc">
                          At Narmada Marbles, we believe that stone is more than just a building material — it's a legacy. With years of expertise in sourcing, shaping, and polishing natural marble, we transform raw blocks into stunning, timeless pieces that elevate any space.
                        </p>
                        <p className="about-desc">
                          Our marbles are carefully selected for their exceptional beauty and structural integrity, bringing together nature's artistry with precision craftsmanship. Every slab tells a unique story, formed over millions of years and perfected by skilled artisans.
                        </p>
                        <p className="about-desc">
                          We seamlessly blend traditional techniques with modern technology. From cutting and polishing slabs to creating custom designs, every marble product undergoes rigorous quality inspection. We collaborate closely with architects, interior designers, and homeowners to bring their visions to life — whether for luxury residences, commercial spaces, or bespoke installations.
                        </p>
                        <p className="about-desc">
                          Sustainability drives our operations. We implement responsible quarrying practices, minimize waste through innovative processing, and ensure ethical sourcing at every stage. Our commitment is to deliver marble that not only enhances aesthetic appeal but also stands the test of time, offering elegance, durability, and lasting value.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5">
                <div className="img-box5">
                  <div className="img1 global-img img-anim-left">
                    <img className="w-100" src="/assets/images/gallery/Narmada Logo.png" alt="Narmada Marbles - Premium Natural Stone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="overflow-hidden" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="title-area text-center text-md-start mb-5 mb-lg-0">
                <span className="sub-title style3 text-anime">Our Vision</span>
                <h2 className="sec-title style4 split-text">Shaping the Future of Natural Stone</h2>
                <p className="wow fadeInUp mt-4" data-wow-delay=".3s">
                  To become the globally recognized leader in premium natural stone, setting industry benchmarks through innovation, sustainability, and exceptional craftsmanship. We envision a future where every Narmada Marbles project exemplifies timeless elegance and uncompromising quality.
                </p>
                <p className="wow fadeInUp mt-3" data-wow-delay=".4s">
                  By continuously advancing our practices, fostering lasting partnerships built on trust and transparency, and maintaining unwavering commitment to excellence, we aim to redefine possibilities in natural stone applications. Our vision extends beyond business success — we're dedicated to preserving earth's precious resources while creating architectural masterpieces that inspire generations.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-box5">
                <div className="img1 global-img img-anim-right">
                  <img className="w-100" src="/assets/images/gallery/Vision.png" alt="Our Vision - Leading Natural Stone Innovation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="overflow-hidden" style={{ padding: '100px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="img-box5">
                <div className="img1 global-img img-anim-left">
                  <img className="w-100" src="/assets/images/gallery/Mission.png" alt="Our Mission - Delivering Excellence" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="title-area text-center text-md-start mb-5 mb-lg-0">
                <span className="sub-title style3 text-anime">Our Mission</span>
                <h2 className="sec-title style4 split-text">Delivering Excellence in Every Stone</h2>
                <p className="wow fadeInUp mt-4" data-wow-delay=".3s">
                  To be the premier global source for premium natural stone, combining ethical sourcing with expert craftsmanship to deliver unparalleled value. We're committed to fostering innovation through sustainable practices while building long-term partnerships founded on trust, reliability, and mutual growth.
                </p>
                <p className="wow fadeInUp mt-3" data-wow-delay=".4s">
                  Every piece of marble we provide meets the highest standards of quality and beauty. Our dedication encompasses the entire journey — from responsible quarrying and precision processing to meticulous finishing and expert installation support. We ensure that each project reflects our unwavering commitment to excellence and environmental stewardship, creating spaces that inspire and endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="overflow-hidden" style={{ padding: '100px 0', backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center mb-5 pb-3">
                <span
                  className="sub-title style4 text-dark"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '2px',
                    display: 'inline-block',
                    padding: '8px 20px',
                    borderBottom: '3px solid #d19a66',
                    marginBottom: '20px',
                  }}
                >
                  WHY CHOOSE US
                </span>
                <h2 className="sec-title" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#333', marginBottom: '20px' }}>
                  What Sets Narmada Marbles Apart
                </h2>
                <p style={{ color: '#666', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  Partner with us for unmatched quality, reliability, and expertise in natural stone
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-3">
              <div
                className="choose-box text-center p-4 h-100"
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(209, 154, 102, 0.1)',
                }}
              >
                <div
                  className="box-icon mb-4"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90px',
                    height: '90px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#d19a66" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h3 className="box-title fs-5 fw-bold mb-3" style={{ color: '#333' }}>
                  Premium Quality Assurance
                </h3>
                <p className="box-text text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  We source only the highest grade natural stones from trusted quarries, ensuring exceptional durability, beauty, and long-lasting appeal for every project.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-3">
              <div
                className="choose-box text-center p-4 h-100"
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(209, 154, 102, 0.1)',
                }}
              >
                <div
                  className="box-icon mb-4"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90px',
                    height: '90px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#d19a66" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                  </svg>
                </div>
                <h3 className="box-title fs-5 fw-bold mb-3" style={{ color: '#333' }}>
                  Expert Craftsmanship
                </h3>
                <p className="box-text text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Our skilled artisans combine traditional techniques with modern precision, delivering flawlessly cut, polished, and finished marble that exceeds expectations.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-3">
              <div
                className="choose-box text-center p-4 h-100"
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(209, 154, 102, 0.1)',
                }}
              >
                <div
                  className="box-icon mb-4"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90px',
                    height: '90px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#d19a66" strokeWidth="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
                <h3 className="box-title fs-5 fw-bold mb-3" style={{ color: '#333' }}>
                  Extensive Selection
                </h3>
                <p className="box-text text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  Our vast inventory features diverse colors, patterns, textures, and finishes to perfectly match any design vision and project requirement.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-6 col-lg-3">
              <div
                className="choose-box text-center p-4 h-100"
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(209, 154, 102, 0.1)',
                }}
              >
                <div
                  className="box-icon mb-4"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '90px',
                    height: '90px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  }}
                >
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#d19a66" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="box-title fs-5 fw-bold mb-3" style={{ color: '#333' }}>
                  Reliable Service
                </h3>
                <p className="box-text text-muted" style={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
                  We prioritize timely delivery, transparent communication, and dedicated customer support throughout your entire procurement and installation journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
