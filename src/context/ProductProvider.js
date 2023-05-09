import React, { createContext, useContext, useState } from 'react';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    const [orders, setOrder] = useState([]);

    const increment = () => {
        setCount(count + 1);
        setOrder([...orders, `Product ${count + 1}`])
    };

    const value = {
        setCount , increment, count, orders
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