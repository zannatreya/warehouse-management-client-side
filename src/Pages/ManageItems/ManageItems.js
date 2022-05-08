import React from 'react';
import useInventories from '../hooks/useInventories';

const ManageItems = () => {
    const [inventories, setInventories] = useInventories();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://guarded-wildwood-20406.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage your Items</h2>
            {
                inventories.map(inventory => <div key={inventory._id}>
                    <h5>{inventory.name} <button onClick={() => handleDelete(inventory._id)}>X</button></h5>

                </div>)
            }
        </div>
    );
};

export default ManageItems;




