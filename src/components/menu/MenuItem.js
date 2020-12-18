/* eslint react/prop-types: 0 */

import React from "react";
import { motion } from "framer-motion";
import "../../css/menu.css"

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: .5,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};



const MenuItem = (props) => {
  return (
    <motion.li className="motion-li"
      variants={variants}
    >
      <p className="selector">{">"}</p>
      <p className="inline-block">{props.title}</p>
    </motion.li>
  );
};

export default MenuItem;