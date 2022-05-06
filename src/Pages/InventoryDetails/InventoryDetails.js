import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = ({ inventory }) => {
    const { inventoryId } = useParams();
    const { name, img, description, price } = inventory;


    return (
        <div>
            <h2>Welcome to detail: {inventoryId}</h2>
            <div className='inventory mb-5 single-pic'>
                <div className='d-flex justify-content-center single-pic'>
                    <img src={img} className='img-fluid client-pic' height={200} alt="" />

                </div>
                <div className='text-center client-info'>
                    <h4 className='headline'> {name}</h4>
                    <p>Price: ${price}</p>
                    <p><span>{description}</span></p>
                    <button className='btn-design'>Delivered</button>
                </div>
            </div>

            {/* <div className='text-center'>

                <Link to="/">
                    <button className='btn btn-design'>Proceed Checkout</button>
                </Link>
            </div> */}
        </div>
    );
};

export default InventoryDetails;