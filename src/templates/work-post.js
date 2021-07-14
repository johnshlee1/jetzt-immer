import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export const WorkPostTemplate = ({
    contentComponent,
    description,
    title,
    helmet,
    image,
    color
}) => {
    const PostContent = HTMLContent || Content

    return (
        <section className="section"
            style={{ backgroundColor: color }}
        >
            {helmet || ''}
            <h1 className="title">
                {title}
            </h1>
            {/* <div
                className="full-width-image margin-top-0"
                style={{
                    backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
                        })`,
                    backgroundPosition: `center`,
                    backgroundAttachment: `fixed`,
                }}
            >
            </div> */}
            {image ? (
                <div className="featured-image"
                // style={styles.featuredImage}
                >
                    <PreviewCompatibleImage
                        imageInfo={{
                            image: image,
                            alt: `featured image thumbnail for post ${title}`,
                        }}
                    />
                </div>
            ) : null}
            <PostContent description={description} />
        </section>
    )
}

const WorkPost = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <WorkPostTemplate
                helmet={
                    <Helmet titleTemplate="%s | Work">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                        // description={`${post.html}`}
                        />
                    </Helmet>
                }
                title={post.frontmatter.title}
                // description={post.html}
                image={post.frontmatter.image}
            // contentComponent={HTMLContent}
            />
        </Layout>
    )
}

WorkPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
}

export default WorkPost

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description

                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                        ...GatsbyImageSharpFluid
                        }
                    }
                    }
                
               color
            }
        }
    }
`
