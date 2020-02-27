import React from 'react';
import './Posts.scss';
import {useState, useEffect} from 'react';


function Posts() {
    const[myData, setMyData] = useState(null);
    
    useEffect(() => {
        fetch ("https://localhost:5001/posts")
            .then(response => response.json())
            .then(json => setMyData(json));
    }, []);
    
        if(!myData) {
            return <section>Waiting for info</section>
        }
        
        // items is a list of post data.
        const items = myData.items;
        
        const posts = [];
        for (let i = 0; i < items.length; i++) {
            posts.push(<Post data = {items[i]} />);
        }
        
        return (
            <section id="listOfPosts">
                {posts}
            </section>
        );
}

function Post(props) {
    return (
        <div>
            <p>{props.data.message}</p>
        </div>
    );
}

export {Posts};