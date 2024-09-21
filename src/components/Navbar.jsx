import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    const [openNav, setOpenNav] = useState(false);
    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-[#222222] z-10 text-retro h-16 rounded-b-2xl flex items-center flex-col justify-center [filter:drop-shadow(0px_0px_3px_#C73659)]"
        >
            <div className="w-5/6 flex justify-between items-center">
                <Link to="/" className="text-2xl">
                    QR-MAKER
                </Link>
                <ul className="hidden md:flex gap-5 DD">
                    <li>
                        <Link to="/make" className="FF">
                            QR_CODE
                        </Link>
                    </li>
                    <li>
                        <Link className="FF">Something</Link>
                    </li>
                    <li>
                        <Link className="FF">Something</Link>
                    </li>
                    <li>
                        <Link className="FF">Something</Link>
                    </li>
                </ul>
                <div className="dropdown relative md:hidden">
                    <RxHamburgerMenu
                        size={40}
                        onClick={(e) => setOpenNav(!openNav)}
                    />
                </div>
            </div>
            <ul
                className={`${
                    openNav ? "flex" : "hidden"
                } flex-col justify-center items-center DD w-[90vw] bg-maroon absolute top-20 rounded-md`}
            >
                <li className="h-16 w-full">
                    <Link
                        to="/make"
                        onClick={(e) => setOpenNav(!openNav)}
                        className=" GG w-full h-full flex justify-center items-center transition-all rounded-md duration-300 hover:[transform:scale(1.01,1.01)] hover:bg-reds"
                    >
                        QR_CODE
                    </Link>
                </li>
                <li className="h-16 w-full">
                    <Link
                        to="/"
                        onClick={(e) => setOpenNav(!openNav)}
                        className=" GG w-full h-full flex justify-center items-center transition-all rounded-md duration-300 hover:[transform:scale(1.01,1.01)] hover:bg-reds"
                    >
                        Something
                    </Link>
                </li>
                <li className="h-16 w-full">
                    <Link
                        to="/"
                        onClick={(e) => setOpenNav(!openNav)}
                        className=" GG w-full h-full flex justify-center items-center transition-all rounded-md duration-300 hover:[transform:scale(1.01,1.01)] hover:bg-reds"
                    >
                        Something
                    </Link>
                </li>
                <li className="h-16 w-full">
                    <Link
                        to="/"
                        onClick={(e) => setOpenNav(!openNav)}
                        className=" GG w-full h-full flex justify-center items-center transition-all rounded-md duration-300 hover:[transform:scale(1.01,1.01)] hover:bg-reds"
                    >
                        Something
                    </Link>
                </li>
            </ul>
        </motion.div>
    );
}

export default Navbar;
