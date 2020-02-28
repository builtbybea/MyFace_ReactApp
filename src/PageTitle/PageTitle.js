import React from 'react';
import './PageTitle.scss';


function PageTitle(props) {
    return (
        <section id="mainTitle">
            <h1>{props.title}</h1>
            
        </section>
    );
    
}

export {PageTitle};
