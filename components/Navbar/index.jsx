import React, { useState } from 'react';
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

// React Icons
import { FaCouch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        if (!menuOpen) {
            setMenuOpen(menuOpen);
            menuOpen = true;
        } else {
            setMenuOpen(!menuOpen);
            menuOpen = false;
        }
    }

    return (
        <header className="pt-0 px-1 flex justify-between items-center flex-wrap lg:px-3 lg:pt-4">
            <div className="z-50">
                <h1 className="text-2xl font-extrabold">
                    <Link href="/" className="w-max">
                        <a className="flex justify-center items-center gap-2" title="Comfort - Make Your Interior More Minimalistic">
                            <FaCouch className="bg-red-500 text-white p-2 h-8 w-8 rounded-full" />
                            <span>
                                Comfort {" "}
                                <span className="text-sm font-sm text-red-500">
                                    Seat
                                </span>
                            </span>
                        </a>
                    </Link>
                </h1>
            </div>

            <nav>
                <ul className={`menu hidden flex-1 justify-center items-center flex-col absolute left-0 top-0 py-20 pt-16 px-4 bg-white z-40 h-full w-full lg:w-unset lg:h-auto lg:bg-transparent lg:flex lg:flex-row lg:static lg:left-unset lg:top-unset lg:py-0 gap-4 ${styles.menu} ${menuOpen ? `${styles.open}` : ""}`}>
                    <li className="font-semibold text-neutral-500 ease-in-out duration-150 hover:text-red-500 w-max" title="Bedroom" onClick={() => closeMenu()}>
                        <Link href="">
                            Mattress
                        </Link>
                    </li>
                    <li className="font-semibold text-neutral-500 ease-in-out duration-150 hover:text-red-500 w-max" title="Bedroom" onClick={() => closeMenu()}>
                        <Link href="" >
                            Bedroom
                        </Link>
                    </li>
                    <li className="font-semibold text-neutral-500 ease-in-out duration-150 hover:text-red-500 w-max" title="Bedroom" onClick={() => closeMenu()}>
                        <Link href="">
                            Living Room
                        </Link>
                    </li>
                    <li className="font-semibold text-neutral-500 ease-in-out duration-150 hover:text-red-500 w-max" title="Bedroom" onClick={() => closeMenu()}>
                        <Link href="">
                            Dining
                        </Link>
                    </li>
                    <li className="font-semibold text-neutral-500 ease-in-out duration-150 hover:text-red-500 w-max" title="Bedroom" onClick={() => closeMenu()}>
                        <Link href="">
                            Home Office
                        </Link>
                    </li>
                    <li className="font-semibold text-neutral-500 ease-in-out duration-150 hover:text-red-500 w-max" title="Bedroom" onClick={() => closeMenu()}>
                        <Link href="">
                            Office
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="z-50 w-max" onClick={() => closeMenu()}>
                <Link href="/cart">
                    <a className="text-md" title="Cart">
                        <MdOutlineShoppingCart className="bg-zinc-100 text-black p-2 h-8 w-8 rounded-full" />
                    </a>
                </Link>
            </div>

            <div className={`z-50 flex flex-col justify-center items-center lg:hidden  ${styles.hamburger} ${menuOpen ? `${styles.open}` : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span className="h-0.5 w-7 bg-red-500 mb-1.5"></span>
                <span className="h-0.5 w-7 bg-red-500 mb-1.5"></span>
                <span className="h-0.5 w-7 bg-red-500"></span>
            </div>
        </header>
    )
}

export default Navbar;