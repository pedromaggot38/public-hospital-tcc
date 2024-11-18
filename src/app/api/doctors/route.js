import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const doctors = await db.doctor.findMany({
            where: { visibility: true },
            include: {
                schedules: {
                    select: {
                        dayOfWeek: true,
                        startTime: true,
                        endTime: true,
                    },
                },
            },
        });

        return NextResponse.json(doctors, { status: 200 });
    } catch (error) {
        console.error('Erro ao buscar médicos:', error);
        return NextResponse.json({ message: 'Erro ao buscar médicos' }, { status: 500 });
    }
}
