import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
    const breadcrumbItems = [{ label: "Política de Privacidade" }];

    return (
        <main className="bg-[#050505] min-h-screen text-white w-full relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

            <Header />

            <div style={{ paddingTop: '120px' }} className="relative z-10">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 py-16 relative z-10">
                <div className="bg-[#0a0a0a]/80 border border-white/5 rounded-3xl p-8 md:p-16 backdrop-blur-xl shadow-2xl">
                    <header className="mb-20 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                            Política de Privacidade
                        </h1>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
                            Este documento descreve como a LiderCar protege e trata seus dados técnicos e pessoais assegurando máxima confidencialidade.
                        </p>
                        <p className="text-blue-500/80 mt-8 font-mono text-[10px] uppercase tracking-[0.2em] border-b border-white/5 pb-8 inline-block">
                            Versão 2.4 | Última atualização: {new Date().toLocaleDateString('pt-BR')}
                        </p>
                    </header>

                    <div className="space-y-16 text-gray-300 leading-relaxed text-base text-justify">
                        <section className="group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-500 font-mono text-xs border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">01</span>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Compromisso Institucional</h2>
                            </div>
                            <div className="pl-4 md:pl-12 border-l border-white/5">
                                <p className="text-gray-400 leading-relaxed">
                                    A <strong className="text-white font-medium">LiderCar Centro Automotivo</strong>, estabelecida em Belo Horizonte-MG, reitera seu compromisso com a transparência total. Esta política detalha o tratamento de dados em total conformidade com a <strong className="text-white/80">Lei Geral de Proteção de Dados (Lei 13.709/2018)</strong>. Coletamos apenas o estritamente necessário para garantir a segurança operacional e a comunicação do serviço.
                                </p>
                            </div>
                        </section>

                        <section className="pt-8 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-500 font-mono text-xs border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">02</span>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Coleta & Tratamento</h2>
                            </div>
                            <div className="pl-4 md:pl-12 border-l border-white/5">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="p-6 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl hover:border-blue-500/30 transition-colors">
                                        <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            Dados do Proprietário
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Nome, CPF e canais de contato (WhatsApp) para faturamento, garantias técnicas e emissão de notas fiscais.
                                        </p>
                                    </div>
                                    <div className="p-6 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl hover:border-blue-500/30 transition-colors">
                                        <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            Prontuário Veicular
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            Registros de telemetria, placa, chassi e histórico de revisões para manutenção da integridade mecânica.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="pt-8 group">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-500 font-mono text-xs border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">03</span>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Segurança de Dados</h2>
                            </div>
                            <div className="pl-4 md:pl-12 border-l border-white/5">
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Seus dados nunca são comercializados. O acesso é restrito aos sistemas internos com medidas rigorosas de proteção:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
                                    {[
                                        "Criptografia de ponta a ponta.",
                                        "Acesso físico restrito.",
                                        "Treinamento técnico da equipe.",
                                        "Auditoria de acessos ao sistema."
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 p-4 border border-white/5 bg-white/[0.02] rounded-xl">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                                            <span className="text-gray-400">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="mt-16 p-10 bg-gradient-to-b from-blue-900/10 to-transparent border border-blue-500/20 rounded-3xl text-center">
                            <h2 className="text-xl font-bold text-white mb-2 tracking-wide uppercase">Canal Direto DPO</h2>
                            <p className="text-gray-400 text-sm mb-8 font-light max-w-md mx-auto">
                                Para exercer seus direitos de acesso, portabilidade ou exclusão do seu cadastro em nossos sistemas.
                            </p>
                            <a href="mailto:contato@lidercarbh.com.br" className="text-xs font-bold uppercase tracking-widest text-white bg-blue-600 px-8 py-4 rounded-full hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all inline-block">
                                Falar com o Responsável
                            </a>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
