/*eslint-disable*/ 


import PropTypes from "prop-types";
import React from "react";
import "../css/style.css";

import Header from "./header";
import { faYoutube, faGithub, faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Layout(props) {

  return (
    <div  >
      <Header />

      <main className="absolute inset-0 flex-1 w-full max-w-6xl pt-16  px-4 mx-auto md:px-8 md:py-24">

        {props.children}
        <x-spacer/>
       
      </main>
    
      <footer className="bg-blue-700 fixed bottom-0 w-full drop-shadow z-30">
      
        <nav className="flex justify-end max-w-6xl p-0 mx-auto text-3xl ">
          
            <a
              className="footer-button"
              href="https://github.com/daslyfe"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faGithub} />
            </a>
  
            <a
              className="footer-button"
              href="https://www.youtube.com/channel/UC-LsL7haDdBQ9zvH_3LHIrw"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faYoutube} />
            </a>
            {/* <a
              className="footer-button"
              href="https://www.instagram.com/jade_rose_is_real/"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faInstagram} />
            </a> */}
          
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
