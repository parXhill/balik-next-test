import React from 'react';
import '../assets/RestaurantCard.css'

const RestaurantCard = ({ restaurant, onClose }) => {
    return (
        <div className="popup" onClick={onClose}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>{restaurant.name}</h2>
                <img src={restaurant.images} alt={restaurant.name}/>
                <p>{restaurant.description}</p>
            </div>
        </div>
    );
};

export default RestaurantCard;