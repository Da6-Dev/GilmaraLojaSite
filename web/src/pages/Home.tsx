import { useState } from 'react';

const produtosMock = [
    { id: 1, nome: 'Smartphone XYZ', preco: 1299.99, imagem: 'https://placehold.co/200x200?text=Phone' },
    { id: 2, nome: 'Notebook Gamer', preco: 4500.00, imagem: 'https://placehold.co/200x200?text=Laptop' },
    { id: 3, nome: 'Fone Bluetooth', preco: 199.90, imagem: 'https://placehold.co/200x200?text=Fone' },
    { id: 4, nome: 'Smart Watch', preco: 350.00, imagem: 'https://placehold.co/200x200?text=Watch' },
    { id: 5, nome: 'Tablet Pro', preco: 2100.00, imagem: 'https://placehold.co/200x200?text=Tablet' },
    { id: 6, nome: 'Câmera 4K', preco: 3200.00, imagem: 'https://placehold.co/200x200?text=Camera' },
];

export default function Home() {
    const [carrinho, setCarrinho] = useState<number>(0);

    const adicionarAoCarrinho = () => {
        setCarrinho(carrinho + 1);
        alert("Produto adicionado ao carrinho!");
    };

    return (
        <div className="flex flex-col min-h-screen w-full font-sans text-gray-100">

            {/* Cabeçalho */}
            <header className="bg-[#242424] border-b border-gray-700 p-4 sticky top-0 z-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-[#646cff]">Gilmara Loja</div>
                    <nav>
                        <ul className="flex gap-6 list-none">
                            <li><a href="#" className="text-white hover:text-[#646cff] transition-colors">Início</a></li>
                            <li><a href="#" className="text-white hover:text-[#646cff] transition-colors">Produtos</a></li>
                            <li><a href="#" className="text-white hover:text-[#646cff] transition-colors">Contato</a></li>
                        </ul>
                    </nav>
                    <div className="font-medium bg-gray-800 px-3 py-1 rounded-full border border-gray-600">
                        🛒 Carrinho: <span className="text-[#646cff]">{carrinho}</span>
                    </div>
                </div>
            </header>

            {/* Banner Principal (Hero) */}
            <section className="bg-[#1a1a1a] text-center py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Bem-vindo à Gilmara Loja</h1>
                    <p className="text-xl text-gray-400 mb-8">As melhores ofertas de tecnologia você encontra aqui!</p>
                    <button className="bg-[#646cff] hover:bg-[#535bf2] text-white font-medium py-3 px-8 rounded-lg transition-colors text-lg">
                        Ver Ofertas
                    </button>
                </div>
            </section>

            {/* Vitrine de Produtos */}
            <main className="flex-grow py-12 px-4 bg-[#242424]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10 border-b border-gray-700 pb-4">Destaques</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {produtosMock.map((produto) => (
                            <div key={produto.id} className="bg-[#2a2a2a] border border-gray-700 rounded-xl p-6 text-center hover:-translate-y-2 hover:border-[#646cff] transition-all duration-300 shadow-lg">
                                <img
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    className="w-full h-48 object-cover rounded-md mb-4 bg-gray-800"
                                />
                                <h3 className="text-xl font-semibold mb-2 text-white">{produto.nome}</h3>
                                <p className="text-2xl font-bold text-green-400 mb-4">
                                    R$ {produto.preco.toFixed(2)}
                                </p>
                                <button
                                    onClick={adicionarAoCarrinho}
                                    className="w-full bg-gray-800 hover:bg-[#646cff] text-white border border-gray-600 hover:border-[#646cff] py-2 px-4 rounded-lg transition-colors font-medium"
                                >
                                    Comprar
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Rodapé */}
            <footer className="bg-[#1a1a1a] text-gray-500 text-center py-8 border-t border-gray-800">
                <p>&copy; 2025 Gilmara Loja Site. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}