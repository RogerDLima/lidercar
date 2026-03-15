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
            image: "https://ui-avatars.com/api/?name=Marcella+Nunes&background=0044cc&color=fff&size=128",
            divClass: styles.div1,
            darkText: false
        },
        {
            name: "Thiago Matheus",
            role: "Cliente Verificado",
            title: "Excelente trabalho da equipe.",
            text: "Profissionais capacitados e atenciosos. Preço justo e correto! Parabéns ao time da empresa por todo empenho e as prestações de serviços.",
            image: "https://ui-avatars.com/api/?name=Thiago+Matheus&background=0044cc&color=fff&size=128",
            divClass: styles.div2,
            darkText: false
        },
        {
            name: "Marcelo Fernando",
            role: "Cliente Verificado",
            title: "Diagnóstico Preciso e Ágil",
            text: "O melhor atendimento que já tive! Profissionalismo e cuidado técnico impecável com meu carro.",
            image: "https://ui-avatars.com/api/?name=Marcelo+Fernando&background=0044cc&color=fff&size=128",
            divClass: styles.div3,
            darkText: true
        },
        {
            name: "Ricardo Santos",
            role: "Colecionador",
            title: "Confiança Total",
            text: "Confio meus carros clássicos apenas à LiderCar. A equipe entende de mecânica de alta performance como ninguém.",
            image: "https://ui-avatars.com/api/?name=Ricardo+Santos&background=0044cc&color=fff&size=128",
            divClass: styles.div4,
            darkText: true
        },
        {
            name: "Mariana Costa",
            role: "Cliente Premium",
            title: "Atendimento Diferenciado",
            text: "A agilidade e a transparência no diagnóstico me surpreenderam. Recomendo para quem busca segurança e qualidade.",
            image: "https://ui-avatars.com/api/?name=Mariana+Costa&background=0a0a0a&color=fff&size=128",
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
