import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

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
    const PageContent = HTMLContent || Content

    return (
        <>
            <div className="info-grid" >

                <div className="info-mar-top"></div>

                <section className="contact-area">
                    <PageContent
                        className="address content"
                        address={address}
                    />
                    <PageContent
                        className="name content"
                        contact={contact}
                    />
                    <PageContent
                        className="social content"
                        social={social}
                    />
                </section>

                <section className="about-area" >
                    <PageContent
                        className="about content"
                        about={about}
                    />
                </section>

                <section className="cv-area" >
                    <PageContent
                        className="cv content"
                        cv={cv}
                    />
                </section>

                <section className="info-image-area" >
                    {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2> */}
                    {/* <img src={image} alt="jetzt-immer" style={{ width: '88px' }} /> */}
                    {image ? (
                        <div className="info-image-box"
                        // style={styles.featuredImage}
                        >
                            <PreviewCompatibleImage
                                imageInfo={{
                                    image: image,
                                    alt: `jetzt-immer studio picture`,
                                }}
                                className="info-image-size"
                            />
                        </div>
                    ) : null
                    }
                </section >

                <div className="info-margin-left"></div>
                <div className="info-margin-right"></div>

                <section className="imprint-area">
                    <span>Imprint</span>
                </section>

                <section className="developer-area" >
                    <PageContent
                        className="developer content"
                        developer={developer}
                    />
                </section>

                <div className="space"></div>

                <section className="copyright-area" >
                    <PageContent
                        className="copyright content"
                        copyright={copyright}
                    />
                </section>

                <div className="info-margin-bot"></div>

            </div>

            <section className="imprint-box" >
                <PageContent
                    className="imprint content"
                    imprint={imprint}
                />
            </section>


        </>
    )
}


const InfoPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <InfoPageTemplate
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
                markdownRemark(frontmatter: {templateKey: {eq: "info-page" } }) {
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