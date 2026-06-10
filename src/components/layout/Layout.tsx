import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/nav/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

export const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cream flex flex-col font-source_sans_pro">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
};
