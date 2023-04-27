import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Button, Container, Row, Col } from 'react-bootstrap';


import { QUERY_POSTS } from '../utils/queries'

import SharedDealCard from '../components/SharedDeal';

const SharedDeals = () => {

  const { loading, data } = useQuery(QUERY_POSTS);

  // const [addDeal] = useMutation(ADD_POST);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   addDeal({
  //     variables: {
  //       // location: locationFilter,
  //       product: product,
  //       regPrice: parseInt(regPrice),
  //       salePrice: parseInt(salePrice),
  //       image: image,
  //       description: description,
  //       postAuthor: postAuthor
  //     },
  //     refetchQueries: [{ query: QUERY_POSTS }]
  //   });

  //   setProduct('');
  //   setRegPrice(0);
  //   setSalePrice(0);
  //   setImage('');
  //   setDescription('');
  //   setPostAuthor('');
  // }

  /**
   * 
   * 
    posts array from data

    0: {
        "__typename": "Post",
        "_id": "64447af4a957c7465abc95d5",
        "location": "Safeway",
        "product": "Diet Pepsi",
        "regPrice": 2,
        "salePrice": 1.5,
        "image": "",
        "description": "They also have cherry!",
        "postAuthor": "6441f5cc0a0a6b07e64fd9c9"
    }
   * 
   */

  return (
    <div>
        {/* Curley brackets must evaluate into a string, component, or an array of either */}
        {loading?(<div>Loading. Please wait.</div>):(
            <Container fluid="md">
                <h1 className="text-center">Deals</h1>
                <Row className="justify-content-center">
                <Col md="auto" className="bg-info p-4 rounded-4 d-flex flex-wrap justify-content-center">
                    {data.posts.map((post) => {
                    return (
                        <SharedDealCard
                        product={post.product}
                        location={post.location}
                        originalPrice={post.regPrice}
                        salePrice={post.salePrice}
                        description={post.description}
                        image={post.image}
                        id={post._id}
                        />
                    );
                    })}
                </Col>
                </Row>
                <Row className="mt-4">
                <Col className="text-center">
                    <Button variant="primary">Add New Deal</Button>
                </Col>
                </Row>
            </Container>
        )}
    </div>
  )
}

export default SharedDeals;
