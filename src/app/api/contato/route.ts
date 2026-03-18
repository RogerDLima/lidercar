import { NextRequest, NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';

interface LeadData {
    nome: string;
    email: string;
    telefone: string;
    veiculo?: string;
    mensagem: string;
    criadoEm: string;
}

async function getStore_safe() {
    try {
        return getStore({ name: 'contato', consistency: 'strong' });
    } catch {
        return null;
    }
}

export async function GET() {
    try {
        const store = await getStore_safe();
        if (!store) return NextResponse.json({ leads: [] });

        const blob = await store.get('leads', { type: 'json' }) as LeadData[] | null;
        return NextResponse.json({ leads: blob ?? [] });
    } catch {
        return NextResponse.json({ leads: [] });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nome, email, telefone, veiculo, mensagem } = body;

        if (!nome || !email || !telefone || !mensagem) {
            return NextResponse.json(
                { error: 'Campos obrigatórios: nome, email, telefone, mensagem' },
                { status: 400 }
            );
        }

        const lead: LeadData = {
            nome,
            email,
            telefone,
            veiculo: veiculo || '',
            mensagem,
            criadoEm: new Date().toISOString(),
        };

        const store = await getStore_safe();
        if (store) {
            const existing = await store.get('leads', { type: 'json' }) as LeadData[] | null;
            const leads: LeadData[] = existing ?? [];
            leads.push(lead);
            await store.setJSON('leads', leads);
        }

        return NextResponse.json(
            { success: true, message: 'Lead capturado com sucesso!' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Erro interno ao processar solicitação' },
            { status: 500 }
        );
    }
}
