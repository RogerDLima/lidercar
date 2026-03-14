"use client";

import React from 'react';
import styles from './TestimonialsGrid.module.css';

export default function TestimonialsGrid() {
    const reviews = [
        {
            name: "Marcella Nunes",
            role: "Cliente Verificada",
            title: "Sensacional! Equipe nota 10.",
            text: "Desde a Elaine na recepção aos meninos da mecânica! Sempre explicam tudo o que vão fazer no carro e passam muita confiança, além do serviço ser sempre de qualidade! Outro ponto forte é a rapidez. Indico muito!",
            image: "/images/client/Feedbacks_reais/depoimento_1.webp",
            divClass: styles.div1,
            darkText: false
        },
        {
            name: "Thiago Matheus",
            role: "Cliente Verificado",
            title: "Excelente trabalho da equipe.",
            text: "Profissionais capacitados e atenciosos. Preço justo e correto! Parabéns ao time da empresa por todo empenho e as prestações de serviços.",
            image: "/images/client/Feedbacks_reais/depoimento_2.webp",
            divClass: styles.div2,
            darkText: false
        },
        {
            name: "Marcelo Fernando",
            role: "Cliente Verificado",
            title: "Excelente serviço feito com qualidade.",
            text: "Resolvido o problema, obrigado. Sucesso e prosperidade, abraços.",
            image: "/images/client/Feedbacks_reais/depoimento_3.webp",
            divClass: styles.div3,
            darkText: true
        },
        {
            name: "Rodrigo Silva",
            role: "Cliente Verificado",
            title: "Os cara e profissional mesmo.",
            text: "Serviço de qualidade... Confiança e transparência... Equipe está de parabéns...",
            image: "/images/client/Feedbacks_reais/depoimento_4.webp",
            divClass: styles.div4,
            darkText: true
        },
        {
            name: "Fernando Aislan",
            role: "Cliente Verificado",
            title: "Qualidade de atendimento nota 10.",
            text: "Muito ágeis para resposta via whatsapp, serviço rápido e preço justo. Excelente.",
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
