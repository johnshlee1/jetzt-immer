import React, { useRef } from 'react'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'

export const InnerText = ({ text }) => {
    if (text === "Previous") {
        return (
            <>
                <span style={{ position: "absolute", paddingTop: "1.5px", right: "1px" }}><IoMdArrowBack /></span>
                <span style={{ position: "absolute" }}>{text}</span>
            </>
        )
    } else {
        return (
            <>
                <span style={{ position: "absolute", right: "1px" }}>{text}</span>
                <span style={{ position: "absolute", paddingTop: "2px" }}><IoMdArrowForward /></span>
            </>
        )
    }
}

const Cursor = ({ text, onClick }) => {
    const cursor = useRef(null)
    const changePosition = (e) => {
        cursor.current.style.top = `${e.clientY}px`;
        cursor.current.style.left = `${e.clientX}px`;
    }
    const disappear = () => {
        cursor.current.style.opacity = "0"
    }
    const appear = () => {
        cursor.current.style.opacity = "1"
    }

    return (
        <div
            className={text + " cursor"}
            onMouseMove={changePosition}
            onMouseEnter={appear}
            onMouseLeave={disappear}
            onClick={onClick}
        >
            <div className="cursor-style" ref={cursor} >
                <InnerText text={text} />
            </div>
        </div>
    )
}

export default Cursor