import React from 'react'
import PropTypes from 'prop-types'
import { WorkPostTemplate } from '../../templates/work-post'

const WorkPostPreview = ({ entry, widgetFor, getAsset }) => {
    const data = entry.getIn(['data']).toJS()

    if (data) {
        return (
            <WorkPostTemplate
                title={data.title}
                description={data.description}
                // description={widgetFor('body')}
                image={getAsset(data.image)}
                color={data.color}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

WorkPostPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
}

export default WorkPostPreview
