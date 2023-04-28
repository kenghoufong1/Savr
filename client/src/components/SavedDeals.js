import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { REMOVE_SAVED_POST } from '../utils/mutations';
import { QUERY_SINGLE_POST } from '../utils/queries';
import { useQuery } from '@apollo/client';
import PostData from './PostData';

function SavedDeals({ posts }) {
  return (
    <div className="shared-deal-list">
      {posts.map((postId) => (
        <PostData posted={postId}/>
      ))}
    </div>
  );
}

export default SavedDeals;