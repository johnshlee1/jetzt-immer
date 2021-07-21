import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
// import Layout from './Layout'
import Content, { HTMLContent } from './Content'
// import intersectionobserver from ...
// import { add } from 'lodash'
// import styled from "styled-components";

class Gallery extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            index: props.startImagePosition || 0,
        }
    }

    render () {
        const { gallery } = this.props
        const length = gallery.length - 1
        console.clear()
        console.log(gallery)
        console.log(this.state.index)

        const handleNext = () => {
            const newIndex = this.state.index + 1
            this.setState({
                index: this.state.index === length ? 0 : newIndex
            })
        }

        const handlePrevious = () => {
            const newIndex = this.state.index - 1
            this.setState({
                index: this.state.index === 0 ? length : newIndex
            })
        }

        return (
            <div>
                {gallery.map((item, index) => (
                    <div className="featured-image"
                        style={{
                            ...styles.featuredImage,
                            display: index !== this.state.index ? "none" : "block"
                        }}
                    >
                        <PreviewCompatibleImage
                            imageInfo={{
                                image: item.image,
                                alt: `featured image thumbnail for post `,
                            }}
                        />
                    </div>
                ))}
                <span>
                    Image {this.state.index + 1}/{length + 1}
                </span>

                <div>
                    <button onClick={() => handlePrevious()}>Previous</button>
                    <button onClick={() => handleNext()}>Next</button>
                </div>

            </div>
        )
    }
}

class WorkRoll extends React.Component {

    render () {
        const { data } = this.props
        const { edges: works } = data.allMarkdownRemark
        const PostContent = HTMLContent || Content

        return (
            <>
                <main className="container" style={styles.container}>
                    {works &&
                        works.map(({ node: work }) => {
                            const { gallery } = work.frontmatter

                            return (
                                <>
                                    <section
                                        style={styles.section, { backgroundColor: work.frontmatter.color }}
                                    >
                                        <article className="work-list-item content"
                                            key={work.id}
                                            style={styles.content}
                                        >

                                            <header
                                                style={styles.header}
                                            >

                                                <h1 id={work.frontmatter.title.split(' ').join('_')}
                                                    className="title"
                                                    style={styles.title}
                                                >

                                                    <a href={"#" + work.frontmatter.title.split(' ').join('_')}
                                                        style={styles.anchor}
                                                    >
                                                        {work.frontmatter.title}
                                                    </a>

                                                </h1>

                                                <PostContent
                                                    description={work.frontmatter.description}
                                                    style={styles.description}
                                                />

                                            </header>

                                            <Gallery gallery={gallery} startImagePosition={0} />

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