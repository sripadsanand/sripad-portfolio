import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlowCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-screen"
      animate={{
        x: pos.x - 150,
        y: pos.y - 150,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-accent/[0.06] blur-[80px]" />
    </motion.div>
  );
};

export default GlowCursor;
