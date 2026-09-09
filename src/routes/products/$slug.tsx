import React from 'react';
import { Link, useParams } from '@tanstack/react-router';
import { productsData } from '../../data/products';
import { MarbleSlabViewer } from '../../components/3d/MarbleSlabViewer';
import { ProductGalleryCarousel } from '../../components/products/ProductGalleryCarousel';
import { ProductDetailsSection } from '../../components/products/ProductDetailsSection';
import { ProductApplicationsSection } from '../../components/products/ProductApplicationsSection';
import { RelatedProductsSection } from '../../components/products/RelatedProductsSection';
import { ShieldCheck, Award, Box, RotateCcw } from 'lucide-react';

export function ProductDetailPage() {
  const params = useParams({ strict: false });
  const rawSlug = params.slug || 'michael-angelo';
  const cleanSlug = rawSlug.replace(/\.html$/, '');
  const product = productsData[cleanSlug] || productsData['michael-angelo'];

  return (
    <>
      {/* Breadcrumb Header */}
      <div className="breadcumb-area">
        <div className="breadcumb-wrapper" style={{ backgroundImage: "url('/assets/images/gallery/Banner.jpg')" }}>
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title text-anime">{product.name}</h1>
              <ul className="breadcumb-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>{product.name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="product-details overflow-hidden space-top space-extra-bottom bg-light bg-opacity-50">
        <div className="container">
          {/* 1. Top Section: Full-Width 3D Studio Showcase (col-lg-12) */}
          <div className="row mb-4">
            <div className="col-12">
              <MarbleSlabViewer product={product} />
            </div>
          </div>

          {/* Luxury Floating Stats Bar */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="bg-white rounded-3 border p-3 shadow-sm d-flex flex-wrap align-items-center justify-content-around gap-3 text-center">
                <div className="d-flex align-items-center gap-2">
                  <ShieldCheck size={20} className="text-dark" />
                  <span className="small fw-semibold text-dark">100% Pure Natural Calcite</span>
                </div>
                <div className="d-flex align-items-center gap-2 border-start border-md-0 ps-3 ps-md-0">
                  <RotateCcw size={20} className="text-dark" />
                  <span className="small fw-semibold text-dark">360° Interactive 3D Inspection</span>
                </div>
                <div className="d-flex align-items-center gap-2 border-start border-md-0 ps-3 ps-md-0">
                  <Award size={20} className="text-dark" />
                  <span className="small fw-semibold text-dark">A-Grade Export Certified</span>
                </div>
                <div className="d-flex align-items-center gap-2 border-start border-md-0 ps-3 ps-md-0">
                  <Box size={20} className="text-dark" />
                  <span className="small fw-semibold text-dark">Custom Gangsaw Cut Sizes</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Bottom Section: 2 Divisions (Left Carousel + Right Details & Specs) */}
          <div className="row g-4 align-items-stretch mb-5">
            {/* Division 1: Left Column - Slab Carousel Gallery */}
            <div className="col-lg-6">
              <ProductGalleryCarousel images={product.images} productName={product.name} />
            </div>

            {/* Division 2: Right Column - Product Overview & Technical Specs */}
            <div className="col-lg-6">
              <ProductDetailsSection product={product} />
            </div>
          </div>

          {/* 3. Architectural Applications Showcase Section */}
          <ProductApplicationsSection />

          {/* 4. Related Marble Collection Grid */}
          <RelatedProductsSection currentSlug={product.slug} />
        </div>
      </section>
    </>
  );
}
