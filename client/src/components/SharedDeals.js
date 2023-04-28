import { Card, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import { SAVE_POST, REMOVE_SAVED_POST } from '../utils/mutations';
import React, { useState, useEffect } from 'react';
import '../profilecard.css';

const StyledButton = styled(Button)`
  margin-bottom: 0;
`;

function Shareddealcard({ post }) {
    const [removeSavedPost, { err }] = useMutation(REMOVE_SAVED_POST);
    const [showCard, setShowCard] = useState(true);

    const handleRemove = async (event) => {
        console.log(post);
        try {
            // mutation
            const { data } = await removeSavedPost({
                variables: { postId: _id },
            });
            console.log(data.removeSavedPost)
            setShowCard(false);
        } catch (e) {
            console.error(e);
        }
    }

    if (!showCard) {
        return null; // Don't render the card if showCard is false
    }
    
    const {
        location,
        store,
        product,
        regPrice,
        salePrice,
        image,
        description,
        postAuthor,
        _id
    } = post;
    return (
        <Card className='card'>
            <Card.Header className='cardheader'>Deals</Card.Header>
            <Card.Img className='cardimg' variant="top" src={image} />
            <Card.Body>
                <Card.Title className='cardtitle'>{product}</Card.Title>
                <Card.Text className='cardtext'>
                    <p>Location:{location}</p>
                    <p>Store: {store}</p>
                    <p>Og Price: ${regPrice.toFixed(2)}</p>
                    <p>Discounted Price: ${salePrice.toFixed(2)}</p>
                    <p>Duration of Deal: </p>
                    <p>Description: {description}.</p>
                </Card.Text>
                <StyledButton className='classbutton'id={_id} variant="primary" onClick={handleRemove}>Remove</StyledButton>
            </Card.Body>
        </Card>
    );
}

export default Shareddealcard;