export class Contact implements IContact {
    public subject = '';
    public message = '';
}

export interface IContact {
    subject: string;
    message: string;
}
