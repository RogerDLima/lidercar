import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
    const breadcrumbItems = [{ label: "Política de Privacidade" }];

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white w-full">
            <Header />

            <div style={{ paddingTop: '120px' }}>
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="max-w-4xl mx-auto px-6 md:px-12 py-24">
                <header className="mb-24 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
                        Política de Privacidade
                    </h1>
                    <div className="h-1.5 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Compromisso técnico com a segurança dos seus dados, seguindo o padrão de excelência da LiderCar.
                    </p>
                    <p className="text-gray-600 mt-4 font-mono text-sm uppercase tracking-widest">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </header>

                <div className="space-y-24 text-gray-300 leading-relaxed text-lg">
                    <section className="group">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">01. Introdução</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Transparência e Respeito</h2>
                        </div>
                        <p className="text-gray-400 text-center max-w-3xl mx-auto">
                            A <strong>LiderCar Centro Automotivo</strong>, operando em Belo Horizonte/MG, estabelece nesta política seu compromisso irrevogável com a privacidade. Entendemos que a confiança depositada em nossa equipe para cuidar de seu patrimônio veicular estende-se à proteção de suas informações pessoais. Operamos em estrito cumprimento à Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), garantindo que cada bit de dado seja tratado com o mesmo cuidado que um motor de alta performance.
                        </p>
                    </section>

                    <section className="group border-t border-gray-900 pt-20">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">02. Coleta Técnica</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Dados Necessários</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className="p-8 bg-gray-950 rounded-2xl border border-gray-900 shadow-2xl">
                                <h3 className="text-white font-bold text-xl mb-4">Identificação & Contato</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Coletamos seu nome completo, CPF e dados de contato (WhatsApp/E-mail). Estes são fundamentais para a abertura de ordens de serviço, emissão de Notas Fiscais e comunicação ágil sobre o status dos reparos contratados.
                                </p>
                            </div>
                            <div className="p-8 bg-gray-950 rounded-2xl border border-gray-900 shadow-2xl">
                                <h3 className="text-white font-bold text-xl mb-4">Prontuário do Veículo</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Registramos placa, chassi, marca, modelo e ano. Este histórico técnico permite diagnósticos preditivos e preventivos mais precisos em visitas futuras, garantindo a longevidade mecânica do seu veículo.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="group border-t border-gray-900 pt-20">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">03. Finalidade</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Uso Inteligente</h2>
                        </div>
                        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
                            Seus dados nunca são vendidos. Eles alimentam exclusivamente o ciclo de vida do serviço LiderCar:
                        </p>
                        <ul className="grid md:grid-cols-2 gap-4 text-sm">
                            <li className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-xl border border-white/5">
                                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                <span>Emissão de orçamentos e garantias técnicas.</span>
                            </li>
                            <li className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-xl border border-white/5">
                                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                <span>Agendamento inteligente de revisões.</span>
                            </li>
                            <li className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-xl border border-white/5">
                                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                <span>Envio de alertas de segurança (Recalls).</span>
                            </li>
                            <li className="flex items-center gap-3 bg-gray-900/50 p-4 rounded-xl border border-white/5">
                                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                                <span>Cumprimento de obrigações tributárias.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="group border-t border-gray-900 pt-20">
                        <div className="flex flex-col items-center text-center mb-8">
                            <span className="text-blue-500 font-mono text-sm mb-2 tracking-widest uppercase">04. Segurança</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">Protocolos Ativos</h2>
                        </div>
                        <p className="text-gray-400 text-center max-w-3xl mx-auto">
                            Mantemos camadas robustas de segurança digital. Desde firewalls de última geração até o controle restrito de acesso físico aos computadores da oficina. Somente profissionais treinados em conformidade LGPD acessam os bancos de dados da LiderCar, garantindo que sua vida digital esteja tão protegida quanto seu carro em nosso pátio.
                        </p>
                    </section>

                    <section className="py-12 px-8 bg-blue-600 rounded-3xl text-center shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                        <h2 className="text-3xl font-bold text-white mb-4">Dúvidas sobre Privacidade?</h2>
                        <p className="text-blue-100 mb-8 opacity-90 max-w-xl mx-auto">
                            Nosso encarregado de dados está à disposição para atender suas solicitações técnicas.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-widest">
                            <a href="mailto:contato@lidercarbh.com.br" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:scale-105 transition-transform cursor-pointer">Email do DPO</a>
                            <a href="tel:3198583809" className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer">Ligar Agora</a>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
