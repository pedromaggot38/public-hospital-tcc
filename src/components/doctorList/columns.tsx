"use client"

import { States, WeekDay } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"

export type Doctor = {
    id: number
    name: string
    specialty: string
    state: States
    crm: string
    schedules: {
        dayOfWeek: WeekDay
        startTime: Date
        endTime: Date
    }[]
}

const getScheduleForDay = (schedules: Doctor['schedules'], day: WeekDay) => {
    const schedule = schedules.find(s => s.dayOfWeek === day);

    if (schedule) {
        const startTime = new Date(schedule.startTime);
        const endTime = new Date(schedule.endTime);
        const formattedStartTime = startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedEndTime = endTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        return { time: `${formattedStartTime} - ${formattedEndTime}`, available: true };
    }

    return { time: 'Não disponível', available: false };
};

export const columns: ColumnDef<Doctor>[] = [
    {
        accessorKey: "name",
        header: "Nome",
    },
    {
        accessorKey: "specialty",
        header: "Especialidade",
    },
    {
        accessorKey: "crm",
        header: "CRM",
        cell: ({ row }) => `${row.original.crm} - ${row.original.state}`,
    },
    {
        accessorKey: "segunda",
        header: "Segunda",
        cell: ({ row }) => {
            const { time, available } = getScheduleForDay(row.original.schedules, WeekDay.Segunda);
            return <span className={available ? '' : 'text-gray-500'}>{time}</span>;
        },
    },
    {
        accessorKey: "terca",
        header: "Terça",
        cell: ({ row }) => {
            const { time, available } = getScheduleForDay(row.original.schedules, WeekDay.Terca);
            return <span className={available ? '' : 'text-gray-500'}>{time}</span>;
        },
    },
    {
        accessorKey: "quarta",
        header: "Quarta",
        cell: ({ row }) => {
            const { time, available } = getScheduleForDay(row.original.schedules, WeekDay.Quarta);
            return <span className={available ? '' : 'text-gray-500'}>{time}</span>;
        },
    },
    {
        accessorKey: "quinta",
        header: "Quinta",
        cell: ({ row }) => {
            const { time, available } = getScheduleForDay(row.original.schedules, WeekDay.Quinta);
            return <span className={available ? '' : 'text-gray-500'}>{time}</span>;
        },
    },
    {
        accessorKey: "sexta",
        header: "Sexta",
        cell: ({ row }) => {
            const { time, available } = getScheduleForDay(row.original.schedules, WeekDay.Sexta);
            return <span className={available ? '' : 'text-gray-500'}>{time}</span>;
        },
    },
    {
        accessorKey: "sabado",
        header: "Sábado",
        cell: ({ row }) => {
            const { time, available } = getScheduleForDay(row.original.schedules, WeekDay.Sabado);
            return <span className={available ? '' : 'text-gray-500'}>{time}</span>;
        },
    },
    {
        accessorKey: "domingo",
        header: "Domingo",
        cell: ({ row }) => {
            const { time, available } = getScheduleForDay(row.original.schedules, WeekDay.Domingo);
            return <span className={available ? '' : 'text-gray-500'}>{time}</span>;
        },
    },
];
