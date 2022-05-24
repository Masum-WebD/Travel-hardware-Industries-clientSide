import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;