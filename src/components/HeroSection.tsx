import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import TextReveal from "./TextReveal";

const Particles = () => {
  const particles = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 6 + 6,
      delay: Math.random() * 5,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-accent/30 animate-float-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const particleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="hero" className="section-snap justify-center bg-background relative overflow-hidden">
      <motion.div style={{ y: particleY }} className="absolute inset-0">
        <Particles />
      </motion.div>
      <motion.div style={{ opacity }} className="relative z-10 text-center w-full px-4">
        <TextReveal>
          <h1 className="font-display text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-display text-foreground">
            Sripad S Anand
          </h1>
        </TextReveal>
        <TextReveal delay={0.3}>
          <p className="mt-6 text-xs sm:text-base tracking-[0.2em] uppercase text-muted-foreground font-body">
            Software Development & Data Science
          </p>
        </TextReveal>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-8 mx-auto h-px w-24 bg-accent origin-center"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
