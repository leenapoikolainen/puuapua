/*eslint-disable*/
import React from "react";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;
import { Link } from "react-router-dom";



export default function ScrollingNavbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="bg-green-900 p-2 mt-0 fixed w-full z-10 top-0 items-center justify-between">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <ScrollLink
                                    to="main"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={
                                        "cursor-pointer lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md uppercase font-bold"
                                    }>
                                    PUUAPUA
                                </ScrollLink>
                        {/*
                        <Link
                            className="text-white text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            to="/landing"
                        >PUUAPUA </Link>
                        */}
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="text-white fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-lg bg-green-900  " : " hidden")
                        }
                        id="example-navbar-warning"
                    >

                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="flex items-center">
                                <ScrollLink
                                    to="metsapalvelut"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={
                                        "cursor-pointer lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md font-bold"
                                    }>
                                    Puuta Metsästä
                                </ScrollLink>
                            </li>
                            <li className="flex items-center">
                                <ScrollLink
                                    to="klapikone"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={
                                        "cursor-pointer lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md font-bold"
                                    }>
                                    Puuta klapeiksi
                                </ScrollLink>
                            </li>
                            <li className="flex items-center">
                                <ScrollLink
                                    to="puunmyynti"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={
                                        "cursor-pointer lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md font-bold"
                                    }>
                                    Puuta myydä
                                </ScrollLink>
                            </li>
                            <li className="flex items-center">
                                <ScrollLink
                                    to="lisatietoja"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    className={
                                        "cursor-pointer lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md font-bold"
                                    }>
                                    Mitä muuta?
                                </ScrollLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
