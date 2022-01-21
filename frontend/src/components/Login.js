import React from 'react';
import axios from 'axios';

const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8080/sanctum/csrf-cookie')
            .then( response => {
                console.log(response);
                console.log('mandou');

                axios.post('http://localhost:8080/login', {
                        email: email,
                        password: password
                    }).then(response => {
                        console.log(response);
                        console.log('recebeu');
                    });

            });
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
            <br /><br /><br /><br /><br />
        </div>
    );
}

export default Login;