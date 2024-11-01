import React from 'react';
import Header_ from './Header_';
import { useState } from 'react'
import "../styles/reader.css";
import Menu from './Menu';

const Reader = ({ content }) => {

    const [fontsize, setfontsize] = useState(12)
    const [font, setfont] = useState("aerial")
    const [pagecolor, setpagecolor] = useState("black")
    const [fullscreen, setfullscreen] = useState(false)
    const [menuvisible, setmenuvisible] = useState(false)

    return (
        <div className={"reader bd" + "background-color:" + {pagecolor}}>
            <Header_ />
            <div className="content bd">
                {content}
            </div>
            <Menu />
        </div>
    )
}

export default Reader