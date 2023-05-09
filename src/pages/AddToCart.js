import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import OrderCard from '../components/OrderCard';
import { useProducts } from '../context/ProductProvider';

const AddToCart = () => {
    const position = [51.505, -0.09];
    const { orders } = useProducts();
    // console.log('selected product', orders);
    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                {
                    (orders.length > 0)
                        ?
                        orders.map(order => <OrderCard order={order} key={order.id}></OrderCard>)
                        :
                        <p className='text-center font-semibold mb-3'>YOUR ORDER LIST IS EMPTY</p>
                }
            </div>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default AddToCart;