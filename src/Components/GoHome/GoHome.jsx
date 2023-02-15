import React from 'react'
import homeIconWhite from './../../assets/home_white.png'
import homeIconBlack from './../../assets/home_black.png'
import './GoHome.css'; 

import { useNavigate,useLocation } from 'react-router-dom';


const GoHome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const whiteBtn = location.pathname === '/';    
    return (
        <button 
            className={`go-home-btn ${whiteBtn ? 'white-bkg' : 'gradient-bkg'}`}
            onClick={()=>navigate('/')}
        >
            <img 
                className='home-icon'
                src={whiteBtn ? homeIconBlack : homeIconWhite}
                alt='home-icon'
            />
        </button>
    )
}

export default GoHome;