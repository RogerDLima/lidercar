import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TermsOfService() {
    const breadcrumbItems = [{ label: "Termos de Serviço" }];

    return (
        <main className="bg-[#050505] min-h-screen text-white w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

            <Header />

            <div style={{ paddingTop: '120px' }} className="relative z-10">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 relative z-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                    Termos de Serviço
                </h1>
                <div className="h-1 w-20 bg-blue-600 mx-auto mb-10 rounded-full"></div>

                <div className="space-y-12 text-gray-300 text-base md:text-lg leading-relaxed font-light">
                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Orçamentos e Avaliação Técnica</h2>
                        <p>
                            Toda prestação de serviço realizada pela LiderCar Serviços Automotivos inicia-se mediante uma avaliação técnica criteriosa do veículo. Após o diagnóstico, é emitido um orçamento detalhado contendo a relação de peças necessárias e o escopo exato da mão de obra. Este orçamento possui validade de 5 (cinco) dias corridos, podendo sofrer variações após este período devido à constante flutuação dos preços das peças de reposição no mercado automotivo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Aprovação e Execução</h2>
                        <p>
                            Nenhuma intervenção mecânica ou substituição de componentes será iniciada sem a aprovação prévia, formal e documentada por parte do cliente. A autorização pode ser concedida via aceite presencial ou aprovação digital através dos nossos canais oficiais de atendimento (WhatsApp ou E-mail). Quaisquer deficiências adicionais encontradas durante a desmontagem gerarão um orçamento suplementar, também dependente de aprovação antes do serviço prosseguir.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Política de Garantia e Cobertura</h2>
                        <p>
                            A LiderCar assegura tranquilidade absoluta em seus serviços. Oferecemos a garantia legal incondicional de 90 (noventa) dias para a mão de obra especializada, contados a partir da data de entrega do veículo, em estrita conformidade com o Código de Defesa do Consumidor (CDC). A garantia das peças de reposição comercializadas pela oficina segue integralmente as determinações e prazos estipulados por seus respectivos fabricantes originais e distribuidores.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Peças de Terceiros e Responsabilidade</h2>
                        <p>
                            Em cenários onde o cliente opte por fornecer suas próprias peças originais ou alternativas para instalação em nossa infraestrutura, a LiderCar restringe sua garantia única e exclusivamente à execução técnica intrínseca à mão de obra. Recusamo-nos a assumir qualquer responsabilidade patrimonial por defeitos de fabricação, incompatibilidade técnica de lotes, ou necessidade de retrabalho que decorram de componentes não intermediados pelo nosso setor de compras.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Custódia, Estadia e Retirada</h2>
                        <p>
                            Finalizados os trabalhos contratados e após a emissão da referida notificação oficial, o cliente disporá de 48 horas úteis para promover a retirada do veículo e realizar o acerto financeiro total. Excedido este período de cortesia, a LiderCar reserva-se o direito de repassar custos equivalentes à diária de estadia em pátio particular, visando a cobertura de apólices de seguros e guarda patrimonial noturna do bem em questão.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
