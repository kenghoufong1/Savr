import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForm from '../components/Login';

function Login() {
    return (
        <Container fluid="md" className='frontpageboxs'>
            <h1 className='text-center'>Login</h1>
            <Row className='justify-content-md-center'>
                <Col md="auto" className='bg-info p-4 rounded-4'>
                    <LoginForm />
                    <br></br>
                    <p>Don't have an account?<a href='/signup'>Register now!</a> </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Login