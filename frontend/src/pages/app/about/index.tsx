export function AboutPage(){

    return (
        <div className="bg-gray-100 min-h-screen py-8">
            {/* Seção de Introdução */}
            <section className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Sobre Nós</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Na <strong>Minha Loja</strong>, acreditamos em oferecer produtos de alta qualidade que 
                    atendam às necessidades e desejos dos nossos clientes. Desde a nossa fundação, temos nos 
                    comprometido em fornecer uma experiência de compra fácil, acessível e confiável.
                </p>
            </section>

            {/* Seção de Missão */}
            <section className="container mx-auto mt-12">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Nossa Missão</h2>
                <p className="text-center text-gray-600 mb-6">
                    Nossa missão é ser o destino preferido para quem busca variedade e qualidade. 
                    Trabalhamos todos os dias para garantir que cada cliente tenha a melhor experiência de compra possível.
                </p>
            </section>

            {/* Seção de Valores */}
            <section className="container mx-auto mt-12">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Nossos Valores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold">Qualidade</h3>
                        <p className="text-gray-600">
                            Oferecemos apenas produtos que atendem aos mais altos padrões de qualidade, 
                            garantindo a satisfação dos nossos clientes.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold">Confiança</h3>
                        <p className="text-gray-600">
                            Valorizamos a confiança dos nossos clientes e trabalhamos para oferecer um serviço 
                            transparente e eficiente.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="text-xl font-semibold">Inovação</h3>
                        <p className="text-gray-600">
                            Buscamos constantemente novas maneiras de melhorar nossos produtos e serviços, 
                            sempre com foco nas necessidades do cliente.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}