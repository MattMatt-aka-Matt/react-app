
import Card from 'react-bootstrap/Card';
import "../assets/styles/Dish.css"


const Dish = ({ name, image, price}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className="imgSize"variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p>{price}€</p>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
};
export default Dish;
