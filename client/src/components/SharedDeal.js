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

const styles = {
  listStyle:{
    listStyle:"none",
  }
};


function SharedDealCard(props) {
  const { product, location, originalPrice, salePrice, description, image, id, dealDuration, postAuthor } = props;
  const [savePost, { error, data }] = useMutation(SAVE_POST);
  const [removeSavedPost, {err}] = useMutation(REMOVE_SAVED_POST);
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
  const handleRemove = async (event) =>{
    console.log(event.target.id);
    try {
      // mutation
      const { data } = await removeSavedPost({
        variables: { postId : event.target.id },
      });
      console.log(data.removeSavedPost)
      setIsSaved(false);
      
    } catch (e) {
      console.error(e);
    }
  }
  const handleDelete = async (event) => {
    console.log(event.target.postAuthor);

  }
  return (
    <Card key={id} style={{ width: "45%" }} key={id}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Header>{-1 * (Math.round((salePrice / originalPrice) * 100) - 100)}% off of {product} </Card.Header>
        <Card.Text>
          <ul style={styles.listStyle}>
            <li>Posted By: {postAuthor}</li>
            <li>Location: {location}</li>
            <li>Original Price: {originalPrice}</li>
            <li>Discounted Price: {salePrice}</li>
            <li>Duration of Deal: {dealDuration}</li>
            <li>Description: {description}</li>
          </ul>
        </Card.Text>
      </Card.Body>
      <CardFooter>
        {isSaved ? (<StyledButton id={id} variant="primary" onClick={handleRemove}>Remove</StyledButton>) : (<StyledButton id={id} variant="primary" onClick={handleSave}>Save Deal</StyledButton>)}

        
      </CardFooter>
    </Card>
  );
}

export default SharedDealCard;
