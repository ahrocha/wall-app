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
                        });
                });
        }, []);
    }

    if (props.logged === true) {
        return (
            <div>
                <p>Current user: {props.user} </p>
                <Post />
            </div>
        );
    }
    return (
        <div>
            <p>Loading</p>
        </div>
    );
}

export default User;
