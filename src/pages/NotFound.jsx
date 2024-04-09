import React from 'react';
import { Container, Row } from 'react-bootstrap';

function NotFound() {

  return (
    <Container>
      <Row>
        <h1>Error 404</h1>
        <h2>Not Found</h2>
      </Row>
    </Container>
  );
}

export default NotFound;