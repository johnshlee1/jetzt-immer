import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

export const HTMLContent = ({
    content,
    style,
    className
}) => {
    content = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(content).toString();

    return (
        <>
            {content ? <div className={className + " HTMLContent"} style={style} dangerouslySetInnerHTML={{ __html: content }} /> : null}
        </>
    )
}

const Content = ({
    content,
    style,
    className
}) => (
    <>
        {content ? <div className={"Content " + className} style={style}>{content}</div> : null}
    </>
)

Content.propTypes = {
    content: PropTypes.node,
    className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
