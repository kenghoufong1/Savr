import React, { useState } from 'react';
import { Card } from 'react-bootstrap';


function Shareddealcard({ post }) {
    const {
        location,
        product,
        regPrice,
        salePrice,
        image,
        description,
        postAuthor,
      } = post;
    return (
        <Card>
            <Card.Header>Deals</Card.Header>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{product}</Card.Title>
                <Card.Text>
                        <p>Location:{location}</p>
                        <p>Og Price: ${regPrice.toFixed(2)}</p>
                        <p>Discounted Price: ${salePrice.toFixed(2)}</p>
                        <p>Duration of Deal: </p>
                        <p>Description: {description}.</p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Shareddealcard;