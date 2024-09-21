import React from "react";
import ImageScan from "../../assets/HeroScan.png";
import { motion } from "framer-motion";

function Homepage() {
    return (
        <div className="h-full lg:mx-20 my-20 mx-0 flex justify-center items-center">
            <div className="w-5/6 flex items-center lg:gap-28 gap-20 md:flex-row flex-col">
                <motion.img
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    src={ImageScan}
                    className="md:w-[40%] w-[100%] [filter:drop-shadow(0px_10px_50px_#a4ebff)]"
                    alt=""
                />
                <div className="flex flex-col gap-5 text-retro">
                    <h1 className="text-4xl">QR-Maker</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minima sequi, sunt accusantium culpa doloremque
                        laborum, alias enim minus quas, officiis dolorum dicta
                        ipsa. Dolorum nesciunt officiis id ullam enim voluptas
                        itaque aliquam tenetur ex, dicta asperiores provident
                        eum pariatur soluta atque sint. Ipsam nesciunt, ullam
                        facilis est ducimus aliquam eos.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
