import { db } from './db';

export async function getDoctors() {
  const doctors = await db.doctor.findMany({
    where: { visibility: true },
    orderBy: { createdAt: 'desc' },
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

  return doctors;
}
