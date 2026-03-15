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

            <article className="max-w-3xl mx-auto px-6 md:px-12 py-24">
                <header className="mb-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white italic">
                        Termos de Serviço
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
                        As diretrizes técnicas e contratuais que regem o padrão de excelência em serviços automotivos da LiderCar.
                    </p>
                    <p className="text-gray-600 mt-6 font-mono text-[10px] uppercase tracking-[0.2em] border-b border-white/5 pb-8 inline-block">
                        Código de Conduta | Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </header>

                <div className="space-y-16 text-gray-300 leading-relaxed text-base text-justify">
                    <section>
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-blue-500 font-mono text-xs opacity-50">I.</span>
                            <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Objeto & Escopo</h2>
                        </div>
                        <p className="text-gray-400">
                            Estes Termos regem a prestação de serviços de diagnóstico, manutenção e reparação veicular pela <strong>LiderCar Centro Automotivo</strong>. Ao contratar nossos serviços, o cliente adere a este protocolo técnico, essencial para a validação de garantias e conformidade com normas da ABNT.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-blue-500 font-mono text-xs opacity-50">II.</span>
                            <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Protocolo de Diagnóstico</h2>
                        </div>
                        <p className="text-gray-400 mb-8">
                            A execução de qualquer serviço está condicionada à aprovação prévia de orçamento técnico:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 italic">
                            <div className="p-6 border-l-2 border-blue-600 bg-white/5">
                                <h3 className="text-white font-bold text-xs mb-2 uppercase tracking-widest">Validade Orçamentária</h3>
                                <p className="text-gray-500 text-sm">Os orçamentos possuem validade de 5 (cinco) dias, devido à flutuação de custos de componentes OEM e insumos de importação.</p>
                            </div>
                            <div className="p-6 border-l-2 border-blue-600 bg-white/5">
                                <h3 className="text-white font-bold text-xs mb-2 uppercase tracking-widest">Autorização Digital</h3>
                                <p className="text-gray-500 text-sm">Aceitamos aprovações via WhatsApp ou e-mail, que servem como prova contratual de aceite de escopo e valores.</p>
                            </div>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-blue-500 font-mono text-xs opacity-50">III.</span>
                            <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Política de Garantia</h2>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Oferecemos 90 dias de garantia sobre a mão de obra técnica. A garantia de peças segue o prazo estabelecido por seus fabricantes (exclusivo para peças fornecidas pela oficina).
                        </p>
                        <div className="p-6 bg-red-900/10 border border-red-900/20 rounded-xl">
                            <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-2">Exclusão Técnica:</p>
                            <p className="text-gray-500 text-[13px] leading-relaxed">
                                A garantia será anulada em casos de: negligência em revisões periódicas, uso do veículo em condições extremas (track days/competições), intervenção de terceiros ou instalação de acessórios que comprometam o sistema original.
                            </p>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-blue-500 font-mono text-xs opacity-50">IV.</span>
                            <h2 className="text-2xl font-bold text-white tracking-tight uppercase tracking-widest">Custódia Veicular</h2>
                        </div>
                        <p className="text-gray-400">
                            Após a notificação de serviço concluído, o cliente tem 48h para retirada. Decorrido este prazo, será aplicada taxa de estadia diária para cobertura de custos logísticos e segurança de pátio.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/5 text-center">
                        <p className="text-gray-600 text-xs font-mono tracking-tighter">
                            Este contrato é regido pelas leis da República Federativa do Brasil. Foro eleito: Comarca de Belo Horizonte, MG.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
