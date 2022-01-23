import React from 'react';
import apiClient from '../services/api';

const Posts = () => {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.get('/api/post')
                    .then(response => {
                        console.log(response.data);
                        setPosts(response.data);
                    });
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