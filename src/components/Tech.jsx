/* eslint-disable react/prop-types */
import {motion} from "framer-motion"

const Tech = ({name, active, images, description, children}) => {
        return (
            <>
                { active && 
                <div className="tech">
                    <div className="flex flex-col text-center gap-8 items-center lg:gap-20 lg:basis-[69%] lg:flex-row lg:text-left">
                        {children}
                        <motion.div animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} initial={{opacity: 0, y: 60}} className="tech-text p-4 lg:p-0">
                            <p className="text-lg mb-2 uppercase text-gray-400 tracking-[0.2em]">The Technology...</p>
                            <h2 className="text-white uppercase font-Bellefair mb-4 text-[2rem] 2xl:text-6xl">{name}</h2>
                            <p className="text-gray-300 text-xl leading-8 tracking-widest max-w-md lg:max-w-none">{description}</p>
                        </motion.div>
                    </div>
                    <motion.picture className="basis-1/2 flex items-center justify-center lg:min-h-[530px]" animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} initial={{opacity: 0, y: 60}}>
                        <source media="(min-width: 992px)" srcSet={images.portrait} />
                        <img src={images.landscape} alt={`${name} image`} />
                    </motion.picture>
                </div>
                }
            </>
        );
}

export default Tech;