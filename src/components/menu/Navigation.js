/* eslint react/prop-types: 0 */

import React from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import "../../css/style.css";
import { Link } from "gatsby";
import "../../css/menu.css";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const links = [
  {
    route: `/projects`,
    title: `PROJECTS`,
  },
  // {
  //   route: `/resume`,
  //   title: `RESUME`,
  // },
  {
    route: `/contact`,
    title: `SAY HELLO`,
  },
];

const Navigation = (props) => {
  return (
    <motion.ul className="w-auto  motion-ul" {...props} variants={variants}>
      {links.map((link) => (
        <Link className="menu-link " key={link.title} to={link.route}>
          <MenuItem title={link.title} />
        </Link>
      ))}
    </motion.ul>
  );
};

export default Navigation;
