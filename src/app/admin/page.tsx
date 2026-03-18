"use client";

import { useState, useEffect } from 'react';

interface LeadData {
    nome: string;
    email: string;
    telefone: string;
    veiculo?: string;
    mensagem: string;
    criadoEm: string;
}

type Tab = 'pixel' | 'contatos';

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const [authed, setAuthed] = useState(false);
    const [activeTab, setActiveTab] = useState<Tab>('pixel');

    // Meta Pixel state
    const [pixelId, setPixelId] = useState('');
    const [pixelStatus, setPixelStatus] = useState('');

    // Contacts state
    const [leads, setLeads] = useState<LeadData[]>([]);
    const [leadsLoading, setLeadsLoading] = useState(false);
    const [leadsError, setLeadsError] = useState('');

    useEffect(() => {
        if (authed) {
            fetch('/api/pixel').then(r => r.json()).then(data => {
                if (data.id) setPixelId(data.id);
            });
        }
    }, [authed]);

    useEffect(() => {
        if (authed && activeTab === 'contatos') {
            setLeadsLoading(true);
            setLeadsError('');
            fetch('/api/contato')
                .then(r => r.json())
                .then(data => {
                    if (data.leads) {
                        setLeads([...data.leads].reverse()); // newest first
                    } else {
                        setLeadsError('Não foi possível carregar os contatos.');
                    }
                })
                .catch(() => setLeadsError('Erro de rede ao carregar contatos.'))
                .finally(() => setLeadsLoading(false));
        }
    }, [authed, activeTab]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'lidercar2026') setAuthed(true);
        else alert('Senha incorreta!');
    };

    const handleSavePixel = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!pixelId.trim()) {
            setPixelStatus('O ID do Pixel não pode ser vazio.');
            setTimeout(() => setPixelStatus(''), 4000);
            return;
        }
        setPixelStatus('Salvando...');
        await fetch('/api/pixel', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: pixelId })
        });
        setPixelStatus('Pixel salvo com sucesso! O site enviará eventos para este ID.');
        setTimeout(() => setPixelStatus(''), 4000);
    };

    const formatDate = (iso: string) => {
        try {
            return new Date(iso).toLocaleString('pt-BR', {
                day: '2-digit', month: '2-digit', year: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });
        } catch {
            return iso;
        }
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

    const tabStyle = (tab: Tab) => ({
        padding: '0.65rem 1.5rem',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '0.5rem',
        fontWeight: 600 as const,
        fontSize: '0.95rem',
        background: activeTab === tab ? '#eab308' : '#1c1c24',
        color: activeTab === tab ? '#000' : '#aaa',
        transition: 'all 0.2s',
    });

    return (
        <div style={{ padding: '3rem 2rem', background: '#09090b', minHeight: '100vh', color: '#fff' }}>
            <h1 style={{ marginBottom: '0.25rem' }}>Painel Admin — LiderCar</h1>
            <p style={{ color: '#666', marginBottom: '2rem', fontSize: '0.9rem' }}>Gerencie as configurações e os contatos do site.</p>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <button style={tabStyle('pixel')} onClick={() => setActiveTab('pixel')}>⚙️ Meta Pixel</button>
                <button style={tabStyle('contatos')} onClick={() => setActiveTab('contatos')}>
                    📬 Formulários de Contato{leads.length > 0 ? ` (${leads.length})` : ''}
                </button>
            </div>

            {/* Tab: Meta Pixel */}
            {activeTab === 'pixel' && (
                <div>
                    <p style={{ color: '#999', marginBottom: '1.5rem', maxWidth: '520px' }}>
                        Insira o Número de Identificação do Meta Pixel (ex: 1234567890). Deixe em branco para desativar o rastreamento.
                    </p>
                    <form onSubmit={handleSavePixel} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '420px' }}>
                        <input
                            value={pixelId}
                            onChange={e => setPixelId(e.target.value)}
                            placeholder="Meta Pixel ID"
                            style={{ padding: '0.8rem', borderRadius: '0.5rem', border: '1px solid #333', background: '#1c1c24', color: '#fff' }}
                        />
                        <button type="submit" style={{ padding: '0.8rem', cursor: 'pointer', background: '#eab308', color: '#fff', border: 'none', borderRadius: '0.5rem', fontWeight: 'bold' }}>
                            Salvar Configuração no Servidor
                        </button>
                        {pixelStatus && <span style={{ color: '#22c55e', fontWeight: 'bold' }}>{pixelStatus}</span>}
                    </form>

                    <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#1c1c24', borderRadius: '1rem', border: '1px solid #333', maxWidth: '560px' }}>
                        <h3 style={{ marginTop: 0 }}>Como funciona?</h3>
                        <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: 1.6 }}>
                            O Pixel ID salvo aqui é injetado em <strong>todas as páginas</strong> da LiderCar. Todos os eventos de visualização disparam automaticamente para o ID informado.
                        </p>
                    </div>
                </div>
            )}

            {/* Tab: Form Submissions */}
            {activeTab === 'contatos' && (
                <div>
                    <p style={{ color: '#999', marginBottom: '1.5rem' }}>
                        Todos os envios do formulário de contato do site, mais recentes primeiro.
                    </p>

                    {leadsLoading && <p style={{ color: '#aaa' }}>Carregando...</p>}
                    {leadsError && <p style={{ color: '#f87171' }}>{leadsError}</p>}

                    {!leadsLoading && !leadsError && leads.length === 0 && (
                        <div style={{ padding: '2rem', background: '#1c1c24', borderRadius: '1rem', border: '1px solid #333', color: '#666', textAlign: 'center' }}>
                            Nenhum contato recebido ainda.
                        </div>
                    )}

                    {leads.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '780px' }}>
                            {leads.map((lead, i) => (
                                <div key={i} style={{ background: '#1c1c24', border: '1px solid #333', borderRadius: '1rem', padding: '1.25rem 1.5rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        <strong style={{ fontSize: '1.05rem' }}>{lead.nome}</strong>
                                        <span style={{ color: '#666', fontSize: '0.8rem' }}>📅 {formatDate(lead.criadoEm)}</span>
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.4rem 1.5rem', fontSize: '0.9rem', color: '#ccc', marginBottom: '0.75rem' }}>
                                        <span>✉️ <a href={`mailto:${lead.email}`} style={{ color: '#60a5fa' }}>{lead.email}</a></span>
                                        <span>📞 <a href={`tel:${lead.telefone}`} style={{ color: '#60a5fa' }}>{lead.telefone}</a></span>
                                        {lead.veiculo && <span>🚗 {lead.veiculo}</span>}
                                    </div>
                                    <div style={{ background: '#111', borderRadius: '0.5rem', padding: '0.75rem 1rem', fontSize: '0.88rem', color: '#d4d4d4', lineHeight: 1.5 }}>
                                        💬 {lead.mensagem}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
