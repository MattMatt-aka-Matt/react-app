import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import dishesDatas from "../datas/dishes.json";

function DishDetails({ addToCart }) {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const currentDish = dishesDatas.find((dish) => dish.slug === slug);
    setDish(currentDish);
  }, [slug]);

  return (
    <Container>
      {dish ? (
        <Row>
          <Col>
            <img src={dish.image} alt={dish.name} />
          </Col>
          <Col>
            <h1>{dish.name}</h1>
            <p>{dish.description}</p>
            <p>{dish.price}€</p>
            <Button onClick={() => addToCart(dish)}>Ajouter au panier</Button>
            <Button variant="primary">bouton</Button>
          </Col>
        </Row>
      ) : (
        <p>chargement en cours</p>
      )}
    </Container>
  );
}

export default DishDetails;
