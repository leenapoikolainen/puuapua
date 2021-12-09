import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-green-900 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        > 
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center">
            <div className="w-full  px-4">
              <h4 className="text-xl text-white font-semibold pb-4">PuuApua auttaa</h4>
              <ul className="text-white">
                <li><strong>Puhelin:</strong> 040 258 7607</li>
                <li><strong>Sähköposti:</strong> puuapua@puuapua.fi</li>
                <li><strong>Y-tunnus:</strong> 3194997-2</li>
              </ul>
            </div>
          </div>
            
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} {" "}
                  leena.dev
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
