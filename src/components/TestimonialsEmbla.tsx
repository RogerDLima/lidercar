"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from './TestimonialsEmbla.module.css';

const testimonials = [
    {
        name: "Reinaldo Junio",
        role: "Cliente Verificado",
        quote: "Muito bom, bem atendido, ambiente tranquilo, profissionais tom de trabalho, gostei muito do serviço prestado.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Tiago Fontes",
        role: "Cliente Verificado",
        quote: "Equipe top, serviço sensacional, super indico.",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        name: "Alberto Oliveira",
        role: "Cliente Verificado",
        quote: "Muito boa, muito gentil as pessoas, gostei muito.",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        name: "Daniel Silva",
        role: "Cliente Verificado",
        quote: "Serviço de primeira qualidade, recomendo a todos que buscam transparência.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
        name: "Juliana Mendes",
        role: "Cliente Verificado",
        quote: "Atendimento excepcional e preço justo. Meu carro ficou ótimo.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Marcos Paulo",
        role: "Cliente Verificado",
        quote: "Equipe técnica muito competente. Explicaram tudo com clareza.",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg"
    }
];

export default function TestimonialsEmbla() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        containScroll: 'trimSnaps'
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onInit = useCallback(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onInit();
        onSelect();

        emblaApi.on('reInit', onInit);
        emblaApi.on('reInit', onSelect);
        emblaApi.on('select', onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <section className={styles.section} id="depoimentos">
            <div className={styles.header}>
                <h2>O que nossos clientes dizem</h2>
                <p>A excelência medida pela satisfação de quem confia em nosso trabalho.</p>
            </div>

            <div className={styles.embla} aria-label="Carrossel de depoimentos">
                <div className={styles.emblaViewport} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                className={`${styles.emblaSlide} ${index === selectedIndex ? styles.isSelected : ''}`}
                                key={index}
                            >
                                <article className={styles.card}>
                                    <div className={styles.avatar}>
                                        <img
                                            alt={testimonial.name}
                                            src={testimonial.avatar}
                                            onError={(e) => {
                                                // Fallback icon if image doesn't exist
                                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23666'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
                                            }}
                                        />
                                    </div>
                                    <p className={styles.quote}>"{testimonial.quote}"</p>
                                    <p className={styles.cite}>- {testimonial.name}, {testimonial.role}</p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.emblaControls} aria-label="Controles do carrossel">
                    <button
                        className={styles.emblaBtn}
                        onClick={scrollPrev}
                        type="button"
                        aria-label="Depoimento anterior"
                    >
                        <span aria-hidden="true" className={`${styles.chev} ${styles.chevLeft}`}></span>
                    </button>

                    <div className={styles.emblaDots} role="tablist" aria-label="Escolher depoimento">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`${styles.emblaDot} ${index === selectedIndex ? styles.emblaDotSelected : ''}`}
                                onClick={() => scrollTo(index)}
                                role="tab"
                                aria-label={`Ir para o depoimento ${index + 1}`}
                                aria-selected={index === selectedIndex}
                            />
                        ))}
                    </div>

                    <button
                        className={styles.emblaBtn}
                        onClick={scrollNext}
                        type="button"
                        aria-label="Próximo depoimento"
                    >
                        <span aria-hidden="true" className={`${styles.chev} ${styles.chevRight}`}></span>
                    </button>
                </div>
            </div>
        </section>
    );
}
