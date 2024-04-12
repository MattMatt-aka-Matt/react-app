import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from 'react-bootstrap/Table';

const Cart = ({ cart }) => {
    console.log(cart);
return (
    <Container>
        <Row>
            <h1>Panier</h1>
        </Row>
        <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}€</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Row>
    </Container>
);
};
export default Cart;