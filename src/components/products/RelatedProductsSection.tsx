import React from 'react';
import { Link } from '@tanstack/react-router';
import { productsData, Product } from '../../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface RelatedProductsSectionProps {
  currentSlug: string;
}

export const RelatedProductsSection: React.FC<RelatedProductsSectionProps> = ({ currentSlug }) => {
  // Filter out current product and pick up to 6 items for a rich carousel experience
  const allProducts = Object.values(productsData);
  const relatedList = allProducts.filter((p) => p.slug !== currentSlug).slice(0, 6);

  return (
    <div className="bg-white rounded-3 border p-4 p-md-5 position-relative shadow-sm">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 pb-2 border-bottom gap-2">
        <div>
          <h3 className="fw-bold text-dark m-0 d-flex align-items-center gap-2">
            <span>Explore Related Marbles</span>
            <Sparkles size={20} className="text-warning" />
          </h3>
        </div>
        <Link to="/products" className="btn btn-outline-dark btn-sm rounded-pill px-4 py-2 d-inline-flex align-items-center gap-2">
          <span>View All Marbles</span>
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Swiper Carousel for Mobile, Tablet and Desktop */}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1.15}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          576: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 24 },
          1200: { slidesPerView: 4, spaceBetween: 24 }
        }}
        className="related-products-swiper pb-4"
      >
        {relatedList.map((prod: Product) => {
          const displayImage = prod.textureImage || prod.images[0] || '/assets/images/products/michael-angelo/01.png';
          return (
            <SwiperSlide key={prod.slug}>
              <div className="project-grid style3 light mb-3">
                <div className="project-img">
                  <img src={displayImage} alt={prod.name} />
                </div>
                <div className="project-content">
                  <h3 className="box-title">
                    {prod.slug === 'exotic-marble' ? (
                      <Link to="/exotic-marble">{prod.name}</Link>
                    ) : (
                      <Link to="/products/$slug" params={{ slug: prod.slug }}>
                        {prod.name}
                      </Link>
                    )}
                  </h3>
                  <span className="box-subtitle">{prod.category}</span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
