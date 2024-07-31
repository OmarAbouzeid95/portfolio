import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import aboutImg from "../assets/about-photo-min.png";
import aboutImg from "../assets/IMG_8216.jpg";

const About = () => {
  const pic: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      let tl, tr, br, bl;
      let max = 200,
        min = 500;

      tl = Math.floor(Math.random() * (max - min) + min);
      tr = Math.floor(Math.random() * (max - min) + min);
      br = Math.floor(Math.random() * (max - min) + min);
      bl = Math.floor(Math.random() * (max - min) + min);

      let borderRadius = `${tl}px ${tr}px ${br}px ${bl}px `;
      if (pic.current) {
        pic.current.style.borderRadius = borderRadius;
      }
    }, 1250);

    return () => clearInterval(interval);
  }, [pic]);

  return (
    <div className="p-6 py-6 max-w-4xl mx-auto md:p-16">
      <motion.h2
        className="text-bold text-5xl text-center mb-14 md:mb-24 md:text-6xl md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}>
        About me
      </motion.h2>
      <div
        ref={pic}
        className="mx-auto w-72 h-72 mb-12 transition-all duration-[1250ms] ease-cubic-bezier infinite relative overflow-hidden md:float-right md:ml-8 md:mb-8">
        <div className="absolute inset-0 z-10">
          <img
            src={aboutImg}
            alt="Personal photo of Omar in the mountains"
            style={{ objectPosition: "bottom" }}
          />
        </div>
      </div>
      <p className="md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, maxime!
        Ipsa ullam distinctio, architecto reiciendis maiores natus rerum
        expedita vitae facere adipisci pariatur blanditiis voluptates nulla
        accusantium quasi reprehenderit corrupti voluptatibus ad quae deserunt
        esse saepe! Vero non est quia eligendi laboriosam maiores, possimus quod
        a deleniti asperiores voluptatibus praesentium nulla consequatur error
        maxime, illum ex nisi minus pariatur reiciendis inventore fugiat.
        Eligendi tenetur recusandae quia nulla animi modi, sed dolorum
        distinctio vero mollitia sit aspernatur ipsam blanditiis, quidem aliquid
        nam. Est doloribus voluptatibus ipsum fuga magnam omnis assumenda a
        architecto? Officia odit laboriosam nostrum modi iusto ullam veniam
        natus.
      </p>
    </div>
  );
};

export default About;
