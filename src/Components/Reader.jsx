import React from 'react';
import Header_ from './Header_';
import { useState } from 'react'
import "../styles/reader.css";
import Menu from './Menu';
import nextarrow from '../assets/nextarrow.svg'
import prevarrow from '../assets/prevarrow.svg'

const Reader = ({ content, setcurr_ch, curr_ch, total_chs }) => {

    const [fontsize, setfontsize] = useState("xx-large")
    const [font, setfont] = useState("lucida")
    const [pagecolor, setpagecolor] = useState("#e7dec7")
    const [fullscreen, setfullscreen] = useState(false) //This feature to be implemented
    const [menuvisible, setmenuvisible] = useState(false)

    return (
        <div className="reader bd" style={{
            backgroundColor: pagecolor,
            color: (pagecolor == "black" ? "white" : (pagecolor == "white" ? "black" : "#5d4232")),
            fontSize: fontsize,
            fontFamily: (font == "calibri" ? `'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif` : `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`)
        }}>
            <Header_ displayfuncs={{ setmenuvisible, menuvisible }} />
            <div className="wrapper bd">
                <img onClick={() => (setcurr_ch(curr_ch != 0 ? curr_ch - 1 : curr_ch))} src={prevarrow} alt="prev chapter" />
                <div className="subwrapper">
                    <div className="content bd">
                        <div className="page_heading bd">
                            {content.slice(0, content.indexOf("\n") + 1)}
                        </div>
                        {content.slice(content.indexOf("\n") + 1)}
                    </div>
                    <p>Chapter {curr_ch+1} of {total_chs}</p>
                </div>
                <img onClick={() => (setcurr_ch(curr_ch != (total_chs - 1) ? curr_ch + 1 : curr_ch))} src={nextarrow} alt="next chapter" />
            </div>
            <Menu displayfuncs={{ setfontsize, setfont, setpagecolor, setfullscreen, setmenuvisible, menuvisible }} />
        </div>
    )
}

export default Reader