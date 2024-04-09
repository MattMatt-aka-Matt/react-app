import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

function DishDetails() {
  // Utiliser `useParams` pour accéder au paramètre `slug` de l'URL
  const { slug } = useParams();

  return (
    <Container>
      <Row>
        <h1>{slug}</h1> {/* Afficher le slug ici */}
      </Row>
    </Container>
  );
}

export default DishDetails;