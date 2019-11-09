export class CustomResponse {
    data: object = {};
    isExecuted: boolean = true;
    message: string = '';
    constructor(data: object, message?: string, isExecuted?: boolean) {
        this.data = data;
        this.message = message ? message : this.message;
        this.isExecuted = isExecuted ? isExecuted : this.isExecuted;
    }
}

export enum customMessage {
    incorrectRequest = 'please provide correct object',
}
