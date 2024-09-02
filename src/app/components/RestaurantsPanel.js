'use client'

import restaurantData from '../assets/ restaurant.json';
import RestaurantCard from '../restaurantCard/RestaurantCard';

export default function RestaurantsPanel(){

    let restaurantArray = restaurantData.restaurants


    return (
    <div className="w-full h-auto flex overflow-x-scroll no-scrollbar">
        {restaurantArray.map(restaurant => {return( <RestaurantCard key={restaurant.id} restaurant={restaurant}/> )})}
       
    </div>
    );
}