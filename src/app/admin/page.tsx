"use client";

import { useState, useEffect } from 'react';

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const [authed, setAuthed] = useState(false);
    const [pixelId, setPixelId] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (authed) {
            fetch('/api/pixel').then(r => r.json()).then(data => {
                if (data.id) setPixelId(data.id);
            });
        }
    }, [authed]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'lidercar2026') setAuthed(true);
        else alert('Senha incorreta! (Tente lidercar2026)');
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Salvando...');
        await fetch('/api/pixel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: pixelId })
        });
        setStatus('Pixel salvo com sucesso! O site enviará eventos na raiz para este ID.');
        setTimeout(() => setStatus(''), 4000);
    };

    if (!authed) return (
        <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090b', color: '#fff' }}>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: '#1c1c24', padding: '2.5rem', borderRadius: '1rem', border: '1px solid #333' }}>
                <h2 style={{ margin: '0 0 1rem 0' }}>Painel Restrito: LiderCar</h2>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #333', background: '#111', color: 'white' }} />
                <button type="submit" style={{ padding: '0.8rem', cursor: 'pointer', background: '#eab308', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold' }}>Acessar Admin</button>
            </form>
        </div>
    );

    return (
        <div style={{ padding: '4rem', background: '#09090b', height: '100vh', color: '#fff' }}>
            <h1>Configuração do Meta Ads</h1>
            <p style={{ color: '#999', marginTop: '0.5rem' }}>Insira seu Número de Identificação do Meta Pixel (ex: 1234567890). Deixe em branco se desejar desativar o rastreamento.</p>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', marginTop: '2rem' }}>
                <input value={pixelId} onChange={e => setPixelId(e.target.value)} placeholder="Meta Pixel ID" style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #333', background: '#1c1c24', color: '#fff' }} />
                <button type="submit" style={{ padding: '0.8rem', cursor: 'pointer', background: '#eab308', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold' }}>Salvar Configuração no Servidor</button>
                {status && <span style={{ color: '#22c55e', fontWeight: 'bold' }}>{status}</span>}
            </form>

            <div style={{ marginTop: '4rem', padding: '1.5rem', background: '#1c1c24', borderRadius: '1rem', border: '1px solid #333', maxWidth: '600px' }}>
                <h3 style={{ marginTop: 0 }}>Como funciona?</h3>
                <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: 1.5 }}>O pixel que você salvar aqui será salvo no servidor e injetado em todo mundo que visitar qualquer página da LiderCar. Todos os eventos de visualização disparam automaticamente pra esse Pixel ID que você informar.</p>
            </div>
        </div>
    );
}
