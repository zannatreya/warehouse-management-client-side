import React from 'react';
import CustomerSays from '../CustomerSays/CustomerSays';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <Inventories></Inventories>
            <CustomerSays></CustomerSays>
        </div>
    );
};

export default Home;