/* eslint-disable react/prop-types */
import {motion} from "framer-motion"

const Destination = ({active, name, images, description, travel, distance, children}) => {
    return (
        <div className="destination">
            {active && 
                <>
                    <motion.div initial={{opacity: 0, y: 50}} transition={{duration: 0.5}} animate={{opacity: 1, y:0}} className="destination-image flex lg:basis-[54%]">
                        <img src={images.png} alt={`${name} image`} />
                    </motion.div> 
                    <div className="flex flex-col lg:basis-[34.5%]">
                        {children}
                        <motion.div initial={{opacity: 0, y: 50}} transition={{duration: 0.5}} animate={{opacity: 1, y:0}} className="destination-text text-center lg:text-left">
                            <h1 className="font-Bellefair text-6xl tracking-wide text-white mb-12 uppercase lg:text-8xl">{name}</h1>
                            <p className="description text-xl pb-11 border-b-2 border-gray-500 leading-8 text-gray-300 max-w-sm lg:max-w-none">
                                {description}
                            </p>
                            <div className="destination-info flex items-center pt-4 gap-6 flex-col lg:gap-12 lg:flex-row">
                                <div className="distance">
                                    <p>Avg. distance</p>
                                    <span>{distance}</span>
                                </div>
                                <div className="travel">
                                    <p>est. travel time</p>
                                    <span>{travel}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            }
        </div>
    );
}

export default Destination;