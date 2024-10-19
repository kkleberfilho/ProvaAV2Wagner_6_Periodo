// CartPage.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

type CartItem = {
    id: number;
    title: string;
    price: number;
    quantity: number;
};

const initialCartItems: CartItem[] = [
    { id: 1, title: 'S24 ULTRA', price: 9000.00, quantity: 1 },
    { id: 2, title: 'Kit3 Camisetas Dry Fit', price: 89.99, quantity: 2 },
];

export function CartPage() {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

    
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const removeItem = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <section className="container mx-auto">
                <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">Carrinho de Compras</h1>

                {}
                {cartItems.length > 0 ? (
                    <>
                        {}
                        <div className="mb-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
                                    <div>
                                        <h3 className="text-xl font-semibold">{item.title}</h3>
                                        <p className="text-gray-600">Preço: R$ {item.price.toFixed(2)}</p>
                                        <p className="text-gray-600">Quantidade: {item.quantity}</p>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700 transition"
                                    >
                                        Remover
                                    </button>
                                </div>
                            ))}
                        </div>

                        {}
                        <div className="bg-white shadow-md rounded-lg p-4 text-right">
                            <h2 className="text-2xl font-semibold mb-4">Total: R$ {totalAmount.toFixed(2)}</h2>
                            <div className="flex justify-end space-x-4">
                                <Link to={"/products"} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                                    Continuar Comprando
                                </Link>
                                <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                                    Finalizar Compra
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
                )}
            </section>
        </div>
    );
}
