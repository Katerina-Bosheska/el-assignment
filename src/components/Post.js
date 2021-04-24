import React, {useState} from 'react';
import userPic from '../resources/user-pic.png'
import Comment from "./Comment";

const Post = ({title, description, tags}) => {

    const [comment, setComment] = useState(null);
    const [count, setCount] = useState(0);

    const addComment = (event) => {
        if(count >= 1) {
            window.alert("You can only comment once on this post!");
            return;
        }
        let newComment = event.target.parentElement.childNodes[1].value;
        if(checkComment(newComment) === false) return;
        setComment(newComment);
        setCount(count + 1);
    }

    const deleteComment = () => {
        setComment(null);
        setCount(0);
    }

    const editComment = () => {
        let newComment = window.prompt("Edit comment", comment);
        if(checkComment(newComment) === false) return;
        setComment(newComment);
    }

    const checkComment = (newComment) => {
        if(newComment === "" || newComment === null){
            window.alert("Comment can't be empty");
            return false;
        }
        return true;
    }

    return (
        <div className="post-container">
            <img className="user-pic" src={userPic}/>
            <label className="user-name">Username</label>
            <div className="post-content">
                <h4>{title}</h4>
                <p className="post-desc">{description}</p>
                <span>Tags:</span>
                {tags.map((tag, index) => (
                    <a href="#" className="tags">{tag}</a>
                ))}
                <hr/>
                <h5>Comments:</h5>
                { comment != null &&
                    <div className="post-comments">
                        <Comment desc={comment}
                                 username="Username"
                                 onDeleteComment={deleteComment}
                                 onEditComment={editComment}/>
                    </div>
                }
                <hr/>
                <div className="comment-form">
                    <label>Add a comment: </label>
                    <input className="comment-input" placeholder="Enter your comment"/>
                    <button onClick={addComment} id="add-cmnt-btn">Add</button>
                </div>
            </div>
        </div>
    );

}

export default Post;