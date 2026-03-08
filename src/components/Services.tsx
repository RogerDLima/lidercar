import styles from "./Services.module.css";
import Image from "next/image";
import { Settings, Droplet, Wrench, CircleDashed, ShieldAlert, Zap, Cog, Activity } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

export default function Services() {
    const services = [
        {
            title: "Mecânica em Geral",
            image: "/images/client/Serviços/1_mecanica.webp",
            icon: <Settings size={28} />
        },
        {
            title: "Pneus",
            image: "/images/client/Serviços/2_pneus.webp",
            icon: <CircleDashed size={28} />
        },
        {
            title: "Alinhamento",
            image: "/images/client/Serviços/3_alinhamento.webp",
            icon: <Activity size={28} />
        },
        {
            title: "Balanceamento",
            image: "/images/client/Serviços/4_balanceamento.webp",
            icon: <Cog size={28} />
        },
        {
            title: "Suspensão",
            image: "/images/client/Serviços/5_suspensao.webp",
            icon: <Wrench size={28} />
        },
        {
            title: "Freios",
            image: "/images/client/Serviços/6_freios.webp",
            icon: <ShieldAlert size={28} />
        },
        {
            title: "Troca de Óleo",
            image: "/images/client/Serviços/7_oleo.webp",
            icon: <Droplet size={28} />
        },
        {
            title: "Escapamento",
            image: "/images/client/Serviços/8_escapamento.webp",
            icon: <Zap size={28} />
        }
    ];

    return (
        <section id="servicos" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <RevealWrapper className={styles.header}>
                    <h2>Nossos Serviços</h2>
                    <p>Especialistas em diagnóstico, manutenção e performance veicular.</p>
                </RevealWrapper>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <RevealWrapper key={index} delay={index * 50}>
                            <div className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.iconWrapper}>
                                        {service.icon}
                                    </div>
                                    <h3>{service.title}</h3>
                                    <div className={styles.glow}></div>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
