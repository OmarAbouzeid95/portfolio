import { Link } from "react-router-dom";

const OverlayNav = () => {
  const navLinks: { name: string; href: string }[] = [
    {
      name: "Link1",
      href: "#",
    },
    {
      name: "Link1",
      href: "#",
    },
    {
      name: "Link1",
      href: "#",
    },
    {
      name: "Link1",
      href: "#",
    },
  ];

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
