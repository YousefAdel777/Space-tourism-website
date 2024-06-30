/* eslint-disable react/prop-types */
import { useState } from "react"
import Tech from "../components/Tech";

const Technology = ({technology}) => {

    const [techIndex, setTechIndex] = useState(0);

    return (
        <section className="technology overflow-hidden bg-cover bg-[url(../assets/technology/background-technology-mobile.jpg)] md:bg-[url(../assets/technology/background-technology-tablet.jpg)] lg:bg-[url(../assets/technology/background-technology-desktop.jpg)] min-h-[100svh] pb-12 2xl:p-0">
            <div className="container mt-40 xl:mt-52">
                <h1 className="text-xl flex items-center text-white uppercase mb-12 tracking-[0.2em] lg:mb-6 lg:text-[1.625rem]">
                    <span className="block mr-7 text-gray-600 font-bold text-[1.75rem]">
                        03
                    </span>
                    space launch 101
                </h1>
            </div>
            <div className="tech-container lg:w-[89%] lg:ml-auto">
                {technology?.map((tech, i) => { 
                    return (
                        <Tech key={i} active={i === techIndex} {...tech}>
                            <div className="controls flex gap-8 lg:flex-col">
                                {technology?.map((_, i) => <span onClick={() => setTechIndex(i)} key={i} className={i === techIndex ? "active" : ""}>{i + 1}</span>)}
                            </div>
                        </Tech>
                    );
                })}
            </div>
        </section>
    );
}

export default Technology