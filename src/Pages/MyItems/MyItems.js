import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../../api/axiosPrivate';
import useInventories from '../hooks/useInventories';


const MyItems = () => {
    const [items, setItems] = useState([]);
    const [inventories, setInventories] = useInventories();

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {

        const getItems = async () => {
            const name = user?.name;
            const url = `https://guarded-wildwood-20406.herokuapp.com/product?name=${name}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getItems();

    }, [user])

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
            <h2>Your Items: {items.length}</h2>
            {
                items.map(item => <div key={item._id}>
                    <p>{item.name} : {item.quantity}  <button onClick={() => handleDelete(item._id)}>X</button></p>
                </div>)
            }
        </div>
    );
};


export default MyItems;