import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
    const breadcrumbItems = [{ label: "Política de Privacidade" }];

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white">
            <Header />

            <div style={{ paddingTop: '80px' }}>
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="container py-16 max-w-4xl mx-auto px-4">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Política de Privacidade
                    </h1>
                    <p className="text-gray-400">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </header>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
                        <p>
                            A <strong>LiderCar</strong>, com sede em Belo Horizonte/MG, compromete-se com a proteção e a transparência no tratamento dos dados pessoais de seus clientes e usuários do site. Esta política detalha como coletamos e utilizamos suas informações em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Coleta de Dados</h2>
                        <p>Coletamos informações essenciais para a prestação de nossos serviços de manutenção automotiva:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong>Identificação:</strong> Nome completo, CPF e documentos de identidade quando necessário para faturamento.</li>
                            <li><strong>Contato:</strong> Telefone (WhatsApp), e-mail e endereço residencial.</li>
                            <li><strong>Veículo:</strong> Placa, Renavam, marca, modelo, ano e histórico de manutenção.</li>
                            <li><strong>Navegação:</strong> Cookies e endereços IP para melhoria da experiência digital.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Finalidade do Tratamento</h2>
                        <p>Seus dados são utilizados exclusivamente para:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Emissão de orçamentos e agendamento de revisões;</li>
                            <li>Execução de serviços mecânicos e garantia de peças;</li>
                            <li>Emissão de Notas Fiscais e cumprimento de obrigações legais;</li>
                            <li>Comunicação sobre o status de reparo do seu veículo;</li>
                            <li>Envio de lembretes de revisões periódicas vitais para sua segurança.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento de Informações</h2>
                        <p>
                            A LiderCar não comercializa seus dados. O compartilhamento ocorre apenas com parceiros estritamente necessários para a operação, como:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Softwares de gestão de oficina;</li>
                            <li>Órgãos públicos e autoridades fiscais;</li>
                            <li>Fornecedores de peças originais (apenas dados do veículo).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Segurança dos Dados</h2>
                        <p>
                            Adotamos tecnologias de ponta e protocolos de segurança rigorosos para proteger suas informações contra acessos não autorizados, perda ou destruição acidental. O acesso aos dados é restrito apenas a colaboradores autorizados da equipe LiderCar.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos</h2>
                        <p>
                            A qualquer momento, você pode solicitar a confirmação da existência de tratamento, acesso aos dados, correção de dados incompletos ou a exclusão de dados desnecessários, através de nossos canais de atendimento oficiais.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Contato</h2>
                        <p>
                            Para dúvidas sobre esta política, entre em contato pelo e-mail: <strong>contato@lidercarbh.com.br</strong> ou pelo telefone <strong>(31) 9858-3809</strong>.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
