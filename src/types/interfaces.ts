export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    state: string;
    crm: string;
    phone?: string;
    email?: string;
    visibility: boolean;
    schedules: Schedule[];
    createdAt: string;
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