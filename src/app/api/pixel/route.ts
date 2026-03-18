import { NextRequest, NextResponse } from 'next/server';
import { getStore } from '@netlify/blobs';

async function getSettingsStore() {
    try {
        return getStore({ name: 'settings', consistency: 'strong' });
    } catch {
        return null;
    }
}

export async function GET() {
    try {
        const store = await getSettingsStore();
        if (!store) return NextResponse.json({ id: null });

        const data = await store.get('pixel', { type: 'json' }) as { id: string } | null;
        return NextResponse.json(data ?? { id: null });
    } catch {
        return NextResponse.json({ id: null });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json();
        const store = await getSettingsStore();
        if (store) {
            await store.setJSON('pixel', { id });
        }
        return NextResponse.json({ success: true, id });
    } catch {
        return NextResponse.json({ error: 'Failed to save setting' }, { status: 500 });
    }
}
