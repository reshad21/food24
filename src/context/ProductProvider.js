import React, { createContext, useContext, useEffect, useState } from 'react';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {

    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    // const [state, dispatch] = useReducer(productReducer, initialState)

    // useEffect(() => {
    //     dispatch({ type: actionTypes.FETCHING_START });
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data }))
    //         .catch(()=>{
    //             dispatch({type:actionTypes.FETCHING_ERROR})
    //         })
    // }, [])

    const value = {
        // state,
        // dispatch,
        products, setProduct

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