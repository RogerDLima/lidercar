"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h1>Fale Conosco</h1>
                <p>Preencha os dados abaixo e retornaremos o mais rápido possível para agendar sua avaliação.</p>
            </div>

            <div className={styles.container}>
                {submitted ? (
                    <div className={styles.successMessage}>
                        🎉 Obrigado! Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato em breve.
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Nome Completo</label>
                            <input type="text" id="name" className={styles.input} placeholder="Ex: João da Silva" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" className={styles.input} placeholder="joao@exemplo.com" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone">Telefone / WhatsApp</label>
                            <input type="tel" id="phone" className={styles.input} placeholder="(11) 99999-9999" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="vehicle">Veículo (Marca/Modelo/Ano)</label>
                            <input type="text" id="vehicle" className={styles.input} placeholder="Ex: Porsche 911 Carrera 2021" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Mensagem ou Serviço Desejado</label>
                            <textarea id="message" className={`${styles.input} ${styles.textarea}`} placeholder="Descreva como podemos ajudar..." required></textarea>
                        </div>

                        <button type="submit" className={styles.submitBtn} disabled={loading}>
                            {loading ? 'Enviando...' : (
                                <>
                                    Enviar Solicitação <Send size={18} />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
