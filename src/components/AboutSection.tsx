import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} id="about" className="section-snap bg-background relative">
      {/* Subtle parallax accent line */}
      <motion.div
        style={{ y: bgY }}
        className="absolute left-0 top-1/2 w-px h-32 bg-accent/20 hidden md:block"
      />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start gap-8 md:gap-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="md:w-1/5 flex-shrink-0"
        >
          <h2 className="font-display text-xs sm:text-sm uppercase tracking-display text-muted-foreground">
            About
          </h2>
        </motion.div>
        <div className="md:w-4/5 flex items-center justify-center">
          <TextReveal>
            <p className="text-foreground/90 text-base sm:text-lg leading-relaxed max-w-[40ch] font-body font-light">
              Data-driven individual with a solid foundation in Python, SQL, and web technologies. 
              Passionate about building a career in software development and data science within a 
              multinational organization. Proven ability to analyze complex problems and deliver 
              innovative, effective solutions. Brings a strong problem-solving mindset, keen attention 
              to detail, and a continuous drive to learn and contribute to impactful projects.
            </p>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
