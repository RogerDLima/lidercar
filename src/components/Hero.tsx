import styles from "./Hero.module.css";
import Image from "next/image";
import { Star } from "lucide-react";
import FlickeringText from "./FlickeringText";

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background Image Overlay - real photorealistic AI asset */}
            <div className={styles.bgWrapper}>
                <Image
                    src="/images/client/hero_bg.webp"
                    alt="Oficina LiderCar Premium"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    className={styles.image}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.textContent}>
                    <h1 className="animate-fade-in">
                        Somos apaixonados em servir, <br />
                        <FlickeringText
                            text="seu carro."
                            flickerIndexes={[4, 5]}
                            className={styles.highlight}
                            as="span"
                        />
                    </h1>
                    <p className={`animate-fade-in delay-100 ${styles.subtitle}`}>
                        A excelência em mecânica que você confia. Especialistas em manter o seu veículo sempre em alta performance, com transparência e qualidade premium.
                    </p>
                    <div className={`animate-fade-in delay-200 ${styles.actions}`}>
                        <a href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento%20grátis%20na%20LiderCar!" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Fazer Orçamento Grátis
                        </a>
                        <a href="#servicos" className="btn btn-outline">
                            Ver Nossos Serviços
                        </a>
                    </div>

                    <div className={`animate-fade-in delay-300 ${styles.socialProof}`}>
                        <div className={styles.stars}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                            ))}
                        </div>
                        <span><strong>4.9/5</strong> baseado em +800 avaliações no Google</span>
                    </div>
                </div>

                {/* Decorative elements to give a tech/premium feel */}
                <div className={styles.decorativeElements}>
                    <div className={styles.line}></div>
                    <div className={styles.circle}></div>
                </div>
            </div>
        </section>
    );
}
