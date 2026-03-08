"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './TestimonialsEmbla.module.css';

export default function TestimonialsEmbla() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", containScroll: "trimSnaps" });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on('reInit', onInit);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    const reviews = [
        {
            name: "Marcelo A.",
            quote: "Atendimento impecável e total transparência na negociação.",
            image: "/images/client/Feedbacks_reais/depoimento_1.webp",
        },
        {
            name: "Roberto F.",
            quote: "Especialistas de verdade. Encontrei exatamente a configuração que eu buscava.",
            image: "/images/client/Feedbacks_reais/depoimento_2.webp",
        },
        {
            name: "Juliana S.",
            quote: "Segurança documental e tranquilidade. A revisão que eles fazem no veículo me deu total segurança.",
            image: "/images/client/Feedbacks_reais/depoimento_3.webp",
        },
        {
            name: "Carlos T.",
            quote: "O processo de avaliação e troca do meu usado foi rápido e muito justo.",
            image: "/images/client/Feedbacks_reais/depoimento_4.webp",
        },
        {
            name: "Thiago M.",
            quote: "A experiência premium anunciada é real. Trouxeram o carro na minha garagem.",
            image: "/images/client/Feedbacks_reais/depoimento_5.webp",
        },
        {
            name: "Felipe C.",
            quote: "Desde o primeiro contato via WhatsApp até a entrega, tudo 100% profissional.",
            image: "/images/client/Feedbacks_reais/depoimento_6.webp",
        },
        {
            name: "Camila R.",
            quote: "Pós-venda maravilhoso. Resolvem qualquer dúvida rapidamente e sem burocracia.",
            image: "/images/client/Feedbacks_reais/depoimento_7.webp",
        },
        {
            name: "Rafael B.",
            quote: "Não troco mais de agência. Os melhores carros premium do mercado, certeza.",
            image: "/images/client/Feedbacks_reais/depoimento_8.webp",
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2>Alternativa: Embla Carousel</h2>
                <p>Mesmo conteúdo, deslize infinito horizontal.</p>
            </div>

            <div className={styles.emblaWrapper}>
                <div className={styles.embla}>
                    <div className={styles.embla__viewport} ref={emblaRef}>
                        <div className={styles.embla__container}>
                            {reviews.map((review, i) => (
                                <div key={i} className={`${styles.embla__slide} ${i === selectedIndex ? styles.isSelected : ''}`}>
                                    <article className={styles.card}>
                                        <div className={styles.avatar}>
                                            <img src={review.image} alt={review.name} />
                                        </div>
                                        <p className={styles.quote}>"{review.quote}"</p>
                                        <p className={styles.cite}>- {review.name}</p>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.embla__controls}>
                        <button className={styles.embla__btn} onClick={scrollPrev}>
                            <span className={`${styles.chev} ${styles.chev_left}`}></span>
                        </button>
                        <div className={styles.embla__dots}>
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    className={styles.embla__dot}
                                    aria-selected={index === selectedIndex}
                                    onClick={() => scrollTo(index)}
                                />
                            ))}
                        </div>
                        <button className={styles.embla__btn} onClick={scrollNext}>
                            <span className={`${styles.chev} ${styles.chev_right}`}></span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
