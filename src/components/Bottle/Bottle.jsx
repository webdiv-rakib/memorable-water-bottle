import './Bottle.css'
const Bottle = ({ bottle }) => {
    const { name,img, price } = bottle;

    return (
        <div className = "bottle">
            <h3>Bottle Name: {name}</h3>
            <img className="bottle-img" src={img} alt="" />
            <h4>Bottle Price: {price}</h4>
        </div>
    );
};

export default Bottle;