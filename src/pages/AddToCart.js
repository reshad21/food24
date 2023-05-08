import React from 'react';
import ProductCard from '../components/ProductCard';

const AddToCart = () => {
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default AddToCart;