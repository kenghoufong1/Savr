import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { REMOVE_SAVED_POST } from '../utils/mutations';
function SavedDeals(posts) {
    const [unsavePost, { error, data }] = useMutation(REMOVE_SAVED_POST);
    const handleUnsave = async (postId) => {
        try {
          const { data } = await unsavePost({
            variables: {postId},
          });
        } catch (e) {
          console.error(e);
        }
      };
    if (!posts.length) {
        return <h3>No Posts Saved Yet!</h3>;
      }
    return (
        <div>
            <h3>Your Saved Posts:</h3>
            {posts &&
        posts.map((post) => (
        <Card>
            <Card.Title>{post.product} at {post.location}</Card.Title>
            <Card.Subtitle>Posted by {post.postAuthor}</Card.Subtitle>
            <Card.Body>
            <h5>Original Price: {post.regPrice}</h5>
            <h3>Sale Price: {post.salePrice}</h3>
            <p>{post.description}</p>
            <Button variant="danger" onClick={handleUnsave(post._id)}>Remove</Button>
            </Card.Body>
        </Card>
        ))}
        </div>
    )
    }

export default SavedDeals;