import React from 'react';
import { Link } from '@tanstack/react-router';

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="th-hero-wrapper hero-3 light" id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="hero-style3">
              <div className="hero-wrap">
                <div className="hero-img1 img-anim-right">
                  <img src="/assets/images/resources/banner-01.png" alt="Hero Image" />
                </div>
                <div className="hero-img2 img-anim-right">
                  <img src="/assets/images/resources/banner-02.png" alt="Hero Image" />
                </div>
                <div className="hero-img3 img-anim-right">
                  <img src="/assets/images/resources/banner-03.png" alt="Hero Image" />
                </div>
              </div>
              <div className="hero-content">
                <div className="thumb-img img-anim-left">
                  <img src="/assets/images/resources/home-01.png" alt="" />
                </div>
                <span className="subtitle img-anim-left">
                  Elevate Your <span className="d-block">Space With</span>
                </span>
                <h1 className="hero-title img-anim-left title-ani">
                  Narmada <br /> <span className="hero-title2">Marble</span>
                </h1>
                <div className="hero-right">
                  <p className="hero-text">
                    Discover the timeless beauty and strength of Narmada marble, crafted for luxury interiors and lasting impressions.
                  </p>
                  <Link to="/exotic-marble" className="th-btn white-border th-icon">
                    Explore marbles
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <a href="#about-sec" className="hero-scroll-wrap">
            Scroll Down
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="about-area overflow-hidden space mb-5" id="about-sec">
        <div className="container">
          <div className="row gy-4">
            <div className="col-xl-5 mb-30 mb-xl-0">
              <div className="img-box3 style2">
                <div className="img-box3_wrapp">
                  <div className="img1 img-anim-top">
                    <img src="/assets/images/resources/about-us01.png" alt="About" />
                  </div>
                  <div className="img2 img-anim-right">
                    <img src="/assets/images/resources/about-us02.png" alt="About" />
                  </div>
                  <div className="about-shape">
                    <img src="/assets/img/normal/about-shape3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="ps-xxl-5">
                <div className="title-area mb-20">
                  <span className="sub-title style2  text-anime">About Narmada Marbles</span>
                  <h2 className="sec-title style2  split-text">Timeless Elegance &amp; Superior Quality</h2>
                </div>
                <p className="about-text  text-anime">
                  At Narmada Marbles, we are passionate about transforming spaces with the finest natural stone. With years of expertise in sourcing, processing, and supplying premium-grade marble and granite, we take pride in delivering products that combine elegance, durability, and timeless style.
                <div className="btn-group mt-30 text-anime">
                  <Link to="/about" className="th-btn white-border th-icon">
                    Know More About Us
                  </Link>
                </div>
                </p>
                {/* <div className="th-experience-wrap light style2">
                  <div className="experience-year">
                    <h3 className="experience-year_title  counter-number">25</h3>
                    <p className="experience-year_text ">Years of Experience</p>
                  </div>
                  <div className="experience-content">
                    <h4 className="box-title ">Shaping Spaces with Elegance &amp; Strength.</h4>
                    <p className="experience-text ">
                      From luxurious residential interiors to grand commercial projects, our marble has been the preferred choice for architects, designers, and homeowners seeking unmatched quality and craftsmanship.
                    </p>
                  </div>
                </div> */}
                <div className="btn-group mt-30 text-anime">
                  <Link to="/about" className="th-btn white-border th-icon">
                    Know More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      {/* <div className="client-area space-bottom">
        <div className="container-fluid p-0">
          <div className="client-wrapper style2 overflow-hidden">
            <div className="marquee-slider d-flex flex-row flex-nowrap overflow-hidden">
              <div className="marquee-slide d-flex flex-row gap-4 align-items-center">
                <div className="item">
                  <img src="/assets/images/shape/shape-img7.png" alt="" />
                  <span>narmadamarbles.com</span>
                </div>
                <div className="item">
                  <img src="/assets/images/shape/shape-img8.png" alt="" />
                  <span>enquiry@narmadamarbles.com</span>
                </div>
                <div className="item">
                  <img src="/assets/images/shape/shape-img9.png" alt="" />
                  <span>info@narmadamarbles.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Why Choose Us */}
      <section className="overflow-hidden space-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="title-area text-center">
                <span className="sub-title style2 text-anime text-white">Why Choose Us?</span>
                <h3 className="sec-title style2 split-text text-white">Quality, Craftsmanship &amp; Trust You Can Rely On</h3>
              </div>
            </div>
          </div>
          <div className="row gy-5 gx-40 justify-content-between align-items-center">
            <div className="col-lg-4 col-xl-3">
              <div className="choose-block style1">
                <div className="choose-block_img">
                  <img src="/assets/img/icon/choose_1_1.svg" alt="choose" />
                </div>
                <div className="choose-block_wrapper">
                  <h3 className="box-title">Premium Quality Stones</h3>
                  <p className="box-text">Only the finest natural stones</p>
                </div>
              </div>
              <div className="choose-block style1">
                <div className="choose-block_img">
                  <img src="/assets/img/icon/choose_1_2.svg" alt="choose" />
                </div>
                <div className="choose-block_wrapper">
                  <h3 className="box-title">Competitive Pricing</h3>
                  <p className="box-text">Luxury made affordable</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-6 text-center">
              <div className="choose-image img-anim-top global-img">
                <img src="/assets/images/resources/why-choose-us.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="choose-block">
                <div className="choose-block_img">
                  <img src="/assets/img/icon/choose_1_3.svg" alt="choose" />
                </div>
                <div className="choose-block_wrapper">
                  <h3 className="box-title">Skilled Craftsmanship</h3>
                  <p className="box-text">Precision in every cut &amp; polish</p>
                </div>
              </div>
              <div className="choose-block">
                <div className="choose-block_img">
                  <img src="/assets/img/icon/choose_1_4.svg" alt="choose" />
                </div>
                <div className="choose-block_wrapper">
                  <h3 className="box-title">On-Time Delivery</h3>
                  <p className="box-text">We value your time and deadlines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="position-relative overflow-hidden space-bottom" id="service-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-area text-center">
                <span className="sub-title style2 text-white text-anime">Helping you choose the right stone.</span>
                <h2 className="sec-title style2 split-text text-white">Custom Design Consultation</h2>
              </div>
            </div>
          </div>
          <hr className="ser-line" />
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid light wow fadeInUp" data-wow-delay=".1s">
                <div className="overlay" style={{ backgroundImage: 'url(/assets/images/resources/service01.png)' }}></div>
                <div className="box-content">
                  <div className="box-icon">
                    <img src="/assets/img/icon/service_2_1.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="#!">Cutting &amp; Polishing</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid light wow fadeInUp" data-wow-delay=".3s">
                <div className="overlay" style={{ backgroundImage: 'url(/assets/images/resources/service02.png)' }}></div>
                <div className="box-content">
                  <div className="box-icon">
                    <img src="/assets/img/icon/service_2_2.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="#!">Installation Services</a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-4">
              <div className="service-grid light wow fadeInUp" data-wow-delay=".5s">
                <div className="overlay" style={{ backgroundImage: 'url(/assets/images/resources/service03.png)' }}></div>
                <div className="box-content">
                  <div className="box-icon">
                    <img src="/assets/img/icon/service_2_3.svg" alt="Icon" />
                  </div>
                  <h3 className="box-title">
                    <a href="#!">Maintenance Guidance</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="service-content light">
              <p className="box-text wow fadeInUp" data-wow-delay=".3s">
                We offer expert marble selection and consultation, precision cutting and polishing, professional marble installation, bulk supply for large projects, export services, maintenance and care advice, bespoke custom marble solutions, and 3D design support to help you create elegant, long-lasting interiors with Narmada marble.
              </p>
              <div className="wow fadeInUp" data-wow-delay=".4s">
                <Link to="/contact" className="th-btn th-border th-icon">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Area */}
      <div className="video-area space-bottom overflow-hidden position-relative">
        <div className="container">
          <div className="row">
            <div className="video-box2 style2 space-bottom overflow-hidden" style={{ backgroundImage: 'url(/assets/images/resources/video-bg.png)' }}>
              <div className="video-wrapp">
                <div className="discount-wrapp">
                  <a href="#!" className="play-btn popup-video">
                    <i className="fa-sharp fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Showcase Section */}
      <section className="project-area-3 overflow-hidden space-bottom" id="project-sec">
        <div className="container">
          <div className="row justify-content-between align-items-end mb-40">
            <div className="col-xl-6">
              <div className="title-area mb-0">
                <span className="sub-title style2 text-white text-anime">Our Product Showcase</span>
                <h2 className="sec-title style2 text-white split-text">Explore Our Premium Marble Collection</h2>
              </div>
            </div>
            <div className="col-xl-auto">
              <Link to="/products" className="th-btn white-border th-icon">
                View All Products
              </Link>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-md-6 col-lg-4">
              <div className="project-grid style3 light">
                <div className="project-img">
                  <img src="/assets/images/products/michael-angelo/texturebg.png" alt="Michael Angelo" />
                </div>
                <div className="project-content">
                  <h3 className="box-title">
                    <Link to="/products/$slug" params={{ slug: 'michael-angelo' }}>
                      Michael Angelo
                    </Link>
                  </h3>
                  <span className="box-subtitle">Exotic Marble</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-grid style3 light">
                <div className="project-img">
                  <img src="/assets/images/products/pearl-white/texturebg.png" alt="Pearl White" />
                </div>
                <div className="project-content">
                  <h3 className="box-title">
                    <Link to="/products/$slug" params={{ slug: 'pearl-white' }}>
                      Pearl White
                    </Link>
                  </h3>
                  <span className="box-subtitle">White Marble</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-grid style3 light">
                <div className="project-img">
                  <img src="/assets/images/products/lilac-white/texturebg.png" alt="Lilac White" />
                </div>
                <div className="project-content">
                  <h3 className="box-title">
                    <Link to="/products/$slug" params={{ slug: 'lilac-white' }}>
                      Lilac White
                    </Link>
                  </h3>
                  <span className="box-subtitle">Exotic Veined Marble</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-grid style3 light">
                <div className="project-img">
                  <img src="/assets/images/products/bynkoy-white/texturebg.png" alt="Bynkoy White" />
                </div>
                <div className="project-content">
                  <h3 className="box-title">
                    <Link to="/products/$slug" params={{ slug: 'bynkoy-white' }}>
                      Bynkoy White
                    </Link>
                  </h3>
                  <span className="box-subtitle">Classic White Marble</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-grid style3 light">
                <div className="project-img">
                  <img src="/assets/images/products/pentagoria/texturebg.png" alt="Pentagoria" />
                </div>
                <div className="project-content">
                  <h3 className="box-title">
                    <Link to="/products/$slug" params={{ slug: 'pentagoria' }}>
                      Pentagoria Marble
                    </Link>
                  </h3>
                  <span className="box-subtitle">Designer Marble</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="project-grid style3 light">
                <div className="project-img">
                  <img src="/assets/images/products/bluemarble/texturebg.png" alt="Blue Cut Side Marble" />
                </div>
                <div className="project-content">
                  <h3 className="box-title">
                    <Link to="/products/$slug" params={{ slug: 'bluecutmarble' }}>
                      Blue Cut Side Marble
                    </Link>
                  </h3>
                  <span className="box-subtitle">Rare Blue Quartz</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testi-area3 space-bottom" id="testi-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title-area text-center">
                <span className="sub-title style2 text-white text-anime">Client Testimonials</span>
                <h2 className="sec-title style2 text-white split-text">What Our Clients Say</h2>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="testi-box light">
                <p className="box-text">
                  "Narmada Marbles provided the finest quality Italian marble for our villa project. The finish and vein matching were flawless."
                </p>
                <div className="box-profile">
                  <div className="box-author">
                    <img src="/assets/images/testimonial/no-image.png" alt="Avatar" />
                  </div>
                  <div className="box-info">
                    <h3 className="box-title">Rajesh K.</h3> <span className="box-desig">Homeowner</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testi-box light">
                <p className="box-text">
                  "Outstanding customer support and precision cut slabs delivered right on schedule for our commercial hotel lobby."
                </p>
                <div className="box-profile">
                  <div className="box-author">
                    <img src="/assets/images/testimonial/no-image.png" alt="Avatar" />
                  </div>
                  <div className="box-info">
                    <h3 className="box-title">Amit S.</h3> <span className="box-desig">Interior Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="overflow-hidden space-bottom" id="contact-sec">
        <div className="container">
          <div className="row gy-4 flex-row-reverse">
            <div className="col-xl-6">
              <div className="ps-xl-5">
                <form action="#!" method="POST" className="contact-form2 light ajax-contact" onSubmit={(e) => e.preventDefault()}>
                  <div className="title-area">
                    <h2 className="sec-title style2 split-text text-white">
                      Get <span className="title1">A</span><span className="title4">Quote</span>
                    </h2>
                    <p className="contact-text mt-30">
                      Request personalized quotes for both our marble products and services—simply fill out the form to receive expert guidance, clear pricing, and customized solutions for your specific needs.
                    </p>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input type="text" className="form-control" name="name" id="name" placeholder="Full Name" /> <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" /> <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="form-group col-md-6">
                      <input type="tel" className="form-control" name="number" id="number" placeholder="Phone Number" /> <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="form-group col-md-6">
                      <select name="subject" id="subject" className="form-select nice-select" defaultValue="">
                        <option value="" disabled hidden>
                          Inquire For
                        </option>
                        <option value="Products">Products</option>
                        <option value="Services">Services</option>
                      </select>
                    </div>
                    <div className="form-group col-12">
                      <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Message"></textarea> <i className="fa-solid fa-pencil"></i>
                    </div>
                    <div className="form-btn mt-20 col-12">
                      <button className="th-btn th-border" type="submit">Submit Now</button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="contact-image2">
                <div className="img1 img-anim-left">
                  <img src="/assets/images/resources/contact.jpg" alt="" />
                </div>
                <div className="contact-shape">
                  <img src="/assets/img/normal/contact-shape2-light.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="overflow-hidden space-bottom" id="blog-sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="title-area">
                <span className="sub-title style2 text-white text-anime">Blog &amp; News</span>
                <h2 className="sec-title style2 text-white split-text">Our Blogs</h2>
              </div>
            </div>
            <div className="col-xl-6 text-end">
              <Link to="/blog" className="th-btn th-border th-icon">
                View All
              </Link>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-xxl-6">
              <div className="blog-box wow fadeInUp">
                <div className="box-img global-img">
                  <img src="/assets/img/blog/blog_inner_1.jpg" alt="blog image" />
                </div>
                <div className="box-content">
                  <div className="blog-meta">
                    <span className="date">Oct 27, 2025</span>
                  </div>
                  <h3 className="box-title">
                    <Link to="/blog">How to Maintain Marble Floors</Link>
                  </h3>
                  <p className="box-para">Proper cleaning and sealing tips for lasting natural stone sheen.</p>
                  <Link to="/blog" className="th-btn th-border th-icon">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="blog-box wow fadeInUp">
                <div className="box-img global-img">
                  <img src="/assets/img/blog/blog_inner_1.jpg" alt="blog image" />
                </div>
                <div className="box-content">
                  <div className="blog-meta">
                    <span className="date">Oct 27, 2025</span>
                  </div>
                  <h3 className="box-title">
                    <Link to="/blog">Choosing the Right Granite for Your Kitchen</Link>
                  </h3>
                  <p className="box-para">A comprehensive comparison guide for luxury worktops.</p>
                  <Link to="/blog" className="th-btn th-border th-icon">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
