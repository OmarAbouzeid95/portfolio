import { Outlet } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { RefContext } from "../contexts/ref";
import HamburgerIcon from "../components/HamburgerIcon";
import OverlayNav from "../components/OverlayNav";
import Navbar from "../components/Navbar";
import clsx from "clsx";

const RootLayout = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [aboutRef, projectsRef] = new Array(2).fill(
    useRef<React.ReactHTMLElement<any> | null>(null)
  );

  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showOverlay]);

  return (
    <section className="bg-dark">
      <RefContext.Provider value={{ aboutRef, projectsRef }}>
        <header className="relative lg:flex lg:justify-end lg:items-center lg:max-w-4xl lg:mx-auto">
          <HamburgerIcon setShowOverlay={setShowOverlay} />
          <Navbar />
        </header>
        <main
          className={clsx("relative min-h-screen text-white overflow-hidden")}>
          {showOverlay && (
            <div className="fixed inset-0 z-30 animate-fadeIn bg-black bg-opacity-20">
              <OverlayNav setShowOverlay={setShowOverlay} />
            </div>
          )}
          <section className={clsx(showOverlay && "blur-lg animate-fadeIn")}>
            <Outlet />
          </section>
        </main>
      </RefContext.Provider>
    </section>
  );
};

export default RootLayout;
