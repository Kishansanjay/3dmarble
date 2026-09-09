import React from 'react';
import { Link } from '@tanstack/react-router';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper footer-layout3">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <Link className="icon-masking" to="/">
                      <img src="/assets/images/logo/logo.jpg" alt="Narmada" />
                    </Link>
                  </div>
                  <p className="about-text">
                    Discover the timeless beauty and strength of Narmada marble, crafted for luxury interiors and lasting impressions.
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-line footer-widget">
                <h3 className="widget_title">Quick links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <a href="#!">Gallery</a>
                    </li>
                    <li>
                      <a href="#!">Testimonial</a>
                    </li>
                    <li>
                      <Link to="/blog">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Our Products</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu column-2">
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'michael-angelo' }}>
                        Michael Angelo
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'pearl-white' }}>
                        Pearl White
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'lilac-white' }}>
                        Lilac White
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'bynkoy-white' }}>
                        Bynkoy White
                      </Link>
                    </li>
                    <li>
                      <Link to="/exotic-marble">Exotic Marble</Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'pentagoria' }}>
                        Pentagoria Marble
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'bluecutmarble' }}>
                        Blue Cut Side Marble
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'panna-white' }}>
                        Panna White
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'pink-pentagon' }}>
                        Pink Pentagon
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'blue-pentagon' }}>
                        Blue Pentagon
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'pink-alaska' }}>
                        Pink Alaska Marble
                      </Link>
                    </li>
                    <li>
                      <Link to="/products/$slug" params={{ slug: 'saturnova' }}>
                        Saturnova Marble
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Get In Touch</h3>
                <div className="th-widget-about style2">
                  <p className="footer-info">
                    <i className="fa-regular fa-location-dot"></i>Survey No. 695/1, Naroli-Bhilad Main Road, Naroli Rd, near Naroli Check Post, Silvassa, Dadra and Nagar Haveli and Daman and Diu 396230
                  </p>
                  <p className="footer-info">
                    <i className="fa-sharp fa-solid fa-phone"></i>
                    <span>
                      <a className="text-inherit d-block" href="tel:+917874036028">
                        +91 7874 036028
                      </a>
                    </span>
                  </p>
                  <p className="footer-info">
                    <i className="fa-sharp fa-solid fa-envelope"></i>
                    <span>
                      <a className="text-inherit" href="mailto:enquiry@narmadamarbles.com">
                        enquiry@narmadamarbles.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <div className="copyright-wrap">
                <p className="copyright-text text-center">
                  Copyright &copy; <Link to="/">Narmada Marble</Link> {new Date().getFullYear()}. All Rights Reserved. Designed &amp; Developed by &nbsp;
                  <a href="http://www.xirainfotech.com" target="_blank" rel="noreferrer">
                    <img loading="lazy" width="25" height="auto" src="https://www.xirainfotech.com/XAlogo.svg" alt="xira logo" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
