import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
// import Layout from './Layout'
import Content, { HTMLContent } from './Content'
// import styled from "styled-components";

class WorkRoll extends React.Component {
    render () {
        const { data } = this.props
        const { edges: posts } = data.allMarkdownRemark
        const PostContent = HTMLContent || Content
        let total = 0
        let count = 0
        // const imgTotal = () => {

        // }
        // const imgCount = () => {

        // }

        return (
            <>
                <main className="container" style={styles.container}>
                    {posts &&
                        posts.map(({ node: post }) => {
                            const { gallery } = post.frontmatter
                            return (
                                <>
                                    <section
                                        style={styles.section, { backgroundColor: post.frontmatter.color }}
                                    >
                                        <article className="work-list-item content"
                                            key={post.id}
                                            style={styles.content}
                                        >

                                            <header
                                                style={styles.header}
                                            >

                                                <h1 id={post.frontmatter.title.split(' ').join('_')}
                                                    className="title"
                                                    style={styles.title}
                                                >

                                                    <a href={"#" + post.frontmatter.title.split(' ').join('_')}
                                                        style={styles.anchor}
                                                    >
                                                        {post.frontmatter.title}
                                                    </a>

                                                </h1>

                                                <PostContent
                                                    description={post.frontmatter.description}
                                                    style={styles.description}
                                                />

                                                <span>
                                                    Image {count}/{total}
                                                </span>

                                            </header>

                                            {!!gallery && gallery.map(({ image }) => (
                                                <>
                                                    {image ? (
                                                        <div className="featured-image"
                                                            style={styles.featuredImage}
                                                        >
                                                            <PreviewCompatibleImage
                                                                imageInfo={{
                                                                    image: image,
                                                                    alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                                                }}
                                                            />
                                                        </div>
                                                    ) : null
                                                    }
                                                </>
                                            ))}
                                        </article>

                                    </section>
                                </>
                            )
                        }
                        )})

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
                gallery {
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

export const styles = {
    // container: {
    //     width: '100%',
    //     margin: '0px',
    //     padding: '0px',
    //     position: 'relative',
    // },
    section: {
        width: '90%',
        margin: '10px',
        padding: '10px',
    },
    content: {
        width: '100%',
        margin: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
    },
    header: {
        width: '20%',
        margin: '0',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        width: '100%',
    },
    anchor: {
        width: '100%',
        color: '#ED1C24',
        size: '15px',
        textDecoration: 'none'
    },
    featuredImage: {
        width: '1067px',
        height: '683px',
        margin: '0',
        padding: '0',
    },
    description: {
        width: '100%',
        margin: '0',
        padding: '0',
        color: '#ED1C24',
        size: '14px',
    }
}