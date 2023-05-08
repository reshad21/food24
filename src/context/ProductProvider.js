import React, { createContext, useContext, useEffect, useState } from 'react';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {

    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    

    const [count, setCount] = useState(0);
    const [orders, setOrder] = useState([]);

    const increment = () => {
        setCount(count + 1);
        setOrder([...orders, `Product ${count + 1}`])
    };

    const value = {
        products, setProduct, setCount , increment, count, orders
    }

    return (
        <PRODUCT_CONTEXT.Provider value={value}>{children}</PRODUCT_CONTEXT.Provider>
    )
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    return context;
}


export default ProductProvider;