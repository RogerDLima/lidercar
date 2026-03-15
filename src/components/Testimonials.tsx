"use client";

import styles from "./Testimonials.module.css";
import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Marco Silva",
            role: "Proprietário de Porsche",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            id: 2,
            name: "Julia Santos",
            role: "Cliente Premium",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            id: 3,
            name: "Ricardo Oliveira",
            role: "Colecionador",
            image: "https://randomuser.me/api/portraits/men/67.jpg"
        },
        {
            id: 4,
            name: "Marcella Nunes",
            role: "Executiva",
            image: "https://randomuser.me/api/portraits/women/12.jpg"
        },
        {
            id: 5,
            name: "Felipe Mendes",
            role: "Engenheiro",
            image: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        {
            id: 6,
            name: "Amanda Oliveira",
            role: "Designer",
            image: "https://randomuser.me/api/portraits/women/15.jpg"
        },
        {
            id: 7,
            name: "Lucas Souza",
            role: "Médico",
            image: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
            id: 8,
            name: "Beatriz Santos",
            role: "Advogada",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        }
    ];

    return (
        <section id="depoimentos" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <RevealWrapper className={styles.header}>
                    <h2>O que nossos clientes dizem</h2>
                    <p>A excelência medida pela satisfação de quem confia em nosso trabalho.</p>
                </RevealWrapper>

                <div className={styles.gallery}>
                    {reviews.map((review, index) => (
                        <RevealWrapper key={review.id} delay={index * 50}>
                            <div className={styles.imageCard}>
                                <Image
                                    src={review.image}
                                    alt={`Depoimento de ${review.name}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 25vw"
                                    className={styles.reviewImage}
                                />
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
