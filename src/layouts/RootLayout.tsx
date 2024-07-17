import { Outlet } from "react-router-dom";
import HamburgerIcon from "../components/HamburgerIcon";

const RootLayout = () => {
  return (
    <>
      <header className="w-full flex justify-end items-center p-4 bg-dark">
        <HamburgerIcon />
      </header>
      <main className="bg-dark text-white">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
