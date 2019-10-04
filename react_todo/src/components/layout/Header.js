import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="about"> About</Link>
        </header>
    )
}

const linkStyle = {
    color: 'white'
}

export default Header;