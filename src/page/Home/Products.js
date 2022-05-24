import React from 'react';
import useProducts from '../Hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products]=useProducts()
    return (
        <div class='px-12'>
            <h1 class='text-3xl mt-10 font-bold text-rose-700'> Our Products</h1>
            <div class='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-6'>
            {
                products.map(p=> <Product key={p.id} product={p}>
                  
                </Product>)
            }
            </div>
        </div>
    );
};

export default Products;