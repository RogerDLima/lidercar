import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
    const breadcrumbItems = [{ label: "Política de Privacidade" }];

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
                            Política de Privacidade
                        </h1>
                        <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
                            Transparência total sobre como tratamos e protegemos os seus dados e o histórico do seu veículo.
                        </p>
                        <p className="text-blue-500/80 mt-8 font-mono text-[10px] uppercase tracking-[0.2em] border-b border-white/5 pb-8 inline-block">
                            Última atualização: Março de 2026
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {/* Card 1 */}
                        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-mono text-sm">01</span>
                                Dados Coletados
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Para o fornecimento de serviços de manutenção automotiva, a LiderCar coleta informações necessárias para cadastro e faturamento, incluindo: <strong className="text-white font-medium">Nome completo, CPF, endereço, telefone (WhatsApp) e e-mail</strong>. Além disso, coletamos dados técnicos do bem, como <strong className="text-white font-medium">placa, chassi, quilometragem e histórico de avarias</strong> do veículo.
                            </p>
                        </section>

                        {/* Card 2 */}
                        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-mono text-sm">02</span>
                                Finalidade do Uso
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Utilizamos seus dados exclusivamente para: emissão de notas fiscais e orçamentos, aprovação técnica via canais digitais, acionamento de garantias junto a fabricantes de peças parceiros, e envio de lembretes preventivos de revisão baseados na quilometragem analisada pela nossa engenharia.
                            </p>
                        </section>

                        {/* Card 3 */}
                        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-mono text-sm">03</span>
                                Compartilhamento
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                A LiderCar é estritamente contra a comercialização de dados. Seus dados pessoais podem ser compartilhados apenas com a Secretaria da Fazenda (fins fiscais), assessorias contábeis contratadas pela oficina e fornecedores de peças exclusivamente para acionamento de garantia legal.
                            </p>
                        </section>

                        {/* Card 4 */}
                        <section className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-all">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center font-mono text-sm">04</span>
                                Histórico e Retenção
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                O prontuário técnico do veículo é mantido no nosso sistema Data Center por prazo indeterminado para fornecer à você um histórico contínuo da saúde mecânica. No entanto, seus dados pessoais podem ser excluídos sob demanda após o prazo legal de retenção fiscal obrigatória (5 anos).
                            </p>
                        </section>
                    </div>

                    <div className="mt-12 bg-white/[0.02] border border-white/5 p-8 rounded-2xl">
                        <h2 className="text-xl font-bold text-white mb-4">Direitos do Titular (LGPD)</h2>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem o direito garantido de requerer:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-400">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Acesso e confirmação dos dados;</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Correção de dados incompletos ou erros;</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Anonimização ou bloqueio de processamento;</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Eliminação quando não houver obrigatoriedade fiscal.</li>
                        </ul>
                    </div>

                    <section className="mt-16 p-10 bg-gradient-to-b from-blue-900/10 to-transparent border border-blue-500/20 rounded-3xl text-center flex flex-col items-center">
                        <h2 className="text-xl font-bold text-white mb-2 tracking-wide uppercase">Encarregado de Dados (DPO)</h2>
                        <p className="text-gray-400 text-sm mb-8 font-light max-w-md">Para exercer seus direitos de acesso, exclusão ou solicitar seu prontuário veicular em PDF.</p>
                        <a href="mailto:privacidade@lidercarbh.com.br" className="text-xs font-bold uppercase tracking-widest text-white bg-blue-600 px-8 py-4 rounded-full hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all">
                            Falar com a Privacidade
                        </a>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
