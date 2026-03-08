import styles from "./Faq.module.css";
import { ChevronDown } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

export default function Faq() {
    const faqs = [
        {
            q: "Vocês atendem carros importados?",
            a: "Sim! Nossa equipe possui treinamento específico em marcas premium como BMW, Mercedes-Benz, Audi, Porsche e Volvo, com equipamentos de diagnóstico próprios para essas montadoras."
        },
        {
            q: "Preciso agendar atendimento ou posso ir direto?",
            a: "Para garantir agilidade no seu atendimento, recomendamos sempre o agendamento via WhatsApp. Porém, atendimentos emergenciais (luzes de alerta no painel, vazamentos) podem ser recebidos a qualquer momento."
        },
        {
            q: "As peças utilizadas têm garantia?",
            a: "Absolutamente! Utilizamos somente peças originais ou de primeira linha das melhores marcas do mercado. Todas as peças e nossa mão de obra possuem garantia de no mínimo 90 dias (podendo se estender de acordo com o componente)."
        },
        {
            q: "Fazem parcelamento dos serviços?",
            a: "Sim, pensando no seu conforto, dividimos os orçamentos em até 10x sem juros no cartão de crédito nas revisões completas."
        },
        {
            q: "Quais formas de pagamento vocês aceitam?",
            a: "Aceitamos todos os cartões de crédito (parcelamento em até 10x dependendo do serviço), Pix, transferência bancária (TED) e dinheiro em espécie."
        },
        {
            q: "A oficina oferece serviço de leva e traz?",
            a: "Sim! Trabalhamos com serviço de leva e traz gratuito para clientes num raio de até 15km da nossa oficina para agendamentos programados."
        },
        {
            q: "Quanto tempo demora uma revisão básica?",
            a: "Uma revisão preventiva padrão (troca de óleo, filtros, alinhamento e inspeção de 40 itens) leva em média de 2 a 3 horas, podendo aguardar em nossa sala de espera premium."
        },
        {
            q: "Vocês fazem manutenção em veículos fora de garantia da concessionária?",
            a: "Com certeza. Essa é a nossa especialidade! Oferecemos qualidade de concessionária com preços mais justos, preservando a originalidade do seu carro."
        }
    ];

    return (
        <section id="faq" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <RevealWrapper className={styles.header}>
                    <h2>Dúvidas Frequentes</h2>
                    <p>Tudo o que você precisa saber sobre nossos serviços.</p>
                </RevealWrapper>

                <div className={styles.faqList}>
                    {faqs.map((faq, i) => (
                        <RevealWrapper key={i} delay={i * 100}>
                            <details className={styles.detailsGroup} name="faq">
                                <summary className={styles.summary}>
                                    {faq.q}
                                    <ChevronDown className={styles.icon} />
                                </summary>
                                <div className={styles.answer}>
                                    <p>{faq.a}</p>
                                </div>
                            </details>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
