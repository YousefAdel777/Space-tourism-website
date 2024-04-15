/* eslint-disable react/prop-types */
import { useState } from "react";
import CrewMember from "../components/CrewMember";

const Crew = ({crew}) => {

    const [crewIndex, setCrewIndex] = useState(2);

    return (
        <section className="crew bg-cover overflow-hidden flex items-center bg-[url(./assets/crew/background-crew-mobile.jpg)] md:bg-[url(./assets/crew/background-crew-tablet.jpg)] lg:bg-[url(./assets/crew/background-crew-desktop.jpg)] min-h-[100svh]">
            <div className="container mt-40 pb-12 lg:p-0">
                <h1 className="text-xl mb-12 flex items-center text-white uppercase tracking-[0.2em] lg:mb-6 lg:text-[1.625rem]">
                    <span className="block mr-7 text-gray-600 font-bold text-[1.75rem]">
                        02
                    </span>
                    Meet your crew
                </h1>
                <div className="crew-container">
                    {crew?.map((member, i) => { 
                        return ( 
                        <CrewMember key={i} active={i === crewIndex} {...member}>
                            <div className="bullets flex items-center gap-6 cursor-pointer mx-auto lg:m-0">
                                {crew?.map((_, i) => <span className={i === crewIndex ? "active" : ""} key={i} onClick={() => setCrewIndex(i)}></span>)}
                            </div>
                        </CrewMember>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Crew;