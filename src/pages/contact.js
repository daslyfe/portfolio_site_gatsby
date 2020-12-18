/*eslint-disable*/ 
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/style.css";
import hex from "../images/hexbaby.png";
import { faYoutube, faInstagram, faGithub, faPhone
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const contactContent = (
  <section className="post-content">
    <x-container>
      <img className="opacity-100 w-1/4 inset-0 mx-auto pt-8 " src={hex}></img>

      <p className="text-2xl text-center pt-8">
        <FontAwesomeIcon className="mr-4" icon={faEnvelope} />
        Jade@JadeRose.red
      </p>
      <p className="text-2xl text-center pb-8">
        <FontAwesomeIcon className="mr-4" icon={faPhone} />
        (913) 602-9217
      </p>
      <nav className="flex justify-center  pb-8 mx-auto text-3xl ">
          
            <a
              className="footer-button "
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
            </a>  */}
          
        </nav>
    </x-container>
  </section>
);

function ContactPage() {
  return (
    <Layout>
      {/* <SEO keywords={[`jade rose`, `contact`, `page`]} title="Contact" /> */}
      {contactContent}
    </Layout>
  );
}

export default ContactPage;
