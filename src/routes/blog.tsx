import React from 'react';
import { Link } from '@tanstack/react-router';

export const BlogPage: React.FC = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcumb-area">
        <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(/assets/images/gallery/Banner.jpg)' }}>
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title text-anime">Our Blogs</h1>
              <ul className="breadcumb-menu">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <Link to="/">Home</Link>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".3s">
                  Blogs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space">
        <div className="container">
          <div className="row">
            {/* Main Blog Content Area */}
            <div className="col-xxl-8 col-lg-7">
              <div className="row">
                {/* Blog Card 1 */}
                <div className="col-md-6 mb-4">
                  <div className="th-blog blog-card-style">
                    <div className="blog-img global-img position-relative">
                      <a href="#!">
                        <img src="/assets/img/blog/blog-s-1-1.jpg" alt="Premium White Marble Slab" className="w-100 rounded-3" />
                      </a>
                      <span className="date-badge position-absolute bottom-0 end-0 me-3 mb-3 bg-dark text-white px-3 py-2 rounded-pill">
                        10 October 2025
                      </span>
                    </div>
                    <div className="blog-content p-3">
                      <h3 className="blog-title fs-5 fw-bold mb-3">
                        <a href="#!">Top 5 Interior Trends Transforming Modern Homes</a>
                      </h3>
                      <p className="blog-excerpt text-muted">
                        Discover the latest home interior trends bringing style, comfort, and creativity together this season.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog Card 2 */}
                <div className="col-md-6 mb-4">
                  <div className="th-blog blog-card-style">
                    <div className="blog-img global-img position-relative">
                      <a href="#!">
                        <img src="/assets/img/blog/blog-s-1-2.jpg" alt="Marble Flooring Installation" className="w-100 rounded-3" />
                      </a>
                      <span className="date-badge position-absolute bottom-0 end-0 me-3 mb-3 bg-dark text-white px-3 py-2 rounded-pill">
                        25 September 2025
                      </span>
                    </div>
                    <div className="blog-content p-3">
                      <h3 className="blog-title fs-5 fw-bold mb-3">
                        <a href="#!">Simple Ways to Make Small Spaces Look Bigger</a>
                      </h3>
                      <p className="blog-excerpt text-muted">
                        Smart design tips to maximize small spaces using light, color, and minimal furniture ideas.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Blog Card 3 */}
                <div className="col-md-6 mb-4">
                  <div className="th-blog blog-card-style">
                    <div className="blog-img global-img position-relative">
                      <a href="#!">
                        <img src="/assets/img/blog/blog-s-1-3.jpg" alt="Sustainable Marble Quarry" className="w-100 rounded-3" />
                      </a>
                      <span className="date-badge position-absolute bottom-0 end-0 me-3 mb-3 bg-dark text-white px-3 py-2 rounded-pill">
                        12 August 2025
                      </span>
                    </div>
                    <div className="blog-content p-3">
                      <h3 className="blog-title fs-5 fw-bold mb-3">
                        <a href="#!">Why Custom Furniture Is Worth The Investment</a>
                      </h3>
                      <p className="blog-excerpt text-muted">
                        Learn how tailor-made furniture enhances functionality, aesthetics, and long-term value in your interiors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="th-pagination mt-4">
                <ul className="d-flex justify-content-center align-items-center gap-2 list-unstyled">
                  <li>
                    <a href="#!" className="btn btn-outline-secondary rounded-circle">1</a>
                  </li>
                  <li>
                    <a href="#!" className="btn btn-outline-secondary rounded-circle">2</a>
                  </li>
                  <li>
                    <a href="#!" className="btn btn-outline-secondary rounded-circle">3</a>
                  </li>
                  <li>
                    <a href="#!" className="btn btn-outline-secondary rounded-circle">
                      <i className="fa-regular fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="widget widget_search">
                  <form onSubmit={(e) => e.preventDefault()} className="search-form d-flex align-items-center">
                    <input type="text" placeholder="Enter Keyword" className="form-control flex-grow-1 me-2" />
                    <button type="submit" className="th-btn black-border d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="widget footer-widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <a href="#!">
                          <img src="/assets/img/blog/recent-post-1-1.jpg" alt="Blog Image" />
                        </a>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <a href="#!">June 12, 2025</a> <a href="#!">6 min read</a>
                        </div>
                        <h4 className="post-title">
                          <a className="text-inherit" href="#!">
                            Good choice for premium quality interior design?
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
