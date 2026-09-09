import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

interface ProductGalleryCarouselProps {
  images: string[];
  productName: string;
}

export const ProductGalleryCarousel: React.FC<ProductGalleryCarouselProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const safeImages = images && images.length > 0 ? images : ['/assets/images/gallery/Banner.jpg'];
  const currentImage = safeImages[activeIndex] || safeImages[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white rounded-3 border p-4 shadow-sm h-100 d-flex flex-column justify-content-between">
      <div className=" position-relative ">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="m-0 fw-bold text-dark">Slab Variations & Photo Gallery</h5>
          <span className="badge bg-dark bg-opacity-75 rounded-pill px-3 py-2">
            {activeIndex + 1} / {safeImages.length}
          </span>
        </div>

        {/* Main Active Image Display */}
        <div className="position-relative overflow-hidden rounded-3 border bg-light mb-3" style={{ height: '380px' }}>
          <img
            src={currentImage}
            alt={`${productName} - Slab ${activeIndex + 1}`}
            className="w-100 h-100 transition-all duration-300"
            style={{ objectFit: 'cover' }}
          />

          {/* Previous Arrow */}
          {safeImages.length > 1 && (
            <button
              onClick={handlePrev}
              className="position-absolute top-50 start-0 translate-middle-y ms-3 btn btn-dark bg-opacity-75 text-white rounded-circle shadow-sm d-flex align-items-center justify-content-center p-2 border-0"
              style={{ width: '40px', height: '40px', zIndex: 10 }}
              title="Previous Slab"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Next Arrow */}
          {safeImages.length > 1 && (
            <button
              onClick={handleNext}
              className="position-absolute top-50 end-0 translate-middle-y me-3 btn btn-dark bg-opacity-75 text-white rounded-circle shadow-sm d-flex align-items-center justify-content-center p-2 border-0"
              style={{ width: '40px', height: '40px', zIndex: 10 }}
              title="Next Slab"
            >
              <ChevronRight size={22} />
            </button>
          )}

          {/* Fullscreen Lightbox Button */}
          <button
            onClick={() => setIsLightboxOpen(true)}
            className="position-absolute bottom-0 end-0 m-3 btn btn-light bg-opacity-90 text-dark rounded-circle shadow-sm p-2 border-0"
            title="Expand Fullscreen View"
          >
            <Maximize2 size={18} />
          </button>
        </div>
      </div>

      {/* Thumbnail Selector Strip */}
      {safeImages.length > 1 && (
        <div className="d-flex gap-2 overflow-x-auto pb-1">
          {safeImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`btn p-0 border rounded-2 overflow-hidden flex-shrink-0 transition-all ${
                activeIndex === idx ? 'border-dark border-2 shadow-sm scale-105' : 'border-light opacity-75'
              }`}
              style={{ width: '76px', height: '60px' }}
            >
              <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-100 h-100" style={{ objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-95 d-flex align-items-center justify-content-center"
          style={{ zIndex: 9999 }}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="position-absolute top-0 end-0 m-4 btn btn-light rounded-circle p-2 shadow"
          >
            <X size={24} />
          </button>
          <img
            src={currentImage}
            alt={productName}
            className="img-fluid rounded shadow-lg"
            style={{ maxHeight: '90vh', maxWidth: '90vw', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
};
