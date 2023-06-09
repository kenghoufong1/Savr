import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import anime from 'animejs';

const LoginForm = (props) => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" })
  const [login, { error, data }] = useMutation(LOGIN_USER);
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleRememberMeChange = (event) => {
    const isChecked = event.target.checked;
    setRememberMe(isChecked);

    if (isChecked) {
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberMe');
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    anime({
      targets: '.login-form-container',
      translateY: [-5, 5, 0],
      duration: 500,
      easing: 'easeInOutSine'
    });

    console.log(formData);

    try {
      const { data } = await login({
        variables: { ...formData },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormData({
      email: '',
      password: '',
    });
  }
  return (
    <div>
      <div className='login-form-container'>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <Form onSubmit={handleSubmit} className='loginform'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                name='password'
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <div className='d-grid gap-2'>
              <Button variant="primary" type="submit">
                Login
              </Button>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" checked={rememberMe} onChange={handleRememberMeChange} />
              </Form.Group>
            </div>
          </Form>)}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
