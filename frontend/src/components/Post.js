import React from 'react';
import apiClient from '../services/api';
import { Navigate } from 'react-router-dom';

const Post = (props) => {
    const [post, setPost] = React.useState("");
    const [home, setHome] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
            .then( response => {
                apiClient.post('/api/post', {
                    post: post
                }).then(response => {
                    if (response.status === 201) {
                        setHome(true);
                    }
                }).catch(response => {
                    if (error.response) {
                        alert('An error ocurred. Check logs.');
                    } else if (error.request) {
                        alert('Error accessing the backend.');
                    } else {
                        alert('Error: ' + error.message);
                    }
                });
            });
        }

    if (home === true) {
        return (
            <Navigate to="/" replace />
        )
    }

    return (
        <div>
            <h2>Insert post</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    name="post" 
                    placeholder="post" 
                    value={post}
                    onChange={e => setPost(e.target.value)}
                    required
                />
                <button type="submit">Insert</button>
            </form>
        </div>
    );
}

export default Post;
