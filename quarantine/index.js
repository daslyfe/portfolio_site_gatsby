/* eslint react/prop-types: 0 */
import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { contactContent } from "./contact.js";
import PostLink from "../components/post-link";
import BoxAnimate from "../components/boxAnimate.js";

// const content = (object, edge) => object = edge.node;
function IndexPage({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const regx = /\/(.*?)\//;

  const markDownPages = edges
    .filter(
      (edge) =>
        edge.node.frontmatter.type === "basepage" &&
        edge.node.frontmatter.featured === "frontpage"
    )
    .map((edge, key) => (
      <div
        key={key}
        className="w-full "
        dangerouslySetInnerHTML={{ __html: edge.node.html }}
      />
    ));

  const projectPosts = edges
    .filter(
      (edge) =>
        edge.node.frontmatter.featured === "frontpage" &&
        regx.exec(edge.node.frontmatter.slug)[0] === "/projects/"
    ) // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <Layout>
      <SEO
        keywords={[
          `jade rose`,
          `music`,
          `react`,
          `modular`,
          `electronic music`,
          `sound design`,
          `grainboy`,
        ]}
        title="Home"
      />

      <section className="">
        <div className="post-content w-full" style={{marginBottom: "-6em"}}>{markDownPages[0]}</div>
      {/* <h4 className="text-6xl pb-16 font-light  opacity-75">{">"}PROJECTS</h4> */}
   
        <BoxAnimate childClassName="bg-white w-full  md:w-64 m-2 relative transition-all duration-300 hover:shadow-2xl shadow">
          {projectPosts}
        </BoxAnimate>
        {/* <h4 className="text-6xl py-16 font-light  opacity-75">{">"}MUSIC</h4> */}
        

        <div className="post-content w-full" >{markDownPages[1]}</div>
        {contactContent}
      </section>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featured
            type
            description
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1920) {
                  srcSet
                  ...GatsbyImageSharpFluid
                }
                id
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
