import React from 'react';
import './SignUp.css'; // Tell Webpack that SignUp.js uses these styles

import email_icon from './Assets/email.png'; // Tell Webpack this JS file uses this image
import password_icon from './Assets/password.png'; // Tell Webpack this JS file uses this image
import user_icon from './Assets/person.png'; // Tell Webpack this JS file uses this image



class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'Sign Up',
            username: '',
            email: '',
            password: '',
        };
    }
    handleInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    render() {
        const { action } = this.state;

        return (
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {action === 'Login' ? (
                        <div></div>
                    ) : (
                        <div className='input'>
                            <img src={user_icon} alt='' />
                            <input type='text' placeholder='Username' value={this.state.username} onChange={this.handleInputChange}/>
                        </div>
                    )}

                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input type='email' placeholder='Email' value={this.state.email} onChange={this.handleInputChange}/>
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input type='password' placeholder='Password' value={this.state.password} onChange={this.handleInputChange}/>
                    </div>
                </div>
                {action === 'Sign Up' ? (
                    <div></div>
                ) : (
                    <div className='forgot-password'>
                        Forgot password<span>Click here!</span>
                    </div>
                )}

                <div className='submit-container'>
                    <div
                        className={action === 'Login' ? 'submit gray' : 'submit'}
                        onClick={() => {
                            this.setState({ action: 'Sign Up' });
                            const data = { username: this.state.username, password: this.state.password };

                            fetch('https://api.example.com/signup', {
                                method: 'POST',
                                headers: {
                                'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            })
                            .then(response => response.json())
                            .then(data => {
                                // Handle the response data here
                                console.log('Success:', data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                        }}
                    >
                        Sign Up
                    </div>
                    <div
                        className={action === 'Sign Up' ? 'submit gray' : 'submit'}
                        onClick={() => {
                            this.setState({ action: 'Login' });
                            const data = { username: this.state.username, password: this.state.password };

                            fetch('https://api.example.com/login', {
                                method: 'POST',
                                headers: {
                                'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            })
                            .then(response => response.json())
                            .then(data => {
                                // Handle the response data here
                                console.log('Success:', data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                        }}
                    >
                        Login
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;

// function SignUp() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign Up</h2>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
//       </label>
//       <label>
//         Password:
//         <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
//       </label>
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default SignUp;