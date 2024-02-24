import React, { useState } from "react";
import CartWidget from "./CartWidget";

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
                <div className="px-4  text-white  font-bold  text-3xl">
                    <h1>D-SPORT</h1>
                </div>
                <div className="flex justify-center items-center">
                    <ul className="text-white flex space-x-6">
                        <li>
                            <button className="text-xl" onClick={toggleIndumentaria}>
                                Indumentaria
                            </button>
                            {showIndumentaria && (
                                <ul className="absolute bg-red-600 py-4 px-4">
                                    <li>Camisetas</li>
                                    <li>Pantalones</li>
                                    <li>Buzos</li>
                                    <li>Shorts</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button className="text-xl" onClick={toggleCalzado}>Calzado</button>
                            {showCalzado && (
                                <ul className="absolute bg-red-400 py-4 px-10">
                                    <li>Botines</li>
                                    <li>Running</li>
                                    <li>Training</li>
                                    <li>Ojotas</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button className="text-xl" onClick={toggleAccesorios}>Accesorios</button>
                            {showAccesorios && (
                                <ul className="absolute bg-red-600 py-4 px-4">
                                    <li>Bolsos</li>
                                    <li>Canilleras</li>
                                    <li>Pelotas</li>
                                    <li>Mochilas</li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button className="text-xl" onClick={toggleNosotros}>Nosotros</button>
                            {showNosotros && (
                                <ul className="absolute bg-red-600 py-4 px-4    ">
                                    <li>Contacto</li>
                                    <li>Sucursales</li>
                                </ul>
                            )}
                        </li>
                        <li><CartWidget/></li>
                    </ul>
                </div>
                <div>
                    <form action="">
                        <input className="mr-20 px-5 rounded-lg" type="text" />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;