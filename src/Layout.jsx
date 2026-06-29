import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from './components/Navbar';

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("config", "G-888TWB2CFS", {
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}