import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import Content, { HTMLContent } from './Content'
import Cursor from './Cursor'
// import intersectionobserver from ...
// import { add } from 'lodash'

class Gallery extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            index: props.startImagePosition || 0,
        }
    }

    render () {
        const { title } = this.props
        const { gallery } = this.props
        const { video } = this.props
        const { description } = this.props
        const length = gallery.length - 1
        const imgIndex = this.state.index
        const PostContent = HTMLContent || Content

        const handleNext = () => {
            const newIndex = imgIndex + 1
            this.setState({
                index: imgIndex === length ? 0 : newIndex
            })
        }

        const handlePrevious = () => {
            const newIndex = imgIndex - 1
            this.setState({
                index: imgIndex === 0 ? length : newIndex
            })
        }

        return (
            <>
                {/* header--------------------------------------------------------------------- */}
                <div id={title.split(' ').join('_')} className="mar-top">
                    <video autoplay="" loop="" style={{ width: "100px" }}>
                        <source src={video} />
                    </video>
                </div>
                <div className="mar-left"></div>
                <div className="mar-right"></div>

                <header>
                    <h1>
                        <a href={"#" + title.split(' ').join('_')}>
                            {title}
                        </a>
                    </h1>

                    <PostContent
                        className="description"
                        content={description}
                    />

                    <span>
                        Image {imgIndex + 1}/{length + 1}
                    </span>
                    <div className="border"></div>
                </header>

                {/* gallery -------------------------------------------------------------------- */}
                <div className="gallery">

                    <div className="prev-next">
                        <Cursor text="Previous" onClick={handlePrevious} />
                        <Cursor text="Next" onClick={handleNext} />
                    </div>

                    {gallery.map((item, index) => (
                        <div className="work-image-box"
                            style={{
                                display: index !== imgIndex ? "none" : "block"
                            }}
                        >
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: item.image,
                                    alt: `image of ${title}`,
                                }}
                                className="work-image-size"
                            />

                        </div>
                    ))}
                </div>
                <div className="mar-bot"></div>

            </>
        )
    }
}

class Work extends React.Component {
    render () {
        const { data } = this.props
        const { edges: works } = data.allMarkdownRemark

        return (
            <>
                {works &&
                    works.map(({ node: work }) => {
                        const { gallery } = work.frontmatter
                        const { title } = work.frontmatter
                        const { description } = work.frontmatter
                        const { video } = work.frontmatter
                        const { color } = work.frontmatter
                        const { cursorNext } = work.frontmatter
                        const { cursorPrev } = work.frontmatter

                        return (
                            <>
                                <article key={work.id} style={{ backgroundColor: color }}>
                                    <Gallery
                                        title={title}
                                        description={description}
                                        gallery={gallery}
                                        video={video.publicURL}
                                        startImagePosition={0}
                                        cursorNext={cursorNext}
                                        cursorPrev={cursorPrev}
                                    />
                                </article>
                            </>
                        )
                    }
                    )}
            </>
        )
    }
}



class WorkRoll extends React.Component {

    render () {
        const { data } = this.props

        return (
            <>
                <Work data={data} />
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
                            fluid(maxWidth: 1536, quality: 100, fit: COVER) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                video{
                    publicURL
                }
                color
              }
            }
          }
        }
      }
    `}
        render={(data) => <WorkRoll data={data} />}
    />
)