export interface User {
    name: string;
}

export interface Item {
    id: number;
    name: string;
    src: string;
    description: string;
    users: User[]
}