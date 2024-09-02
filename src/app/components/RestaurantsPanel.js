'use client'

import restaurantData from '../assets/ restaurant.json';
import RestaurantCard from '../restaurantCard/RestaurantCard';

export default function RestaurantsPanel(){

    let restaurantArray = restaurantData.restaurants


    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
    <div className="w-full h-48 flex overflow-x-scroll no-scrollbar mb-2">
        {restaurantArray.map(restaurant => {return( <RestaurantCard restaurant={restaurant}/> )})}
       
    </div>
    );
}