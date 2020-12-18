/* eslint react/prop-types: 0 */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import "../css/logo.css";

export const App = () => {

  const initialColors = ["#FF008C", "#D309E1", "#D309E2"];
  const [colors, setColors] = useState(shuffle(initialColors));
  const spring = {
    type: "spring",
    damping: 100,
    stiffness: 300
  };

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 2800);
  }, [colors]);

  return (
    <div className="logo ">
      <div className="logo-text text-4xl  " style={{ color: colors[0] }}>JADE</div>
      {colors.map((background) => (
        <motion.div
          animate={{ rotate: 180 }}
          key={background}
      
          layout transition = {spring}
          style={{ background: background }}
          className="logo-block "
        />
      ))}
      <div className="logo-text text-4xl" style={{ color: colors[2] }}>ROSE</div>
    </div>
  );
};

export default App;
