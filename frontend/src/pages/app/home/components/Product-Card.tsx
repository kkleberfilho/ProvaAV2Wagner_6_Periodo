type ProductCardProps = {
    title: string;
    description: string;
    price: string;
    link: string;
};

export function ProductCard({ title, description, price, link }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <p className="font-bold text-blue-600">{price}</p>
            <a 
                href={link} 
                className="mt-4 block bg-blue-600 text-white py-2 rounded text-center hover:bg-blue-700 transition"
            >
                Comprar Agora
            </a>
        </div>
    );
}
