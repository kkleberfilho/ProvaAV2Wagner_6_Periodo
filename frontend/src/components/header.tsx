import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">

                <div className="text-2xl font-bold">
                    <Link to={"/"} className="hover:text-gray-200">
                        Suas Compras 
                    </Link>
                </div>

                <div className="flex-1 mx-4">
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <nav className="flex space-x-6">
                    <Link to={"/"}  className="hover:text-gray-200">
                        Home
                    </Link>
                    <Link to={"/products"} className="hover:text-gray-200">
                        Produtos
                    </Link>
                    <Link to={"/cart"}  className="hover:text-gray-200">
                        Carrinho
                    </Link>
                </nav>
            </div>
        </header>
    );
}
