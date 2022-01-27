import React from 'react';
import apiClient from '../services/api';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
    const [home, setHome] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    if (home === true) {
        return (
            <Navigate to="/" replace />
        )
    }

    if (props.logged === true) {
        return (
            <>
                <h1>Login</h1>
                <p>You're already logged.</p>
            </>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.post('/login', {
                    email: email,
                    password: password
                }).then(response => {
                    if (response.status === 200) {
                        props.action(response.data);
                        setHome(true);
                    }
                }).catch(error => {
                    if (error.response) {
                        let errors = [];
                        if (error.response.data.errors.email) {
                            errors.push(error.response.data.errors.email);
                        }
                        if (error.response.data.errors.password) {
                            errors.push(error.response.data.errors.password);
                        }
                        if (errors.length > 0) {
                            alert(errors.join(' '));
                        } else {
                            alert('Unknown error.');
                        }
                    } else if (error.request) {
                        alert('Error accessing the backend.');
                    } else {
                        alert('Error: ' + error.message);
                    }
                });
            });
    }

    return (
        <div className='row'>
            <div className='col'></div>
            <div className='col'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div><div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            <div className='col'></div>
        </div>
    );
}

export default Login;