import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useLocation } from 'react-router-dom';
import buttonClickSound from '../assets/mixkit-on-or-off-light-switch-tap-2585.wav';
import { useProducts } from "../context/ProductProvider";

const ProductCard = ({ product }) => {
    console.log("single product info", product);

    const { increment } = useProducts();

    useEffect(() => {
        new Audio(buttonClickSound);
    }, []);



    const handleOrder = () => {
        const audio = new Audio(buttonClickSound);
        audio.play();
        increment();
        toast.success('ADD TO CART');
    }

    const { pathname } = useLocation();

    const handleAdd = () => {
        return {
            ...product,
            quantity: product.quantity + 1,

        }
    }
    const handleRemove = () => {
        return {
            ...product,
            quantity: product.quantity - 1,

        }
    }


    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
            {pathname.includes("cart") && (
                <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
                    <p className="text-black"> {product?.quantity} </p>
                </div>
            )}
            <div className='h-52 w-52 mx-auto'>
                <img src={product?.image} alt={product?.image} />
            </div>
            <h1 className='font-bold text-center'>{product?.name}</h1>
            <p className='text-center font-semibold mb-3'>Price: {product?.price}$</p>
            <p className='text-center font-semibold mb-3'>
                {

                    (product?.description.length > 200)
                        ?
                        product?.description.slice(0, 90)
                        :
                        product?.description

                }


            </p>

            {!pathname.includes("cart") && (
                <div className='flex gap-2 mt-5'>
                    <button onClick={handleOrder} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                        Order Now
                    </button>
                </div>
            )}



            {pathname.includes("cart") && (
                <button onClick={handleAdd} className='bg-indigo-500 rounded-full py-1 px-2 mb-2 flex-1 text-white text-bold'>
                    Add Item
                </button>
            )}

            {pathname.includes("cart") && (
                <button onClick={handleRemove} className='bg-rose-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                    Remove Item
                </button>
            )}


        </div>
    );
};

export default ProductCard;