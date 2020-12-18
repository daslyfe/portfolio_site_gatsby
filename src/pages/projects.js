/* eslint react/prop-types: 0 */
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import PostLink from "../components/post-link";
import BoxAnimate from "../components/boxAnimate.js";

const ProjectPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const regx = /\/(.*?)\//;
  const Posts = edges
    .filter((edge) => regx.exec(edge.node.frontmatter.slug)[0] === "/projects/") // You can filter your posts based on some criteria
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <Layout>
      <SEO title="projects" />
      <BoxAnimate childClassName="bg-white w-full  md:w-64 m-1 relative transition-all duration-300 hover:shadow-2xl shadow">
        {Posts}
      </BoxAnimate>
    </Layout>
  );
};

export default ProjectPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
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
