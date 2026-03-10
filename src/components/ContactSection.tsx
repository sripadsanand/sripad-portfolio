import { motion } from "framer-motion";
import MagneticWrap from "./MagneticWrap";
import TextReveal from "./TextReveal";

const ContactSection = () => (
  <section id="contact" className="section-snap bg-background">
    <div className="w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-display text-xs sm:text-sm uppercase tracking-display text-muted-foreground mb-12 md:mb-16"
      >
        Contact
      </motion.h2>

      <TextReveal>
        <p className="font-display text-2xl sm:text-3xl font-light uppercase tracking-display text-foreground">
          Let's Connect
        </p>
      </TextReveal>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-8 flex flex-col items-center gap-4 text-sm font-body text-muted-foreground"
      >
        <span>Wayanad, Kerala</span>
        <MagneticWrap>
          <a href="tel:+919745168983" className="hover:text-accent transition-colors duration-300">
            +91 9745168983
          </a>
        </MagneticWrap>
        <MagneticWrap>
          <a href="mailto:sripad2028@gmail.com" className="hover:text-accent transition-colors duration-300">
            sripad2028@gmail.com
          </a>
        </MagneticWrap>
        <MagneticWrap>
          <a
            href="https://linkedin.com/in/sripadsanand"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors duration-300"
          >
            linkedin.com/in/sripadsanand
          </a>
        </MagneticWrap>
        <MagneticWrap>
          <a
            href="https://github.com/sripadsanand"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sripad S Anand GitHub profile"
            className="hover:text-accent transition-colors duration-300 flex items-center gap-2"
          >
            github.com/sripadsanand
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </MagneticWrap>
      </motion.div>

      <div className="mt-20 md:mt-24 pb-8 text-xs text-muted-foreground/50 font-body tracking-[0.1em] uppercase">
        © {new Date().getFullYear()} Sripad S Anand
      </div>
    </div>
  </section>
);

export default ContactSection;
