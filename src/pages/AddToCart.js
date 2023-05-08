import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const AddToCart = () => {
    const { orders } = useProducts();
    console.log(orders);
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {
                    (orders.length>0)?
                    orders.map(order => <ProductCard order={order} key={order.key}></ProductCard>)
                    :
                    <p className='text-center font-semibold mb-3'>YOUR ORDER LIST IS EMPTY</p>
                }
            </div>
        </div>
    );
};

export default AddToCart;