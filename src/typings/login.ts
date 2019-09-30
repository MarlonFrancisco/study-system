export interface ILogin {
    token: string;
    user: IUser;
}

export interface IUser {
    subjects: string[];
    lessons: string[];
    _id: string;
    name: string;
    email: string;
}
