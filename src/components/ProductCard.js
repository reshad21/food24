import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import buttonClickSound from '../assets/mixkit-on-or-off-light-switch-tap-2585.wav';
import { useProducts } from "../context/ProductProvider";

const ProductCard = ({ product }) => {

    const {increment} = useProducts();

    useEffect(() => {
        new Audio(buttonClickSound);
    }, []);



    const handleOrder = ()=>{
        const audio = new Audio(buttonClickSound);
        audio.play();
        increment();
        toast.success('ADD TO CART');
    }



    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
            <div className='h-52 w-52 mx-auto'>
                <img src={product?.image} alt={product?.image} />
            </div>
            <h1 className='font-bold text-center'>{product?.name}</h1>
            <p className='text-center font-semibold mb-3'>Price: {product?.price}$</p>
            <p className='text-center font-semibold mb-3'>
                {
                
                (product?.description.length > 200)
                ?
                product?.description.slice(0,90)
                :
                product?.description
                
                }
                
            
            </p>

            <div className='flex gap-2 mt-5'>
                <button onClick={handleOrder} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                    Order Now
                </button>
            </div>
        </div>
    );
};

export default ProductCard;