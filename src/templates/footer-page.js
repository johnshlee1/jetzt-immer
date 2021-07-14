import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const FooterPageTemplate = ({
    address,
    social,
    contact,
    imprint,
    developer,
    copyright,
    contentComponent
}) => {
    const PageContent = HTMLContent || Content

    return (
        <div className="footer">
            <div className="logo">
                StudioJI
                {/* <img src={logo} alt="Kaldi" style={{ width: '14em', height: '10em' }} /> */}
            </div>
            <div className="content" style={{ backgroundColor: 'red' }}>
                <div className="container">
                    <div style={{ maxHeight: '80vw' }} className="rows">
                        <div className="row">
                            <PageContent
                                className="footer-content"
                                address={address}
                                social={social}
                                contact={contact}
                                imprint={imprint}
                                developer={developer}
                                copyright={copyright}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FooterPage = ({ data }) => {
    const { markdownRemark: post } = data

    return (
        <Layout>
            <FooterPageTemplate
                // contentComponent={HTMLContent}
                address={post.frontmatter.address}
                contact={post.frontmatter.contact}
                social={post.frontmatter.social}
                imprint={post.frontmatter.imprint}
                developer={post.frontmatter.developer}
                copyright={post.frontmatter.copyright}
            />
        </Layout>
    )
}

export default FooterPage

export const footerPageQuery = graphql`
    query FooterPageQuery {
        markdownRemark(frontmatter: { templateKey: { eq: "footer-page" } }) {
            frontmatter {
                address
                contact
                social
                imprint
                developer
                copyright
            }
        }
    }
`