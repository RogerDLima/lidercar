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
            image: "https://randomuser.me/api/portraits/women/15.jpg",
            divClass: styles.div1,
            darkText: false
        },
        {
            name: "Thiago Matheus",
            role: "Cliente Verificado",
            title: "Excelente trabalho da equipe.",
            text: "Profissionais capacitados e atenciosos. Preço justo e correto! Parabéns ao time da empresa por todo empenho e as prestações de serviços.",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            divClass: styles.div2,
            darkText: false
        },
        {
            name: "Marcelo Fernando",
            role: "Cliente Verificado",
            title: "Diagnóstico Preciso e Ágil",
            text: "O melhor atendimento que já tive! Profissionalismo e cuidado técnico impecável com meu carro.",
            image: "https://randomuser.me/api/portraits/men/45.jpg",
            divClass: styles.div3,
            darkText: true
        },
        {
            name: "Ricardo Santos",
            role: "Colecionador",
            title: "Confiança Total",
            text: "Confio meus carros clássicos apenas à LiderCar. A equipe entende de mecânica de alta performance como ninguém.",
            image: "https://randomuser.me/api/portraits/men/55.jpg",
            divClass: styles.div4,
            darkText: true
        },
        {
            name: "Mariana Costa",
            role: "Cliente Premium",
            title: "Atendimento Diferenciado",
            text: "A agilidade e a transparência no diagnóstico me surpreenderam. Recomendo para quem busca segurança e qualidade.",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
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
                            <h3 className="text-lg font-bold mb-2">{review.title}</h3>
                            <p>“ {review.text} ”</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
