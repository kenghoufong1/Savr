import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function LoginForm() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" })

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(formData)
    }
    return (
        <Form onSubmit={handleSubmit} noValidate>
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
                Login
            </Button>
            </div>
        </Form>
    );
}

export default LoginForm;