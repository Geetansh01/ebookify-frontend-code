import React from 'react'
import fontIcon from '../assets/fontIcon.svg'

const Menu = () => {
    return (
        <div className="menu bd">
            <div>
                Font
                <div className="font-options">
                    <div>
                        <img src={fontIcon} alt="calibri" className='font-calibri' />
                        <p>Calibri</p>
                    </div>
                    <div>
                        <img src={fontIcon} alt="calibri" className='font-lucida' />
                        <p>Calibri</p>
                    </div>
                </div>
            </div>
            <div>
                Page Color
                <div
                    className="page-color-options">
                    <div className='circle circle-black'></div>
                    <div className='circle circle-white'></div>
                    <div className='circle circle-beige'></div>
                </div>
            </div>
        </div>
    )
}

export default Menu