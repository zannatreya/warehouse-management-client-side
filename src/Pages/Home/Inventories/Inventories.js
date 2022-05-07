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
        <div id='services' className='container'>
            <div className="row">
                <h2 className='service-title py-5'>Our Services </h2>
                <div className='services-container'>
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