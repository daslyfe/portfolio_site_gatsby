import { Link } from "gatsby";
import React from "react";
import "../css/style.css";
import "../css/menu.css";
import Logo from "./logo.js";
import SideMenu from "./menu/SideMenu.js";
import { links } from "./menu/Navigation.js";

function Header() {
  // const [isOpen, toggleOpen] = useCycle(false, true);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <div>
      <SideMenu className="md:hidden fixed h-full z-40 mt-1 " />
      <header className="bg-white drop-shadow fixed w-full z-30">
        <div className="flex flex-wrap items-center md:justify-between justify-end max-w-6xl px-3 py-0 mx-auto ">
          <Link to="/">
            <Logo />
          </Link>

          <nav
            className={` text-3xl hidden md:flex md:items-center w-full md:w-auto`}
          >
            {links.map((link) => (
              <Link
                className="navigation-link md:inline-block md:mt-0 md:ml-6"
                key={link.title}
                to={link.route}
              >
                <p className="selector">{">"}</p>
                <p className="inline-block">{link.title}</p>
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
