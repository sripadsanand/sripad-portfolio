import { motion } from "framer-motion";
import TextReveal from "./TextReveal";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Amrita Vishwa Vidyapeetham",
    period: "2024 – Present",
    score: "CGPA: 7.35/10",
  },
  {
    degree: "Bachelor of Computer Applications",
    institution: "SRM University",
    period: "2021 – 2024",
    score: "CGPA: 9.14/10",
  },
  {
    degree: "Higher Secondary — CS Major",
    institution: "WOHSS, Wayanad • Kerala Board",
    period: "2019 – 2021",
    score: "89.9%",
  },
  {
    degree: "Secondary School",
    institution: "NSSEMHSS, Wayanad • Kerala Board",
    period: "2019",
    score: "95%",
  },
];

const EducationSection = () => (
  <section id="education" className="section-snap bg-background">
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
      <TextReveal>
        <h2 className="font-display text-xs sm:text-sm uppercase tracking-display text-muted-foreground mb-10 md:mb-16">
          Education
        </h2>
      </TextReveal>

      <div className="grid gap-px bg-border">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-background p-4 sm:p-6 md:p-8 flex flex-col sm:grid sm:grid-cols-[1fr_auto] gap-2 sm:gap-4 sm:items-baseline"
          >
            <div>
              <h3 className="font-display text-xs sm:text-sm md:text-base uppercase tracking-display text-foreground font-light">
                {edu.degree}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground font-body mt-1">{edu.institution}</p>
            </div>
            <div className="sm:text-right flex sm:flex-col gap-3 sm:gap-0">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground font-body">
                {edu.period}
              </p>
              <p className="text-xs sm:text-sm text-accent font-body sm:mt-1">{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
