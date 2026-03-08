import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const PIXEL_FILE = path.join(process.cwd(), 'meta-pixel.json');

export async function GET() {
    try {
        const data = fs.readFileSync(PIXEL_FILE, 'utf-8');
        return NextResponse.json(JSON.parse(data));
    } catch (e) {
        return NextResponse.json({ id: null });
    }
}

export async function POST(req: Request) {
    try {
        const { id } = await req.json();
        fs.writeFileSync(PIXEL_FILE, JSON.stringify({ id }), 'utf-8');
        return NextResponse.json({ success: true, id });
    } catch (e) {
        return NextResponse.json({ error: 'Failed to write setting' }, { status: 500 });
    }
}
