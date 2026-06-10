import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          <motion.div
            className="loading-panel"
            initial={{ scaleX: 0.85, opacity: 0.4 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="eyebrow">SYSTEM BOOT</p>
            <h1>ANURAG_KUMAR.exe</h1>
            <div className="loading-bar">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
