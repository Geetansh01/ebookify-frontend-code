import React from 'react';
import Header_ from './Header_';
import { useState } from 'react'
import "../styles/reader.css";
import Menu from './Menu';

const Reader = ({ content }) => {

    const [fontsize, setfontsize] = useState("xx-large")
    const [font, setfont] = useState("lucida")
    const [pagecolor, setpagecolor] = useState("#e7dec7")
    const [fullscreen, setfullscreen] = useState(false)
    const [menuvisible, setmenuvisible] = useState(true)

    return (
        <div className="reader bd" style={{
            backgroundColor: pagecolor,
            color: (pagecolor == "black" ? "white" : (pagecolor == "white" ? "black" : "#5d4232")),
            fontSize: fontsize,
            fontFamily: (font == "calibri" ? `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif` : `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`)
            }}>
            <Header_ displayfuncs={{setmenuvisible, menuvisible}} />
            <div className="content bd">
                {content}
            </div>
            <Menu displayfuncs={{setfontsize, setfont, setpagecolor, setfullscreen, setmenuvisible, menuvisible}}/>
        </div>
    )
}

export default Reader