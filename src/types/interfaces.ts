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