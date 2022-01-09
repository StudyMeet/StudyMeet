export interface User {
    firstName: string;
    lastName: string;
    email: string;
    avatarLocation?: string;
}

export interface Message {
    user: User;
    content: string;
    timestamp: string;
}