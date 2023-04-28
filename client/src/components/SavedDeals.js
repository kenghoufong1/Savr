import React, { useState } from 'react';
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