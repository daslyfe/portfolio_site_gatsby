/*eslint-disable*/

import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/style.css";
import mephoto from "../images/mee.jpeg";
import {
  faYoutube,
  faInstagram,
  faGithub,
  faPhone,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const contactContent = (
  <section className="post-content">
    <x-container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br />
        <img
          style={{ borderRadius: "50%" }}
          className="opacity-100 w-1/4 inset-0 "
          src={mephoto}
        ></img>
        <br />
        <p className="text-center">
          software engineer, experimenter, tinkerer living in Boston Ma{" "}
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul>
            <li>React</li>
            <li>Javascript</li>
            <li>nodeJS</li>
            <li>PHP</li>
            <li>Shopify/Liquid</li>
            <li>C++</li>
            <li>Unity/C#</li>
          </ul>
        </div>
        <p className="text-2xl text-center pt-8">
          <FontAwesomeIcon className="mr-4" icon={faEnvelope} />
          JadeRowlandDev@gmail.com
        </p>
        <nav className="flex justify-center  pb-8 mx-auto text-3xl ">
          {/* <a
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
        </a> */}
          {/* <a
              className="footer-button"
              href="https://www.instagram.com/jade_rose_is_real/"
              target="_blank"
              rel="noopener noreferrer"
            >
             <FontAwesomeIcon icon={faInstagram} />
            </a>  */}
        </nav>
      </div>
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
