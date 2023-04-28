import React, { useState } from 'react';
import { Button, Form, Row, Container } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';
import UploadWidget from "../components/CloudinaryUploadWidget";

function AddDealForm(props) {
  const [productName, setProductName] = useState('');
  const [location, setLocation] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [imageData, setImageData] = useState('')

  const cities = ["Seattle", "Bellevue", "Redmond", "Kirkland", "Renton", "Bothell"];

  const [addPost, { data, loading, error }] = useMutation(ADD_POST
    , {
    onCompleted: () => {
      setProductName('');
      setLocation('');
      setOriginalPrice('');
      setDiscountedPrice('');
      setDuration('');
      setDescription('');
      alert('Deal added successfully!');
    },
    onError: (error) => {
      console.log(error);
      alert('Failed to add deal. Please try again later.');
    }
  }
  );
  const getImageData = (imageURL) => {
    setImageData(imageURL);
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost({
        variables: {
            location: location,
            product: productName,
            regPrice: parseFloat(originalPrice),
            salePrice: parseFloat(discountedPrice),
            image: imageData,
            dealDuration: parseFloat(duration),
            description: description,
        }
    });
  };

  return (
    <Container fluid="md">
      <h1 className="text-center">Add New Deal</h1>
      <Row className="justify-content-center"></Row>
      <Container className="bg-info p-4 rounded-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
          </Form.Group>

          {/* <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
          </Form.Group> */}

          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Select value={location} onChange={(event) => setLocation(event.target.value)}>
              <option>Select a city</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="originalPrice">
            <Form.Label>Original Price</Form.Label>
            <Form.Control type="text" value={originalPrice} onChange={(event) => setOriginalPrice(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="discountedPrice">
            <Form.Label>Discounted Price</Form.Label>
            <Form.Control type="text" value={discountedPrice} onChange={(event) => setDiscountedPrice(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="duration">
            <Form.Label>Duration of Deal</Form.Label>
            <Form.Control type="text" value={duration} onChange={(event) => setDuration(event.target.value)} />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(event) => setDescription(event.target.value)} />
          </Form.Group>

          <UploadWidget setImageData={setImageData}/>
            {imageData? (imageData) : ('No Profile Picture Uploaded!')}
          <Button variant="primary" type="submit">

            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default AddDealForm;