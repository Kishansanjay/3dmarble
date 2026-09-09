import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, X, Send, Layers, FileText, Ruler, Truck, Sparkles } from 'lucide-react';
import { Product } from '../../data/products';

interface ProductDetailsSectionProps {
  product: Product;
}

export const ProductDetailsSection: React.FC<ProductDetailsSectionProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs' | 'dimensions' | 'shipping'>('overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <div className="bg-white rounded-3 border p-4 shadow-sm h-100 d-flex flex-column position-relative justify-content-between">
      <div>
        {/* Category & Stock Badges */}
        {/* <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="badge bg-dark bg-opacity-10 text-dark border px-3 py-2 fw-semibold d-flex align-items-center gap-1">
            <Sparkles size={14} className="text-warning" />
            {product.category || 'Premium Marble'}
          </span>
          <span className="badge top-20 bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-3 py-2 d-flex align-items-center gap-1">
            <ShieldCheck size={14} />
            In Stock • Export Certified
          </span>
        </div> */}

        {/* Title */}
        <h2 className="display-6 fw-bold text-dark mb-3">{product.name}</h2>

        {/* Navigation Tabs Header */}
        <div className="d-flex flex-wrap gap-2 border-bottom pb-2 mb-4 overflow-x-auto ">
          <button
            onClick={() => setActiveTab('overview')}
            className={`btn btn-sm px-3 py-2 rounded-pill d-flex align-items-center text-nowrap gap-1.5 transition-all ${
              activeTab === 'overview' ? 'btn-dark' : 'btn-light text-secondary'
            }`}
          >
            <FileText size={15} />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('specs')}
            className={`btn btn-sm px-3 py-2 rounded-pill d-flex align-items-center text-nowrap gap-1.5 transition-all ${
              activeTab === 'specs' ? 'btn-dark' : 'btn-light text-secondary'
            }`}
          >
            <Layers size={15} />
            <span>Technical Specs</span>
          </button>

          <button
            onClick={() => setActiveTab('dimensions')}
            className={`btn btn-sm px-3 py-2 rounded-pill d-flex align-items-center text-nowrap gap-1.5 transition-all ${
              activeTab === 'dimensions' ? 'btn-dark' : 'btn-light text-secondary'
            }`}
          >
            <Ruler size={15} />
            <span>Slab Sizes</span>
          </button>

          <button
            onClick={() => setActiveTab('shipping')}
            className={`btn btn-sm px-3 py-2 rounded-pill d-flex align-items-center text-nowrap gap-1.5 transition-all ${
              activeTab === 'shipping' ? 'btn-dark' : 'btn-light text-secondary'
            }`}
          >
            <Truck size={15} />
            <span>Guarantee & Shipping</span>
          </button>
        </div>

        {/* Tab Content 1: Overview */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            <div className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.65' }}>
              {product.description.map((p, idx) => (
                <p key={idx} className="mb-2">
                  {p}
                </p>
              ))}
            </div>

            <h6 className="fw-bold text-dark mb-3">Key Marble Highlights:</h6>
            <div className="row g-3">
              {product.features.map((feat, idx) => (
                <div key={idx} className="col-12 col-md-6 d-flex align-items-start gap-2">
                  <div className="rounded-circle bg-dark text-white p-1 d-flex align-items-center justify-content-center flex-shrink-0 mt-0.5" style={{ width: '20px', height: '20px' }}>
                    <CheckCircle2 size={13} />
                  </div>
                  <span className="small text-secondary fw-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 2: Technical Specs */}
        {activeTab === 'specs' && (
          <div className="animate-fade-in">
            <div className="table-responsive rounded border mb-3">
              <table className="table table-striped table-hover m-0 align-middle small">
                <tbody>
                  {Object.entries(product.specs).map(([key, val]) => (
                    <tr key={key}>
                      <th className="w-40 bg-light text-dark fw-semibold py-2.5 px-3">{key}</th>
                      <td className="text-secondary py-2.5 px-3">{val}</td>
                    </tr>
                  ))}
                  <tr>
                    <th className="bg-light text-dark fw-semibold py-2.5 px-3">Surface Polish Index</th>
                    <td className="text-secondary py-2.5 px-3">High Gloss (95+ Gloss Units)</td>
                  </tr>
                  <tr>
                    <th className="bg-light text-dark fw-semibold py-2.5 px-3">Water Absorption</th>
                    <td className="text-secondary py-2.5 px-3">0.15% - Extremely Low Porosity</td>
                  </tr>
                  <tr>
                    <th className="bg-light text-dark fw-semibold py-2.5 px-3">Compressive Strength</th>
                    <td className="text-secondary py-2.5 px-3">145 - 180 MPa (High Density)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content 3: Slab Sizes & Dimensions */}
        {activeTab === 'dimensions' && (
          <div className="animate-fade-in">
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="p-3 bg-light rounded border">
                  <span className="badge bg-dark text-white mb-2">Gangsaw Slabs</span>
                  <h6 className="fw-bold text-dark mb-1">Large Format Slabs</h6>
                  <p className="small text-secondary mb-0">~300cm x 180cm (10ft x 6ft)</p>
                  <span className="small text-muted">Thickness: 18mm / 20mm</span>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="p-3 bg-light rounded border">
                  <span className="badge bg-secondary text-white mb-2">Cutter Slabs</span>
                  <h6 className="fw-bold text-dark mb-1">Standard Cutters</h6>
                  <p className="small text-secondary mb-0">~240cm x 120cm (8ft x 4ft)</p>
                  <span className="small text-muted">Thickness: 16mm / 18mm</span>
                </div>
              </div>
              <div className="col-12">
                <div className="p-3 bg-light rounded border">
                  <span className="badge bg-outline-dark border mb-2">Custom Tile Sizes</span>
                  <p className="small text-secondary mb-0">Custom factory cutting available for 60x60cm, 80x80cm, 120x60cm, and book-matched paired panels.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content 4: Guarantee & Shipping */}
        {activeTab === 'shipping' && (
          <div className="animate-fade-in">
            <div className="row g-3">
              <div className="col-12">
                <div className="p-3 bg-light rounded border d-flex align-items-start gap-3">
                  <ShieldCheck size={28} className="text-success flex-shrink-0 mt-1" />
                  <div>
                    <h6 className="fw-bold text-dark mb-1">100% Natural Stone Quality Warranty</h6>
                    <p className="small text-secondary mb-0">Every slab undergoes multi-stage quality inspection to guarantee zero artificial resin fills or micro-structural cracks.</p>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="p-3 bg-light rounded border d-flex align-items-start gap-3">
                  <Truck size={28} className="text-dark flex-shrink-0 mt-1" />
                  <div>
                    <h6 className="fw-bold text-dark mb-1">Safe Export Wooden Crate Packaging</h6>
                    <p className="small text-secondary mb-0">Seaworthy fumigated wooden bundles with corner edge protectors for safe global logistics and nationwide delivery.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer Bar */}
      <div className="pt-4 border-top mt-4 d-lg-flex align-items-center justify-content-between gap-3">
        <div>
          <span className="d-block small text-muted">Wholesale Rates</span>
          <span className="fw-bold text-dark fs-5">Factory Direct Pricing</span>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-dark btn-lg px-4 py-2.5 rounded-3 d-flex align-items-center gap-2 shadow-sm"
        >
          <span>Request Instant Quote</span>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Quote Request Modal */}
      {isModalOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center p-3"
          style={{ zIndex: 9999 }}
        >
          <div className="bg-white rounded-3 p-4 shadow-lg border position-relative" style={{ maxWidth: '500px', width: '100%' }}>
            <button onClick={() => setIsModalOpen(false)} className="position-absolute top-0 end-0 m-3 btn-close" />

            {isSubmitted ? (
              <div className="text-center py-4">
                <CheckCircle2 size={48} className="text-success mb-3" />
                <h4 className="fw-bold text-dark">Enquiry Submitted!</h4>
                <p className="text-secondary mb-0">Our stone specialists will contact you shortly with catalog and pricing.</p>
              </div>
            ) : (
              <>
                <h4 className="fw-bold text-dark mb-1">Get a Quote for {product.name}</h4>
                <p className="small text-secondary mb-4">Fill out your details to receive wholesale pricing and slab availability.</p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Your Name</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Email Address</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label small fw-semibold">Requirements / Quantity</label>
                    <textarea
                      rows={3}
                      className="form-control"
                      placeholder="e.g. 5000 sq.ft required for residential villa flooring..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark w-100 py-2.5 rounded-3 d-flex align-items-center justify-content-center gap-2">
                    <Send size={16} />
                    <span>Submit Price Request</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
