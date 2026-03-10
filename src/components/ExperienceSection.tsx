import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const experiences = [
  {
    role: "Data Science & AI Intern",
    company: "KELTRON, Kochi",
    period: "July 2024",
    details: [
      "Analyzed and processed large datasets to extract actionable insights.",
      "Applied supervised and unsupervised learning techniques to build predictive models.",
    ],
  },
  {
    role: "Python Intern",
    company: "Spryntas, Chennai",
    period: "February – June 2022",
    details: [
      "Developed Python scripts to automate tasks, improving data processing and overall efficiency.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-snap bg-background">
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
      <TextReveal>
        <h2 className="font-display text-xs sm:text-sm uppercase tracking-display text-muted-foreground mb-10 md:mb-16">
          Experience
        </h2>
      </TextReveal>
      <div className="space-y-6 md:space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="group border border-border rounded-sm p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-accent hover:glow-cobalt bg-card"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-3 md:mb-4">
              <h3 className="font-display text-base sm:text-lg md:text-xl font-light uppercase tracking-display text-foreground">
                {exp.role}
              </h3>
              <span className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-muted-foreground font-body">
                {exp.period}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-accent mb-3 md:mb-4 font-body">{exp.company}</p>
            <ul className="space-y-2">
              {exp.details.map((d, j) => (
                <li key={j} className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed">
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
