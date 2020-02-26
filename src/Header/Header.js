import React from 'react';
import './Header.scss';

function Header() {
    return (
        <header>
            <nav>
                <a>MyFace</a>
                <ul>
                    
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