import CartWidget from "./CartWidget";

const Navbar = () => {
    

    return <nav className="bg-red-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
            <div>
                <img src="" alt="" />
            </div>
            <div className="flex justify-center items-center">
                <ul className="text-white flex space-x-6">
                    <li>
                        <button className="text-lg">Indumentaria</button>
                            
                            <ul className="absolut">
                                <li>Camisetas</li>
                                <li>Pantalones</li>
                                <li>Buzos</li>
                                <li>Shorts</li>
                            </ul>
                    </li>
                    <li>
                        <button>Calzado</button>
                            <ul>
                                <li>Botines</li>
                                <li>Running</li>
                                <li>Training</li>
                                <li>Ojotas</li>
                            </ul>
                    </li>
                    <li>
                        <button>Accesorios</button>
                            <ul>
                                <li>Bolsos</li>
                                <li>Canilleras</li>
                                <li>Pelotas</li>
                                <li>Mochilas</li>
                            </ul>
                    </li>
                    <li>
                        <button>Nosotros</button>
                            <ul>
                                <li>Contacto</li>
                                <li>Sucursales</li>
                            </ul>
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
}

export default Navbar;