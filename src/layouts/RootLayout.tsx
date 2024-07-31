import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import HamburgerIcon from "../components/HamburgerIcon";
import OverlayNav from "../components/OverlayNav";
import Navbar from "../components/Navbar";
import clsx from "clsx";

const RootLayout = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showOverlay]);

  return (
    <section className="bg-dark">
      <header className="relative lg:flex lg:justify-end lg:items-center lg:max-w-4xl lg:mx-auto">
        <HamburgerIcon setShowOverlay={setShowOverlay} />
        <Navbar />
      </header>
      <main
        className={clsx("relative min-h-screen text-white overflow-hidden")}>
        {showOverlay && (
          <div className="fixed inset-0 z-30 animate-fadeIn bg-black bg-opacity-20">
            <OverlayNav />
          </div>
        )}
        <section className={clsx(showOverlay && "blur-lg animate-fadeIn")}>
          <Outlet />
        </section>
      </main>
    </section>
  );
};

export default RootLayout;
