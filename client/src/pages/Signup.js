import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignupForm from '../components/Signup';


function Signup() {
    return (
        <Container fluid className='frontpageboxs'>
            <h1 className='text-center'>Signup</h1>
            <Row className='justify-content-md-center'>
            <Col md="auto" className='bg-info p-4 rounded-4 loginform'>
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Signup