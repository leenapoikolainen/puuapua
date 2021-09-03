/*eslint-disable*/
import React from "react";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;
import { Link } from "react-router-dom";

export default function StaticNavbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="bg-green-900 p-2 mt-0 fixed w-full z-10 top-0 items-center justify-between">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-white text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            to="/landing"
                        >Takaisin pääsivulle </Link>             
                    </div>
                </div>
            </nav>
        </>
    );
}
