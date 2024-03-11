import { motion } from "framer-motion";
import React from "react";

const animations = {
  initial: { opacity: 0, x: -100 }, // Initial state, element starts outside the left boundary
  animate: {
    opacity: 1,
    x: 0, // Element moves to its final position
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: 100, // Element exits to the right
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ height: "100%" }}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
