import { Outlet } from "react-router-dom";
import { useState } from "react";
import HamburgerIcon from "../components/HamburgerIcon";

const RootLayout = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);

  return (
    <section className="bg-dark">
      <header className="relative">
        <HamburgerIcon setShowOverlay={setShowOverlay} />
      </header>
      <main className="relative min-h-screen text-white">
        {showOverlay && (
          <div className="fixed inset-0 z-30 bg-black bg-opacity-20 animate-fadeIn">
            <div className="absolute inset-0 backdrop-blur-md">
              {/* <div>{ovelayContent}</div> */}
            </div>
          </div>
        )}
        <Outlet />
      </main>
    </section>
  );
};

export default RootLayout;
