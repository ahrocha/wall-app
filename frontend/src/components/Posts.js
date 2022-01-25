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
    if (posts.length == 0) {
        return (
            <div>
                <h1>Loading posts...</h1>
            </div>
        );
    }
    const postList = posts.map((post) =>
        <div key={post.id} className='card'>
            <div className='card-body'>
                {post.post}
            </div>
        </div>
    );
    return (
        <div>
            <h1>Last posts</h1>
            <ul>{postList}</ul>
        </div>
    );
}

export default Posts;
