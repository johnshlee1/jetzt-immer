import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

export const HTMLContent = ({
    description,
    address,
    contact,
    social,
    about,
    cv,
    imprint,
    developer,
    copyright,
    className
}) => {

    //     html.forEach(item => {
    //         item = remark()
    //             .use(recommended)
    //             .use(remarkHtml)
    //             .processSync(item).toString();
    //     })
    // };
    // const dangerHTML = (cb) => {
    //     return cb.map(item => {
    //         return item ? <div
    //             className={"HTMLContent"}
    //             dangerouslySetInnerHTML={{ __html: item }}
    //         />
    //             : null
    //     })
    // }

    description = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(description).toString();
    address = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(address).toString();
    contact = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(contact).toString();
    social = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(social).toString();
    about = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(about).toString();
    cv = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(cv).toString();
    imprint = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(imprint).toString();
    developer = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(developer).toString();
    copyright = remark()
        .use(recommended)
        .use(remarkHtml)
        .processSync(copyright).toString();

    return (
        <>
            {description ? <div className={"description-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: description }} /> : null}
            {address ? <div className={"address-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: address }} /> : null}
            {contact ? <div className={"contact-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: contact }} /> : null}
            {social ? <div className={"social-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: social }} /> : null}
            {about ? <div className={"about-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: about }} /> : null}
            {cv ? <div className={"cv-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: cv }} /> : null}
            {imprint ? <div className={"imprint-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: imprint }} /> : null}
            {developer ? <div className={"developer-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: developer }} /> : null}
            {copyright ? <div className={"copyright-" + "HTMLContent"} dangerouslySetInnerHTML={{ __html: copyright }} /> : null}
        </>
    )
}

const Content = ({
    description,
    address,
    contact,
    social,
    about,
    cv,
    imprint,
    developer,
    copyright,
    className
}) => (
    <>
        {description ? <div className={"description-" + className}>{description}</div> : null}
        {address ? <div className={"address-" + className}>{address}</div> : null}
        {contact ? <div className={"contact-" + className}>{contact}</div> : null}
        {social ? <div className={"social-" + className}>{social}</div> : null}
        {about ? <div className={"about-" + className}>{about}</div> : null}
        {cv ? <div className={"cv-" + className}>{cv}</div> : null}
        {imprint ? <div className={"imprint-" + className}>{imprint}</div> : null}
        {developer ? <div className={"developer-" + className}>{developer}</div> : null}
        {copyright ? <div className={"copyright-" + className}>{copyright}</div> : null}
    </>
)

Content.propTypes = {
    content: PropTypes.node,
    className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
