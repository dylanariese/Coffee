import { User } from "./user.model";

export interface Item {
    id: number;
    name: string;
    src: string;
    description: string;
    status: boolean;
    users: User[]
}