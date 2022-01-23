import React from 'react';
import apiClient from '../services/api';

const User = () => {
    const [logged, setLogged] = React.useState(false);
    const [user, setUser] = React.useState([]);
    React.useEffect(() => {
        apiClient.get('http://localhost:8080/api/user')
            .then(response => {
                console.log(response);
                console.log(response.status);
                console.log(response.data);
                if (response.status == 200) {
                    setLogged(true);
                    setUser(response.data);
                    console.log(response.data);
                }
            });
    }, []);
    if (logged === true) {
        return (
            <div>
            <h1>User: {user.name} </h1>
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
