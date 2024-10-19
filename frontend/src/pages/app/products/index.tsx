import { useState } from 'react';
import { ProductCard } from "./components/Product-Card"; 
const products = [
    { id: 1, title: 'S24 ULTRA', description: 'Smartphone Galaxy S24 Ultra 5G 512GB Cam Quadrupla de 200MP+50MP+12MP+10MP Cam Frontal 12MP Snapdragon 8 Gen Tela 6.8" Preto - Samsung', price: 9000.00, category: 'Eletrônicos' },
    { id: 2, title: 'Kit3 Camisetas Dry Fit  ', description: 'Feitas com tecido dry fit de última geração, as camisetas oferecem excelente controle de umidade e ventilação, mantendo você seco e fresco durante seus treinos mais intensos.', price: 89.99, category: 'Roupas' },
    { id: 3, title: 'Pulseira Inteligente Xiaomi Smart Band 9', description: 'Smart Band aprova de água com 21 diasd e bateria', price: 399.99, category: 'Eletrônicos' },
    { id: 4, title: 'Pulseira Extra para Mi Band ', description: 'Pulseira de silicone', price: 40.00, category: 'Acessórios' },
   
];

export function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
    const [priceRange, setPriceRange] = useState<number>(15000);

    const filteredProducts = products.filter((product) => {
        const inCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
        const inPriceRange = product.price <= priceRange;
        return inCategory && inPriceRange;
    });

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <section className="container mx-auto">
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Produtos</h1>

                <div className="mb-8 flex flex-col md:flex-row justify-between">
                  
                    <div>
                        <label htmlFor="category" className="block text-lg font-medium text-gray-700">
                            Categoria:
                        </label>
                        <select
                            id="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="Todos">Todos</option>
                            <option value="Eletrônicos">Eletrônicos</option>
                            <option value="Roupas">Roupas</option>
                            <option value="Acessórios">Acessórios</option>
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="priceRange" className="block text-lg font-medium text-gray-700">
                            Faixa de Preço: Até R$ {priceRange.toFixed(2)}
                        </label>
                        <input
                            type="range"
                            id="priceRange"
                            min="50"
                            max="200"
                            step="10"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="mt-1 block w-full"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                description={product.description}
                                price={`R$ ${product.price.toFixed(2)}`}
                                link={`/produtos/${product.id}`}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-600">Nenhum produto encontrado para os filtros selecionados.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
