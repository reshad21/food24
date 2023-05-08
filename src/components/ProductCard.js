import React, { useEffect } from "react";
import buttonClickSound from '../assets/mixkit-on-or-off-light-switch-tap-2585.wav';

const ProductCard = ({ product }) => {
    // const { pathname } = useLocation();
    // Function to play sound effect when button is clicked
    const playButtonClickSound = () => {
        const audio = new Audio(buttonClickSound);
        audio.play();
    }

    // UseEffect hook to load the sound effect on component mount
    useEffect(() => {
        new Audio(buttonClickSound);
    }, []);



    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
            <div className='h-52 w-52 mx-auto'>
                <img src={product?.image} alt={product?.image} />
            </div>
            <h1 className='font-bold text-center'>{product?.brand}</h1>
            <p className='text-center font-semibold mb-3'>Rating: {product?.rating}</p>

            <div className='flex gap-2 mt-5'>
                <button onClick={playButtonClickSound} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                    Add to item
                </button>
            </div>
        </div>
    );
};

export default ProductCard;