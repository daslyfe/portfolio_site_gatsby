/* eslint react/prop-types: 0 */

import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import "../css/style.css";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout  bgType="hex">
      <SEO title={frontmatter.title} />

      <div className="post-content w-full " style={{height:"96%"}} >
        <div className="w-full h-full " dangerouslySetInnerHTML={{ __html: html }} />
   
      </div>

    </Layout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
