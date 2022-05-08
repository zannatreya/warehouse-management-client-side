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
        <div className='container border mt-3 '>
            <div>
                <div className=' col-12 '>
                    <div>
                        <img className='img-fluid rounded mx-auto d-block' src={inventory.img} alt="" />

                    </div>
                    <div>
                        <h3 className='text-primary'> {inventory.name}</h3>
                        <p>Supplier: {inventory.suppliername}</p>
                        <p>Quantity: {inventory.quantity}</p>
                        <p>Description: {inventory.description}</p>
                        <p>Price: {inventory.price}</p>
                        <div className='text-center p-2'>
                            <button className='btn-design m-3' onClick={handleDelivery}>Delivery</button>
                            <button className='btn-design' onClick={() => navigate('/manage')}>Manage Inventories</button>
                        </div>
                        <div>
                            <form onSubmit={handleRestock}>
                                <input type="number" name="restock" id="" />
                                <button className='btn-design m-2'>
                                    Restock
                                </button>
                            </form>
                        </div>
                    </div>

                </div>



            </div>



        </div>
    );
};

export default InventoryDetails;