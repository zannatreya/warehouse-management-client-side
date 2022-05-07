import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                <h2 className='item-title py-5'>Inventory Items </h2>
                <div className='item-container'>
                    {
                        inventories.map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Inventories;