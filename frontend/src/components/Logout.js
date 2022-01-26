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
                    if (response.status === 204) {
                        props.action();
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
                    setLoading(false);
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
            <div className='container text-center'>
                <h1>Logout</h1>
                <p>Do you confirm?</p>
                <form onSubmit={handleSubmit}>
                    <button type="submit" className="btn btn-primary">Yes. Logout!</button>
                </form>
            </div>
        );
    }
    return (
        <div className='container text-center'>
            <h1>Login/Logoff</h1>
            <p>You're already logged out. </p>
        </div>
    );
}

export default Logout;