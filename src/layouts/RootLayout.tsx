import { Outlet } from "react-router-dom";
import { useState } from "react";
import HamburgerIcon from "../components/HamburgerIcon";
import OverlayNav from "../components/OverlayNav";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <section className="bg-dark">
      <header className="relative lg:flex lg:justify-end lg:items-center lg:max-w-4xl lg:mx-auto">
        <HamburgerIcon setShowOverlay={setShowOverlay} />
        <Navbar />
      </header>
      <main className="relative min-h-screen text-white">
        {showOverlay && (
          <div className="fixed inset-0 z-30 bg-black bg-opacity-20 animate-fadeIn">
            <div className="absolute inset-0 backdrop-blur-xl animate-fadeIn">
              <OverlayNav />
            </div>
          </div>
        )}
        <Outlet />
      </main>
    </section>
  );
};

export default RootLayout;
