import { Link } from "react-router-dom";
import { navLinks } from "../config/navLinks";
import { useContext } from "react";
import { RefContext } from "../contexts/ref";
import React from "react";

const OverlayNav = ({
  setShowOverlay,
}: {
  setShowOverlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { aboutRef } = useContext(RefContext);
  const handleClick = () => {
    setShowOverlay(false);
    aboutRef.current.focus();
  };

  return (
    <div className="p-20">
      {navLinks.map(({ name, href }, index) => {
        return (
          <Link
            to={href}
            key={index}
            className="text-4xl font-semibold mb-16 block text-white"
            onClick={handleClick}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default OverlayNav;
