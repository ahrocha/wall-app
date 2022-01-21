import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Register = (props) => {
    const [home, setHome] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [password_confirmation, setPasswordConfirmation] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8080/sanctum/csrf-cookie')
            .then( response => {
                console.log(response);
                console.log('mandou');

                axios.post('http://localhost:8080/register', {
                        email: email,
                        password: password,
                        password_confirmation: password_confirmation,
                        name: name
                    }).then(response => {
                        if (response.status == 201) {
                            setHome(true);
                        }
                        console.log(response);
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
                <input 
                    type="email"
                    name="email" 
                    placeholder="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="name"
                    name="name" 
                    placeholder="Your name" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input 
                    type="password" 
                    name="password_confirmation" 
                    placeholder="Confirm your password" 
                    value={password_confirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;