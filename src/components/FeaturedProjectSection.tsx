import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";

const FeaturedProjectSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} id="project" className="section-snap bg-background relative overflow-hidden">
      {/* Parallax accent wash */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <TextReveal>
          <h2 className="font-display text-xs sm:text-sm uppercase tracking-display text-muted-foreground mb-10 md:mb-16">
            Featured Project
          </h2>
        </TextReveal>

        <div>
          <TextReveal delay={0.1}>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light uppercase tracking-display text-foreground mb-4 md:mb-6">
              Sign Language Prediction
            </h3>
          </TextReveal>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-2 sm:gap-3 mb-6 md:mb-8"
          >
            {["Python", "OpenCV", "CNN"].map(tech => (
              <span
                key={tech}
                className="text-[10px] sm:text-xs uppercase tracking-[0.15em] px-2.5 sm:px-3 py-1 sm:py-1.5 border border-accent/30 text-accent font-body rounded-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <div className="space-y-4 max-w-[55ch]">
            <TextReveal delay={0.2}>
              <p className="text-foreground/85 text-sm sm:text-base leading-relaxed font-body font-light">
                Developed a real-time hand gesture recognition system using Motion History Images (MHI) 
                and Convolutional Neural Networks (CNN) for accurate sign language prediction in 
                human-computer interaction.
              </p>
            </TextReveal>
            <TextReveal delay={0.3}>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed font-body font-light">
                Implemented a robust image preprocessing pipeline using Gaussian Mixture Model for 
                background subtraction, median filtering for noise reduction, and Otsu's thresholding 
                for effective image segmentation.
              </p>
            </TextReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectSection;
