import React, { useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { SAVE_DEAL_MUTATION } from '../utils/mutations';

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
  const [addDeal] = useMutation(SAVE_DEAL_MUTATION);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveDeal = (event) => {
    event.preventDefault();

    const target = event.target;
    const userId = "";
    const product = target.getAttribute("data-product");
    const location = target.getAttribute("data-location");
    const originalPrice = target.getAttribute("data-original-price");
    const salePrice = target.getAttribute("data-sale-price");
    const description = target.getAttribute("data-description");
    const image = target.getAttribute("data-image");
    addDeal({
      variables: {
        userId,
        product,
        location,
        originalPrice,
        salePrice,
        description,
        image
      }
    })
      .then(res => {
        console.log(res);
        setIsSaved(true);
      })
      .catch(err => console.log(err));
  };

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
      <StyledButton variant={isSaved ? "success" : "primary"} onClick={handleSaveDeal}>
          {isSaved ? "Saved" : "Save Deal"}
        </StyledButton>
      </CardFooter>
    </Card>
  );
}

export default SharedDealCard;
