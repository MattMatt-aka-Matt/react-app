import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

function DishDetails() {
  
  const { slug } = useParams();

  return (
    <Container>
      <Row>
        <h1>{slug}</h1>
      </Row>
    </Container>
  );
}

export default DishDetails;