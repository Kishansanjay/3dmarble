import React from 'react';
import { Link } from '@tanstack/react-router';

export const SideMenu: React.FC = () => {
  return (
    <div className="sidemenu-wrapper d-none d-lg-block">
      <div className="sidemenu-content">
        <button className="closeButton sideMenuCls">
          <i className="far fa-times"></i>
        </button>
        <div className="widget footer-widget mb-0">
          <div className="th-widget-about">
            <div className="about-logo">
              <Link to="/">
                <img src="/assets/images/logo/logo.jpg" alt="Narmada" />
              </Link>
            </div>
            <p className="about-text">
              Minimal interiors often feel larger than they are. Neutral colors, natural materials, and an uncluttered layout help reflect light and create an airy,
            </p>
          </div>
        </div>
        <div className="widget footer-widget">
          <h3 className="widget_title">Featured Blog</h3>
          <div className="recent-post-wrap">
            <div className="recent-post">
              <div className="media-img">
                <Link to="/blog">
                  <img src="/assets/img/blog/recent-post-1-1.jpg" alt="Blog Image" />
                </Link>
              </div>
              <div className="media-body">
                <div className="recent-post-meta">
                  <a href="#!">June 12, 2025</a> <a href="#!">6 min read</a>
                </div>
                <h4 className="post-title">
                  <Link className="text-inherit" to="/blog">
                    Good choice for premium quality interior design?
                  </Link>
                </h4>
              </div>
            </div>
            <div className="recent-post">
              <div className="media-img">
                <Link to="/blog">
                  <img src="/assets/img/blog/recent-post-1-1.jpg" alt="Blog Image" />
                </Link>
              </div>
              <div className="media-body">
                <div className="recent-post-meta">
                  <a href="#!">June 12, 2025</a> <a href="#!">6 min read</a>
                </div>
                <h4 className="post-title">
                  <Link className="text-inherit" to="/blog">
                    Good choice for premium quality interior design?
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="widget footer-widget">
          <h3 className="widget_title">Social Media:</h3>
          <div className="th-social">
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://pinterest.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
