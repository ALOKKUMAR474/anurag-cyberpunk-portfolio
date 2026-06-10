import { motion } from "framer-motion";

export function SectionHeading({ id, eyebrow, title, copy }) {
  return (
    <motion.div
      id={id}
      className="section-heading"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </motion.div>
  );
}
