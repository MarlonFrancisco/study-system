import { ILessonSave } from './lesson';

export interface ILogin {
    token: string;
    user: IUser;
}

export interface IUser {
    subjects: string[];
    lessons: ILessonSave[];
    _id: string;
    name: string;
    email: string;
}
