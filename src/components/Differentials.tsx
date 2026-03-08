import styles from "./Differentials.module.css";
import { CheckCircle2, Clock, ThumbsUp, Wrench, Shield, Award } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

export default function Differentials() {
    const diffs = [
        { icon: <CheckCircle2 size={32} />, title: "Transparência 100%", text: "Orçamentos claros, com vídeos e fotos das peças que precisam de troca." },
        { icon: <Shield size={32} />, title: "Peças Originais", text: "Trabalhamos apenas com peças de reposição genuínas e homologadas." },
        { icon: <Clock size={32} />, title: "Entrega no Prazo", text: "Respeitamos o seu tempo. Quando prometemos a entrega, nós cumprimos." },
        { icon: <ThumbsUp size={32} />, title: "Garantia Estendida", text: "Cobertura completa em serviços e peças para sua total tranquilidade." },
        { icon: <Wrench size={32} />, title: "Mecânicos Experts", text: "Profissionais treinados nas montadoras e especialistas em alta performance." },
        { icon: <Award size={32} />, title: "Tecnologia de Ponta", text: "Equipamentos de diagnóstico avançados compatíveis com todas as marcas." },
    ];

    return (
        <section id="diferenciais" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <RevealWrapper className={styles.header}>
                    <h2>Por que escolher a LiderCar?</h2>
                    <p>Diferenciais fundamentais que garantem a segurança do seu investimento.</p>
                </RevealWrapper>

                <div className={styles.grid}>
                    {diffs.map((diff, index) => (
                        <RevealWrapper key={index} delay={index * 100}>
                            <div className={styles.card}>
                                <div className={styles.icon}>{diff.icon}</div>
                                <h3>{diff.title}</h3>
                                <p>{diff.text}</p>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
