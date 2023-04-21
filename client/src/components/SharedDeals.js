import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function deal() {
    return (
        <Card>
            <Card.Header>Deals</Card.Header>
            <Card.Img variant="top" src="https://example.com/product-image.jpg" />
            <Card.Body>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                        <p>Location:Seattle</p>
                        <p>Og Price: $10.00</p>
                        <p>Discounted Price: $8.00</p>
                        <p>Duration of Deal: 2 days</p>
                        <p>Description: This is a product description.</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default deal;