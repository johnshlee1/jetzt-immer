import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

// import ReactDOM from 'react-dom';
// import GraphiQL from 'graphiql';
// import { createGraphiQLFetcher } from '@graphiql/toolkit';

// const fetcher = createGraphiQLFetcher({
//     url: window.location.origin + '/graphql',
// });

// ReactDOM.render(
//     <GraphiQL fetcher={fetcher} editorTheme={'dracula'} />,
//     document.body,
// );

export const IndexPageTemplate = ({
    image,
}) => (
    <>
        <div
            className="landing-image"
            style={{
                backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
                    })`,
                backgroundPosition: `center`,
                backgroundAttachment: `fixed`,
            }}
        >
        </div>
    </>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <Link
                className="landing-page-image"
                to="/work"
            >
                <IndexPageTemplate
                    image={frontmatter.image}
                />
            </Link>
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage


export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100, fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`