import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import dishesDatas from "../datas/dishes.json";
import { CartContext } from "../utils/context/CartContext";



function DishDetails() {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const currentDish = dishesDatas.find((dish) => dish.slug === slug);
    setDish(currentDish);
  }, [slug]);
  const {addToCart} = useContext(CartContext);
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
          </Col>
        </Row>
      ) : (
        <p>chargement en cours</p>
      )}
    </Container>
  );
}

export default DishDetails;
