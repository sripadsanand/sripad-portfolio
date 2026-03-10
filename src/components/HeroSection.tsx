import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import TextReveal from "./TextReveal";

const Particles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-accent/30 animate-float-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const particleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="section-snap min-h-[100dvh] flex flex-col items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Particle Background */}
      <motion.div style={{ y: particleY }} className="absolute inset-0 z-0">
        <Particles />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 flex flex-col items-center justify-center text-center w-full px-4 sm:px-6 md:px-8"
      >
        {/* Name */}
        <TextReveal>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-tight font-light uppercase tracking-display text-foreground break-words">
            Sripad S Anand
          </h1>
        </TextReveal>

        {/* Subtitle */}
        <TextReveal delay={0.3}>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg tracking-[0.18em] uppercase text-muted-foreground font-body">
            AI & Data Science Enthusiast
          </p>
        </TextReveal>

        {/* Premium Line */}
        <TextReveal delay={0.6}>
          <p className="mt-3 text-xs sm:text-sm tracking-widest text-accent font-medium uppercase">
            AI • Data Science • Computer Vision
          </p>
        </TextReveal>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="mt-10 mx-auto h-px w-24 bg-accent origin-center"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;