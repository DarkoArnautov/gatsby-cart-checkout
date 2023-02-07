import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ProductImage = ({ path, alt }) => {
  const images = useStaticQuery(graphql`
    query allProductsImage {
      files: allFile(filter: {relativeDirectory: {eq: "products"}}) {
        nodes {
          childImageSharp {
            gatsbyImageData (
              webpOptions: { quality: 100 }
              blurredOptions: { toFormat: WEBP }
            )
          }
          relativePath
        }
      }
    }
  `);

  const currentProduct = images.files.nodes.filter((item) => path?.includes(item.relativePath));
  return(
    <GatsbyImage image={getImage(currentProduct[0]?.childImageSharp?.gatsbyImageData)} alt={alt} />
  );
}

export default ProductImage;