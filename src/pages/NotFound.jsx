import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

function NotFound() {

  return (
    <>
    <Helmet>
      <title>Page non trouver | Mexican Food</title>
    </Helmet>
    <Container>
      <Row>
        <h1>Error 404</h1>
        <h2>Not Found</h2>
      </Row>
    </Container>
    </>
  );
}

export default NotFound;