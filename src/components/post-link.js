/* eslint react/prop-types: 0 */
import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../css/style.css";
const PostLink = ({ post }) => {
  const [focused, changeFocused] = React.useState(false);
  const banner = focused ? (
    <h4 className="text-white font-black text-3xl pl-2 pr-2 transition-all duration-300 ">
      {post.frontmatter.title}
    </h4>
  ) : (
    <h4 className="text-white font-black text-3xl pl-2 pr-2 bg-secondary">
      {post.frontmatter.title}
    </h4>
  );

  return (
    <Link
      to={post.frontmatter.slug}
      onMouseOver={() => changeFocused(true)}
      onMouseLeave={() => changeFocused(false)}
    >
      <div
        className={`${
          focused ? `opacity-100 bg-opacity-75` : `opacity-0 bg-opacity-0`
        } w-full h-full  bg-secondary z-10 transition-all duration-300 absolute  `}
      >
        <p
          className="text-white font-sans absolute z-10 p-2 pr-4 "
          style={{ bottom: "0" }}
        >
          {post.frontmatter.date}
          <br />
          {post.frontmatter.description}
        </p>
      </div>
      <div className="p-2 ">
        <div className=" z-20 absolute ">{banner}</div>

        <div className="image">
          <Img
            fluid={post.frontmatter.image.childImageSharp.fluid}
            className="z-0"
          />
        </div>
      </div>
    </Link>
  );
};
export default PostLink;
