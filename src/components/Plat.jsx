const Plat = ({ name, image, price }) => {
    return (
    <div>
    <h3>{name}</h3>
    <img src={image} ></img>
    <p>{price}€</p>
    </div>
    );
    };
    export default Plat;