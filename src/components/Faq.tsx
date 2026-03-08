import styles from "./Faq.module.css";
import { ChevronDown } from "lucide-react";

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
        }
    ];

    return (
        <section id="faq" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2>Dúvidas Frequentes</h2>
                    <p>Tudo o que você precisa saber sobre nossos serviços.</p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, i) => (
                        <details key={i} className={styles.detailsGroup} name="faq">
                            <summary className={styles.summary}>
                                {faq.q}
                                <ChevronDown className={styles.icon} />
                            </summary>
                            <div className={styles.answer}>
                                <p>{faq.a}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
