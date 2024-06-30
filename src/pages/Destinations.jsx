/* eslint-disable react/prop-types */
import { useState } from "react";
import Destination from "../components/Destination";

const Destinations = ({destinations}) => {

    const [destinationIndex, setDestinationIndex] = useState(1);

    return (
        <section className="destinations overflow-hidden bg-cover flex items-center bg-[url(../assets/destination/background-destination-mobile.jpg)] md:bg-[url(../assets/destination/background-destination-tablet.jpg)] lg:bg-[url(../assets/destination/background-destination-desktop.jpg)] min-h-[100svh] pb-12 2xl:p-0">
            <div className="container mt-40">
                <h1 className="flex text-xl items-center text-white uppercase mb-12 tracking-[0.2em] lg:text-[1.625rem]">
                    <span className="block mr-7 text-gray-600 font-bold text-[1.75rem]">
                        01
                    </span>
                    Pick your destination
                </h1>
                {destinations?.map((destination, i) => {
                    return (
                        <Destination key={i} active={i === destinationIndex} {...destination}>
                            <ul className="destination-tabs mb-12 flex justify-center gap-8 lg:justify-start lg:mb-5">
                                {destinations?.map((destination, i) => <li key={i} className={i === destinationIndex? "active" : ""} onClick={() => setDestinationIndex(i)}>{destination.name}</li>)}
                            </ul>
                        </Destination>
                    );
                })}
            </div>
        </section>
    );
}

export default Destinations;