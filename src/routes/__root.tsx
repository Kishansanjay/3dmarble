import React, { useEffect } from 'react';
import { Outlet, useLocation } from '@tanstack/react-router';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { SideMenu } from '../components/layout/SideMenu';
import { MobileMenu } from '../components/layout/MobileMenu';
import { SearchModal } from '../components/search/SearchModal';
import { ScrollToTop } from '../components/layout/ScrollToTop';

export const RootComponent: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <SideMenu />
      <SearchModal />
      <MobileMenu />
      <Header />
      <Outlet />
      <Footer />
      <div className="grid-overlay style4">
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
        <div className="grid-line"></div>
      </div>
      <ScrollToTop />
    </>
  );
};
