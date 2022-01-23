import React from 'react';
import apiClient from '../services/api';

const User = () => {
    const [logged, setLogged] = React.useState(false);
    const [user, setUser] = React.useState([]);
    React.useEffect(() => {
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => { });
        apiClient.get('/api/user')
            .then(response => {
                if (response.status === 200) {
                    setLogged(true);
                    setUser(response.data);
                }
            });
    }, []);
    if (logged === true) {
        return (
            <div>
                <h1>Logged user: {user.name} </h1>
            </div>
        );
    }
    return (
        <div>
            <h1>User</h1>
        </div>
    );
}

export default User;
