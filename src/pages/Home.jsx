import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const Home = () => {

    const navigate = useNavigate();

    return (
        <section className="home overflow-hidden bg-cover flex items-center bg-[url(./assets/home/background-home-mobile.jpg)] md:bg-[url(./assets/home/background-home-tablet.jpg)] lg:bg-[url(./assets/home/background-home-desktop.jpg)] min-h-[100svh]">
            <motion.div animate={{opacity: 1, y: 0}} initial={{opacity: 0, y: 80}} transition={{duration: 0.5}} className="container pb-12 flex flex-col justify-center gap-24 lg:gap-7 lg:justify-between lg:flex-row 2xl:p-0">
                <div className="home-text mt-52 text-center lg:text-left lg:mt-[17rem]">
                    <p className="uppercase text-xl tracking-[0.2em] text-white mb-10 md:text-[1.675rem]">so, you want to travel to</p>
                    <h1 className="text-white text-8xl uppercase font-Bellefair mb-[2.125rem] leading-none md:text-[9.5rem]">space</h1>
                    <p className="text-gray-300 mx-auto max-w-md text-[1.125rem] tracking-[0.075em] leading-8 lg:m-0">
                        Let&apos;s face it; if you want to go to space, you might as well genuinely go to the 
                        outer space and not hover kind of on the edge of it. Well sit back and relax because we&apos;ll
                        give you a truly out of this world experience!
                    </p>
                </div>
                <button className="explore mx-auto hover:shadow-2xl duration-300 hover:shadow-white text-[2.25rem] uppercase w-48 h-48 rounded-full bg-white font-Bellefair flex items-center justify-center lg:mt-[23.5rem] md:w-[17.5rem] md:h-[17.5rem] lg:mx-0" onClick={() => navigate("/destination")}>
                    Explore
                </button>
            </motion.div>
        </section>
    );
}

export default Home;