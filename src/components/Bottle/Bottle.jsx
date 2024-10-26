import './Bottle.css'
const Bottle = ({ bottle, handleAddCard }) => {
    const { name, img, price } = bottle;

    return (
        <div className="bottle">
            <h3>Bottle Name: {name}</h3>
            <img className="bottle-img" src={img} alt="" />
            <h4>Bottle Price: {price}</h4>
            <button onClick={() => handleAddCard(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;