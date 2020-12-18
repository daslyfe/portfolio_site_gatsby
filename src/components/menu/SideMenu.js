import React from "react";
import { motion } from "framer-motion";
import MenuToggle from "./MenuToggle";

import "../../css/menu.css";
import Navigation from "./Navigation";
const sidebar = {
  open: (
    height = window.innerHeight > window.innerWidth
      ? window.innerHeight
      : window.innerWidth
  ) => ({
    clipPath: `circle(${height + 200}px at 0% 0%)`,
    transition: {
      type: "spring",
      stiffness: 40,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 0% 0%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

let timer;
const SideMenu = (props) => {
  const [isOpen, setOpen] = React.useState(false);
  const [isVisible, setVisible] = React.useState(false);

  //wait 500 milliseconds to disable nav links to complete
  // React.useEffect(() => {
  //   if (!isOpen) {
  //     setTimeout(() => {
  //       setVisible(false);
  //     }, 700);
  //   }
  // });

  const toggle = () => {
    if (!isOpen && !isVisible) {
      clearTimeout(timer);
      setOpen(true);
      setVisible(true);
    } else if (isOpen && isVisible) {
      clearTimeout(timer);
      setOpen(false);
      timer= setTimeout(() => {
        setVisible(false);
      }, 800);
    }
  };

  return (
    <motion.nav
      {...props}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      onDrag={(e) => e.preventDefault()}
    >
      <motion.div
        variants={sidebar}
        className={`${
          isVisible ? `block` : `hidden`
        } w-full  h-full  fixed bg-white `}
      >
        <Navigation className="pt-16 pl-6"/>
      </motion.div>

      <MenuToggle
        onMouseDown={() => {
          toggle();
        }}
        className=" hamburger-button float-right absolute"
      />
    </motion.nav>
  );
};

export default SideMenu;
