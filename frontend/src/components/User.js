import React from 'react';
import apiClient from '../services/api';
import Post from './Post';

const User = (props) => {
    if (!props.logged === true) {
        React.useEffect(() => {
            apiClient.get('/sanctum/csrf-cookie')
                .then(response => {
                    apiClient.get('/api/user')
                        .then(response => {
                            if (response.status === 200) {
                                props.action(response.data);
                            }
                        }).catch(error => {
                            if (error.response.status === 401) {
                                return;
                            }
                            if (error.response) {
                                alert('An error ocurred. Check logs.');
                            } else if (error.request) {
                                alert('Error accessing the backend.');
                            } else {
                                alert('Error: ' + error.message);
                            }
                        });
                });
        }, []);
    }

    if (props.logged === true) {
        return (
            <div>
                <p>You're logged.</p>
            </div>
        );
    }
    return (
        <div>
            <p>Please log in to write your post.</p>
        </div>
    );
}

export default User;
