import React from 'react';
import apiClient from '../services/api';

const Post = (props) => {
    const [post, setPost] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
            .then( response => {
                console.log(post);
                apiClient.post('/api/post', {
                    post: post
                }).then(response => {
                    console.log(response);
                    if (response.status === 200) {
                        console.log(response);
                    }
                }).catch(response => {
                    console.log(response);
                });
            });
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
