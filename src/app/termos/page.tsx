import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
    const breadcrumbItems = [{ label: "Termos de Serviço" }];

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white w-full">
            <Header />

            <div style={{ paddingTop: '80px' }}>
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="container py-16 max-w-4xl mx-auto px-4">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                        Termos de Serviço
                    </h1>
                    <p className="text-gray-400">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </header>

                <div className="space-y-8 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Objeto</h2>
                        <p>
                            Estes termos regulam a prestação de serviços de manutenção, diagnóstico e reparo automotivo pela <strong>LiderCar</strong> aos seus clientes. Ao solicitar um serviço ou utilizar este site, você concorda com as condições aqui estabelecidas.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Orçamentos e Autorização</h2>
                        <p>
                            Nenhum serviço será iniciado sem a aprovação prévia e expressa do orçamento pelo cliente (via física ou digital, como WhatsApp). Os orçamentos têm validade de 5 (cinco) dias úteis, devido à flutuação de preços de peças de reposição. Alterações no escopo detectadas durante o reparo serão comunicadas antecipadamente para nova autorização.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Peças e Componentes</h2>
                        <p>
                            A LiderCar trabalha prioritariamente com peças originais ou de primeira linha, garantindo a performance e segurança. Caso o cliente opte por fornecer suas próprias peças, a LiderCar se reserva o direito de cobrar apenas a mão de obra, mas não se responsabiliza pela garantia ou durabilidade de componentes não adquiridos através de nossa oficina.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Garantia de Serviços</h2>
                        <p>
                            Conforme o Código de Defesa do Consumidor, oferecemos garantia legal de 90 dias sobre a mão de obra. A garantia das peças segue a política do fabricante. A garantia será invalidada em casos de:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Uso inadequado ou abusivo do veículo;</li>
                            <li>Participação em competições ou eventos de arrancada;</li>
                            <li>Intervenção de terceiros não autorizados nos sistemas reparados;</li>
                            <li>Acidentes ou sinistros posteriores ao reparo.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Retirada e Pátio</h2>
                        <p>
                            Após a conclusão do serviço e aviso ao cliente, o veículo deverá ser retirado em até 48 horas. Após este prazo, poderá ser cobrada taxa de permanência diária, salvo acordos prévios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Pagamento</h2>
                        <p>
                            O pagamento deve ser integralmente liquidado no ato da retirada do veículo, conforme as opções de parcelamento e descontos acordadas no momento da aprovação do orçamento.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Responsabilidade Civil</h2>
                        <p>
                            A LiderCar mantém seguro para veículos sob sua custódia, cobrindo riscos incidentais dentro de suas dependências durante o período de reparo.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
