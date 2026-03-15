import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
    const breadcrumbItems = [{ label: "Política de Privacidade" }];

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white w-full">
            <Header />

            <div style={{ paddingTop: '100px' }}>
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="container py-24 max-w-4xl mx-auto px-6 md:px-8">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        Política de Privacidade
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Sua segurança e a proteção de seus dados são nossa prioridade técnica.
                    </p>
                    <p className="text-gray-500 mt-2">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </header>

                <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">01.</span> Introdução
                        </h2>
                        <p>
                            A <strong>LiderCar Centro Automotivo</strong>, estabelecida em Belo Horizonte/MG, reconhece a importância da privacidade dos dados de seus clientes. Esta Política de Privacidade descreve de forma transparente nossas práticas de coleta, uso e proteção de dados pessoais, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Nosso compromisso é garantir que cada informação compartilhada conosco receba o mesmo rigor técnico e cuidado que dedicamos aos veículos em nossa oficina.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">02.</span> Coleta de Dados Pessoais
                        </h2>
                        <p>
                            Para oferecer serviços mecânicos de alta performance e suporte administrativo eficiente, coletamos apenas os dados estritamente necessários para o ciclo de vida do reparo automotivo:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 mt-6 text-gray-400">
                            <li><strong>Identificação Civil:</strong> Nome completo e CPF, essenciais para a emissão de Notas Fiscais Eletrônicas e registro de garantias de fábrica.</li>
                            <li><strong>Canais de Contato:</strong> Número de telefone celular (utilizado prioritariamente para comunicações via WhatsApp sobre orçamentos e status de serviço), e-mail acadêmico ou pessoal para comunicações formais.</li>
                            <li><strong>Dados do Veículo:</strong> Placa, Chassi, Renavam, marca, modelo, ano e quilometragem. Estas informações compõem o prontuário técnico do veículo, fundamental para diagnósticos futuros e histórico de manutenção.</li>
                            <li><strong>Navegação Digital:</strong> Endereços IP e cookies são processados automaticamente para otimizar a performance deste site e entender melhor as necessidades de reparo mais comuns em nossa região.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">03.</span> Finalidade do Tratamento
                        </h2>
                        <p>
                            O tratamento de seus dados pessoais ocorre exclusivamente sob as seguintes bases legais e finalidades operacionais:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                                <h3 className="text-blue-400 font-bold mb-2">Execução de Contrato</h3>
                                <p className="text-sm">Emissão de orçamentos, agendamento de revisões periódicas e controle de estoque de peças originais para seu veículo.</p>
                            </div>
                            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                                <h3 className="text-blue-400 font-bold mb-2">Obrigação Legal</h3>
                                <p className="text-sm">Arquivamento de dados fiscais por prazos determinados em lei e emissão de documentação de segurança veicular.</p>
                            </div>
                            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                                <h3 className="text-blue-400 font-bold mb-2">Segurança do Cliente</h3>
                                <p className="text-sm">Envio de alertas sobre recalls de fabricantes e lembretes de manutenções preventivas vitais (freios, óleo e pneus).</p>
                            </div>
                            <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                                <h3 className="text-blue-400 font-bold mb-2">Legítimo Interesse</h3>
                                <p className="text-sm">Pesquisas de satisfação técnica para elevar continuamente o padrão de serviço da LiderCar.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">04.</span> Compartilhamento e Transferência
                        </h2>
                        <p>
                            A LiderCar adota uma política de não comercialização de dados. Seus dados são compartilhados apenas com entidades parceiras estritamente vinculadas à operação técnica e administrativa:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 mt-6 text-gray-400">
                            <li><strong>Fornecedores de Peças:</strong> Dados do veículo (como chassi ou modelo) para garantir a compatibilidade de componentes originais.</li>
                            <li><strong>Ecossistema Digital:</strong> Softwares de gestão de oficina e servidores de hospedagem segura de dados.</li>
                            <li><strong>Autoridades Governamentais:</strong> Cumprimento de ordens judiciais ou obrigações fiscais junto à Receita Federal e Estadual.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">05.</span> Protocolos de Segurança
                        </h2>
                        <p>
                            Implementamos medidas de segurança administrativas e técnicas de padrão industrial. Isso inclui criptografia de dados em trânsito, firewalls ativos em nossos servidores e controle rigoroso de acesso físico aos terminais da oficina. Apenas profissionais autorizados e devidamente treinados em proteção de dados possuem credenciais para acessar o histórico de nossos clientes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">06.</span> Seus Direitos (LGPD)
                        </h2>
                        <p>
                            Como titular dos dados, você possui direitos garantidos por lei, incluindo a confirmação de tratamento, acesso total aos seus registros, correção de dados desatualizados e a revogação de consentimento. Para exercer qualquer um destes direitos, nossa central de atendimento técnico está à disposição para processar sua solicitação com agilidade.
                        </p>
                    </section>

                    <section className="p-8 bg-blue-900/20 border border-blue-900/50 rounded-2xl">
                        <h2 className="text-2xl font-bold text-white mb-4">Contato e Encarregado</h2>
                        <p className="mb-4">
                            Caso tenha dúvidas sobre como seus dados são processados ou deseje realizar uma requisição técnica sobre sua privacidade:
                        </p>
                        <div className="space-y-2 text-blue-300">
                            <p><strong>E-mail:</strong> contato@lidercarbh.com.br</p>
                            <p><strong>DPO/Responsável:</strong> Equipe de Gestão LiderCar</p>
                            <p><strong>Telefone:</strong> (31) 9858-3809</p>
                        </div>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
