import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import dishesDatas from "../datas/dishes.json";
import { CartContext } from "../utils/context/CartContext";
import { Helmet } from "react-helmet";

function DishDetails() {
  const { slug } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const currentDish = dishesDatas.find((dish) => dish.slug === slug);
    setDish(currentDish);
  }, [slug]);
  const { addToCart } = useContext(CartContext);
  return (
    <Container>
      {dish ? (
        <>
          <Helmet>
            <title>{dish.name} | Mexican Food</title>
          </Helmet>
          <Row>
            <Col>
              <img src={dish.image} alt={dish.name} className="mw-100" />
            </Col>
            <Col>
              <h1>{dish.name}</h1>
              <p>{dish.description}</p>
              <p>{dish.price}euros</p>
              <Button variant="primary" onClick={() => addToCart(dish)}>
                Commander
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <p>Chargement...</p>
        </Row>
      )}
    </Container>
  );
};


export default DishDetails;
