import React from 'react';
import { useForm } from "react-hook-form";


const AddItems = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>please add a product</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='mb-3' {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mb-3' {...register("description")} />
                <input placeholder='Price' className='mb-3' type="number" {...register("price")} />
                <input placeholder='Photo URL' className='mb-3' type="text" {...register("img")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};
export default AddItems;





