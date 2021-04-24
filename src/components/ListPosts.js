import React from 'react';
import Post from "./Post";

const ListPosts = ({posts}) => {

    return (
        <div>
            {posts.map((post, index) => (
                <Post key={index}
                      title={post.title}
                      description={post.desc}
                      tags={post.tags}/>
            ))}
        </div>
    );
}

export default ListPosts;