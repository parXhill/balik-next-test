'use client'

import { PiBowlFoodBold } from "react-icons/pi";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GrTicket } from "react-icons/gr";
import { HiOutlineChat } from "react-icons/hi";





export default function NavigationBar(){

    return (
        <div className="text-black bg-white h-16 flex justify-around items-center">
            <div className="flex flex-col items-center justify-center">
                <PiBowlFoodBold className="text-3xl font-extrabold"/>
                <p className="text-xs">Eat</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <GrTicket  className="text-3xl font-extrabold"/>
                <p className="text-xs">Deals</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <FiHome className="text-3xl font-extrabold"/>
                <p className="text-xs">Home</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <CgProfile className="text-3xl font-extrabold"/>
                <p className="text-xs">Account</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <HiOutlineChat className="text-3xl font-extrabold"/>
                <p className="text-xs">Ask</p>
            </div>


        </div>
    );

}