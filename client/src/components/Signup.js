import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import UploadWidget from "./CloudinaryUploadWidget.js";
function SignupForm() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" })
    const [addUser, { error, data }] = useMutation(ADD_USER);
    const [imageData, setImageData] = useState('')

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })

    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(imageData);
        console.log(formData)
        try {
            // mutation
            const { data } = await addUser({
              variables: { username: formData.username, email: formData.email, password: formData.password, profilePicture: imageData},
            });
            console.log(data.addUser)
            
            Auth.login(data.addUser.token); // json webtoken // persistent login
          } catch (e) {
            console.error(e);
          }
    }
    const getImageData = (imageURL) => {
        setImageData(imageURL);
    }
    return (
        <div>
            {data ? (
            <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
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
            <UploadWidget setImageData={setImageData}/>
            {imageData? (imageData) : ('No Profile Picture Uploaded!')}
            <div className='d-grid gap-2'>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </div>
        </Form>)}
        {error && (
              <div className="my-3 p-3 bg-danger text-white">
               Error: {error.message}
              </div>
            )}
        </div>
    );
}

export default SignupForm;