import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Home = () => {
    const { products } = useProducts();

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
                {
                    products.map(product => <ProductCard product={product} key={product._id}></ProductCard>)
                }

            </div>
        </div>
    );
};

export default Home;