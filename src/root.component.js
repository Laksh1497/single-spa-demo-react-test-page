
import React from 'react';
import {Card,Button,Container} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';






function Root(props) {
  return(
<Container>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Microfrontend</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Vader</Card.Subtitle>
    <Card.Text>
      This is Vader's Microfrontend!
    </Card.Text>
    <Card.Link href="#">1st useless link</Card.Link>
    <Card.Link href="#">2nd useless link</Card.Link>
  </Card.Body>
</Card>
</Container>

);
}



export default Root;