import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
    const breadcrumbItems = [{ label: "Termos de Serviço" }];

    return (
        <main className="bg-[#0a0a0a] min-h-screen text-white w-full">
            <Header />

            <div style={{ paddingTop: '100px' }}>
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="container py-24 max-w-4xl mx-auto px-6 md:px-8">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        Termos de Serviço
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mb-6"></div>
                    <p className="text-gray-400 text-lg">
                        Consulte as diretrizes e garantias do nosso padrão de serviço premium.
                    </p>
                    <p className="text-gray-500 mt-2">
                        Última atualização: {new Date().toLocaleDateString('pt-BR')}
                    </p>
                </header>

                <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">01.</span> Aceitação dos Termos
                        </h2>
                        <p>
                            Ao acessar o site da <strong>LiderCar</strong> ou contratar nossos serviços de manutenção e reparo automotivo, você declara concordar integralmente com estes Termos de Serviço. Estes termos regram a relação entre a prestadora de serviço e o proprietário ou detentor do veículo, garantindo transparência, segurança jurídica e técnica em todas as etapas do atendimento.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">02.</span> Diagnóstico e Orçamento
                        </h2>
                        <p>
                            Nenhum serviço será executado sem a aprovação prévia e expressa do orçamento pelo cliente. Consideramos aprovados orçamentos via assinatura física ou confirmação digital imediata (WhatsApp/E-mail).
                        </p>
                        <ul className="list-disc pl-6 space-y-4 mt-4 text-gray-400">
                            <li><strong>Validade:</strong> Nossos orçamentos possuem validade de 5 (cinco) dias úteis. Após este período, os valores de peças de reposição podem sofrer reajustes conforme mercado de fornecedores.</li>
                            <li><strong>Variações Técnicas:</strong> Caso novas irregularidades sejam detectadas durante o processo de montagem ou reparo, a LiderCar interromperá o serviço e comunicará imediatamente o cliente para nova autorização técnica.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">03.</span> Padrão de Peças e Componentes
                        </h2>
                        <p>
                            A excelência técnica da LiderCar depende da qualidade dos insumos utilizados. Por padrão, trabalhamos exclusivamente com peças originais ou de primeira linha (OEM).
                        </p>
                        <p className="mt-4">
                            Caso o cliente opte por fornecer componentes próprios, a LiderCar se reserva ao direito de:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-400">
                            <li>Cobrar exclusivamente o valor da mão de obra técnica especializada.</li>
                            <li>Isentar-se de qualquer garantia sobre a performance, durabilidade ou danos causados por peças não adquiridas através de nossos canais oficiais de fornecimento.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">04.</span> Garantia e Pós-Serviço
                        </h2>
                        <p>
                            Em estrito cumprimento ao Código de Defesa do Consumidor (CDC), a LiderCar oferece:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 mt-4 text-gray-400">
                            <li><strong>Mão de Obra:</strong> Garantia legal de 90 (noventa) dias contra falhas de execução.</li>
                            <li><strong>Peças:</strong> A garantia segue rigorosamente a política do fabricante da peça instalada.</li>
                            <li><strong>Invalidade da Garantia:</strong> A garantia será imediatamente invalidada em casos de participação em eventos de alta performance (pista/arrancada), intervenções de terceiros não autorizados ou uso severo que desrespeite os limites técnicos do veículo projetados pelo fabricante.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">05.</span> Logística e Armazenagem
                        </h2>
                        <p>
                            Após a conclusão certificada do serviço, o cliente será notificado. O veículo deve ser retirado das dependências da oficina em até 48 horas úteis. Ultrapassado este prazo, a LiderCar poderá aplicar taxa de estadia diária para cobrir custos de pátio e seguro, salvo combinatividades prévias por escrito.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="text-blue-500 font-mono">06.</span> Limitação de Responsabilidade
                        </h2>
                        <p>
                            Embora mantenhamos apólice de seguro para veículos sob nossa custódia, a LiderCar não se responsabiliza por objetos de valor deixados no interior dos veículos. Solicitamos a remoção de pertences pessoais antes da entrega das chaves à recepção.
                        </p>
                    </section>

                    <section className="p-8 bg-gray-900 border border-gray-800 rounded-2xl">
                        <h2 className="text-2xl font-bold text-white mb-4">Jurisdição</h2>
                        <p>
                            Para a resolução de quaisquer litígios decorrentes destes termos, as partes elegem o Foro da Comarca de Belo Horizonte, MG, com renúncia expressa a qualquer outro por mais privilegiado que seja.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
