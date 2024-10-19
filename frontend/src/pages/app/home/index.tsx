import { Link } from "react-router-dom";
import { ProductCard } from "./components/Product-Card";
export function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
    
            <section className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Bem-vindo à Minha Loja!</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Descubra uma variedade incrível de produtos de alta qualidade. 
                    Nossa missão é oferecer a melhor experiência de compra, com um 
                    atendimento excepcional e preços imbatíveis.
                </p>
                <Link to= {"/products"} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Explore Nossos Produtos
                </Link>
            </section>

            <section className="container mx-auto mt-12">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Destaques da Semana</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ProductCard 
                        title="S24 ULTRA" 
                        description="Smartphone Galaxy S24 Ultra 5G 512GB Cam Quadrupla de 200MP+50MP+12MP+10MP Cam Frontal 12MP Snapdragon 8 Gen Tela 6.8" 
                        price="R$ 9000,00" 
                        link="/produtos/1" 
                    />
                    <ProductCard 
                        title="Kit3 Camisetas Dry Fit" 
                        description="Feitas com tecido dry fit de última geração, as camisetas oferecem excelente controle de umidade e ventilação, mantendo você seco e fresco durante seus treinos mais intensos." 
                        price="R$ 89,99" 
                        link="/produtos/2" 
                    />
                    <ProductCard 
                        title="Pulseira Inteligente Xiaomi Smart Band 9" 
                        description="Smart Band aprova de água com 21 diasd e bateria" 
                        price="R$ 399,99" 
                        link="/produtos/3" 
                    />
                </div>
            </section>
        </div>
    );
}
