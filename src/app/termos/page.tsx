import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
    const breadcrumbItems = [{ label: "Termos de Serviço" }];

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white w-full">
            <Header />

            <div style={{ paddingTop: '120px' }}>
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="max-w-4xl mx-auto px-6 md:px-12 py-24">
                <header className="mb-24 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
                        Termos de Serviço
                    </h1>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        As diretrizes técnicas e contratuais que fundamentam nossa relação de confiança e excelência.
                    </p>
                    <p className="text-gray-600 mt-4 font-mono text-sm uppercase tracking-widest">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </header>

                <div className="space-y-24 text-gray-300 leading-relaxed text-lg">
                    <section className="group">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">01. Objeto</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Contratação de Serviços</h2>
                        </div>
                        <p className="text-gray-400 text-center max-w-3xl mx-auto">
                            Estes Termos de Serviço regem a relação contratual entre a <strong>LiderCar Centro Automotivo</strong> e seus clientes. Ao utilizar nosso site ou contratar nossos serviços de manutenção e reparo veicular, o cliente declara ciência e concordância integral com as diretrizes técnicas e administrativas aqui expostas, essenciais para garantir a segurança de ambas as partes.
                        </p>
                    </section>

                    <section className="group border-t border-gray-900 pt-20">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">02. Fluxo Técnico</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Orçamentos e Aprovações</h2>
                        </div>
                        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
                            A excelência LiderCar exige um processo rigoroso de diagnóstico:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-gray-950 rounded-2xl border border-gray-900 shadow-xl">
                                <h3 className="text-blue-400 font-bold mb-4">Validade Limitada</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Nossos orçamentos técnicos possuem validade de 5 (cinco) dias úteis. Devido à constante variação de preços de componentes eletrônicos e peças de alta performance de nossos fornecedores, valores após este prazo devem ser revalidados.
                                </p>
                            </div>
                            <div className="p-8 bg-gray-950 rounded-2xl border border-gray-900 shadow-xl">
                                <h3 className="text-blue-400 font-bold mb-4">Autorização Obrigatória</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Nenhum serviço será executado sem aprovação prévia expressa via assinatura física ou confirmação digital rastreável (WhatsApp). Alterações de escopo detectadas durante o processo de montagem exigirão nova autorização.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group border-t border-gray-900 pt-20">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">03. Insumos</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Qualidade das Peças</h2>
                        </div>
                        <p className="text-gray-400 text-center max-w-3xl mx-auto">
                            Para garantir a segurança máxima, a LiderCar utiliza apenas componentes originais ou de primeira linha (OEM). Caso o cliente opte por fornecer peças próprias, a oficina cobrará apenas a mão de obra técnica e ficará isenta de qualquer responsabilidade sobre a durabilidade ou eventuais danos colaterais gerados por tais componentes externos.
                        </p>
                    </section>

                    <section className="group border-t border-gray-900 pt-20">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">04. Garantias</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Cobertura Técnica</h2>
                        </div>
                        <div className="bg-gray-950 p-10 rounded-3xl border border-gray-800">
                            <ul className="space-y-6 text-sm">
                                <li className="flex gap-4">
                                    <div className="text-blue-500 font-bold">90 DIAS</div>
                                    <p className="text-gray-400">Garantia legal integral sobre a mão de obra especializada em conformidade com o Código de Defesa do Consumidor (CDC).</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="text-blue-500 font-bold">FABRICANTE</div>
                                    <p className="text-gray-400">A garantia das peças instaladas segue estritamente o prazo e política definidos pelos seus respectivos fabricantes.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="text-red-500 font-bold">EXCLUSÃO</div>
                                    <p className="text-gray-400 italic">A garantia perde validade imediata em casos de participação em ventos de pista (track days), modificações não autorizadas ou mau uso severo.</p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="group border-t border-gray-900 pt-20">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">05. Pátio</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Retirada Veicular</h2>
                        </div>
                        <p className="text-gray-400 text-center max-w-3xl mx-auto">
                            Após a notificação de finalização do serviço, o cliente dispõe de 48 horas úteis para a retirada do veículo. Excedido este período, a LiderCar se reserva o direito de cobrar taxas de permanência diária para custeio de logística, segurança e ocupação de vaga produtiva.
                        </p>
                    </section>

                    <section className="p-12 bg-gray-950 border border-blue-900/30 rounded-3xl text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Foro de Eleição</h2>
                        <p className="text-gray-500 text-sm">
                            Para prevenir litígios, as partes elegem o Foro da Comarca de Belo Horizonte, MG, com exclusão de qualquer outro por mais privilegiado que seja.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
