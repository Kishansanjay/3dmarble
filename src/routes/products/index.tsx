import React, { useState, useMemo } from 'react';
import { Link } from '@tanstack/react-router';
import { productsData, Product } from '../../data/products';

export const ProductsListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'default' | 'name-asc' | 'name-desc'>('default');
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    Object.values(productsData).forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return ['All', ...Array.from(set)];
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = Object.values(productsData);

    // Filter by Category
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.some((d) => d.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <main className="position-relative">
      {/* Fixed Mid-Right Side Filter Trigger Button (Mobile / Tablet) */}
      <button
        onClick={() => setIsMobileFilterOpen(true)}
        className="btn btn-dark shadow-lg d-lg-none position-fixed d-flex align-items-center gap-2 py-3 px-3 text-uppercase font-mono fw-bold"
        style={{
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1040,
          boxShadow: '-4px 8px 24px rgba(0,0,0,0.4)',
          borderRadius: '30px 0 0 30px',
          borderRight: 'none',
          letterSpacing: '1px',
          fontSize: '0.8rem'
        }}
        title="Open Product Filters"
      >
        <i className="fa-solid fa-sliders text-warning fs-6"></i>
        <span className="d-none d-sm-inline">Filters</span>
        {(activeCategory !== 'All' || searchQuery) && (
          <span className="badge bg-warning text-dark rounded-circle p-1" style={{ width: '8px', height: '8px' }} />
        )}
      </button>

      {/* 1. Breadcrumb Header */}
      <div className="breadcumb-area">
        <div className="breadcumb-wrapper" style={{ backgroundImage: 'url(/assets/images/gallery/Banner.jpg)' }}>
          <div className="container">
            <div className="breadcumb-content">
              <h1 className="breadcumb-title text-anime">Our Products</h1>
              <ul className="breadcumb-menu">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <Link to="/">Home</Link>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".3s">
                  Products
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Desktop Filter, Search & Controls Section (d-none d-lg-block) */}
      <section className="py-5 bg-light border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            {/* Category Tabs */}
            <div className="col-lg-7 col-md-12">
              <div className="d-flex overflow-x-auto flex-nowrap flex-md-wrap no-scrollbar pb-2 pb-md-0 gap-2">
                {categories.map((cat) => {
                  const count =
                    cat === 'All'
                      ? Object.keys(productsData).length
                      : Object.values(productsData).filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`btn px-4 py-2 rounded-pill fw-medium transition-all ${
                        activeCategory === cat
                          ? 'btn-dark shadow-sm text-white'
                          : 'btn-outline-secondary bg-white text-dark border-opacity-25'
                      }`}
                      style={{ fontSize: '0.9rem' }}
                    >
                      {cat} <span className="opacity-60 ms-1">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search and Sort */}
            <div className="col-lg-5 col-md-12">
              <div className="row g-2">
                <div className="col-8">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0 shadow-none"
                      placeholder="Search marble by name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button
                        className="btn btn-white border border-start-0 text-muted"
                        type="button"
                        onClick={() => setSearchQuery('')}
                      >
                        <i className="fa-regular fa-xmark"></i>
                      </button>
                    )}
                  </div>
                </div>

                <div className="col-4">
                  <select
                    className="form-select shadow-none"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="default">Sort: Default</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Grid Section */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container">
          {/* Results Summary */}
          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center justify-content-between mb-4 pb-2 border-bottom gap-2">
            <p className="text-muted mb-0 fs-6">
              Showing <strong className="text-dark">{filteredProducts.length}</strong> of{' '}
              <strong className="text-dark">{Object.keys(productsData).length}</strong> natural marble slabs
            </p>
            {activeCategory !== 'All' || searchQuery ? (
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                  setSortBy('default');
                }}
                className="btn btn-sm btn-link text-muted text-decoration-none p-0"
              >
                Reset Filters <i className="fa-regular fa-arrows-rotate ms-1"></i>
              </button>
            ) : null}
          </div>

          {/* Grid Cards */}
          {filteredProducts.length > 0 ? (
            <div className="row g-3 g-md-4">
              {filteredProducts.map((product) => {
                const displayImage =
                  product.images?.[0] || product.textureImage || '/assets/images/products/michael-angelo/01.png';

                return (
                  <div key={product.slug} className="col-12 col-sm-6 col-lg-6 col-xl-4">
                    <div className="project-grid style3 light">
                      <div className="project-img">
                        <img src={displayImage} alt={product.name} />
                      </div>
                      <div className="project-content">
                        <h3 className="box-title">
                          {product.slug === 'exotic-marble' ? (
                            <Link to="/exotic-marble">{product.name}</Link>
                          ) : (
                            <Link to="/products/$slug" params={{ slug: product.slug }}>
                              {product.name}
                            </Link>
                          )}
                        </h3>
                        <span className="box-subtitle">{product.category}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-5">
              <div className="mb-3 text-muted" style={{ fontSize: '3rem' }}>
                <i className="fa-regular fa-folder-open"></i>
              </div>
              <h3 className="h4 fw-bold text-dark mb-2">No Marbles Found</h3>
              <p className="text-muted">No products matched your search "{searchQuery}". Try searching with a different term or reset filters.</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                  setSortBy('default');
                }}
                className="btn btn-dark rounded-pill px-4 mt-2"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Architectural Sourcing Banner */}
      <section className="py-4 py-md-5 bg-dark text-white border-top border-warning border-opacity-25">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-8">
              <span className="text-warning font-mono text-uppercase tracking-wider fs-7">
                Custom Slab Selection & Sourcing
              </span>
              <h2 className="text-white fw-bold mb-3 mt-1 font-serif fs-3 fs-md-2">
                Need Specific Slab Book-Matching or Custom Cut Dimensions?
              </h2>
              <p className="text-light opacity-75 fs-6 fs-md-5 mb-0" style={{ maxWidth: '720px' }}>
                Our team provides bespoke block selection, factory cutting, dry-lay inspection, and global container dispatch for residential villas and luxury commercial developments.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end d-flex flex-column flex-sm-row justify-content-lg-end gap-2">
              <Link to="/contact" className="th-btn style3 text-center">
                Contact Sales Team <i className="fa-regular fa-arrow-right ms-2"></i>
              </Link>
              <a
                href="https://wa.me/919929283733"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light rounded-pill px-4 py-3 font-mono text-center"
                style={{ fontSize: '0.9rem' }}
              >
                <i className="fa-brands fa-whatsapp text-success me-2 fs-5"></i> WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mobile Filter Popup Modal */}
      {isMobileFilterOpen && (
        <div
          className="modal fade show d-block d-lg-none"
          tabIndex={-1}
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1060 }}
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 rounded-4 overflow-hidden shadow-2xl">
              <div className="modal-header bg-dark text-white border-0 p-4 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-sliders text-warning fs-5"></i>
                  <h5 className="modal-title font-serif text-white fw-bold mb-0">
                    Filter Marble Collection
                  </h5>
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setIsMobileFilterOpen(false)}
                ></button>
              </div>

              <div className="modal-body p-4 bg-light">
                {/* Search Input */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-dark fs-7 text-uppercase tracking-wider">
                    Search by Name / Keyword
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-muted">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0 shadow-none bg-white"
                      placeholder="Search e.g. Michael Angelo..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                      <button
                        className="btn btn-white border border-start-0 text-muted"
                        type="button"
                        onClick={() => setSearchQuery('')}
                      >
                        <i className="fa-regular fa-xmark"></i>
                      </button>
                    )}
                  </div>
                </div>

                {/* Category Pills */}
                <div className="mb-4">
                  <label className="form-label fw-bold text-dark fs-7 text-uppercase tracking-wider">
                    Category
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {categories.map((cat) => {
                      const count =
                        cat === 'All'
                          ? Object.keys(productsData).length
                          : Object.values(productsData).filter((p) => p.category.toLowerCase() === cat.toLowerCase()).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`btn px-3 py-2 rounded-pill fw-medium transition-all ${
                            activeCategory === cat
                              ? 'btn-dark shadow-sm text-white'
                              : 'btn-outline-secondary bg-white text-dark border-opacity-25'
                          }`}
                          style={{ fontSize: '0.85rem' }}
                        >
                          {cat} <span className="opacity-60 ms-1">({count})</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sort Dropdown */}
                <div className="mb-3">
                  <label className="form-label fw-bold text-dark fs-7 text-uppercase tracking-wider">
                    Sort By
                  </label>
                  <select
                    className="form-select bg-white shadow-none"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                  >
                    <option value="default">Default Order</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer bg-white border-top p-3 d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-pill px-3"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                    setSortBy('default');
                  }}
                >
                  Reset Filters
                </button>
                <button
                  type="button"
                  className="btn btn-warning text-dark font-mono fw-bold rounded-pill px-4"
                  onClick={() => setIsMobileFilterOpen(false)}
                >
                  Show ({filteredProducts.length}) Slabs
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Quick Quote Modal */}
      {selectedProductForModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1060 }}
          onClick={() => setSelectedProductForModal(null)}
        >
          <div
            className="modal-dialog modal-dialog-centered modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 rounded-4 overflow-hidden shadow-2xl">
              <div className="modal-header bg-dark text-white border-0 p-4">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-3 overflow-hidden"
                    style={{ width: '50px', height: '50px' }}
                  >
                    <img
                      src={selectedProductForModal.textureImage || selectedProductForModal.images?.[0]}
                      alt={selectedProductForModal.name}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <div>
                    <h5 className="modal-title font-serif text-white fw-bold mb-0">
                      Request Quote: {selectedProductForModal.name}
                    </h5>
                    <span className="badge bg-warning text-dark font-mono mt-1">
                      {selectedProductForModal.category}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedProductForModal(null)}
                ></button>
              </div>

              <div className="modal-body p-4 bg-light">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Thank you! Your quote request for ${selectedProductForModal.name} has been submitted.`);
                    setSelectedProductForModal(null);
                  }}
                >
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark fs-7">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control bg-white shadow-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark fs-7">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-control bg-white shadow-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark fs-7">Email Address</label>
                      <input
                        type="email"
                        className="form-control bg-white shadow-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-medium text-dark fs-7">Estimated Quantity (Sq. Ft / Slabs)</label>
                      <input
                        type="text"
                        className="form-control bg-white shadow-none"
                        placeholder="e.g. 2,500 sq ft"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-medium text-dark fs-7">Project Details / Custom Requirements</label>
                      <textarea
                        rows={3}
                        className="form-control bg-white shadow-none"
                        placeholder={`Interested in ${selectedProductForModal.name} for flooring / wall cladding...`}
                      ></textarea>
                    </div>
                    <div className="col-12 text-end pt-2">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-2 rounded-pill px-4"
                        onClick={() => setSelectedProductForModal(null)}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-warning text-dark font-mono fw-bold rounded-pill px-5"
                      >
                        Submit Enquiry <i className="fa-regular fa-paper-plane ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
