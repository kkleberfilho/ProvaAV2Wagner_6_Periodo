import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto py-6 px-4">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Minha Loja</h2>
                        <p>© {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <Link to="about" className="hover:text-gray-400">
                            Sobre Nós
                        </Link>
                        <Link to="contact" className="hover:text-gray-400">
                            Contato
                        </Link>
                    </div>
                </div>

                <div className="text-sm">
                    <p>Endereço: Rua Justa, 123, Maceió, Alagoas</p>
                    <p>Email: contato@suascompras.com</p>
                    <p>Telefone: (82) 99988-7766</p>
                </div>
            </div>
        </footer>
    );
}
