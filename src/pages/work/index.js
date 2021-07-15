import React from 'react'

import Layout from '../../components/Layout'
import WorkRoll from '../../components/WorkRoll'
import Footer from '../../components/Footer'

export default class WorkIndexPage extends React.Component {
    render () {
        return (
            <>
                <Layout>
                    <WorkRoll />
                    <Footer />
                </Layout>
            </>
        )
    }
}