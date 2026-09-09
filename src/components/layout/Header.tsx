import React from 'react';
import { Link } from '@tanstack/react-router';

export const Header: React.FC = () => {
  return (
    <header className="th-header header-layout3 light onepage-nav">
      <div className="sticky-wrapper">
        <div className="container th-container4">
          <div className="menu-area">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img src="/assets/images/logo/logo.jpg" alt="Narmada" />
                  </Link>
                </div>
              </div>
              <div className="col-auto">
                <nav className="main-menu d-none d-lg-inline-block">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li className="menu-item-has-children">
                      <Link to="/products">Our Products</Link>
                      <ul className="sub-menu">
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
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#!">Our Services</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#!">Cutting & Polishing</a>
                        </li>
                        <li>
                          <a href="#!">Installation Services</a>
                        </li>
                        <li>
                          <a href="#!">Maintenance Guidance</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#testi-sec">Testimonial</a>
                    </li>
                    <li>
                      <Link to="/blog">Blogs</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-auto">
                <div className="header-button d-none d-lg-flex">
                  <Link to="/contact" className="th-btn black-border">
                    Get a quote
                  </Link>
                  <a href="#!" className="icon-btn sideMenuToggler d-none d-lg-block">
                    <i className="fa-regular fa-bars"></i>
                  </a>
                </div>
                <div className="header-button">
                  <button type="button" className="th-menu-toggle d-inline-block d-lg-none">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
