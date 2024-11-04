import { States, WeekDay } from "@prisma/client";

export type Doctor = {
    id: number;
    name: string;
    specialty: string;
    state: States;
    crm: string;
    schedules: {
        dayOfWeek: WeekDay;
        startTime: Date;
        endTime: Date;
    }[];
}

export interface Schedule {
    dayOfWeek: string;
    startTime: string;
    endTime: string;
}

export interface Article {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    subtitle: string | null;
    content: string | null;
    published: boolean;
    slug: string;
    author: string;
    imageUrl: string | null;
    imageDescription: string | null;
}