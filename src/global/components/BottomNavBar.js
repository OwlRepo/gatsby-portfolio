import React, { useState } from 'react'
import '../../global/components/styles/BottomNavBar.scss'
import buttonProp from '../../global/components/constants/NavBarButtons';
import {Link} from 'gatsby';
export default function BottomNavBar() {
    const [selectedIndex, setSelectedIndex] = useState(1);
    return (
        <div className='navigation-bar'>
            <div className='navigation-bar__container'>
                {buttonProp.map((val,index) => {
                    return(
                        <Link to={'/'+val.link} className='navigation-bar__button-linked-text' key={index}>
                            <button className='navigation-bar__button' onClick={() => { setSelectedIndex(index) }}>
                                <img src={val.imgSource}
                                    className={selectedIndex === index ?
                                        'navigation-bar__button-icon-focused'
                                        :
                                        'navigation-bar__button-icon'
                                    }
                                    alt={val.link + " icon"}
                                />
                            </button>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
