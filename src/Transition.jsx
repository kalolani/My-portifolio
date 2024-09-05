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
          transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
        />

        <motion.div
          className="slide-out z-50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          // Adding delay to the transition
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        />
        <motion.div
          className="slide-in z-50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        />
        <motion.div
          className="slide-out z-50"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          // Adding delay to the transition
          transition={{
            duration: 0.3,
            delay: 0.6,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        />
      </>
    );
  };
}

export default Transition;
