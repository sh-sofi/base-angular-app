import { UUID } from "angular2-uuid";

export interface ITask {
    id: string;
    title: string;
    description: string;
}

export class Task implements ITask {
    id: string;
    title: string;
    description: string;

    constructor(title: string, description: string) {
        this.id = UUID.UUID();
        this.title = title;
        this.description = description;
    }
}