import React from 'react';
import apiClient from '../services/api';
import { Navigate} from 'react-router-dom';

const Login = (props) => {
    const [home, setHome] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
            .then( response => {
                apiClient.post('/login', {
                        email: email,
                        password: password
                    }).then(response => {
                        if (response.status === 200) {
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
    return (
        <div>
            <h1>Login</h1>
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
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;