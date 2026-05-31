export enum CompetitionStatus {
    UPCOMING,
    OPEN,
    CLOSED,
    RESULTS_PUBLISHED
}

export interface Competition {
    id: number;
    title: string;
    description: string;

    startDate: Date;
    endDate: Date;

    status: CompetitionStatus;
}