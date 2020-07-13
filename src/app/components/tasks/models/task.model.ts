export interface Task {
    id: string;
    title: string;
    done: boolean;
    type: string;
    vocation: string;
    blocker: boolean;
    healer: boolean;
    dps: boolean;
}