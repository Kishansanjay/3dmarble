import React from 'react';
import { Link } from '@tanstack/react-router';

export const ContactPage: React.FC = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcumb-area">
        <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(/assets/images/gallery/Banner.jpg)' }}>
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title text-anime">Contact Us</h1>
              <ul className="breadcumb-menu">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <Link to="/">Home</Link>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".3s">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Media Cards */}
      <div className="space">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-4 col-md-5">
              <div className="contact-media">
                <div className="icon-btn">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="media-body">
                  <h5 className="box-title">Our Quarry Location</h5>
                  <p className="box-text">Survey No. 695/1, Naroli-Bhilad Main Road, Naroli Rd, near Naroli Check Post, Silvassa, Dadra and Nagar Haveli and Daman and Diu 396230</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-5">
              <div className="contact-media">
                <div className="icon-btn">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="media-body">
                  <h5 className="box-title">Phone Number</h5>
                  <p className="box-text">
                    <a href="tel:+917874036028">+91 7874 036028</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-5">
              <div className="contact-media">
                <div className="icon-btn">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="media-body">
                  <h5 className="box-title">Email Address</h5>
                  <p className="box-text">
                    <a href="mailto:enquiry@narmadamarbles.com">enquiry@narmadamarbles.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Area */}
      <div className="contact-area overflow-hidden space" id="contact-sec">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-6">
              <form onSubmit={(e) => e.preventDefault()} className="contact-form ajax-contact">
                <div className="title-area">
                  <span className="sub-title style2 text-anime">get in touch</span>
                  <h2 className="sec-title split-text">
                    Get Your <span className="text-theme">Stone </span>Quote Today
                  </h2>
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Full Name*" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email Address*" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number*" required />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject*" required />
                  </div>
                  <div className="form-group col-12">
                    <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Your Message*" required></textarea>
                  </div>
                  <div className="form-btn mt-20 col-12">
                    <button
                      type="submit"
                      className="th-btn"
                      style={{
                        background: 'black',
                        color: 'white',
                        border: 'none',
                        padding: '12px 30px',
                        fontWeight: 600,
                        borderRadius: '30px',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3"></p>
              </form>
            </div>
            <div className="col-xl-6">
              <div className="contact-image">
                <div className="img1 img-anim-left global-img">
                  <img src="/assets/images/products/pearl-white/01.png" alt="Marble Processing Facility" />
                </div>
                <div className="img2 img-anim-right global-img">
                  <img src="/assets/images/products/lilac-white/01.png" alt="Marble Warehouse" />
                </div>
                <div className="img3 img-anim-left global-img">
                  <img src="/assets/images/products/michael-angelo/01.png" alt="Marble Sample Display" />
                </div>
                <div className="img4 img-anim-right global-img">
                  <img src="/assets/images/products/michael-angelo/02.png" alt="Marble Quarry" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup spin d-none d-xxl-block" style={{ top: '12%', right: '13%' }}>
          <img src="/assets/img/shape/element-6.png" alt="" />
        </div>
      </div>

      {/* Map Area */}
      <div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
          <div className="contact-icon">
            <img src="/assets/img/icon/location-dot.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
