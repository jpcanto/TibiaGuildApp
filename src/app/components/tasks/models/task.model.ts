export interface Task {
    id: string;
    title: string;
    done: boolean;
    type: string;
    blocker: boolean;
    healer: boolean;
}