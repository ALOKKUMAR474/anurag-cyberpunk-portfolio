import { AnimatePresence, motion } from "framer-motion";

export function VideoModal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="modal-shell"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-panel"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <p className="eyebrow">{item.category}</p>
                <h3>{item.title}</h3>
              </div>
              <button type="button" className="ghost-button" onClick={onClose}>
                [ CLOSE ]
              </button>
            </div>
            <div className="video-frame">
              <iframe
                src={item.preview.replace("controls=0", "controls=1")}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p>{item.description}</p>
            <a className="primary-button" href={item.link} target="_blank" rel="noreferrer">
              Launch Source
            </a>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
