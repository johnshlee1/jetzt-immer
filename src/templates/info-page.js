import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const InfoPageTemplate = ({
    address,
    contact,
    social,
    about,
    cv,
    image,
    imprint,
    developer,
    copyright,
    contentComponent
}) => {
    const PageContent = contentComponent || Content

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="section">
                            {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2> */}
                            {/* <img src={image} alt="jetzt-immer" style={{ width: '88px' }} /> */}
                            <div
                                className="full-width-image margin-top-0"
                                style={{
                                    backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image
                                        })`,
                                    backgroundPosition: `center`,
                                    backgroundAttachment: `fixed`,
                                }}
                            >
                            </div>
                            <PageContent
                                className="Content"
                                address={address}
                                contact={contact}
                                social={social}
                                about={about}
                                cv={cv}
                                imprint={imprint}
                                developer={developer}
                                copyright={copyright}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const InfoPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <InfoPageTemplate
                contentComponent={HTMLContent}
                // title={post.frontmatter.title}
                image={post.frontmatter.image}
                address={post.frontmatter.address}
                contact={post.frontmatter.contact}
                social={post.frontmatter.social}
                about={post.frontmatter.about}
                cv={post.frontmatter.cv}
                imprint={post.frontmatter.imprint}
                developer={post.frontmatter.developer}
                copyright={post.frontmatter.copyright}
            />
        </Layout>
    )
}

export default InfoPage

export const infoPageQuery = graphql`
    query InfoPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "info-page" } }) {
            frontmatter {
                address
                contact
                social
                about
                cv
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                imprint
                developer
                copyright
            }
        }
    }
`