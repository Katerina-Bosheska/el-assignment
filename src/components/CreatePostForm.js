import React from 'react';
import userPic from '../resources/user-pic.png';

const CreatePostForm = ({onAddPost}) => {

    const addPost = () => {
        let title = document.getElementById("title-input").value;
        let desc = document.getElementById("desc-input").value;
        let tags = document.getElementById("tags-input").value.split(" ", 3);
        if(title === "" || desc === ""){
            window.alert("Post must have both title and description.");
            return;
        }
        onAddPost({title, desc, tags});
    }

    return (
        <div id="post-form-container">
            <h5>Write a new post</h5>
            <img className="user-pic" src={userPic}/>
            <input id="title-input" placeholder="Title..."/>
            <input id="desc-input" rows="5" placeholder="Description..."/>
            <input id="tags-input" placeholder="Tags..."/>
            <button id="publish-btn" onClick={addPost}>Publish Post</button>
        </div>
    );

}

export default CreatePostForm;