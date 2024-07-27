import { Link } from "react-router-dom";
import { navLinks } from "../config/navLinks";

const OverlayNav = () => {
  return (
    <div className="p-20">
      {navLinks.map(({ name, href }, index) => {
        return (
          <Link
            to={href}
            key={index}
            className="text-4xl font-semibold mb-16 block text-white">
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default OverlayNav;
