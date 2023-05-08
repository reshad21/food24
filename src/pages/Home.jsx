import React from 'react';
import ProductCard from '../components/ProductCard';
import { useFirebaseAuth } from '../context/AuthProvider';
import { useProducts } from '../context/ProductProvider';

const Home = () => {
    const { data, setData } = useProducts();
    const { user } = useFirebaseAuth();
    console.log(data, user);
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default Home;