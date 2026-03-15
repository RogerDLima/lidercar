import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PrivacyPolicy() {
    const breadcrumbItems = [{ label: "Política de Privacidade" }];

    return (
        <main className="bg-[#050505] min-h-screen text-white w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

            <Header />

            <div style={{ paddingTop: '120px' }} className="relative z-10">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 relative z-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                    Política de Privacidade
                </h1>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-10 rounded-full"></div>

                <div className="space-y-12 text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Identidade e Transparência</h2>
                        <p>
                            A LiderCar leva muito a sério a segurança cibernética dos seus dados pessoais e do histórico contínuo do seu veículo. Esta Política de Privacidade rege todas as diretrizes fundamentais sobre como coletamos, a razão analítica pela qual precisamos coletar e como procedemos para armazenar com ultrassegurança as informações de todos os nossos clientes. Atuamos em plena adequação e total conformidade com a Lei Geral de Proteção de Dados Pessoais do Brasil (LGPD - Lei 13.709/2018).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Coleta de Dados Pessoais e Veiculares</h2>
                        <p>
                            Para garantirmos a excelência, agilidade e exatidão da nossa manutenção automotiva, processamos registros estritamente vitais. Solicitamos, na recepção, apenas dados de identificação e contato verídicos (nome completo, CPF para faturamento, e-mail da nota eletrônica, e telefone/WhatsApp para atualizações em tempo real). Simultaneamente, mapeamos elementos de engenharia do seu bem, como placa e renavam, chassi (VIN) e relatórios telemétricos das quilometragens apresentadas por sua frota.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Finalidade e Utilização Estrita</h2>
                        <p>
                            Declaramos sob premissas legais que jamais, sob nenhuma hipótese ou incentivo econômico, mercantilizamos, repassamos ou comercializamos suas informações de prontuário para agências externas. A finalidade do manuseio engloba o processo contábil obrigatório para controle financeiro da oficina: envios de comprovantes e laudos via PDF, formalização de acordos junto às indústrias e fábricas parceiras para aprovação de garantia técnica, e ativação de avisos preventivos para que você não transite com prazos de revisão expirados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Restrição Absoluta de Compartilhamento</h2>
                        <p>
                            As informações do titular e seus dados habitam nossos servidores em formato confidencial. Compartilhamentos externos ocorrem de maneira escassa, limitando-se única e exclusivamente às imposições tributárias perante as plataformas da Secretaria da Receita Estadual e Federal (emissão da respectiva nota fiscal) e com fornecedores de infraestrutura cloud que garantem backups diários e criptografia 256 bits, mas sem possuírem a chave de interpretação analítica das informações nominais contidas no banco.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Retenção Prolongada e Direito à Exclusão</h2>
                        <p>
                            Preservamos intacto no banco de diagnósticos o currículo integral das ordens de serviço executadas ao longo da vida útil do motor. Essa prática garante o mais alto padrão mecânico num futuro retorno presencial e lhe adiciona imensa valorização de revenda por meio de rastreabilidade documentada. Cabe ressaltar que você, titular do prontuário, possui a livre prerrogativa de exigir exclusão estrutural do seu nome e telefone sob demanda através do nosso SAC legal, preservando somente faturas impostas por carência de 5 (cinco) anos fiscais contábeis.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
