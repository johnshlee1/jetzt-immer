import React from 'react'
// import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
// import instagram from '../img/social/instagram.svg'
// import Layout from '../components/Layout'
// import infoPageQuery from '../templates/info-page'
import Content, { HTMLContent } from './Content'


class Footer extends React.Component {
    render () {
        const { data } = this.props
        const { frontmatter } = data.markdownRemark
        const PageContent = HTMLContent || Content

        return (
            <div className="footer">
                <div className="logo">
                    StudioJI
                    {/* <img src={logo} alt="Kaldi" style={{ width: '14em', height: '10em' }} /> */}
                </div>
                <div className="content">
                    <div className="container">
                        <div style={{ maxHeight: '80vw' }} className="rows">
                            <div className="row">
                                <PageContent
                                    className="Content-Footer"
                                    // contentComponent={HTMLContent}
                                    address={frontmatter.address}
                                    social={frontmatter.social}
                                    contact={frontmatter.contact}
                                    imprint={frontmatter.imprint}
                                    developer={frontmatter.developer}
                                    copyright={frontmatter.copyright}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
                query FooterQuery {
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
            `}
        render={(data, count) => <Footer data={data} count={count} />}
    />
)