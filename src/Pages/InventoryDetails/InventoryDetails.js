import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useInventoryDetails from '../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const navigate = useNavigate();
    // const [item] = useInventoryDetails(inventoryId);

    const [inventory, setInventory] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    })
    const handleDelivery = () => {
        fetch(`http://localhost:5000/product/decrease/${inventoryId}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(json => {
                setInventory({ ...inventory, quantity: inventory.quantity - 1 })
            })


    }
    const handleRestock = async (e) => {
        e.preventDefault();
        const value = e.target.restock.value;

        fetch(`http://localhost:5000/product/increase/${inventoryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ quantity: value }),
        })
            .then(res => res.json())
            .then(json => {
                setInventory({ ...inventory, quantity: parseInt(inventory.quantity) + parseInt(value) })
            })
    }
    return (
        <div>
            <img src={inventory.img} alt="" />
            <h2>Name: {inventory.name}</h2>
            <h2>Supplier: {inventory.supplier}</h2>
            <h2>Quantity: {inventory.quantity}</h2>
            <h2>Description: {inventory.description}</h2>
            <h2>Price: {inventory.price}</h2>

            <div className='text-center'>
                {/* <Link to={`/checkout/${inventoryId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link> */}
                <button onClick={handleDelivery}>Delivery</button>
                <button onClick={() => navigate('/manage')}>Manage Inventories</button>
            </div>
            <div>
                <form onSubmit={handleRestock}>
                    <input type="number" name="restock" id="" />
                    <button >
                        Restock
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InventoryDetails;