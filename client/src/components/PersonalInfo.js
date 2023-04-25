import React from 'react';
import Card from 'react-bootstrap/Card';
function PersonalInfo(user) {
return (
    <Card>
        <Card.Header>{user.username}</Card.Header>
        <Card.Body>
            <h3>Your Email: {user.email}</h3>
        </Card.Body>
    </Card>
)
}

export default PersonalInfo