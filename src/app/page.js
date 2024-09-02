import Image from "next/image";
import Map from "./components/Map.js";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen">
        <Map className="absolute top-0 left-0 w-full h-full z-10" />
        <div className="absolute top-0 left-0 z-20 p-4">
          <p className="text-white bg-black bg-opacity-50 p-2 rounded">SearchBar</p>
        </div>
      </div>
    </>
  );
}
