import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, price } = inventory;
    const navigate = useNavigate();
    const navigateToInventoryDetail = (id) => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='inventory mb-5 single-pic'>
            <div className='d-flex justify-content-center single-pic'>
                <img src={img} className='img-fluid client-pic' height={200} alt="" />

            </div>
            <div className='text-center client-info'>
                <h4 className='headline'> {name}</h4>
                <p><span className='headline'>Price:</span> {price}</p>
                <p><span>{description}</span></p>
                <button className='btn-design' onClick={() => navigateToInventoryDetail(_id)}>Update</button>
            </div>
        </div>
    );
};

export default Inventory;


