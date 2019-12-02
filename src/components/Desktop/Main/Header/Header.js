import React from "react";
import './Header.css'

const Header = () => {
    const title = 'Header!';

    return (
        <div className='header mb-3 p-1'>
            <div className='row'>
                <div className='col-6'>Welcome to</div>
                <div className='col-6'>{title}</div>
            </div>
            
        </div>
    )
}

export default Header;