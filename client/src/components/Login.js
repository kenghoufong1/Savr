import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const LoginForm= (props) => {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" })
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        console.log(formData)

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
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <Form onSubmit={handleSubmit}>
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
            </div>
        </Form>)}
      </div>
    );
}

export default LoginForm;
