import React, { useState } from 'react'
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
}) => {
    const PageContent = HTMLContent || Content
    const [display, setDisplay] = useState('off');
    return (
        <>
            <div className="info-grid" >

                <section className="contact-area">
                    <PageContent
                        className="address content"
                        content={address}
                    />
                    <PageContent
                        className="name content"
                        content={contact}
                    />
                    <PageContent
                        className="social content"
                        content={social}
                    />
                </section>

                <section className="about-area" >
                    <PageContent
                        className="about content"
                        content={about}
                    />
                </section>

                <section className="cv-area" >
                    <PageContent
                        className="cv content"
                        content={cv}
                    />
                </section>

                <section className="info-image-area" >
                    {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2> */}
                    {/* <img src={image} alt="jetzt-immer" style={{ width: '88px' }} /> */}
                    {image ? (

                        <PreviewCompatibleImage
                            imageInfo={{
                                image: image,
                                alt: `jetzt-immer studio picture`,
                            }}
                            className="info-image-size"
                        />

                    ) : null
                    }
                </section >

                <section className="imprint-area">
                    <p>
                        <button
                            onClick={() => { display === 'off' ? setDisplay('on') : setDisplay('off') }}
                        >
                            Imprint
                        </button>
                    </p>
                </section>

                <section className="developer-area" >
                    <PageContent
                        className="developer content"
                        content={developer}
                    />
                </section>

                <section className="copyright-area" >
                    <PageContent
                        className="copyright content"
                        content={copyright}
                    />
                </section>

            </div>

            <section
                className="imprint-box"
                style={{
                    display: display === 'off' ? 'none' : 'block'
                }}
            >
                <PageContent
                    className="imprint content"
                    content={imprint}
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
                        fluid(maxWidth: 1024, quality: 100, fit: COVER) {
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