import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";

const AboutSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} id="about" className="section-snap bg-background relative flex flex-col items-center justify-center">
      {/* Subtle parallax accent line */}
      <motion.div
        style={{ y: bgY }}
        className="absolute left-0 top-1/2 w-px h-32 bg-accent/20 hidden md:block"
      />

      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <TextReveal>
          <h2 className="font-display text-xs sm:text-sm uppercase tracking-display text-muted-foreground mb-12 text-center w-full">
            About Me
          </h2>
        </TextReveal>

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16 w-full">
          <div className="w-full md:w-3/5">
            <TextReveal delay={0.1}>
              <p className="text-foreground/90 text-sm sm:text-base leading-relaxed md:leading-loose max-w-[600px] font-body font-light">
                I’m Sripad S. Anand, an MCA student passionate about software development, artificial intelligence, and data science. My work includes machine learning, computer vision, and full-stack development using Python, SQL, and modern web technologies. I have engineered projects such as a real-time sign language recognition system using Motion History Images and neural networks.
              </p>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="text-foreground/90 text-sm sm:text-base leading-relaxed md:leading-loose max-w-[600px] font-body font-light mt-4 md:mt-6">
                Driven by curiosity and a strong problem-solving mindset, I continuously explore new technologies and enjoy building intelligent systems and scalable applications. I aim to build impactful solutions in innovative, data-driven environments that solve real-world problems.
              </p>
            </TextReveal>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-2/5"
          >
            <div className="flex flex-wrap gap-3">
              {[
                "Python", "Machine Learning", "Data Science",
                "Computer Vision", "Deep Learning", "OpenCV",
                "Full-Stack Dev", "React", "Django"
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] sm:text-xs uppercase tracking-[0.1em] px-3 sm:px-4 py-1.5 sm:py-2 border border-accent/20 bg-accent/5 text-accent font-body rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
