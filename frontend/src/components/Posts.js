import React from 'react';
import apiClient from '../services/api';

const Posts = () => {
    const [loading, setLoading] = React.useState(false);
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        setLoading(true);
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.get('/api/post')
                    .then(response => {
                        setPosts(response.data);
                        setLoading(false);
                    });
            });
    }, []);
    if (posts.length === 0 && loading === true) {
        return (
            <div>
                <h1>Loading posts...</h1>
            </div>
        );
    } 

    if (posts.length === 0 && loading === false) {
        return (
            <div>
                <h1>There isn't a post. You should write one.</h1>
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
            <div>{postList}</div>
        </div>
    );
}

export default Posts;
