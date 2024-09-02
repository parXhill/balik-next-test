'use client'

import { PiBowlFood } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";



export default function NavigationBar(){

    return (
        <div className="absolute bottom-0 left-0 z-20 w-full">
        <div className="text-black bg-white h-16 flex justify-around items-center">
            <div className="flex flex-col items-center justify-center">
                <PiBowlFood className="text-3xl font-extrabold"/>
                <p className="text-xs">Eat</p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <IoTicketOutline className="text-3xl font-extrabold"/>
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
                <IoChatbubbleEllipsesOutline className="text-3xl font-extrabold"/>
                <p className="text-xs">Ask</p>
            </div>


        </div>
        </div>
    );

}