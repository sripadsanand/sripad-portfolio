import { motion } from "framer-motion";

const technicalSkills = "Python • SQL • HTML • CSS • JavaScript • Pandas • NumPy • Scikit-learn • Matplotlib • Seaborn • MySQL • SQLite • Django • Bootstrap • Jupyter Notebook • Git • VS Code";
const interpersonalSkills = "Problem-solving • Time Management • Teamwork • Collaboration • Adaptable • Active Listener • Effective Communication";
const languages = "English • Malayalam • Tamil • Hindi";

const MarqueeRow = ({ text, speed = 40 }: { text: string; speed?: number }) => (
  <div className="overflow-hidden whitespace-nowrap py-4 border-b border-border">
    <div className="marquee inline-block" style={{ animationDuration: `${speed}s` }}>
      <span className="font-display text-sm sm:text-base font-light uppercase tracking-display text-foreground/70 mr-16">
        {text}
      </span>
      <span className="font-display text-sm sm:text-base font-light uppercase tracking-display text-foreground/70 mr-16">
        {text}
      </span>
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="section-snap bg-background">
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-display text-xs sm:text-sm uppercase tracking-display text-muted-foreground mb-16"
      >
        Skills Arsenal
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body mb-2">Technical</p>
        <MarqueeRow text={technicalSkills} speed={35} />

        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body mb-2 mt-8">Interpersonal</p>
        <MarqueeRow text={interpersonalSkills} speed={28} />

        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-body mb-2 mt-8">Languages</p>
        <MarqueeRow text={languages} speed={20} />
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
