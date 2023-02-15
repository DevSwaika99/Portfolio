import React from 'react';
import { Link } from 'react-router-dom';
import './Footlink.css';

const Footlink = ({ phrase, link, toAdress }) => {
    return (
        <div className='footer-link'>
            {phrase}
            <Link to={toAdress} className='footer-link-element'>
                {link}
            </Link>
        </div>
    );
};

export default Footlink;