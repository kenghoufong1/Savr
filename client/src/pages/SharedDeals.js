import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Button, Container, Row, Col, Dropdown } from 'react-bootstrap';

import { QUERY_POSTS } from '../utils/queries';
import SharedDealCard from '../components/SharedDeal';

const SharedDeals = () => {
  const { loading, data } = useQuery(QUERY_POSTS);

  const cities = ["Seattle", "Bellevue", "Redmond", "Kirkland", "Renton", "Bothell"];

  const [selectedCity, setSelectedCity] = useState("Seattle");

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  }

  return (
    <div>
      {loading ? (
        <div>Loading. Please wait.</div>
      ) : (
        <Container fluid="md">
          <h1 className="text-center">Deals</h1>
          <Row className="justify-content-center">
            <Dropdown className="mx-auto">
                <Dropdown.Toggle variant="secondary">
                {selectedCity}
                </Dropdown.Toggle>

                <Dropdown.Menu className='citylist'>
                {cities.map((city) => (
                    <Dropdown.Item
                    onClick={() => handleCitySelect(city)}
                    >
                    {city}
                    </Dropdown.Item>
                ))}
                </Dropdown.Menu>
            </Dropdown>
            <Col md="auto" className="bg-info p-4 rounded-4">
              <div
                style={{
                  maxHeight: '500px',
                  width: '800px',
                  overflowY: 'scroll',
                }}
              >
                {data.posts.map((post) => {
                  return (
                    <SharedDealCard
                      key={post._id}
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
                {/* {data.posts.filter((post) => post.location === selectedCity)
                .map((post) => {
                    return (
                    <SharedDealCard
                        key={post._id}
                        product={post.product}
                        location={post.location}
                        originalPrice={post.regPrice}
                        salePrice={post.salePrice}
                        description={post.description}
                        image={post.image}
                        id={post._id}
                        postAuthor={post.postAuthor}
                        />

                    );
                })} */}
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
              <Button onClick={() => {window.location.href='/add-deal'}} variant="primary">
                Add New Deal
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SharedDeals;