import React from 'react'
import fontIcon from '../assets/fontIcon.svg'

const Menu = ({displayfuncs}) => {
    return (
        <div className="menu bd" style={{right: ( displayfuncs.menuvisible ? `0` : `-400px`)}}>
            <div>
                Font
                <div className="font-options">
                    <div onClick={()=>{displayfuncs.setfont("calibri")}} >
                        <img src={fontIcon} alt="calibri" className='font-calibri' />
                        <p>Calibri</p>
                    </div>
                    <div onClick={()=>{displayfuncs.setfont("lucida")}} >
                        <img src={fontIcon} alt="lucida" className='font-lucida' />
                        <p>Lucida</p>
                    </div>
                </div>
            </div>
            <div>
                Page Color
                <div
                    className="page-color-options">
                    <div onClick={()=>{displayfuncs.setpagecolor("black")}} className='circle circle-black'></div>
                    <div onClick={()=>{displayfuncs.setpagecolor("white")}} className='circle circle-white'></div>
                    <div onClick={()=>{displayfuncs.setpagecolor("#e7dec7")}} className='circle circle-beige'></div>
                </div>
            </div>
        </div>
    )
}

export default Menu