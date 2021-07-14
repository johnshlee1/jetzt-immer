import React from 'react'
import PropTypes from 'prop-types'
import { FooterPageTemplate } from '../../templates/footer-page'

const FooterPagePreview = ({ entry, widgetFor, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <FooterPageTemplate
                address={data.address}
                contact={data.contact}
                social={data.social}
                imprint={data.imprint}
                developer={data.developer}
                copyright={data.copyright}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

FooterPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    // widgetFor: PropTypes.func,
    // getAsset: PropTypes.func,
}

export default FooterPagePreview
