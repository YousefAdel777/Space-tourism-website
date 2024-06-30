/* eslint-disable react/prop-types */
import { useState } from "react";
import CrewMember from "../components/CrewMember";
import chevronLeft from "../assets/shared/icon-chevron-left.svg"
import chevronRight from "../assets/shared/icon-chevron-right.svg"

const Crew = ({crew}) => {

    const [crewIndex, setCrewIndex] = useState(2);

    return (
        <section className="crew bg-cover overflow-hidden flex items-center bg-[url(../assets/crew/background-crew-mobile.jpg)] md:bg-[url(../assets/crew/background-crew-tablet.jpg)] lg:bg-[url(../assets/crew/background-crew-desktop.jpg)] min-h-[100svh] pb-12 lg:p-0">
            <div className="container mt-40">
                <h1 className="text-xl mb-12 flex items-center text-white uppercase tracking-[0.2em] lg:mb-6 lg:text-[1.625rem]">
                    <span className="block mr-7 text-gray-600 font-bold text-[1.75rem]">
                        02
                    </span>
                    Meet your crew
                </h1>
                <div className="crew-container relative">
                    {crew?.map((member, i) => { 
                        return ( 
                        <CrewMember key={i} active={i === crewIndex} {...member}>
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => setCrewIndex(prevState => (prevState - 1) % crew?.length)}
                                    className="text-white w-10 h-10 lg:hidden"
                                >
                                    <img src={chevronLeft} alt="Chevron left icon" />
                                </button>
                                <div className="bullets flex items-center gap-6 cursor-pointer mx-auto lg:m-0">
                                    {crew?.map((_, i) => <span className={i === crewIndex ? "active" : ""} key={i} onClick={() => setCrewIndex(i)}></span>)}
                                </div>
                                <button
                                    onClick={() => setCrewIndex(prevState => (prevState + 1) % crew?.length)}
                                    className="text-white w-10 h-10 lg:hidden"
                                >
                                    <img src={chevronRight} alt="Chevron right icon" />
                                </button>
                            </div>
                        </CrewMember>
                        );
                    })}
                    <button
                        onClick={() => setCrewIndex(prevState => (prevState - 1) % crew?.length)}
                        className="absolute hidden text-white w-10 h-10 -left-14 top-1/2 -translate-y-1/2 lg:block"
                    >
                        <img src={chevronLeft} alt="Chevron left icon" />
                    </button>
                    <button
                        onClick={() => setCrewIndex(prevState => (prevState + 1) % crew?.length)}
                        className="absolute hidden text-white w-10 h-10 -right-14 top-1/2 -translate-y-1/2 lg:block"
                    >
                        <img src={chevronRight} alt="Chevron left icon" />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Crew;