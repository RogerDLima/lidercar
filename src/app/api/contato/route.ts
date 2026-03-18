import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface LeadData {
    nome: string;
    email: string;
    telefone: string;
    veiculo?: string;
    mensagem: string;
    criadoEm: string;
}

const LEADS_FILE = path.join(process.cwd(), 'leads.json');

function getLeads(): LeadData[] {
    try {
        if (fs.existsSync(LEADS_FILE)) {
            const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
            return JSON.parse(raw);
        }
    } catch {
        // File doesn't exist or is corrupted, start fresh
    }
    return [];
}

function saveLeads(leads: LeadData[]) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
}

export async function GET() {
    try {
        const leads = getLeads();
        return NextResponse.json({ leads }, { status: 200 });
    } catch {
        return NextResponse.json(
            { error: 'Erro ao buscar contatos' },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nome, email, telefone, veiculo, mensagem } = body;

        // Basic validation
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

        const leads = getLeads();
        leads.push(lead);
        saveLeads(leads);

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
