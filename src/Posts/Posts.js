import React from 'react';
import './Posts.scss';
import {useState, useEffect} from 'react';
import moment from "moment";


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
            <section>
                 <ul className="userContainer">
                     {posts} 
                 </ul>
            </section>
        );
}


function Post(props) {
    return (
      
            <div className="userPost">
                <div className="imgDiv">
                    <img className="postedImg" src= {props.data.imageUrl} />  
                </div>
               
                <div className= "userMessage">
                    <div className="userText">
                        <p>{props.data.message}</p>
                    </div>
                       
                    
                    <div className="userInfo">
                        <img className="userAvatar" src={props.data.postedBy.profileImageUrl}/>
                        <div>
                            <p className="userName">{props.data.postedBy.firstName}</p>
                            <p className="postedAt">{moment(props.data.postedAt).format("MMM Do YY")}</p>
                        </div>
                    </div>
                   
                </div>
            </div>
       
        
    );
}

export {Posts};