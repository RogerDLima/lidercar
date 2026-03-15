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

            {/* Container narrower for better reading legibility, text-left for professional legal look */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 relative z-10 text-left">

                {/* Header is centered */}
                <div className="text-center mb-16">
                    <h1 className="font-bold mb-6 tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Termos e Condições de Serviço
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Este documento estabelece as bases legais e operacionais que regem a prestação de serviços de manutenção automotiva pela LiderCar. Recomendamos a leitura atenta de todas as cláusulas antes da autorização de qualquer serviço.
                    </p>
                </div>

                <div className="space-y-12 text-gray-300 text-sm md:text-base leading-relaxed tracking-wide" style={{ textAlign: 'justify' }}>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>1. Escopo dos Serviços e Diagnóstico Estrutural</h2>
                        <p className="mb-4">
                            A LiderCar compromete-se a fornecer serviços de mecânica automotiva, diagnóstico eletrônico, reparo de motor, transmissão, suspensão e freios, utilizando tecnologia de ponta e equipe técnica altamente qualificada. Toda e qualquer intervenção em seu veículo decorre exclusivamente de uma análise técnica preliminar, cujo objetivo é mapear não apenas as avarias relatadas pelo cliente, mas também vícios ocultos que possam comprometer a segurança, dirigibilidade e vida útil do automóvel.
                        </p>
                        <p>
                            A LiderCar reserva-se o direito de recusar a prestação de serviços caso identifique que o veículo apresenta modificações estruturais severas, histórico de sinistro grave não regularizado, ou caso o proprietário exija a adoção de práticas técnicas que contrariem manuais de engenharia dos fabricantes oficiais, visando salvaguardar a ética e a segurança automotiva.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>2. Dinâmica de Orçamentação e Validade Comercial</h2>
                        <p className="mb-4">
                            A formalização de valores ocorrerá mediante a emissão de Orçamento Prévio (Art. 40, CDC). O orçamento detalhará de forma clara as métricas de precificação da mão de obra estabelecida através do indicador H/T (Hora/Trabalho) e a listagem minuciosa de componentes de reposição, lubrificantes e fluidos que possivelmente precisarão ser empregados.
                        </p>
                        <p>
                            Tendo em vista a alta rotatividade de estoques logísticos e a flutuação cambial ou mercadológica do setor de peças automotivas, os orçamentos emitidos pela oficina ostentam <strong>validade impreterível de 5 (cinco) dias corridos</strong> a contar de sua data de emissão. Excedido este período, o orçamento poderá ser inteiramente reprecificado.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>3. Autorização de Serviço e Orçamentos Suplementares</h2>
                        <p className="mb-4">
                            Consolidado o orçamento, o veículo somente passará pelo processo de desmontagem e substituição de itens perante a Autorização Expressa do Proprietário ou procurador legal. Esta autorização será colhida preferencialmente por e-mail, aplicativo de mensagens corporativas (WhatsApp oficial) ou declaração assinada eletronicamente.
                        </p>
                        <p>
                            Durante o decorrer dos trabalhos de desmontagem de agregados (motor, caixa de câmbio, cabeçotes), não é incomum revelar componentes colaterais exaustos que se apresentavam ocultos por outras peças. Sob essa circunstância deflagrada, as operações mecânicas são paralisadas para elaboração do <strong>Orçamento Suplementar</strong>. O reparo contínuo fica então engatado à aprovação explícita dos novos custos. A rejeição do suplemento isenta a LiderCar de garantias absolutas caso a falta destas peças paralelas cause reincidência de problemas afins.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>4. Exceção Crítica: Fornecimento de Peças pelo Cliente</h2>
                        <p className="mb-4">
                            Em respeito ao princípio da transparência, o cliente possui a prerrogativa excepcional de providenciar a compra de autopeças por meios próprios, cabendo à LiderCar apenas o faturamento da execução da Mão de Obra. Todavia, impõe-se a seguinte exclusão mandatória: <strong>A LiderCar não oferecerá, em hipótese nenhuma, qualquer cobertura de garantia para peças não adquiridas via seu Setor de Compras.</strong>
                        </p>
                        <p>
                            Constatando-se defeito crônico, inconformidade, vícios de material ou falha de especificação destas peças providenciadas pelo cliente que exijam uma segunda operação de remoção ou desmontagem, um novo ticket de mão de obra integral será faturado para realizar o retrabalho, correndo integralmente às expensas do cliente.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>5. Modalidades e Gestão de Garantia Legal</h2>
                        <p className="mb-4">
                            Cumprimos perfeitamente ao estabelecido na Lei do Código de Defesa do Consumidor (Lei 8.078/1990), prestando ao titular do serviço a <strong>Garantia Legal obrigatória de 90 (noventa) dias incondicionais sobre a execução da mão de obra reparadora</strong>.
                        </p>
                        <p>
                            Para a garantia técnica material referente às <strong>peças de substituição instaladas</strong>, vigorará invariavelmente os laudos e prazos estipulados nominalmente por cada fabricante ou montadora primária — sendo estes períodos expressos em nota fiscal. Quaisquer perdas de garantia por mal uso flagrante, manutenção imprópria feita por terceiros pós-revisão na LiderCar, participação em esportes a motor ("track-days") não licenciados para calibrações de rua e adulterações químicas em óleo ou combustível provocarão o cancelamento autônomo dos selos de cobertura e validade mecânica de nossa parte.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>6. Cronogramas, Conclusão de Serviço e Retirada</h2>
                        <p className="mb-4">
                            Estabelecemos prazos previstos de entrega com base nos escopos iniciais. Retenções logísticas na cadeira de envio de peças, paralisações por requisição de Orçamentos Suplementares e fatores climáticos externos poderão modificar as datas contratuais.
                        </p>
                        <p>
                            Após a lavratura da conclusão mecânica da fase do estator e comunicação de disponibilidade veicular enviada ao consumidor, abre-se um prazo de janela de cortesia e custódia livre de exatas <strong>48 (quarenta e oito) horas ininterruptas de dias úteis</strong> para retirada imediata das dependências do pátio logístico da LiderCar e respectivo acerto final do passivo residual, sujeito então de penalidades.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>7. Obrigações Financeiras e Taxas Diárias de Pátio</h2>
                        <p className="mb-4">
                            Ao se extinguir o período oficial de liberação da tolerância de custódia mencionado na cláusula anterior sem a respectiva retirada do veículo, incidirá autonomamente uma taxa referencial diária de R$ 60,00 (sessenta reais)/dia aplicada a título de "Taxa de Guarda, Estadia de Pátio e Apólice de Segurança".
                        </p>
                        <p>
                            Trata-se de despesa indenizatória pelos custos paralelos comércios com vigilância 24h, seguro contra sinistros estáticos de frota de terceiros estacionados sob controle da LiderCar e ocupação de pátio ociosa que compromete a linha rotatória na oficina mecânica. Em contumácia excedente a 30 (trinta) dias de inadimplência absoluta e abandono comprovado, o corpo Jurídico poderá iniciar pleitos judiciais sob regime de Execução.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>8. Concordância Universal de Imagem e Jurisdição</h2>
                        <p className="mb-4">
                            A presente convenção poderá ser alterada por deliberação diretiva e administrativa da oficina a qualquer tempo operário que se julgar conveniente, valendo para todos os novos contratos. Entende-se o aceite irrevogável deste documento e toda as suas minúcias a partir da autorização nominal ou consentimento afirmativo do plano de serviço proposto por nossa equipe.
                        </p>
                        <p>
                            Elege-se a exclusividade do foro da comarca da capital do estado de Minas Gerais (Belo Horizonte) para sanar litígios iminentes e mediações cíveis, renunciando a qualquer fórum geográfico subsidiário, por mais excepcional ou favorável que este pretenda ser postulado a figurar.
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
