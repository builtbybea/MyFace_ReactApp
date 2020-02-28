import React from 'react';
import './Header.scss';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Posts} from "../Posts/Posts";
import {Create} from "../Create/Create";


function Header() {
    return (
        <header>
            <nav id="navContainer">
                <Link to="/" className="navLogo">MyFace</Link>
                <ul className="navLinks">
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/privacy">Privacy</Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
    
}

export {Header};