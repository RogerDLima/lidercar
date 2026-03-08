"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const form = e.currentTarget;
        const formData = {
            nome: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            telefone: (form.elements.namedItem('phone') as HTMLInputElement).value,
            veiculo: (form.elements.namedItem('vehicle') as HTMLInputElement).value,
            mensagem: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch('/api/contato', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || 'Erro ao enviar formulário');
            }

            setSubmitted(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro inesperado. Tente novamente.');
        } finally {
            setLoading(false);
        }
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
                        {error && (
                            <div className={styles.errorMessage}>
                                ⚠️ {error}
                            </div>
                        )}

                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Nome Completo</label>
                            <input type="text" id="name" name="name" className={styles.input} placeholder="Ex: João da Silva" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" className={styles.input} placeholder="joao@exemplo.com" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="phone">Telefone / WhatsApp</label>
                            <input type="tel" id="phone" name="phone" className={styles.input} placeholder="(11) 99999-9999" required />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="vehicle">Veículo (Marca/Modelo/Ano)</label>
                            <input type="text" id="vehicle" name="vehicle" className={styles.input} placeholder="Ex: Porsche 911 Carrera 2021" />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Mensagem ou Serviço Desejado</label>
                            <textarea id="message" name="message" className={`${styles.input} ${styles.textarea}`} placeholder="Descreva como podemos ajudar..." required></textarea>
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

