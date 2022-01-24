import React from 'react';
import apiClient from '../services/api';
import { Navigate } from 'react-router-dom';

const Logout = (props) => {
    const [home, setHome] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('/logout').then(response => {
                    console.log(response.status);
                    if (response.status === 204) {
                        props.action();
                        setHome(true);
                    }
                }).catch(response => {
                    console.log(response);
                });
            });
    }
    if (home === true) {
        return (
            <Navigate to="/" replace />
        )
    }
    if (props.logged === true) {
        return (
            <div>
                <h1>Logout</h1>
                <p>Do you confirm???</p>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Yes. Logout!</button>
                </form>
            </div>
        );
    }
    return (
        <>
            <h1>Login/Logoff</h1>
            <p>You're already logged out. </p>
        </>
    );
}

export default Logout;