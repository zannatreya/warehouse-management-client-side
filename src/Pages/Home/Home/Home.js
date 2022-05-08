import React from 'react';
import Banner from '../Banner/Banner';
import CustomerSays from '../CustomerSays/CustomerSays';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <CustomerSays></CustomerSays>
        </div>
    );
};

export default Home;