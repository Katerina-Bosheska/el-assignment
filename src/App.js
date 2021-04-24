import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CreatePostForm from "./components/CreatePostForm";
import ListPosts from "./components/ListPosts";
import './style/app.scss';

function App() {

    const [posts, setPosts] = useState([]);

    const addNewPost = (post) => {
        if(titleExists(post.title)){
            window.alert("You can't have two posts with the same title!");
            return;
        }
        let newPosts = [];
        posts.forEach(item => newPosts.push(item));
        newPosts.push(post);
        setPosts(newPosts);
    }

    const titleExists = (t) => {
        for(let i = 0; i < posts.length; i++){
            if(posts[i].title === t) {
                return true;
            }
        }
        return false;
    }

    return <div id="app-container">
        <CreatePostForm onAddPost={addNewPost}/>
        <ListPosts posts={posts}/>
    </div>;

}

export default App;
