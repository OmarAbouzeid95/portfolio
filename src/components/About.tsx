import { useEffect, useRef } from "react";

const About = () => {
  const pic: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let tl, tr, br, bl;
      let max = 200,
        min = 350;

      tl = Math.floor(Math.random() * (max - min) + min);
      tr = Math.floor(Math.random() * (max - min) + min);
      br = Math.floor(Math.random() * (max - min) + min);
      bl = Math.floor(Math.random() * (max - min) + min);

      let borderRadius = `${tl}px ${tr}px ${br}px ${bl}px `;
      if (pic.current) {
        pic.current.style.borderRadius = borderRadius;
      }
    }, 3750);

    return () => clearInterval(interval);
  }, [pic]);

  return (
    <div>
      <div
        ref={pic}
        className="w-64 h-64 bg-purple-500 transition-all duration-[3750ms] ease-cubic-bezier animate-rotate infinite"></div>
    </div>
  );
};

export default About;
