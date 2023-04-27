import React, { useState } from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_POST, REMOVE_SAVED_POST } from '../utils/mutations';


const CardFooter = styled(Card.Footer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin-bottom: 0;
`;



function SharedDealCard(props) {
  const { product, location, originalPrice, salePrice, description, image, id, dealDuration } = props;
  const [savePost, { error, data }] = useMutation(SAVE_POST);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = async (event) =>{
    console.log(event.target.id)
    try {
      // mutation
      const { data } = await savePost({
        variables: { postId : event.target.id },
      });
      console.log(data.savePost)
      setIsSaved(true);
      
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <Card key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Header>{product}</Card.Header>
        <Card.Text>
          <p>Location: {location}</p>
          <p>Original Price: {originalPrice}</p>
          <p>Discounted Price: {salePrice}</p>
          <p>Duration of Deal: {dealDuration}</p>
          <p>Description: {description}</p>
        </Card.Text>
      </Card.Body>
      <CardFooter>
        <StyledButton id={id} variant="primary" onClick={handleSave}>{isSaved ? "Remove" : "Save Deal"}</StyledButton>
      </CardFooter>
    </Card>
  );
}

export default SharedDealCard;