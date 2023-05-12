import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import OrderCard from '../components/OrderCard';
import { useProducts } from '../context/ProductProvider';
import { CLEAR_ALL_FROM_CART } from './../state/ProductSate/actionTypes';
import orderAllSound from './chime-notification-alert_C_major.wav';
import clearAllSound from './clunk-notification-alert_D_major.wav';

const AddToCart = () => {
    const { state, dispatch } = useProducts();
    const { cart: orders } = state;

    const handleOrderAll = () => {
        // Play the click sound
        const audio = new Audio(orderAllSound);
        audio.play();

        // Vibrate the phone for 200ms
        if (navigator && navigator.vibrate) {
            navigator.vibrate(200);
        }
        // Implement the order all functionality here
    };

    const handleClearAll = () => {
        // Clear all orders
        dispatch({ type: CLEAR_ALL_FROM_CART });
        toast.success('CLEAR ALL FROM CART');

        // Play the click sound
        const audio = new Audio(clearAllSound);
        audio.play();

        // Vibrate the phone for 200ms
        if (navigator && navigator.vibrate) {
            navigator.vibrate(200);
        }
        // Implement the order all functionality here
    };

    const [defaultPosition, setDefaultPosition] = useState([51.505, -0.09]);
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setDefaultPosition([latitude, longitude]);
            setUserLocation([latitude, longitude]);
        });
    }, []);

    const renderKrakowMap = () => {
        const position = [50.06143, 19.93658]; // Coordinates for Kraków

        return (
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>Point in Kraków</Popup>
                </Marker>
            </MapContainer>
        );
    };

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
            <div className="text-center mt-8">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                    onClick={handleOrderAll}
                >
                    ORDER ALL
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleClearAll}
                >
                    CLEAR ALL
                </button>
            </div>

            <div className='max-w-7xl gap-14 mx-auto my-10'>

                <div>
                    <h3>Your location</h3>
                    <div id='map' style={{ height: '400px', width: '100%' }}>
                        <MapContainer center={userLocation || defaultPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={defaultPosition}>
                                <Popup>Restaurant Location</Popup>
                            </Marker>
                            {userLocation && (
                                <Marker position={userLocation}>
                                    <Popup>Your Location</Popup>
                                </Marker>
                            )}
                        </MapContainer>
                    </div>
                </div>

                {/* New map */}
                <div className='mt-8'>
                    <h3>Restaurant's Location</h3>
                    <div id='krakow-map' style={{ height: '400px', width: '100%' }}>
                        {renderKrakowMap()}
                    </div>
                </div>

            </div>
        </div>
    );

};

export default AddToCart;
