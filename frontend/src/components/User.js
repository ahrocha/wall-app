import React from 'react';
import apiClient from '../services/api';

const User = () => {
    React.useEffect(() => {
        apiClient.get('http://localhost:8080/api/user')
            .then(response => {
                console.log(response.data);
            });
    }, []);
    return (
        <div>
        <h1>User</h1>
        </div>
    );
}

export default User;
