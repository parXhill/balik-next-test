import Image from "next/image";
import Map from "./components/Map.js";
import NavigationBar from "./components/NavigationBar.js";
import RestaurantsPanel from "./components/RestaurantsPanel.js";
import Search from "./components/Search.js"

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <Map/>
        <div className="absolute top-6 z-20 left-1/2 transform -translate-x-1/2">
           <Search/> 
        </div>   

        <div className="absolute bottom-16 left-0 z-20 w-full overflow-x-scroll">
        <RestaurantsPanel/>
      </div>

        <div className="absolute bottom-0 left-0 z-30 w-full">
        <NavigationBar />
        </div>

      </div>

     
 
      
  


        
   
    </>
  );
}
