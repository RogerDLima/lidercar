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

            <article className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 relative z-10">

                <div className="text-center mb-16">
                    <h1 className="font-bold mb-6 tracking-tight text-white" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Política e Tratamento de Privacidade
                    </h1>
                    <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Compromisso rigoroso com a lisura, custódia e proteção de seus dados pessoais. Descrevemos detalhadamente como estruturamos nosso protocolo ético de privacidade (Adequação LGPD) operado pela LiderCar.
                    </p>
                </div>

                <div className="space-y-12 text-gray-300 text-sm md:text-base leading-relaxed tracking-wide text-left">

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>1. Premissas Formais e Respeito Constante à LGPD</h2>
                        <p className="mb-4">
                            Em reverência à Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018), do marco civil da internet do Brasil legal, a LiderCar Serviços Automotivos estrutura normativas que estabelecem regras intransigentes à nossa equipe técnica e corpo administrativo sobre coleta, classificação, processamento analítico, custódia contábil e armazenamento lógico do ciclo de vida dos seus atributos físicos ou informacionais fornecidos para finalidade de prestação dos serviços técnicos em mecânica.
                        </p>
                        <p>
                            Sua navegação e interação orgânica por nossos canais digitais (Website, CRM WhatsApp ou Telefone), assim como seu comparecimento físico na admissão automotiva para fins de orçamento implicam no expresso termo de conluio da compreensão universal dessas regras empossadas por nossa corporação, firmando alicerces éticos mútuos de confiança tecnológica.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>2. Tipologia de Dados e Estrutura de Coleta Veicular</h2>
                        <p className="mb-4">
                            Durante a execução ou sondagem das tratativas mecânicas perante a LiderCar, os seguintes atributos nominais precisam ser capturados e repousados de maneira restrita nos bancos de dados transacionais:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Identificação Plena do Usuário Cível e Fisco:</strong> Nome e prenome extensivo, Registro de Cadastro de Pessoas Físicas (CPF/CNPJ), Endereço logístico e domiciliar geográfico.</li>
                            <li><strong>Telecomunicação Integrada:</strong> Endereço de Correio Eletrônico (E-mail) para remessas contábeis, Notas de Débito, XML das NF-es, WhatsApp validado para tratativas diárias e remessa fotográfica ou videográfica dos eventuais diagnósticos de pátio e emissão dos Links Cloud PDF com a pauta mecânica contínua.</li>
                            <li><strong>Prontuários e Raio-X Veicular (Dados Materiais Acessórios):</strong> Licenciamento logístico do Renavam da unidade de frota, Decodificador de Identificação do Veículo (Número Chassi ou VIN Oficial), Tabela de Odômetro (Quilometragem nominal rotativa verificada do painel original no check-in logístico).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>3. Destinação Legal e Finalidade Fundamental Estrita</h2>
                        <p className="mb-4">
                            Reafirmamos sumariamente por meio destas diretrizes regimentais abertas ao público e fiscos do comércio que toda carga quantitativa de informações preenchidas pela LiderCar tem objetivo singular a exclusiva eficiência reparadora. Utilizaremos sua massa crítica estatística exclusivamente e isoladamente para:
                        </p>
                        <p>
                            <strong>(I) Finalidade Administrativa Mínima:</strong> Concepção de cadastro titular oficial para faturamento emissor tributário legal. Excepcionais processos perante companhias seguradoras atreladas estritamente de maneira prévia pelo seu concentimento pessoal com a dita apólice coligada.<br /><br />
                            <strong>(II) Relação Técnica Intermediária:</strong> Atribuição de registros das peças, datas seriais, lotes operantes e rastreios perante sistemáticas de fabricantes de itens lubrificantes e autopeças caso demandado formal uso de prerrogativas contenciosas de Troca por Garantia.<br /><br />
                            <strong>(III) Finalidade Operacional Estratégica:</strong> Com base tecnológica na quilometragem e periodicidades de desgastes mensuradas empiricamente sobre fluidos mecânicos e lonas abrasivas, disparamos disparos preventivos com avisos via software ao titular a respeito de prazos curtos ou defasados para futuras averiguações críticas contra colisões severas ou interrupções vitais em pista.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>4. Proibição Universal e Repasse Nulo Externo</h2>
                        <p className="mb-4">
                            Em respeito extremo à conduta moral que pavimenta as operações financeiras da LiderCar, os dados civis e bancários processados por nosso núcleo nunca, sob motivação econômica marginal ou acordo de fusão marqueteira, sofrerão mercantilização, comercialização de mailing em massa e leilões telemétricos voltados para listagens abusivas de concessionárias externas, telemarkentings de operadoras variadas.
                        </p>
                        <p>
                            Concessões excepcionais à esta rigorosa proibição consistem irrestritamente sob pretexto de Força Maior Administrativa e Fisco Governamental (Operadoras Fiscais tributárias como SRFB, SEFAZ/MG e prefeitura) e à assessoria restrita para validação das nuvens (servidores de backup que guardam OS, sob pesada armadura criptografada P2P sem leitura analítica dos vetores civis).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>5. Vigência do Arquivo Virtual e Prontuários Históricos</h2>
                        <p className="mb-4">
                            Operacionalmente, todos os registros técnicos documentados das ordens de serviço (Peças outorgadas, laudos prévios e relatórios sintéticos dos reparos efetuados) do bem logístico constituem um "Prontuário Veicular". Tais dados permanecem indefinidamente acoplados em nossa Nuvem Administrativa devido ao seu exponencial prestígio para com o veículo a título de confiabilidade técnica se, e quando, este passar a ser negociado no mercado rotativo e precisar atestar os consertos primordiais aos quais nós fomos signatários.
                        </p>
                        <p>
                            Todavia, conforme prescrito imperativamente na alínea da exclusão titular (Direito ao Esquecimento Digital e Físico), é de inteira prerrogativa do usuário outorgante demandar oficialmente — mediante nosso canal Data Privacy — a purga integral e extermínio sem lastro dos seus dados como: Nome, CPF e Telefone dos cabeçalhos destas referenciadas avaliações. É vital observar somente que a suspensão de retenção não possui mérito anulatório temporal sobre blocos financeiros nos prazos ditados pelas contabilidades públicas em até 5 (cinco) anos fiscais subsequentes de prestação primária em solo.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-semibold text-white mb-4 text-xl md:text-2xl" style={{ fontSize: '1.5rem' }}>6. Seus Privilégios Universais Adquiridos (DPO / LGPD)</h2>
                        <p className="mb-4">
                            Conferimos a plena fruição de qualquer dos regimentos dos artigos e princípios citados na jurisdição pátria sobre os dados contidos na arquitetura corporativa localmente regida. Tão logo a sua representação se materialize em manifestação irônica real por canais eletrônicos ou analógicos de correspondência administrativa:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li>Reafirmação clara dos vetores de registro coletados da biografia comercial local;</li>
                            <li>Correção mandatória autônoma de cadastros distorcidos, corrompidos tecnicamente, omissos ou incompletos;</li>
                            <li>Sustação emergencial e estática dos tratamentos caso se detecte desvio prático ou falta basilar da nossa transparência;</li>
                            <li>Recepção em meio íntegro PDF e digital do Prontuário integral e histórico das quilometragens;</li>
                        </ul>
                        <p className="mt-8 mb-4 border-t border-gray-800 pt-8 font-semibold text-white">
                            Para sanar indagações marginais ou formalizar requerimentos base em seus diretos sobre sua assinatura e custódia LGPD:
                        </p>
                        <p className="bg-gray-900/40 p-4 rounded-lg border border-gray-800 inline-block">
                            <strong>Canal de Encarregado de Proteção (DPO Officer):</strong> <br />
                            Endereço Oficial: <a href="mailto:privacidade@lidercarbh.com.br" className="text-blue-400 hover:text-blue-300">privacidade@lidercarbh.com.br</a>
                        </p>
                    </section>
                </div>
            </article>

            <Footer />
        </main>
    );
}
