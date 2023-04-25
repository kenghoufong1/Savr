import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function SignupForm() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" })
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        console.log(formData)
        try {
            const { data } = await addUser({
              variables: { ...formData },
            });
            
            Auth.login(data.addUser.token);
          } catch (e) {
            console.error(e);
          }
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
                    Signup
                </Button>
            </div>
        </Form>
    );
}

export default SignupForm;

