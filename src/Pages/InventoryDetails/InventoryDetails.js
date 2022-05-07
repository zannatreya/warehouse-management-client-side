import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useInventoryDetails from '../hooks/useInventoryDetails';

const InventoryDetails = () => {
    const { inventoryId } = useParams();
    const [service] = useInventoryDetails(inventoryId);
    return (
        <div>
            <h2>Welcome you are add to book: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${inventoryId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetails;