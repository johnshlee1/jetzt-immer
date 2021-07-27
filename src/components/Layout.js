import React from 'react'
import { Helmet } from 'react-helmet'
// import FooterPage from '../templates/footer-page'
import Navbar from '../components/Navbar'
import './all.sass'
// import useSiteMetadata from './SiteMetadata'
import { withPrefix, graphql, StaticQuery } from 'gatsby'
// import { pageQuery } from '../templates/work-post'

const TemplateWrapper = ({
    children,
    color,
}) => {
    // const { frontmatter } = data.markdownRemark /*useSiteMetadata()*/
    return (
        <>
            <StaticQuery
                query={graphql`
                        query TemplateWrapperQuery {
                            markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
                                frontmatter {
                                    title
                                    description
                                }
                            }
                        }
                    `}
                render={data => (
                    <>
                        <Helmet>
                            <html lang="en" />
                            <title>{data.markdownRemark.frontmatter.title}</title>
                            <meta name="description" content={data.markdownRemark.frontmatter.description} />
                            <link
                                rel="apple-touch-icon"
                                sizes="180x180"
                                href={`${withPrefix('/')}img/apple-touch-icon.png`}
                            />
                            <link
                                rel="icon"
                                type="image/png"
                                href={`${withPrefix('/')}img/favicon-32x32.png`}
                                sizes="32x32"
                            />
                            <link
                                rel="icon"
                                type="image/png"
                                href={`${withPrefix('/')}img/favicon-16x16.png`}
                                sizes="16x16"
                            />

                            <link
                                rel="mask-icon"
                                href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                                color="#ff4400"
                            />
                            <meta name="theme-color" content="transparent" />

                            <meta property="og:type" content="business.business" />
                            <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
                            <meta property="og:url" content="/" />
                            <meta
                                property="og:image"
                                content={`${withPrefix('/')}img/og-image.jpg`}
                            />
                        </Helmet>
                    </>
                )}
            />
            <div className="container">
                <Navbar />
                {/* <article> */}
                {children}
                {/* </article> */}
            </div>
        </>
    )
}

export default TemplateWrapper

