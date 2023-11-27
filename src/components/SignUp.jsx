import React from 'react';
// import './SignUp.css'; // Tell Webpack that SignUp.js uses these styles
import { useNavigate } from 'react-router-dom';
import email_icon from './Assets/email.png'; // Tell Webpack this JS file uses this image
import password_icon from './Assets/password.png'; // Tell Webpack this JS file uses this image
import user_icon from './Assets/person.png'; // Tell Webpack this JS file uses this image
import './SignUp.css'; // Tell Webpack that SignUp.js uses these styles



class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'Sign Up',
            userName: '',
            email: '',
            password: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    render() {
        const { action } = this.state;
        // const navigation = useNavigate();
        return (
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={user_icon} alt='' />
                        <input type='text' name='userName'  placeholder='username' value={this.state.userName} onChange={this.handleInputChange}/>
                    </div>
                    {action === 'Login' ? (
                        <div></div>
                    ) : (
                        <div className='input'>
                            <img src={email_icon} alt='' />
                            <input type='email' name='email'  placeholder='Email' value={this.state.email} onChange={this.handleInputChange}/>
                        </div>
                    )}

                    
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input type='password' name='password'  placeholder='Password' value={this.state.password} onChange={this.handleInputChange}/>
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
                            const data = { userName: this.state.userName, password: this.state.password, email: this.state.email };
                            if (data.userName === '' || data.password === '' || data.email === '') {
                                // alert('Please fill in all the fields');
                                return;
                            }
                            fetch('http://localhost:8087/api/users', {
                                method: 'POST',
                                headers: {
                                'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(data),
                            })
                            .then(response => {
                                if (!response.ok) {
                                  throw new Error(`HTTP error! status: ${response.status}`);
                                }
                                console.log(response);
                                return response.text();
                            })
                            .then(data => {
                                if (data) {
                                    const jsonData = JSON.parse(data);
                                    // Handle the JSON data here
                                    console.log('Success:', jsonData);
                                }
                                // this.props.navigate('/dashboard');
                                this.props.navigate('/dashboard');
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
                            const data = { userName: this.state.userName, password: this.state.password };
                            if (data.userName === '' || data.password === '' ) {
                                // alert('Please fill in all the fields');
                                return;
                            }
                            const params = new URLSearchParams({
                                userName: this.state.userName,
                                password: this.state.password,
                              });
                            fetch(`http://localhost:8087/api/users/name?${params.toString()}`, {
                                method: 'GET',
                                headers: {
                                'Content-Type': 'application/json',
                                },
                                // body: JSON.stringify(data),
                            })
                            .then(response => {
                                if (!response.ok) {
                                  throw new Error(`HTTP error! status: ${response.status}`);
                                }
                                console.log(response);
                                return response.json();
                              })
                            .then(data => {
                                // Handle the response data here
                                if (data) {
                                    // const jsonData = JSON.parse(data);
                                    // Handle the JSON data here
                                    console.log('Success:', data);
                                }
                                // this.props.navigate('/dashboard');
                                this.props.navigate('/dashboard');
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
const SignUpWithNavigate = (props) => {
    const navigate = useNavigate();
  
    return <SignUp {...props} navigate={navigate} />;
  };

export default SignUpWithNavigate;

// function SignUp() {
//   const [userName, setuserName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//     console.log(`userName: ${userName}, Email: ${email}, Password: ${password}`);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign Up</h2>
//       <label>
//         userName:
//         <input type="text" value={userName} onChange={e => setuserName(e.target.value)} required />
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