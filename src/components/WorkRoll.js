import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Layout from './Layout'
import Content, { HTMLContent } from './Content'
// import styled from "styled-components";

class WorkRoll extends React.Component {
    render () {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        // const { image } = posts.node.frontmatter.galleryImages
        const PostContent = HTMLContent || Content
        let total = 0
        let count = 0
        // const imgTotal = () => {

        // }
        // const imgCount = () => {

        // }
        // const styles = {
        //     container: {
        //         width: '100%',
        //         margin: '10px',
        //         padding: '10px',
        //         backgroundColor: post.frontmatter.color,
        //     },
        //     section: {
        //         width: '90%',
        //         margin: '10px',
        //         padding: '10px',
        //     },
        //     content: {
        //         width: '100%',
        //         margin: '10px',
        //         padding: '10px',
        //     },
        //     header: {
        //         width: '20%',
        //         margin: '10px',
        //         padding: '10px',
        //         display: 'flex',
        //         flexDirection: 'column',
        //     },
        //     title: {
        //         width: '100%',
        //     },
        //     anchor: {
        //         width: '100%',
        //         color: '#ED1C24',
        //         size: '15px',
        //     },
        //     featuredImage: {
        //         width: '80%',
        //         margin: '10px',
        //         padding: '10px',
        //     },
        //     description: {
        //         width: '100%',
        //         margin: '10px',
        //         padding: '10px',
        //         color: '#ED1C24',
        //         size: '14px',
        //     }
        // }
        return (
            <>
                <main className="container" >
                    {posts &&
                        posts.map(({ node: post }) => (
                            <>
                                <section
                                // style={styles.section}
                                >
                                    <article className="work-list-item content"
                                        key={post.id}
                                    // style={styles.content}
                                    >

                                        <header
                                        // style={styles.header}
                                        >

                                            <h1 id={post.frontmatter.title.split(' ').join('_')}
                                                className="title"
                                            // style={styles.title}
                                            >

                                                <a href={"#" + post.frontmatter.title.split(' ').join('_')}
                                                // style={styles.anchor}
                                                >
                                                    {post.frontmatter.title}
                                                </a>

                                            </h1>

                                            <PostContent
                                                description={post.frontmatter.description}
                                            // style={styles.description}
                                            />

                                            <span>
                                                Image {count}/{total}
                                            </span>

                                        </header>

                                        {/* this needs to be a image slide */}
                                        {post.frontmatter.galleryImages.image ? (
                                            <div className="featured-image"
                                            // style={styles.featuredImage}
                                            >
                                                <PreviewCompatibleImage
                                                    imageInfo={{
                                                        image: post.frontmatter.galleryImages.image,
                                                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                                    }}
                                                />
                                            </div>
                                        ) : null}
                                        <Link to={post.fields.slug}>
                                            Keep Reading →
                                        </Link>
                                    </article>

                                </section>
                            </>
                        ))}
                </main>
            </>
        )
    }
}

WorkRoll.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export default () => (
    <StaticQuery
        query={graphql`
      query WorkRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              html
              frontmatter {
                title
                templateKey
                description
                galleryImages{
                    image {
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                color
              }
            }
          }
        }
      }
    `}
        render={(data, count) => <WorkRoll data={data} count={count} />}
    />
)