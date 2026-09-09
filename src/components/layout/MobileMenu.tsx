import React, { useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';

export const MobileMenu: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    const wrapper = document.querySelector('.th-menu-wrapper');
    if (wrapper) {
      wrapper.classList.remove('th-body-visible');
    }
    document.body.classList.remove('th-body-visible');
  }, [location.pathname]);

  useEffect(() => {
    const handleToggle = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.th-menu-toggle')) {
        e.preventDefault();
        const wrapper = document.querySelector('.th-menu-wrapper');
        if (wrapper) {
          wrapper.classList.toggle('th-body-visible');
        }
        document.body.classList.toggle('th-body-visible');
      }
    };

    document.addEventListener('click', handleToggle);
    return () => document.removeEventListener('click', handleToggle);
  }, []);

  const closeMenu = () => {
    const wrapper = document.querySelector('.th-menu-wrapper');
    if (wrapper) {
      wrapper.classList.remove('th-body-visible');
    }
    document.body.classList.remove('th-body-visible');
  };

  return (
    <div className="th-menu-wrapper" onClick={(e) => {
      if ((e.target as HTMLElement).classList.contains('th-menu-wrapper')) {
        closeMenu();
      }
    }}>
      <div className="th-menu-area text-center">
        <button className="th-menu-toggle" onClick={closeMenu}>
          <i className="fal fa-times"></i>
        </button>
        <div className="mobile-logo">
          <Link to="/" onClick={closeMenu}>
            <img src="/assets/images/logo/logo.jpg" alt="Narmada" />
          </Link>
        </div>
        <div className="th-mobile-menu">
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>About us</Link>
            </li>
            <li className="menu-item-has-children">
              <Link to="/products" onClick={closeMenu}>Our Products</Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/products/$slug" params={{ slug: 'michael-angelo' }} onClick={closeMenu}>
                    Michael Angelo
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'pearl-white' }} onClick={closeMenu}>
                    Pearl White
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'lilac-white' }} onClick={closeMenu}>
                    Lilac White
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'bynkoy-white' }} onClick={closeMenu}>
                    Bynkoy White
                  </Link>
                </li>
                <li>
                  <Link to="/exotic-marble" onClick={closeMenu}>Exotic Marble</Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'pentagoria' }} onClick={closeMenu}>
                    Pentagoria Marble
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'bluecutmarble' }} onClick={closeMenu}>
                    Blue Cut Side Marble
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'panna-white' }} onClick={closeMenu}>
                    Panna White
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'pink-pentagon' }} onClick={closeMenu}>
                    Pink Pentagon
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'blue-pentagon' }} onClick={closeMenu}>
                    Blue Pentagon
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'pink-alaska' }} onClick={closeMenu}>
                    Pink Alaska Marble
                  </Link>
                </li>
                <li>
                  <Link to="/products/$slug" params={{ slug: 'saturnova' }} onClick={closeMenu}>
                    Saturnova Marble
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#!">Our Services</a>
              <ul className="sub-menu">
                <li>
                  <a href="#!" onClick={closeMenu}>Cutting & Polishing</a>
                </li>
                <li>
                  <a href="#!" onClick={closeMenu}>Installation Services</a>
                </li>
                <li>
                  <a href="#!" onClick={closeMenu}>Maintenance Guidance</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#testi-sec" onClick={closeMenu}>Testimonial</a>
            </li>
            <li>
              <Link to="/blog" onClick={closeMenu}>Blogs</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
