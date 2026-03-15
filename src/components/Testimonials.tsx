import styles from "./Testimonials.module.css";
import Image from "next/image";
import RevealWrapper from "./RevealWrapper";

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Carlos Eduardo",
            image: "https://ui-avatars.com/api/?name=Carlos+Eduardo&background=0044cc&color=fff&size=128"
        },
        {
            id: 2,
            name: "Mariana Costa",
            image: "https://ui-avatars.com/api/?name=Mariana+Costa&background=0044cc&color=fff&size=128"
        },
        {
            id: 3,
            name: "Ricardo Silva",
            image: "https://ui-avatars.com/api/?name=Ricardo+Silva&background=0044cc&color=fff&size=128"
        },
        {
            id: 4,
            name: "Fernanda Lima",
            image: "https://ui-avatars.com/api/?name=Fernanda+Lima&background=0044cc&color=fff&size=128"
        },
        {
            id: 5,
            name: "João Pedro",
            image: "https://ui-avatars.com/api/?name=Joao+Pedro&background=0044cc&color=fff&size=128"
        },
        {
            id: 6,
            name: "Amanda Oliveira",
            image: "https://ui-avatars.com/api/?name=Amanda+Oliveira&background=0044cc&color=fff&size=128"
        },
        {
            id: 7,
            name: "Lucas Souza",
            image: "https://ui-avatars.com/api/?name=Lucas+Souza&background=0044cc&color=fff&size=128"
        },
        {
            id: 8,
            name: "Beatriz Santos",
            image: "https://ui-avatars.com/api/?name=Beatriz+Santos&background=0044cc&color=fff&size=128"
        }
    ];

    return (
        <section id="depoimentos" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <RevealWrapper className={styles.header}>
                    <h2>O que nossos clientes dizem</h2>
                    <p>Resultados reais de quem já confia na LiderCar.</p>
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
