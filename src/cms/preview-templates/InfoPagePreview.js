import React from 'react'
import PropTypes from 'prop-types'
import { InfoPageTemplate } from '../../templates/info-page'

const InfoPagePreview = ({ entry, widgetFor, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <InfoPageTemplate
                // title={data.title}
                image={getAsset(data.image)}
                address={data.address}
                contact={data.contact}
                social={data.social}
                about={data.about}
                cv={data.cv}
                imprint={data.imprint}
                developer={data.developer}
                copyright={data.copyright}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

InfoPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    // widgetFor: PropTypes.func,
    // getAsset: PropTypes.func,
}

export default InfoPagePreview
