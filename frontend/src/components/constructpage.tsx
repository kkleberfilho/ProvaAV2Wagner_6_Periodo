import { Link } from 'react-router-dom';

export function ConstructionPage() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Site em Construção</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Estamos trabalhando duro para trazer a melhor experiência para você.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Volte em breve para conferir as novidades!
                </p>
                <Link 
                    to="/" 
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                    Voltar para a Home
                </Link>
            </div>
        </div>
    );
}
