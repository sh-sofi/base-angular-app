export interface ITask {
    title: string;
    description: string;
}

export class Task implements ITask {
        title: string;
    description: string;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}