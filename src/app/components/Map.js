'use client'

import React, { useEffect, useState, useRef } from 'react';
import restaurantData from '../assets/ restaurant.json';
import mapboxgl from 'mapbox-gl';
import RestaurantCard from './RestaurantCard';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYXZlbmR1bSIsImEiOiJjbHp6aHBkNjExZ21xMmtwZ25naWR2YTBhIn0.G1J-yLq_atEuOH51EJJ9ug';

const MapComponent = () => {
    const mapContainerRef = useRef(null);
    const [map, setMap] = useState(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);

    useEffect(() => {
        const mapInstance = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [115.150, -8.65],
            zoom: 13,
            minZoom: 10,
            maxZoom: 16,
        });

        restaurantData.restaurants.forEach((restaurant) => {
            const markerElement = document.createElement('div');
            markerElement.innerHTML = restaurant.marker;
            markerElement.style.fontSize = '24px';
            markerElement.style.cursor = 'pointer';

            new mapboxgl.Marker(markerElement)
                .setLngLat([restaurant.location.longitude, restaurant.location.latitude])
                .addTo(mapInstance)
                .getElement()
                .addEventListener('click', (e) => {
                    e.stopPropagation();
                    setSelectedRestaurant(restaurant);
                });
        });

        setMap(mapInstance);

        return () => mapInstance.remove();
    }, []);

    const handleClose = () => {
        setSelectedRestaurant(null);
    };

    return (
        <div style={{ position: 'relative' }}>
            <div
                ref={mapContainerRef}
                style={{ width: '80vw', height: '100vh' }}
                className="map-container"
            />
            {selectedRestaurant && (
                <RestaurantCard
                    restaurant={selectedRestaurant}
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default MapComponent;