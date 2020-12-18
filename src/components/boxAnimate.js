/* eslint react/prop-types: 0 */
import React from "react";
import { motion } from "framer-motion";
import "../css/box-animate.css";

function BoxAnimate(props) {
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="container box-container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {props.children.map((child, key) => (
        <motion.div
          whileHover={{ scale: 1.03 }}
          className={props.childClassName}
          key={key}
          variants={item}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default BoxAnimate;
