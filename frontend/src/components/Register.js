import React from 'react';
import apiClient from '../services/api';
import { Navigate } from 'react-router-dom';

const Register = (props) => {
    const [home, setHome] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [password_confirmation, setPasswordConfirmation] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
            .then(response => {
                apiClient.get('sanctum/csrf-cookie')
                    .then(response => {
                        console.log(response);
                        console.log('mandou');

                        apiClient.post('/register', {
                            email: email,
                            password: password,
                            password_confirmation: password_confirmation,
                            name: name
                        }).then(response => {
                            if (response.status === 201) {
                                setHome(true);
                            }
                            console.log(response);
                        });
                    });
            });
    }
    if (home === true) {
        return <Navigate to="/" replace />
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
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
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="name"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    className="form-control"
                />
                </div><div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="form-control"
                />
                </div><div className="mb-3">
                <label htmlFor="password_confirmation" className="form-label">Confirm the password</label>
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm your password"
                    value={password_confirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    required
                    className="form-control"
                />
                </div>
                <button type="submit" className='btn btn-primary'>Register</button>
            </form>
        </div>
    );
}

export default Register;