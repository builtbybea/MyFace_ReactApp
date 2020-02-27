import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header>
            <nav id="navContainer">
                <a className="navLogo">MyFace</a>
                <ul className="navLinks">
                    <li>
                        <a>Posts</a>
                    </li>
                    <li>
                        <a>Users</a>
                    </li>
                    <li>
                        <a>Privacy</a>
                    </li>
                    <li>
                        <a>Create</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
    
}

export {Header};