import React from 'react'
// import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
// import instagram from '../img/social/instagram.svg'
// import Layout from '../components/Layout'
// import infoPageQuery from '../templates/info-page'
import Content, { HTMLContent } from './Content'


class Footer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            display: false,
        }
    }

    render () {
        const { data } = this.props
        const { frontmatter } = data.markdownRemark
        const PageContent = HTMLContent || Content
        // const [display, setDisplay] = useState('off');

        return (
            <div className="footer-grid" >

                <section className="where-area">
                    <PageContent
                        className="address content"
                        content={frontmatter.address}
                    />

                    <PageContent
                        className="social content"
                        content={frontmatter.social}
                    />
                </section>

                <section className="who-area">
                    <PageContent
                        className="contact content"
                        content={frontmatter.contact}
                    />
                </section>

                <section className="imprint-area">
                    <p>
                        <button
                            onClick={() => { !this.state.display ? this.setState({ display: true }) : this.setState({ display: false }) }}
                        >
                            Imprint
                        </button>
                    </p>
                </section>

                <section className="developer-area" >
                    <PageContent
                        className="developer content"
                        content={frontmatter.developer}
                    />
                </section>

                <section className="copyright-area" >
                    <PageContent
                        className="copyright content"
                        content={frontmatter.copyright}
                    />
                </section>

                <section
                    className="imprint-box"
                    style={{
                        display: !this.state.display ? 'none' : 'block'
                    }}
                >
                    <PageContent
                        className="imprint content"
                        content={frontmatter.imprint}
                    />
                </section>

            </div>
        )
    }
}

export default () => (
    <StaticQuery
        query={graphql`
                query FooterQuery {
                    markdownRemark(frontmatter: { templateKey: { eq: "info-page" } }) {
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