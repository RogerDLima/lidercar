import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
    const breadcrumbItems = [{ label: "Termos de Serviço" }];

    return (
        <main className="bg-[#050505] min-h-screen text-white w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

            <Header />

            <div style={{ paddingTop: '120px' }} className="relative z-10">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-16 relative z-10">
                <div className="bg-[#0a0a0a]/80 border border-white/5 rounded-3xl p-8 md:p-16 backdrop-blur-xl shadow-2xl">
                    <header className="mb-20 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                            Termos de Serviço Automotivo
                        </h1>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
                            Regras gerais da prestação de serviços mecânicos, políticas de avaliação e regulação de custódia na LiderCar.
                        </p>
                        <p className="text-blue-500/80 mt-8 font-mono text-[10px] uppercase tracking-[0.2em] border-b border-white/5 pb-8 inline-block">
                            Última revisão: Março de 2026
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-mono text-sm">01</span>
                                Orçamento e Aprovação
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Nenhum serviço é iniciado sem o consentimento do cliente. A LiderCar fornecerá um orçamento detalhado contendo escopo de mão de obra e preço das peças recomendadas. O orçamento possui <strong>validade de 5 (cinco) dias corridos</strong> devido à flutuação dos valores mercadológicos das peças.
                            </p>
                        </section>

                        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-mono text-sm">02</span>
                                Termo de Garantia Legal
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                A mão de obra mecânica possui a garantia legal incondicional de <strong>90 (noventa) dias</strong> contra vícios de execução (CDC). A duração da garantia das peças aplicadas pode variar, sempre regida pelas estipulações de seus respectivos fabricantes.
                            </p>
                        </section>

                        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-mono text-sm">03</span>
                                Peças Fornecidas pelo Cliente
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Caso o cliente decida fornecer suas próprias peças para instalação, a garantia cobrirá <strong>exclusivamente a execução técnica da mão de obra</strong>. A oficina não arca com retrabalho, diagnóstico de ineficiência ou defeitos de fabricação em peças externas.
                            </p>
                        </section>

                        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-mono text-sm">04</span>
                                Custódia e Atrasos
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Após notificação de conclusão dos serviços, o cliente terá <strong>48 horas úteis</strong> para realizar a retirada do veículo. Passado este período, poderá incidir cobrança diária de estacionamento para cobrir despesas de acomodação no pátio segurado.
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 bg-red-900/10 border border-red-500/20 p-8 rounded-2xl">
                        <h2 className="text-lg font-bold text-red-500 mb-4 flex items-center gap-2">
                            ⚠️ Anulação da Garantia
                        </h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Intervenções executadas sobre os serviços prestados concluídos por outros terceiros desautorizados, mau uso extremo do veículo (como participação em "track days" não previstos em projeto de fábrica) e negligência comprovada contra luzes de advertência de painel poderão anular qualquer modalidade de garantia ofertada pela LiderCar.
                        </p>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
