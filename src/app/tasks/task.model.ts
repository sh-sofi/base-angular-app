import { UUID } from "angular2-uuid";

export interface ITask {
    id: number | null;
    title: string;
    description: string;
}

export class Task implements ITask {
    id: number | null;
    title: string;
    description: string;

    constructor(title: string, description: string) {
        this.id = null;
        this.title = title;
        this.description = description;
    }
}