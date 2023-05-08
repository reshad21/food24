import React, { useEffect } from "react";
import productImage from '../assets/0be61272117251004060346e57b7b6e6.jpg';
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
            <div className='rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold '>
                <p> 10 </p>
            </div>
            <div className='h-52 w-52 mx-auto'>
                <img src={productImage} alt={productImage} />
            </div>
            <h1 className='font-bold text-center'>Intel</h1>
            <p className='text-center font-semibold mb-3'>Rating: 5</p>

            <div className='flex gap-2 mt-5'>
                <button onClick={playButtonClickSound} className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
                    Add to item
                </button>
            </div>
        </div>
    );
};

export default ProductCard;