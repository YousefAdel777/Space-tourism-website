import {motion} from "framer-motion"

const crewMember = ({bio, active, role, images, name, children}) => {
    return (
        <>
            {
                active && 
                <div className="crew-member text-center lg:text-left">
                    <div className="flex flex-col-reverse gap-12 lg:flex-col">
                        <motion.div animate={{y: 0, opacity: 1}}  initial={{opacity: 0, y: 50}} transition={{duration: 0.5}} className="member-text">
                            <h2 className="text-3xl text-gray-500 mb-4 uppercase font-Bellefair xl:text-3xl">{role}</h2>
                            <h1 className="text-white text-4xl uppercase mb-4 font-Bellefair xl:text-[3.5rem]">{name}</h1>
                            <p className="text-xl leading-8 tracking-[0.075em] max-w-[55ch] text-gray-300">
                                {bio}
                            </p>
                        </motion.div>
                        {children}
                    </div>
                    <motion.img animate={{y: 40, opacity: 1}}  initial={{opacity: 0, y: 90}} transition={{duration: 0.5}} className="max-h-[500px] lg:max-h-[600px] mb-12 lg:m-0" src={images.png} alt={`${name} image`} />
                </div>
            }
        </>
    );
}

export default crewMember;