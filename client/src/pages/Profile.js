import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SavedDeals from '../components/SavedDeals';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const styles = {
    buttonStyle:{
      marginTop:"15px"
    },
    cardStyle:{
      minWidth:"100%"
    },
    imgStyle:{
      maxWidth: "10vh",
      height: "10vh",
      margin: "auto"
    },
    cardHeader:{
      display: "flex",
      flexDirection: "column",
    }
  };

function Profile() {
    const { username } = useParams();

  const { loading, data } = useQuery(username ? QUERY_USER : QUERY_ME, {
    variables: { username: username },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
        <Container className='justify-content-md-center'>
      <Card className=' text-center bg-info p-4 rounded-4' style={styles.cardStyle}>
        <Card.Header>Oops!</Card.Header>
        <Card.Body>
            You need to be logged in to see this.
            <br />
        <Button href="/" style={styles.buttonStyle}>Back to Home</Button>
        </Card.Body>
      </Card>
      </Container>
    )
  }
    return (
        <div>
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {username ? `${user.username}'s` : 'your'} profile.
        </h2>
        <Container>
          <Row>
            <Col> 
              <Card style={styles.cardStyle} className='text-center'>
                <Card.Header className='' style={styles.cardHeader}>{user.username}{!user.profilePicture ? <img style={styles.imgStyle} alt='default profile img' src='./assets/defaultPic.png'/> : ''}</Card.Header>
                <Card.Body>
                  <h3>Your Email: {user.email}</h3>
                </Card.Body>
              </Card>
              </Col>
                {username ? (""):(<Col><Card style={styles.cardStyle} className='text-center'><SavedDeals posts={user.savedPosts}/></Card></Col>)}
            </Row>
        </Container>
        </div>
    )

}

export default Profile