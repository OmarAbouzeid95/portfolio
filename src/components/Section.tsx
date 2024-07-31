import { motion } from "framer-motion";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="p-6 py-6 max-w-4xl mx-auto md:p-16">
      <motion.h2
        className="font-bold text-5xl text-center mb-14 md:mb-24 md:text-6xl md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}>
        {title}
      </motion.h2>
      {children}
    </section>
  );
};

export default Section;
