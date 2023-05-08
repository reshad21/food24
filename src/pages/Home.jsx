import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { db } from "../Firebase/firebase.config";
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [items, setItem] = useState([]);

    // const { products } = useProducts();

    const fetchData = async () => {
        const collectionRef = collection(db, "1");
        const docSnap = await getDocs(collectionRef);

        let products = [];
        docSnap.docs.forEach((doc) => {
            products.push({ ...doc.data(), id: doc.id });
        });

        setItem(products);
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10'>
                {
                    items.map(product => <ProductCard product={product} key={product.id}></ProductCard>)
                }

            </div>
        </div>
    );
};

export default Home;