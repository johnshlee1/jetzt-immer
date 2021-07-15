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
            <div className="container">
                <div className="columns" style={styles.columns}>
                    <section className="column" style={styles.column}>
                        <PageContent
                            className="Content"
                            address={address}
                        />
                    </section>
                    <section className="column" style={styles.column}>
                        <PageContent
                            contact={contact}
                        />
                    </section>
                    <section className="column" style={styles.column}>
                        <PageContent
                            social={social}
                        />
                    </section>
                    <section className="column" style={styles.column}>
                        <PageContent
                            about={about}
                        />
                    </section>
                    <section className="column" style={styles.column}>
                        <PageContent
                            cv={cv}
                        />
                    </section>
                    <section className="column" style={styles.column}>
                        <PageContent
                            imprint={imprint}
                        />
                    </section>
                    <section className="column" style={styles.column}>
                        <PageContent
                            developer={developer}
                        />
                    </section>
                    <section className="column" style={styles.column}>
                        <PageContent
                            copyright={copyright}
                        />
                    </section>
                    <section className="column" style={styles.column}>
                        {/* <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2> */}
                        {/* <img src={image} alt="jetzt-immer" style={{ width: '88px' }} /> */}
                        {image ? (
                            <div className="featured-image"
                            // style={styles.featuredImage}
                            >
                                <PreviewCompatibleImage
                                    imageInfo={{
                                        image: image,
                                        alt: `jetzt-immer studio picture`,
                                    }}
                                />
                            </div>
                        ) : null
                        }
                    </section >
                </div>
            </div>
        </>
    )
}


const InfoPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <InfoPageTemplate
                // contentComponent={HTMLContent}
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

export const styles = {
    // container: {
    //     width: '100%',
    // },
    columns: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    column: {
        width: '100%',
    }
}