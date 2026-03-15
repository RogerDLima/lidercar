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

            <article className="max-w-3xl mx-auto px-6 md:px-12 py-24">
                <header className="mb-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white italic">
                        Política de Privacidade
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed font-light">
                        Este documento descreve como a LiderCar Centro Automotivo protege e trata seus dados técnicos e pessoais.
                    </p>
                    <p className="text-gray-600 mt-6 font-mono text-[10px] uppercase tracking-[0.2em] border-b border-white/5 pb-8 inline-block">
                        Versão 2.4 | Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </header>

                <div className="space-y-16 text-gray-300 leading-relaxed text-base text-justify">
                    <section className="relative">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-blue-500 font-mono text-xs opacity-50">#01</span>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Compromisso Institucional</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            A <strong>LiderCar Centro Automotivo</strong>, estabelecida em Belo Horizonte-MG, reitera seu compromisso com a transparência total. Esta política detalha o tratamento de dados em total conformidade com a <strong>Lei Geral de Proteção de Dados (Lei 13.709/2018)</strong>. Coletamos apenas o estritamente necessário para garantir a segurança operacional do seu veículo e a conformidade legal de nossas prestações de serviço.
                        </p>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-blue-500 font-mono text-xs opacity-50">#02</span>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Coleta & Tratamento</h2>
                        </div>
                        <div className="grid gap-6">
                            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                                <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Dados do Proprietário</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Nome, CPF e canais de contato instantâneo (WhatsApp) são utilizados para faturamento, garantias técnicas e alertas críticos de segurança.
                                </p>
                            </div>
                            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                                <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Prontuário Veicular</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Registros de telemetria manual, chassi e histórico de revisões. Estes dados são vitais para a manutenção da integridade mecânica e valor de revenda do seu patrimônio.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="pt-12 border-t border-white/5">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-blue-500 font-mono text-xs opacity-50">#03</span>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Protocolos de Segurança</h2>
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Seus dados nunca são comercializados. O acesso é restrito a sistemas criptografados em nossa rede interna. Implementamos:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[13px]">
                            {[
                                "Criptografia de ponta a ponta em backups.",
                                "Acesso físico controlado ao servidor central.",
                                "Treinamento periódico em segurança digital.",
                                "Auditoria semestral de logs de acesso."
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 shrink-0" />
                                    <span className="text-gray-400 italic">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="p-10 bg-white/5 border border-white/10 rounded-2xl text-center">
                        <h2 className="text-xl font-bold text-white mb-2">Canal Direto DPO</h2>
                        <p className="text-gray-500 text-sm mb-6 font-light">
                            Para exercer seus direitos de retificação ou exclusão de dados:
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="mailto:dpo@lidercarbh.com.br" className="text-xs font-bold uppercase tracking-widest text-blue-500 border border-blue-500/30 px-6 py-3 rounded hover:bg-blue-500 hover:text-white transition-all">Solicitar Relatório</a>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
