import React, {useState} from 'react';
import './Create.scss';
import {Posts} from "../Posts/Posts";

 function Create () {
     const [userID, setUserID] = useState("");
     const [imgUrl, setImgUrl] = useState("");
     const [userMessage, setUserMessage] = useState("");
     
     function updateUserID(event) {
         // setMyData(event.target.value);
         setUserID(event.target.value);
     }
     
     function updateImgUrl(event) {
         setImgUrl(event.target.value);
     }
     
     function updateUserMessage(event) {
        setUserMessage(event.target.value);
     }
     
     function handleChange(event) {
         this.setState({});
     }
     function handleSubmit(event) {
         
         // alert(`A new post was submitted`);
      
         event.preventDefault();
         //redirect to post page, use Redirect
     }
     
     return (
         <form onSubmit={handleSubmit}>
             <label>
                 Please enter your User ID <br/> <input type = "text" value={userID} placeholder="Enter your User ID" onChange={updateUserID}/>
                 <br/>
                 Enter your Image URL <br/> <input type="text" value={imgUrl} onChange={updateImgUrl}/>
                 <br/>
                 Enter your message? <br/> <textarea rows="4" cols="50" value={userMessage} placeholder="What's on your mind" onChange={updateUserMessage}/>
                 <br/>
             </label>
             <input type ="submit" value="Submit" />
         </form>
     )
 }




// posts.push(<Post data = {items[i]} />);

//What's your user id
//Message What's on your mind?
//Enter Image URL
//Submit Button

export {Create};