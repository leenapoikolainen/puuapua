/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";




export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/landing"
            >
              PUUAPUA
              {/*
              <img
                alt="..."
                src={require("assets/img/logo.png").default}
                className="h-16 w-16"
              />
              */}
            </Link>
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
                <Link
                  to="/metsapalvelut" className={
                    "lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md font-bold"
                  }>Puuta metsästä</Link>
              </li>

              <li className="flex items-center">
                <Link
                  to="/klapipalvelu" className={
                    "lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md font-bold"
                  }>Puuta klapeiksi</Link>
              </li>

              <li className="flex items-center">
                <Link
                  to="/puunmyynti" className={
                    "lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md font-bold"
                  }>Puuta myydä</Link>
              </li>

              <li className="flex items-center">
                <Link
                  to="/lisatietoja" className={
                    "lg:text-white lg:hover:text-forestGreen-200 text-white px-3 py-4 lg:py-2 flex items-center text-md font-bold"
                  }>Mitä muuta</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
