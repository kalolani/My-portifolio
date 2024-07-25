import { motion } from "framer-motion";

function Transition(OgComponent) {
  return function WrappedComponent(props) {
    return (
      <>
        <OgComponent {...props} />
        <motion.div
          className="slide-in z-50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          className="slide-out z-50"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="fade-in-out z-50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.7 }}
        />
      </>
    );
  };
}

export default Transition;
