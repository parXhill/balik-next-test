'use client'

import restaurantData from '../assets/ restaurant.json';
import RestaurantCard from '../restaurantCard/RestaurantCard';

export default function RestaurantsPanel(){

    let restaurantArray = restaurantData.restaurants


    return (
    <div className="w-full h-48 flex overflow-x-scroll no-scrollbar mb-2">
        {restaurantArray.map(restaurant => {return( <RestaurantCard restaurant={restaurant}/> )})}
       
    </div>
    );
}