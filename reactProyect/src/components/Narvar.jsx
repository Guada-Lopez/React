import React, { useState } from "react";
import CartWidget from "./CartWidget";
import magnifierWidget from "./magnifier";

const Navbar = () => {
    const [showIndumentaria, setShowIndumentaria] = useState(false);
    const [showCalzado, setShowCalzado] = useState(false);
    const [showAccesorios, setShowAccesorios] = useState(false);
    const [showNosotros, setShowNosotros] = useState(false);

    const toggleIndumentaria = () => {
        setShowIndumentaria(!showIndumentaria);
    };

    const toggleCalzado = () => {
        setShowCalzado(!showCalzado);
    };

    const toggleAccesorios = () => {
        setShowAccesorios(!showAccesorios);
    };

    const toggleNosotros = () => {
        setShowNosotros(!showNosotros);
    };

    return (
        <nav className="bg-red-600 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h1 className="px-4  text-white  font-bold  text-3xl">D-SPORTS</h1>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="text-white flex space-x-6">
                        <li>
                            <button className="text-xl" onClick={toggleIndumentaria}>
                                Indumentaria
                            </button>
                            {showIndumentaria && (
                                <ul className="absolute bg-orange-500 py-6 px-8">
                                    <li className=" hover:text-black"><button>Camisetas</button></li>
                                    <li className=" hover:text-black"><button>Pantalones</button></li>
                                    <li className=" hover:text-black"><button>Buzos</button></li>
                                    <li className=" hover:text-black"><button>Shorts</button></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button className="text-xl" onClick={toggleCalzado}>Calzado</button>
                            {showCalzado && (
                                <ul className="absolute bg-orange-500 py-6 px-8">
                                    <li className=" hover:text-black"><button>Botines</button></li>
                                    <li className=" hover:text-black"><button>Running</button></li>
                                    <li className=" hover:text-black"><button>Training</button></li>
                                    <li className=" hover:text-black"><button>Ojotas</button></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button className="text-xl" onClick={toggleAccesorios}>Accesorios</button>
                            {showAccesorios && (
                                <ul className="absolute bg-orange-500 py-6 px-8">
                                    <li className=" hover:text-black"><button>Bolsos</button></li>
                                    <li className=" hover:text-black"><button>Canilleras</button></li>
                                    <li className=" hover:text-black"><button>Pelotas</button></li>
                                    <li className=" hover:text-black"><button>Mochilas</button></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button className="text-xl" onClick={toggleNosotros}>Nosotros</button>
                            {showNosotros && (
                                <ul className="absolute bg-orange-500 py-6 px-8">
                                    <li className=" hover:text-black"><button>Contacto</button></li>
                                    <li className=" hover:text-black"><button>Sucursales</button></li>
                                </ul>
                            )}
                        </li>
                        <li><CartWidget/></li>
                    </ul>
                </div>
                <div>
                    <magnifierWidget/>
                    <form action="">
                        <input className="mr-20 px-5 rounded-lg" type="text" />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;