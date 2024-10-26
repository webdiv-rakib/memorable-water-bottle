import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <h3>Bottles Here</h3>
            <h4>Bottle Count: {bottles.length}</h4>
            <div className="grid-display">
            {
                bottles.map(bottle => <Bottle
                    bottle={bottle}
                    key={bottle.id}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;