import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
    const breadcrumbItems = [{ label: "Termos de Serviço" }];

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
                            Termos de Serviço
                        </h1>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
                            As diretrizes técnicas e contratuais que regem o padrão de excelência em serviços automotivos da LiderCar.
                        </p>
                        <p className="text-blue-500/80 mt-8 font-mono text-[10px] uppercase tracking-[0.2em] border-b border-white/5 pb-8 inline-block">
                            Código de Conduta | Última atualização: {new Date().toLocaleDateString('pt-BR')}
                        </p>
                    </header>

                    <div className="space-y-16 text-gray-300 leading-relaxed text-base text-center">
                        <section className="group flex flex-col items-center">
                            <div className="flex flex-col items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-500 font-mono text-xs border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">I</span>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Objeto & Escopo</h2>
                            </div>
                            <div className="md:px-12 w-full max-w-2xl">
                                <p className="text-gray-400">
                                    Estes Termos regem a prestação de serviços de diagnóstico, manutenção e reparação veicular pela <strong className="text-white font-medium">LiderCar Centro Automotivo</strong>. Ao contratar nossos serviços, o cliente adere a este protocolo técnico, essencial para a validação de garantias e conformidade com normas da ABNT.
                                </p>
                            </div>
                        </section>

                        <section className="pt-8 group flex flex-col items-center">
                            <div className="flex flex-col items-center gap-4 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-500 font-mono text-xs border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">II</span>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Protocolo de Diagnóstico</h2>
                            </div>
                            <div className="md:px-12 w-full">
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    A execução de qualquer serviço está condicionada à aprovação prévia de orçamento técnico:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 text-left">
                                    <div className="p-6 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl hover:border-blue-500/30 transition-colors flex flex-col items-center text-center">
                                        <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-widest flex items-center justify-center gap-2 w-full">
                                            Validade Orçamentária
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">Os orçamentos possuem validade de 5 (cinco) dias, devido à flutuação de custos de componentes OEM e insumos de importação.</p>
                                    </div>
                                    <div className="p-6 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent rounded-2xl hover:border-blue-500/30 transition-colors flex flex-col items-center text-center">
                                        <h3 className="text-white font-bold text-xs mb-3 uppercase tracking-widest flex items-center justify-center gap-2 w-full">
                                            Autorização Digital
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">Aceitamos aprovações via WhatsApp ou e-mail, que servem como prova contratual corporativa de aceite de escopo e valores.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="pt-8 group flex flex-col items-center">
                            <div className="flex flex-col items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-500 font-mono text-xs border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">III</span>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Política de Garantia</h2>
                            </div>
                            <div className="md:px-12 w-full max-w-2xl">
                                <p className="text-gray-400 mb-6">
                                    Oferecemos 90 dias de garantia sobre a mão de obra técnica. A garantia de peças segue o prazo estabelecido por seus fabricantes (exclusivo para peças fornecidas pela oficina).
                                </p>
                                <div className="p-6 bg-gradient-to-b from-red-900/20 to-transparent border-t-2 border-red-500 rounded-b-xl max-w-xl mx-auto text-center">
                                    <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-3">⚠️ Exclusão Técnica</p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        A garantia será anulada em casos de: negligência em revisões periódicas, uso do veículo em condições extremas (track days/competições), intervenção de terceiros ou instalação de acessórios que comprometam o sistema original.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="pt-8 group flex flex-col items-center">
                            <div className="flex flex-col items-center gap-4 mb-6">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-500 font-mono text-xs border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">IV</span>
                                <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Custódia Veicular</h2>
                            </div>
                            <div className="md:px-12 w-full max-w-2xl">
                                <p className="text-gray-400">
                                    Após a notificação de serviço concluído, o cliente tem 48h para retirada. Decorrido este prazo, será aplicada taxa de estadia diária para cobertura de custos logísticos e segurança de pátio.
                                </p>
                            </div>
                        </section>

                        <section className="pt-16 mt-16 border-t border-white/5 text-center flex justify-center">
                            <p className="text-gray-600 text-xs font-mono tracking-widest uppercase">
                                Foro eleito: Comarca de Belo Horizonte, MG.
                            </p>
                        </section>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
