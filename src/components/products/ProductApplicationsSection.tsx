import React from 'react';
import { Home, Landmark, Bath, Hotel } from 'lucide-react';

export const ProductApplicationsSection: React.FC = () => {
  const applications = [
    {
      icon: Home,
      title: 'Luxury Villa Flooring',
      desc: 'Seamless large-format gangsaw slabs creating expansive, luminous hall & living room floors.'
    },
    {
      icon: Landmark,
      title: 'Book-Matched Feature Walls',
      desc: 'Hand-selected mirror veining panels ideal for foyer entrances, fireplaces, and accent TV backdrops.'
    },
    {
      icon: Bath,
      title: 'Bespoke Bathrooms & Vanities',
      desc: 'Moisture-resistant calcite density perfect for spa-like master washrooms and solid carved sinks.'
    },
    {
      icon: Hotel,
      title: 'Commercial Lobbies & Hotels',
      desc: 'High compressive strength natural stone suitable for high-traffic executive lounges and hotel receptions.'
    }
  ];

  return (
    <div className="bg-white rounded-3 border p-4 p-md-5 mb-5 position-relative shadow-sm">
      <div className="text-center mb-4 pb-2">
        {/* <span className="badge bg-dark bg-opacity-10 text-dark border px-3 py-2 fw-semibold text-uppercase tracking-wider mb-2">
          Architectural Inspiration
        </span> */}
        <h3 className="fw-bold text-dark m-0">Recommended Applications</h3>
        <p className="text-secondary small mt-1">Discover how top interior designers and architects specify this marble</p>
      </div>

      <div className="row g-4">
        {applications.map((app, idx) => {
          const Icon = app.icon;
          return (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 bg-light bg-opacity-60 p-4 rounded-3 text-center transition-all hover-shadow">
                <div className="rounded-circle bg-dark text-white d-inline-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm" style={{ width: '56px', height: '56px' }}>
                  <Icon size={26} />
                </div>
                <h5 className="fw-bold text-dark fs-6 mb-2">{app.title}</h5>
                <p className="small text-secondary mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.45' }}>
                  {app.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
