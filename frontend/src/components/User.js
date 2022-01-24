import React from 'react';
import apiClient from '../services/api';
import Post from './Post';

const User = (props) => {
console.log(props);
    if (!props.logged === true) {
        React.useEffect(() => {
            apiClient.get('/sanctum/csrf-cookie')
                .then(response => {
                    apiClient.get('/api/user')
                        .then(response => {
                            if (response.status === 200) {
                                props.action(response.data);
                            }
                        }).catch(response => {
                            console.log('not authenticated');
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
            <p>Please log in.</p>
        </div>
    );
}

export default User;
