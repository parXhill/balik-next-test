'use client'

import restaurantData from '../assets/ restaurant.json';
import RestaurantCard from '../restaurantCard/RestaurantCard';


export default function RestaurantsPanel({dispatch}){

    let restaurantArray = restaurantData.restaurants


    return (
    <div className="w-full h-auto flex overflow-x-scroll no-scrollbar items-end">
        {restaurantArray.map(restaurant => {return( <RestaurantCard key={restaurant.id} restaurant={restaurant} dispatch={dispatch}/> )})}
       
    </div>
    );
}