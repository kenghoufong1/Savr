import { Form, Button,} from 'react-bootstrap';

import React, { useState } from 'react';
import { createUser } from '../utils/API';
import Auth from '../utils/auth';


function SignupForm() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" })

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        console.log(formData)
            // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await createUser(formData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      username: '',
      email: '',
      password: '',
    });
    }
    return (
        <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username"
                    name='username'
                    value={formData.username}
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
            </Form.Group>
            <div className='d-grid gap-2'>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </div>
        </Form>
    );
}

export default SignupForm;

