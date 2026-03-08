"use client";

import React from 'react';
import styles from './TestimonialsGrid.module.css';

export default function TestimonialsGrid() {
    const reviews = [
        {
            name: "Marcelo A.",
            role: "Cliente Verificado",
            title: "Atendimento impecável e total transparência na negociação.",
            text: "O processo de avaliação e escolha do meu carro foi excelente. Estava receoso de trocar meu esportivo, mas a equipe de especialistas passou muita confiança e entregaram exatamente o combinado.",
            image: "/images/client/Feedbacks_reais/depoimento_1.webp",
            divClass: styles.div1,
            darkText: false
        },
        {
            name: "Roberto F.",
            role: "Cliente Verificado",
            title: "Especialistas de verdade.",
            text: "Encontrei exatamente a configuração que eu buscava. Um atendimento premium, sem a burocracia das concessionárias tradicionais.",
            image: "/images/client/Feedbacks_reais/depoimento_2.webp",
            divClass: styles.div2,
            darkText: false
        },
        {
            name: "Juliana S.",
            role: "Cliente Verificado",
            title: "Segurança documental e tranquilidade.",
            text: "Comprei um XC90 blindado para a família. A revisão minuciosa que eles fazem no veículo antes da entrega me deram total tranquilidade. Recomendo de olhos fechados pela integridade documental e vistorias rigorosas que realizam.",
            image: "/images/client/Feedbacks_reais/depoimento_3.webp",
            divClass: styles.div3,
            darkText: true
        },
        {
            name: "Carlos T.",
            role: "Cliente Verificado",
            title: "Avaliação justa no meu usado.",
            text: "O processo de troca e avaliação do meu antigo veículo foi rápido, transparente e com um retorno bem acima do mercado tradicional.",
            image: "/images/client/Feedbacks_reais/depoimento_4.webp",
            divClass: styles.div4,
            darkText: true
        },
        {
            name: "Thiago M.",
            role: "Cliente Verificado",
            title: "A experiência premium anunciada é real e a entrega em domicílio facilita demais a vida.",
            text: "O consultor me atendeu com exclusividade pelo WhatsApp, esclareceu todas as dúvidas sobre o híbrido e ainda entregaram o carro diretamente na garagem da minha casa no mesmo dia em que o pagamento compensou.",
            image: "/images/client/Feedbacks_reais/depoimento_5.webp",
            divClass: styles.div5,
            darkText: false
        }
    ];

    return (
        <section className={styles.outerdiv} id="depoimentos">
            <div className={styles.header}>
                <h2>O que nossos clientes dizem</h2>
                <p>Nossa reputação é nosso maior ativo.</p>
            </div>
            <div className={styles.innerdiv}>
                {reviews.map((review, i) => (
                    <div key={i} className={`${review.divClass} ${styles.eachdiv}`}>
                        <div className={styles.userdetails}>
                            <div className={styles.imgbox}>
                                <img src={review.image} alt={review.name} />
                            </div>
                            <div className={styles.detbox}>
                                <p className={`${styles.name} ${review.darkText ? styles.dark : ''}`}>{review.name}</p>
                                <p className={`${styles.designation} ${review.darkText ? styles.dark : ''}`}>{review.role}</p>
                            </div>
                        </div>
                        <div className={`${styles.review} ${review.darkText ? styles.dark : ''}`}>
                            <h4>{review.title}</h4>
                            <p>“ {review.text} ”</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
