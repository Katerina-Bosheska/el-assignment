import React from 'react';
import userPic from '../resources/user-pic.png'

const Comment = ({username, desc, onDeleteComment, onEditComment}) => {

    return (
      <div>
          <img className="user-pic" src={userPic}/>
          <label className="user-name">{username}</label>
          <div className="comment-content">
              <p className="comment-desc">{desc}</p>
              <button onClick={() => onEditComment()}>Edit</button>
              <button onClick={() => onDeleteComment()}>Delete</button>
          </div>

      </div>
    );

}

export default Comment;