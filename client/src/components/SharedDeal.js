import React, { useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';

const CardFooter = styled(Card.Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: 0;
`;

function SharedDealCard(props) {
  const { product, location, originalPrice, salePrice, description, image } = props;

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Header>{product}</Card.Header>
        <Card.Text>
          <p>Location: {location}</p>
          <p>Original Price: {originalPrice}</p>
          <p>Discounted Price: {salePrice}</p>
          <p>Duration of Deal: 2 days</p>
          <p>Description: {description}</p>
        </Card.Text>
      </Card.Body>
      <CardFooter>
        <StyledButton variant="primary">Save Deal</StyledButton>
      </CardFooter>
    </Card>
  );
}

export default SharedDealCard;