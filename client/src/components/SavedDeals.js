import React, { useState } from 'react';
import { useMutation} from '@apollo/client';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { REMOVE_SAVED_POST } from '../utils/mutations';
import { QUERY_SINGLE_POST } from '../utils/queries';

function SavedDeals(posts) {
  console.log(posts);

    const [removeSavedPost, { error, data }] = useMutation(REMOVE_SAVED_POST);
    const handleRemove = async (event) =>{
    console.log(event.target.id);
    try {
      // mutation
      const { data } = await removeSavedPost({
        variables: { postId : event.target.id },
      });
      console.log(data.removeSavedPost)
      
    } catch (e) {
      console.error(e);
    }
  }
    if (!posts.length) {
        return <Card><h3>No Posts Saved Yet!</h3></Card>
      }
    return (
        <div>
            <h3>Your Saved Posts:</h3>
            {posts &&
        posts.map((post) => (
        <Card>
           <Card.Img variant="top" src={post.image}/>
            <Card.Title>{post.product} at {post.location}</Card.Title>
            <Card.Subtitle>Posted by {post.postAuthor}</Card.Subtitle>
            <Card.Body>
            <h5>Original Price: {post.regPrice}</h5>
            <h3>Sale Price: {post.salePrice}</h3>
            <p>{post.description}</p>
            <Button variant="danger" onClick={handleRemove}>Remove</Button>
            </Card.Body>
        </Card>
        ))}
        </div>
    )
    }

export default SavedDeals;