import React from 'react';
import './Footer.scss';

function Footer() {
    return (
        <footer id="footerContainer">
            <div className="footerInfo">&copy; 2020 - MyFace</div> <div className="footerLink" ><a href={""}>Privacy</a></div>
        </footer>
    );

}

export {Footer};