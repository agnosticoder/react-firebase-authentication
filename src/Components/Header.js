import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

function Header() {
    return (
        <div className="mb-10">
            <h1>Header</h1> 
            <Link to="/">Go to Dashboard</Link>
            <Logout />
        </div>
    )
}

export default Header;
