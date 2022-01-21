import React from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:8080/api/post')
            .then(response => {
                setPosts(response.data);
            });
    }, []);
    const postList = posts.map((post) => 
        <li key={post.id}>{post.post}</li>
    );
    return (
        <div>
        <h1>Posts</h1>
        <ul>{postList}</ul>
        </div>
    );
}

export default Posts;